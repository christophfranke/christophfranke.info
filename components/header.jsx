import Link from 'next/link'
import { css, StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
	header: {
		position: 'fixed',
		top: 0,
		display: 'flex',
		padding: '8px 10%',
		width: '80%',
		margin: '0 auto',
		flexAlign: 'center',
		justifyContent: 'space-between',
	},
	a: {
		color: 'white',
		display: 'block'
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