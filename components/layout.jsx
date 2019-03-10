import Link from 'next/link'


const Layout = props => {
	return (
		<div>
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