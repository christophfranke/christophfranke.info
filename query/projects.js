import Prismic from 'prismic-javascript'
import API from './api'

export default () => API().then(api =>
	api.query(Prismic.Predicates.at('document.type', 'project'),
		{ orderings : '[my.project.priority desc]' })).then(response =>
	response.results)
