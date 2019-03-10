import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite'

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
		borderBottom: '1px solid white',
	},
	a: {
		color: 'white',
		display: 'block',
		textDecoration: 'none'
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