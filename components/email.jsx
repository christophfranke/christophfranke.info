import React from 'react'
import { css, StyleSheet } from 'aphrodite'

import style from '../style'

const styles = StyleSheet.create({
	email: {
		color: 'white',
		display: 'block',
		fontSize: '24px',
		':hover': {
			color: style.color.red
		}
	}
})

const rotate = str => {
	const codeA = 'a'.charCodeAt(0)
	const codeZ = 'z'.charCodeAt(0)

	return str.split('').map(letter => {
		const code = letter.charCodeAt()
		if (code >= codeA && code <= codeZ) {
			return String.fromCharCode(code - 3)
		} else {
			return letter
		}
	}).join('')
}

const prefix = () => {
	return rotate('pdlowr')
}

const address = () => {
	return rotate('kdoor' + '@' + 'fkulvwrskiudqnh' + '.' + 'lqir')
}

class Email extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			href: '',
			address: '...'
		}
	}

	componentDidMount() {
		if (process.browser) {
			this.setState({
				href: `${prefix()}:${address()}`,
				address: address()
			})
		}
	}

	render() {
		const { className, ...rest } = this.props
		return (
			<a className={[css(styles.email), className].join(' ')} href={this.state.href} {...rest}>{this.state.address}</a>
		)
	}
}

export default Email