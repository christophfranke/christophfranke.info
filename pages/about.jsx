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
    '@media (max-width: 800px)': {
	    padding: '4vw 4vw 0 4vw',
	    width: '90%'
    }
	},
	headline: {
		marginTop: 0,
		fontFamily: style.font.secondary,
		textTransform: 'uppercase',
	},
	left: {
		width: '60%',
		'@media (max-width: 1100px)': {
			width: '100%'
		}
	},
	right: {
		width: '32%',
		'@media (max-width: 1100px)': {
			display: 'none'
		}
	},
	image: {
		borderRadius: '6px',
		marginBottom: '1em',
	},
	ctas: {
		margin: '0 auto 100px auto',
		width: '70%',
    '@media (max-width: 800px)': {
			width: '90%',
    }
	},
	imageInline: {
		display: 'none',
		'@media (max-width: 1100px)': {
			display: 'inline-block',
			float: 'right',
			maxWidth: '40%',
			marginLeft: '2vw',
			marginBottom: '1vw',
		}
	}
})

const AboutPage = props => {
	return (
		<Layout>
			<div className={css(styles.row)}>
				<div className={css(styles.left)}>
					<Image className={css(styles.imageInline)} image={props.about.data.portrait} />
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
				<Button href="/static/Christoph%20Franke%20CV.pdf" download>Download CV</Button>
				<EmailButton />
			</div>
		</Layout>
	)
}

AboutPage.getInitialProps = async () => ({
	about: await QueryPage('about')
})

export default AboutPage