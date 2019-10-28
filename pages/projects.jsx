import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite/no-important'
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
		marginBottom: '3vw',
		'@media (max-width: 800px)': {
			width: '90vw'
		}
	},
	image: {
		display: 'block',
		// filter: 'grayscale(100%)',
		transition: 'filter .3s, opacity 0.3s',
		borderRadius: '6px',
		opacity: 0.9,
		':hover': {
			filter: 'grayscale(0)',
			opacity: 1
		}
	},
	container: {
		position: 'relative',
    overflow: 'hidden'
	},
	overlayHover: {
		transform: 'none'
	},
	overlay: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		position: 'absolute',
		bottom: '0',
		left: '0',
		right: '0',
		height: '6vw',
		// padding: '0 30px 0 0',
		transform: 'translateY(6vw)',
		transition: '.3s transform ease-in-out',
	},
	title: {
		textAlign: 'center',
		fontSize: '30px',
		textTransform: 'uppercase',
		// marginTop: '3vw',
		margin: '0',
		lineHeight: '6vw',
		color: 'black',
		fontWeight: '300',
	}
})

class SingleProject extends React.Component {
	constructor(props) {
		super(props)

		this.mouseEnter = this.mouseEnter.bind(this)
		this.mouseLeave = this.mouseLeave.bind(this)

		this.state = {
			hover: false
		}
	}

	mouseEnter() {
		this.setState({
			hover: true
		})
	}

	mouseLeave() {
		this.setState({
			hover: false
		})
	}

	render() {
		return (
			<Link key={this.props.project.id} as={`/p/${this.props.project.uid}`} href={`/project?id=${this.props.project.uid}`} prefetch>
				<a className={css(styles.col)}>
					<div
						className={css(styles.container)}
						onMouseEnter={this.mouseEnter}
						onMouseLeave={this.mouseLeave}>
						<Image className={css(styles.image)} image={this.props.project.data.image} />
						<div className={css(styles.overlay, this.state.hover ? styles.overlayHover : null)}>
							<h2 className={css(styles.title)}>{asText(this.props.project.data.title)}</h2>
						</div>
					</div>
				</a>
			</Link>
		)
	}
}


const ProjectsPage = props => {
	return (
		<Layout>
			<div className={css(styles.row)}>
				{props.projects.filter(project => project.data.image.url).map((project, i) =>
					(<SingleProject project={project} key={i} />))}
			</div>
		</Layout>
	)
}

ProjectsPage.getInitialProps = async () => ({
	projects: await QueryProjects()
})

export default ProjectsPage