const address = 'hallo@christophfranke.info'
export default () => {
	return (
		<a href={`mailto:${address}`}>{address}</a>
	)
}