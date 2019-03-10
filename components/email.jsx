import { css, StyleSheet } from 'aphrodite'

const address = 'hallo@christophfranke.info'

const styles = StyleSheet.create({
	email: {
		color: 'white',
		display: 'block',
		fontSize: '24px'
	}
})

const Email = props => {
	const { className, ...rest } = props
	return (
		<a className={[css(styles.email), className].join(' ')} href={`mailto:${address}`} {...rest}>{address}</a>
	)
}

export default Email