const address = 'hallo@christophfranke.info'
const Email = () => {
	return (
		<a href={`mailto:${address}`}>{address}</a>
	)
}

export default Email