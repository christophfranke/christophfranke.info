import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite'
import '../util/rehydrate'

import QueryPage from '../query/page'
import { asText } from '../util/prismic'

import style from '../style'

import Layout from '../components/layout'
import RichText from '../components/richText'
import Image from '../components/image'



const styles = StyleSheet.create({
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '150px auto',
		width: '70%',
  //   backgroundColor: 'rgba(40, 76, 43, 0.1)',
		// backgroundColor: 'rgba(51, 92, 119, 0.2)',
    padding: '8vw',
    // borderRadius: '6px',
    borderTop: style.border,
    borderBottom: style.border
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
					<Image image={props.about.data.portrait} />
				</div>
			</div>
		</Layout>
	)
}

AboutPage.getInitialProps = async () => ({
	about: await QueryPage('about')
})

export default AboutPage