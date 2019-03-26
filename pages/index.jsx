import { css, StyleSheet } from 'aphrodite'
import '../util/rehydrate'

import Layout from '../components/layout'
import Email from '../components/email'

import style from '../style'

const styles = StyleSheet.create({
	name: {
		fontSize: '70px',
		margin: 0,
		borderBottom: style.border,
		'@media (max-width: 400px)': {
			fontSize: '50px',
		},
	},
	description: {
		fontSize: '34px',
		margin: 0,
		marginTop: '25px',
		fontWeight: 'normal',
		'@media (max-width: 400px)': {
			fontSize: '24px',
		}
	},
	tech: {
		fontSize: '20px',
		margin: 0,
		fontStyle: 'italic',
		fontWeight: 'normal',
		'@media (max-width: 400px)': {
			fontSize: '16px',
		}
	},
	center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 'calc(100vh - 60px)',
	},
	inner: {
		'@media (max-width: 600px)': {
			textAlign: 'center'
		},
		// padding: '4vw',
		// border: style.border,
	},
	email: {
		marginTop: '15px',
		'@media (max-width: 400px)': {
			fontSize: '20px',
		}
	}
})

const IndexPage = () => {
	return (
		<Layout>
			<div className={css(styles.center)}>
				<div className={css(styles.inner)}>
					<h1 className={css(styles.name)}>Christoph Franke</h1>
					<h2 className={css(styles.description)}>Fullstack Web Developer</h2>
					<h3 className={css(styles.tech)}>Javascript, Vue, React, Node</h3>
					<Email className={css(styles.email)} />
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage