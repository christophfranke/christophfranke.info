import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite/no-important'
import '../util/rehydrate'

import style from '../style'

const styles = StyleSheet.create({
	header: {

	},
	menu: {
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: style.background.menu,
		overflowY: 'scroll',
		display: 'flex',
		alignItems: 'center',
		zIndex: '1',
	},
	inner: {
		textAlign: 'center',
		width: '100%',
	},
	icon: {
		display: 'block',
		position: 'absolute',
		top: '30px',
		right: '3vw',
		cursor: 'pointer',
	},
	a: {
		color: style.color.white,
		textDecoration: 'none',
		display: 'block',
		fontSize: '26px',
		marginBottom: '4px'

	},
	logo: {
		width: '32px',
		height: 'auto',
		margin: '5px',
		display: 'inline-block',
		transition: 'transform .3s',
		':hover': {
			transform: 'scale(1.2)'
		}
	},
	line: {
		border: 0,
		borderBottom: style.border,
		position: 'absolute',
		left: '3vw',
		right: '3vw',
		top: '60px'
	}
})

class MobileHeader extends React.Component {
	constructor(props) {
		super(props)

		this.close = this.close.bind(this)
		this.open = this.open.bind(this)

		this.state= {
			open: false
		}
	}

	open() {
		this.setState({
			open: true
		})
	}

	close() {
		this.setState({
			open: false
		})
	}

	render() {
		const menu = (<div className={css(styles.menu)}>
			<img src="/static/close.svg" className={css(styles.icon)} width="32" height="32" onClick={this.close} />
			<hr className={css(styles.line)} />
			<div className={css(styles.inner)}>
				<Link href="/" prefetch>
						<a className={css(styles.a)} onClick={this.close}>Home</a>
					</Link>
					<Link href="/projects" prefetch>
						<a className={css(styles.a)} onClick={this.close}>Projects</a>
					</Link>
					<Link href="/skills" prefetch>
						<a className={css(styles.a)} onClick={this.close}>Skills</a>
					</Link>
					<Link href="/about" prefetch>
						<a className={css(styles.a)} onClick={this.close}>About</a>
					</Link>
					<a href="/static/Christoph%20Franke%20CV.pdf" className={css(styles.a)} target="_blank">CV</a>
					<a className={css(styles.logoSpacer)} href="https://github.com/christophfranke" target="_blank" onClick={this.close}>
						<img className={css(styles.logo)} src="/static/github.png" />
					</a>
					<a href="https://www.linkedin.com/in/christoph-franke-44095673/" target="_blank" onClick={this.close}>
						<img className={css(styles.logo)} src="/static/linkedin.png" />
					</a>
				</div>
			</div>)

		return (
			<header className={[css(styles.header), this.props.className].filter(x => !!x).join(' ')}>
				{!this.state.open ? <img src="/static/menu.svg" className={css(styles.icon)} width="32" height="32" onClick={this.open} /> : null}
				{this.state.open ? menu : null}	
			</header>
		)
	}
}

export default MobileHeader