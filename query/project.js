import Prismic from 'prismic-javascript'
import API from './api'

export default uid =>
	API().then(api => api.getByUID('project', uid))