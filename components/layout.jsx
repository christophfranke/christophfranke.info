import Link from 'next/link'
import Style from './layout.css'

const Layout = props => {
	return (
		<div style={Style.body}>
			<style>{`body {
				margin: 0;
			}`}</style>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/projects">
				<a>Projects</a>
			</Link>
			<Link href="/skills">
				<a>Skills</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			{props.children}
		</div>
	)
}

export default Layout