import Link from 'next/link'

import Layout from '../components/layout'

import QueryPage from '../query/page'
import { asText } from '../util/prismic'


const List = props => (
	<div>
		<h2>{props.title}</h2>
		<ul>
			{props.items.map((item, i) =>
				<li key={i}>{asText(item.skill)}</li>)}
		</ul>
	</div>
)


const SkillsPage = props => {
	return (
		<Layout>
			<List title="Frontend" items={props.skills.data.frontend_frameworks} />
			<List title="Backend" items={props.skills.data.backend_frameworks} />
		</Layout>
	)
}

SkillsPage.getInitialProps = async () => ({
	skills: await QueryPage('skills')
})

export default SkillsPage