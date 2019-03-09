import QueryProject from '../query/project'
import Layout from '../components/layout'
import { asText, url } from '../util/prismic'
import RichText from '../components/richText'


const Project = props => {
	console.log(props)
	const links = [
		props.data.project_url.url ? <a href={url(props.data.project_url)} target="_blank" key="project_url">View Project</a> : null,
		props.data.repository.url ? <a href={url(props.data.repository)} target="_blank" key="repository">View Repository</a> : null,
	].filter(x => !!x)
	return (
		<Layout>
			<h1>{asText(props.data.title)}</h1>
			<RichText content={props.data.description} />
			<p><b>{asText(props.data.role)}</b></p>
			<p><em>{props.data.techstack.map(item => asText(item.item)).join(', ')}</em></p>
			<ul>
				{props.data.features.map((feature, i) =>
					<li key={i}>{asText(feature.feature)}</li>
				)}
			</ul>
			{links}

		</Layout>
	)
}

Project.getInitialProps = async context => await QueryProject(context.query.id)

export default Project