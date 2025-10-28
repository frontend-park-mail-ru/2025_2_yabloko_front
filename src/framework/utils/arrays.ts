export function withoutNulls<T>(arr: T[] | null | undefined): T[] {
	if (!Array.isArray(arr)) {
		console.warn('withoutNulls: expected array, got', typeof arr, arr)
		return []
	}
	return arr.filter(child => child != null)
}

export function arrayDiff(oldArray: any[], newArray: any[]) {
	return {
		added: newArray.filter(newItem => !oldArray.includes(newItem)),
		removed: oldArray.filter(oldItem => !newArray.includes(oldItem)),
	}
}

export const ARRAY_DIFF_OP = {
	ADD: 'add',
	REMOVE: 'remove',
	MOVE: 'move',
	NOOP: 'noop',
} as const

type ArrayDiffOp = (typeof ARRAY_DIFF_OP)[keyof typeof ARRAY_DIFF_OP]

interface ArrayDiffOperation {
	op: ArrayDiffOp
	index: number
	item?: any
	fromIndex?: number
}

export function arrayDiffSequence(
	oldArray: any[],
	newArray: any[],
	equalFn: (a: any, b: any) => boolean = (a, b) => a === b,
): ArrayDiffOperation[] {
	const sequence: ArrayDiffOperation[] = []
	const array = new ArrayWithOriginalIndices(oldArray, equalFn)

	for (let index = 0; index < newArray.length; index++) {
		if (array.isRemoval(index, newArray)) {
			sequence.push(array.removeItem(index))
			index--
			continue
		}

		if (array.isNoop(index, newArray)) {
			sequence.push(array.noopItem(index))
			continue
		}

		const item = newArray[index]

		if (array.isAdditional(item, index)) {
			sequence.push(array.addItem(item, index))
			continue
		}

		sequence.push(array.addItem(item, index))
	}

	sequence.push(...array.removeItemsAfter(newArray.length))

	return sequence
}

class ArrayWithOriginalIndices {
	#array: any[]
	#originalIndices: number[]
	#equalsFn: (a: any, b: any) => boolean

	constructor(array: any[], equalsFn: (a: any, b: any) => boolean) {
		this.#array = [...array]
		this.#originalIndices = array.map((_, i) => i)
		this.#equalsFn = equalsFn
	}

	get length(): number {
		return this.#array.length
	}

	isRemoval(index: number, newArray: any[]): boolean {
		if (index >= this.length) {
			return false
		}

		const item = this.#array[index]
		const indexInNewArray = newArray.findIndex(newItem =>
			this.#equalsFn(item, newItem),
		)
		return indexInNewArray === -1
	}

	removeItem(index: number): ArrayDiffOperation {
		const operation: ArrayDiffOperation = {
			op: ARRAY_DIFF_OP.REMOVE,
			index,
			item: this.#array[index],
		}

		this.#array.splice(index, 1)
		this.#originalIndices.splice(index, 1)

		return operation
	}

	isNoop(index: number, newArray: any[]) {
		if (index >= this.length) {
			return false
		}
		const item = this.#array[index]
		const newItem = newArray[index]
		return this.#equalsFn(item, newItem)
	}

	originalIndexAt(index: number) {
		return this.#originalIndices[index]
	}

	noopItem(index: number) {
		return {
			op: ARRAY_DIFF_OP.NOOP,
			originalIndex: this.originalIndexAt(index),
			index,
			item: this.#array[index],
		}
	}

	isAdditional(item: any, fromIdx: number) {
		return this.findIndexFrom(item, fromIdx)
	}

	findIndexFrom(item: any, fromIdx: number) {
		for (let i = fromIdx; i < this.length; i++) {
			if (this.#equalsFn(item, this.#array[i])) {
				return i
			}
		}
		return -1
	}

	addItem(item: any, index: number) {
		const operation = {
			op: ARRAY_DIFF_OP.ADD,
			index,
			item,
		}
		this.#array.splice(index, 0, item)
		this.#originalIndices.splice(index, 0, -1)
		return operation
	}

	moveItem(item: any, index: number) {
		const oldIndex = this.findIndexFrom(item, index)

		const operation = {
			op: ARRAY_DIFF_OP.MOVE,
			originalIndex: this.originalIndexAt(item),
			from: oldIndex,
			index,
			item: this.#array[oldIndex],
		}

		const [_item] = this.#array.splice(oldIndex, 1)
		this.#array.splice(index, 0, _item)
		const [originalIndex] = this.#originalIndices.splice(oldIndex, 1)
		this.#originalIndices.splice(index, 0, originalIndex)

		return operation
	}

	removeItemsAfter(index: number) {
		const operations = []

		while (this.length > index) {
			operations.push(this.removeItem(index))
		}

		return operations
	}
}

export function isNotEmptyString(str: string) {
	return str !== ''
}

export function isNotBlankOrEmptyString(str: string) {
	return isNotEmptyString(str.trim())
}
