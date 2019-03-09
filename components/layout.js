import Link from 'next/link'


export default props => {
	return (
		<div>
			<Link href="/index">
				<a>Home</a>
			</Link>
			<Link href="/projects">
				<a>Projects</a>
			</Link>
			{props.children}
		</div>
	)
}