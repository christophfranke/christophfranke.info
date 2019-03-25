import { css, StyleSheet } from 'aphrodite'
import '../util/rehydrate'

import style from '../style'

const styles = StyleSheet.create({
	button: {
		color: 'white',
		display: 'inline-block',
		padding: '9px',
		border: style.border,
		background: style.background.transparent,
		borderRadius: '6px',
		textDecoration: 'none',
		marginRight: '15px',
		cursor: 'pointer',
		':hover': {
			color: style.color.blue,
		}
	}
})

const Button = props => {
	const className = [css(styles.button), props.className].filter(x => !!x).join(' ')
	return <a {...props} className={className}>{props.children}</a>
}

export default Button