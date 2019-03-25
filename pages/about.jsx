import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite'
import '../util/rehydrate'

import QueryPage from '../query/page'
import { asText } from '../util/prismic'

import style from '../style'

import Layout from '../components/layout'
import RichText from '../components/richText'
import Image from '../components/image'
import Button from '../components/button'
import EmailButton from '../components/emailButton'



const styles = StyleSheet.create({
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '150px auto 0 auto',
		width: '70%',
    padding: '8vw 8vw 0 8vw',
	},
	headline: {
		marginTop: 0,
		fontFamily: style.font.secondary,
		textTransform: 'uppercase',
	},
	left: {
		width: '60%',
	},
	right: {
		width: '32%',
	},
	image: {
		borderRadius: '6px',
		marginBottom: '1em',
	},
	ctas: {
		margin: '0 auto 100px auto',
		width: '70%',
	}
})

const AboutPage = props => {
	return (
		<Layout>
			<div className={css(styles.row)}>
				<div className={css(styles.left)}>
					<h1 className={css(styles.headline)}>About me</h1>
					<RichText content={props.about.data.text} />
				</div>
				<div className={css(styles.right)}>
					<Image className={css(styles.image)} image={props.about.data.portrait} />
				</div>
			</div>
			<div className={css(styles.ctas)}>
				<Link href="/projects" prefetch>
					<Button>View Projects</Button>
				</Link>
				<Button href="/static/Christoph%20Franke%20CV.pdf" className={css(styles.a)} download>Download CV</Button>
				<EmailButton />
			</div>
		</Layout>
	)
}

AboutPage.getInitialProps = async () => ({
	about: await QueryPage('about')
})

export default AboutPage