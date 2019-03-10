import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite'

import Style from '../style'

const styles = StyleSheet.create({
	header: {
		position: 'fixed',
		top: '15px',
		right: 0,
		display: 'flex',
		paddingRight: '10vw',
		width: '300px',
		margin: '0 auto',
		flexAlign: 'center',
		justifyContent: 'space-between',
		borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
	},
	a: {
		color: 'white',
		display: 'block',
		textDecoration: 'none',
		fontSize: '20px',
		':hover': {
			color: Style.color.blue
		}
	}
})

const Header = props => {
	return (
		<header className={css(styles.header)}>
			<Link href="/">
				<a className={css(styles.a)}>Home</a>
			</Link>
			<Link href="/projects">
				<a className={css(styles.a)}>Projects</a>
			</Link>
			<Link href="/skills">
				<a className={css(styles.a)}>Skills</a>
			</Link>
			<Link href="/about">
				<a className={css(styles.a)}>About</a>
			</Link>
		</header>
	)
}

export default Header