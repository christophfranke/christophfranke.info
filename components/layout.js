import Link from 'next/link'


export default props => {
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
			{props.children}
		</div>
	)
}