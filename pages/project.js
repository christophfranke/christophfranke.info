import QueryProject from '../query/project'
import Layout from '../components/layout'
import { asText } from '../util/prismic'
import RichText from '../components/richText'

const Project = props => {
	console.log(props)
	return (
		<Layout>
			<h1>{asText(props.data.title)}</h1>
			<RichText content={props.data.description} />
			<ul>
			{props.data.features.map((feature, i) => 
				<li key={i}>{asText(feature.feature)}</li>)
			}
			</ul>
		</Layout>
	)
}

Project.getInitialProps = async context => await QueryProject(context.query.id)

export default Project