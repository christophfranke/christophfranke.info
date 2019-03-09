import Link from 'next/link'

import Layout from '../components/layout'

import QueryProjects from '../query/projects'
import { asText } from '../util/prismic'

const SingleProject = props => {
	return (
		<li key={props.id}>
			<Link as={`/p/${props.uid}`} href={`/project?id=${props.uid}`}>
				<a>{asText(props.data.title)}</a>
			</Link>
		</li>
	)
}

const Projects = props => {
	return (
		<Layout>
			<ul>
				{props.projects.map(project => SingleProject(project))}
			</ul>
		</Layout>
	)
}

Projects.getInitialProps = async () => ({
	projects: await QueryProjects()
})

export default Projects