export function extractPropsAndEvents(vdom: { props: Record<string, any> }): {
	props: Record<string, any>
	events: Record<string, any>
} {
	if (!vdom.props) {
		return { props: {}, events: {} }
	}

	const { on: events = {}, ...props } = vdom.props
	delete props.key

	return { props, events }
}
