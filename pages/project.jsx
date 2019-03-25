import { css, StyleSheet } from 'aphrodite'

import QueryProject from '../query/project'
import Layout from '../components/layout'
import Image from '../components/image'
import Button from '../components/button'

import { asText, url } from '../util/prismic'
import RichText from '../components/richText'

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
	title: {
		marginTop: '0'
	},
	block: {
		marginBottom: '50px',
	},
	list: {
		padding: '0'
	},
	listItem: {
		display: 'block',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '30px',
	}
})


const ProjectPage = props => {
	console.log(props)

	const links = [
		props.data.project_url.url ? <Button href={url(props.data.project_url)} key="project_url">View Project</Button> : null,
		props.data.repository.url ? <Button href={url(props.data.repository)} key="repository">View Repository</Button> : null,
	].filter(x => !!x)
	return (
		<Layout>
			<div className={css(styles.row)}>
				<div className={css(styles.col)}>
					<Image image={props.data.image} />
				</div>
				<div className={css(styles.col)}>
					<div className={css(styles.block)}>
						<h1 className={css(styles.title)}>{asText(props.data.title)}</h1>
						<RichText content={props.data.description} />
					</div>
					<div className={css(styles.block)}>
						<p><b>{asText(props.data.role)}</b></p>
						<p><em>{props.data.techstack.map(item => asText(item.item)).join(', ')}</em></p>
					</div>
					<div className={css(styles.block)}>
						<h2>Features</h2>
						<ul className={css(styles.list)}>
							{props.data.features.map((feature, i) =>
								<li className={css(styles.listItem)} key={i}>{asText(feature.feature)}</li>
							)}
						</ul>
					</div>
					<div className={css(styles.block)}>
						{links}
					</div>
				</div>
			</div>
		</Layout>
	)
}

ProjectPage.getInitialProps = async context => await QueryProject(context.query.id)

export default ProjectPage