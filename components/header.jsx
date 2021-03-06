import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite/no-important'
import '../util/rehydrate'

import style from '../style'

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		top: '1.5vw',
		right: 0,
		display: 'flex',
		paddingRight: '2vw',
		width: '90vw',
		maxWidth: '450px',
		margin: '0 auto',
		flexAlign: 'center',
		justifyContent: 'space-between',
		border: '1px solid transparent',
		borderBottom: style.border,
	},
	a: {
		color: style.color.white,
		display: 'block',
		textDecoration: 'none',
		fontSize: '20px',
		':hover': {
			color: style.color.blue
		},
	},
	logo: {
		height: '24px',
		width: 'auto',
		transition: 'transform .3s',
		':hover': {
			transform: 'scale(1.2)'
		}
	},
	logoSpacer: {
		marginLeft: '4vw'
	}
})

const Header = props => {
	return (
		<header className={[css(styles.header), props.className].filter(x => !!x).join(' ')}>
			<Link href="/" prefetch>
				<a className={css(styles.a)}>Home</a>
			</Link>
			<Link href="/projects" prefetch>
				<a className={css(styles.a)}>Projects</a>
			</Link>
			<Link href="/skills" prefetch>
				<a className={css(styles.a)}>Skills</a>
			</Link>
			<Link href="/about" prefetch>
				<a className={css(styles.a)}>About</a>
			</Link>
			<a href="/static/Christoph%20Franke%20CV%20and%20Projects.zip" className={css(styles.a)} download>CV</a>
			<a className={css(styles.logoSpacer)} href="https://github.com/christophfranke" target="_blank">
				<img className={css(styles.logo)} src="/static/github.png" />
			</a>
			<a href="https://www.linkedin.com/in/christoph-franke-44095673/" target="_blank">
				<img className={css(styles.logo)} src="/static/linkedin.png" />
			</a>
		</header>
	)
}

export default Header