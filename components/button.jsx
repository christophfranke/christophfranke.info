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
		':hover': {
			color: style.color.blue,
		}
	}
})

const Button = props => {
	return <a href={props.href} target="_blank" className={css(styles.button)}>{props.children}</a>
}

export default Button