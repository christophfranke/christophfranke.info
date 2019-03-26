import { css, StyleSheet } from 'aphrodite/no-important'
import '../util/rehydrate'

const styles = StyleSheet.create({
	picture: {
		width: '100%',
		height: 'auto',
	}
})

const Image = ({ image, className = '' }) => {
	return (
    <picture>
      <source media="(max-width: 400px)" srcSet={image.small.url} />
      <source media="(max-width: 900px)" srcSet={image.medium.url} />
      <source srcSet={image.url} />
      <img className={[css(styles.picture), className].join(' ')} src={image.url} alt={image.alt} />
    </picture>
	)
}

export default Image