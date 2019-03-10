import Link from 'next/link'

import Layout from '../components/layout'
import RichText from '../components/richText'

import QueryPage from '../query/page'
import { asText } from '../util/prismic'


const AboutPage = props => {
	return (
		<Layout>
			<RichText content={props.about.data.text} />
		</Layout>
	)
}

AboutPage.getInitialProps = async () => ({
	about: await QueryPage('about')
})

export default AboutPage