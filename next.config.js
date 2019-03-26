require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

const Prismic = require('prismic-javascript')
const endpoint = 'https://christophfranke-info.cdn.prismic.io/api/v2'
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

const queryProjects = async () => {
  const api = await Prismic.getApi(endpoint, { accessToken })
  const projects = await api.query(
    Prismic.Predicates.at('document.type', 'project'),
    { orderings : '[my.project.priority desc]' })
    .then(response => response.results)

  return projects
}

const key = project => `/p/${project.uid}`
const page = project => ({ page: '/project', query: { id: `${project.uid}` } })

const test = async () => {
  const projects = await queryProjects()
  console.log(...projects.map(project => [key(project), page(project)])
          .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {}))
}

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  },
  exportPathMap: async () => {
    const projects = await queryProjects()
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/skills': { page: '/skills' },
      '/about': { page: '/about' },
      ...projects.map(project => [key(project), page(project)])
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
    }
  },
  // target: 'serverless'
}