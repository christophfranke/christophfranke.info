import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite/no-important'
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
	},
	companyList: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		width: '90%',
		margin: 'auto'

	},
	company: {
		width: 'calc(47.5% - 62px)',
		padding: '30px',
		textAlign: 'center',
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
	},
	companiesHeadline: {
		width: '100%',
		textAlign: 'center',
		marginBottom: '70px'
	},
	companyName: {
		fontWeight: '300',
		textTransform: 'uppercase',
		marginBottom: '0.3em',
		':hover': {
			color: style.color.green
		}
	},
	companyLink: {
		color: 'white',
		textDecoration: 'none'
	},
	position: {
		display: 'block',
		marginBottom: '3em'
	},
	logo: {
		backgroundColor: 'white'
	}
})

const Company = props => {
	return (
		<div className={css(styles.company)}>
			<a href={props.company.url.url} target="_blank" className={css(styles.companyLink)}><img className={css(styles.logo)} src={props.company.logo.url} />
			<h2 className={css(styles.companyName)}>{asText(props.company.name)}</h2></a>
			<em className={css(styles.position)}>{asText(props.company.position)}</em>
			<p>{asText(props.company.description)}</p>
		</div>
	)
}

const AboutPage = props => {
	console.log(props.about.data.companies)

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
				<Button href="/static/Christoph%20Franke%20Projects.pdf" download>Download project list</Button>
				<EmailButton />
			</div>
			<h1 className={css([styles.companiesHeadline, styles.headline])}>Employers and Contractors</h1>
			<div className={css(styles.companyList)}>
				{props.about.data.companies.map((company, index) => <Company company={company} key={index} />)}
			</div>
		</Layout>
	)
}

AboutPage.getInitialProps = async () => ({
	about: await QueryPage('about')
})

export default AboutPage