import Prismic from 'prismic-javascript'

const endpoint = 'https://christophfranke-info.cdn.prismic.io/api/v2'
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

export default name =>
	Prismic.getApi(endpoint, { accessToken })
