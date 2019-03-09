import Prismic from 'prismic-javascript'
import API from './api'

export default name =>
	API().then(api => api.getSingle(name))