export function objectDiff(
	oldObj: Record<string, any>,
	newObj: Record<string, any>,
) {
	if (oldObj == null || newObj == null) {
		return {
			added: [],
			removed: [],
			updated: [],
		}
	}

	if (typeof oldObj !== 'object' || typeof newObj !== 'object') {
		return {
			added: [],
			removed: [],
			updated: [],
		}
	}

	try {
		const oldKeys = Object.keys(oldObj)
		const newKeys = Object.keys(newObj)

		const diff = {
			added: newKeys.filter(key => !(key in oldObj)),
			removed: oldKeys.filter(key => !(key in newObj)),
			updated: newKeys.filter(
				key => key in newObj && oldObj[key] !== newObj[key],
			),
		}

		return diff
	} catch (error) {
		console.warn(error)
		return {
			added: [],
			removed: [],
			updated: [],
		}
	}
}

export function hasOwnProperty(obj: Record<string, any>, prop: string) {
	if (!obj || typeof obj !== 'object') {
		return false
	}
	return Object.prototype.hasOwnProperty.call(obj, prop)
}
