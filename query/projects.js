import Prismic from 'prismic-javascript'

const endpoint = 'https://christophfranke-info.cdn.prismic.io/api/v2'
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

export default () => Prismic.getApi(endpoint, { accessToken }).then(api =>
	api.query(Prismic.Predicates.at('document.type', 'project'),
		{ orderings : '[my.project.priority desc]' })).then(response =>
	response.results)
