import PrismicDOM from 'prismic-dom'

export const asText = x => PrismicDOM.RichText.asText(x)
export const asHtml = x => PrismicDOM.RichText.asHtml(x)
export const url = x => PrismicDOM.Link.url(x)