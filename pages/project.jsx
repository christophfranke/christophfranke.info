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
		flexDirection: 'row-reverse'
	},
	col: {
		width: '43vw',
		marginBottom: '3vw',
		'@media (max-width: 600px)': {
			width: '90vw',
		}
	},
	title: {
		marginTop: '0'
	},
	block: {
		marginBottom: '50px',
	},
	featureBlock: {
		'@media (max-width: 1000px)': {
			display: 'none'
		}
	},
	links: {
		marginTop: '70px',
		textAlign: 'center'
	},
	list: {
		paddingLeft: '20px'
	},
	listItem: {
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '24px',
		marginBottom: '15px',
	},
	featuresMobile: {
		display: 'none',
		'@media (max-width: 1000px)': {
			display: 'block'
		}
	}
})


const ProjectPage = props => {
	const links = [
		props.data.project_url.url ? <Button href={url(props.data.project_url)} target="_blank" key="project_url">View Project</Button> : null,
		props.data.repository.url ? <Button href={url(props.data.repository)} target="_blank" key="repository">View Repository</Button> : null,
	].filter(x => !!x)
	return (
		<Layout>
			<div className={css(styles.row)}>
				<div className={css(styles.col)}>
					<div className={css(styles.block)}>
						<h1 className={css(styles.title)}>{asText(props.data.title)}</h1>
						<RichText content={props.data.description} />
					</div>
					<div className={css(styles.block)}>
						<p><b>{asText(props.data.role)}</b></p>
						<p><em>{props.data.techstack.map(item => asText(item.item)).join(', ')}</em></p>
					</div>
					<div className={css([styles.block, styles.featureBlock])}>
						<h2>Features</h2>
						<ul className={css(styles.list)}>
							{props.data.features.map((feature, i) =>
								<li className={css(styles.listItem)} key={i}>{asText(feature.feature)}</li>
							)}
						</ul>
					</div>
				</div>
				<div className={css(styles.col)}>
					<Image image={props.data.image} />
					<div className={css(styles.links)}>
						{links}
					</div>
				</div>
				<div className={css(styles.featuresMobile)}>
					<h2>Features</h2>
					<ul className={css(styles.list)}>
						{props.data.features.map((feature, i) =>
							<li className={css(styles.listItem)} key={i}>{asText(feature.feature)}</li>
						)}
					</ul>
				</div>
			</div>
		</Layout>
	)
}

ProjectPage.getInitialProps = async context => await QueryProject(context.query.id)

export default ProjectPage