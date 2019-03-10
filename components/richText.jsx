import { asHtml } from '../util/prismic'

const RichText = props => {
	return (
		<div dangerouslySetInnerHTML={{__html: asHtml(props.content)}} />
	)
}

export default RichText