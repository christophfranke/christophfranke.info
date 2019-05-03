import { css, StyleSheet } from 'aphrodite/no-important'
import '../util/rehydrate'

import style from '../style'

const styles = StyleSheet.create({
	button: {
		color: style.color.white,
		display: 'inline-block',
		padding: '9px',
		border: style.border,
		background: style.background.transparent,
		borderRadius: '6px',
		textDecoration: 'none',
		marginRight: '15px',
		marginBottom: '15px',
		cursor: 'pointer',
		':hover': {
			color: style.color.purple,
		}
	}
})

const Button = props => {
	const className = [css(styles.button), props.className].filter(x => !!x).join(' ')
	return <a {...props} className={className}>{props.children}</a>
}

export default Button