import { asHtml } from '../util/prismic'

export default props => {
	return (
		<div dangerouslySetInnerHTML={{__html: asHtml(props.content)}} />
	)
}