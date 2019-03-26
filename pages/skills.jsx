import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite/no-important'
import '../util/rehydrate'

import QueryPage from '../query/page'
import { asText } from '../util/prismic'

import Layout from '../components/layout'
import RichText from '../components/richText'

import style from '../style'


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: '90vw',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		margin: '100px auto',
	},
	box: {
		width: '37.5vw',
		textAlign: 'center',
		padding: '2.5vw',
		border: style.border,
		borderRadius: '6px',
		marginBottom: '3vw',
		backgroundColor: style.background.transparent,
		'@media (max-width: 800px)': {
			width: '90vw'
		},
		'@media (max-width: 400px)': {
			textAlign: 'left'
		}
	}
})


const List = props => (
	<div>
		<h2>{props.title}</h2>
			<p><em>{props.items.map((item, i) => asText(item.skill)).join(', ')}</em></p>
	</div>
)


const SkillsPage = props => {
	return (
		<Layout>
			<div className={css(styles.container)}>
				{props.skills.data.skills.map((item, i) => (
					<div key={i} className={css(styles.box)}>
						<h2>{asText(item.title)}</h2>
						<RichText content={item.text} />
					</div>
				))}
				<div className={css(styles.box)}>
					<List title="Frontend Technology" items={props.skills.data.frontend_frameworks} />
				</div>
				<div className={css(styles.box)}>
					<List title="Backend Technology" items={props.skills.data.backend_frameworks} />
				</div>
			</div>
		</Layout>
	)
}

SkillsPage.getInitialProps = async () => ({
	skills: await QueryPage('skills')
})

export default SkillsPage