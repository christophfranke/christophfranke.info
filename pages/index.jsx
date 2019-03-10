import { css, StyleSheet } from 'aphrodite'
import '../util/rehydrate'

import Layout from '../components/layout'
import Email from '../components/email'

const styles = StyleSheet.create({
	name: {
		fontSize: '70px',
		margin: 0,
		borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
	},
	description: {
		fontSize: '34px',
		margin: 0,
		marginTop: '25px',
		fontWeight: 'normal'
	},
	tech: {
		fontSize: '20px',
		margin: 0,
		fontStyle: 'italic',
		fontWeight: 'normal'
	},
	center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100%',
	},
	email: {
		marginTop: '15px',
	}
})

const IndexPage = () => {
	return (
		<Layout>
			<div className={css(styles.center)}>
				<div>
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