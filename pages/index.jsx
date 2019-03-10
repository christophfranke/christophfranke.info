import Layout from '../components/layout'
import Email from '../components/email'

const IndexPage = () => {
	return (
		<Layout>
			<h1>Christoph Franke</h1>
			<h3>Fullstack Web Developer</h3>
			<p><em>Javascript, Vue, React, Node</em></p>
			<Email />
		</Layout>
	)
}

export default IndexPage