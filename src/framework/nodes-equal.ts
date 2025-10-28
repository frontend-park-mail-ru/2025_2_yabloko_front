import { DOM_TYPES, VNode } from './h'

export function areNodesEqual(nodeOne: VNode | null, nodeTwo: VNode | null) {
	if (nodeOne === null || nodeTwo === null) {
		return nodeOne === nodeTwo
	}

	if (nodeOne === undefined || nodeTwo === undefined) {
		return nodeOne === nodeTwo
	}

	if (nodeOne.type !== nodeTwo.type) {
		return false
	}

	const getKey = (node: VNode) => {
		if ('props' in node && node.props && 'key' in node.props) {
			return node.props.key || null
		}
		return null
	}

	const getTag = (node: VNode) => {
		return 'tag' in node ? node.tag : null
	}

	if (
		nodeOne.type === DOM_TYPES.ELEMENT &&
		nodeTwo.type === DOM_TYPES.ELEMENT
	) {
		const tagOne = getTag(nodeOne)
		const tagTwo = getTag(nodeTwo)
		const keyOne = getKey(nodeOne)
		const keyTwo = getKey(nodeTwo)

		return tagOne === tagTwo && keyOne === keyTwo
	}

	if (
		nodeOne.type === DOM_TYPES.COMPONENT &&
		nodeTwo.type === DOM_TYPES.COMPONENT
	) {
		const componentOne = getTag(nodeOne)
		const componentTwo = getTag(nodeTwo)
		const keyOne = getKey(nodeOne)
		const keyTwo = getKey(nodeTwo)

		return componentOne === componentTwo && keyOne === keyTwo
	}

	return true
}
