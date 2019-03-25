import React from 'react'
import { prefix, address } from '../components/email'

import Button from '../components/button'


class EmailButton extends React.Component {	
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
				prefix: prefix(),
				address: address()
			})
		}
	}

	render() {
		return	<Button href={`${this.state.prefix}:${this.state.address}`}>Contact me</Button>
	}
}

export default EmailButton