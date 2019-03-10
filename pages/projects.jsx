import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite'
import '../util/rehydrate'

import QueryProjects from '../query/projects'
import { asText } from '../util/prismic'

import Layout from '../components/layout'
import Image from '../components/image'

const styles = StyleSheet.create({
	row: {
		margin: '10vw auto',
		display: 'flex',
		justifyContent: 'space-between',
		width: '90vw',
		flexWrap: 'wrap',
	},
	col: {
		width: '43vw',
		marginBottom: '3vw'
	},
	image: {
		display: 'block',
		filter: 'grayscale(100%)',
		transition: 'filter .3s, opacity 0.3s',
		borderRadius: '6px',
		opacity: 0.6,
		':hover': {
			filter: 'grayscale(0)',
			opacity: 1
		}
	}
})

const SingleProject = props => {
	return (
		<Link key={props.id} as={`/p/${props.uid}`} href={`/project?id=${props.uid}`}>
			<a className={css(styles.col)}>
				<div>
					<Image className={css(styles.image)} image={props.data.image} />
				</div>
			</a>
		</Link>
	)
}

const ProjectsPage = props => {
	return (
		<Layout>
			<div className={css(styles.row)}>
				{props.projects.filter(project => project.data.image.url).map(project => SingleProject(project))}
			</div>
		</Layout>
	)
}

ProjectsPage.getInitialProps = async () => ({
	projects: await QueryProjects()
})

export default ProjectsPage