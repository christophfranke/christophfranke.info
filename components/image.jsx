import { css, StyleSheet } from 'aphrodite'
import '../util/rehydrate'

const styles = StyleSheet.create({
	picture: {
		width: '100%',
		height: 'auto',
		borderRadius: '6px',
	}
})

const Image = ({ image }) => {
	return (
    <picture>
      <source media="(max-width: 400px)" srcSet={image.small.url} />
      <source media="(max-width: 900px)" srcSet={image.medium.url} />
      <source srcSet={image.url} />
      <img className={css(styles.picture)} src={image.url} alt={image.alt} />
    </picture>
	)
}

export default Image