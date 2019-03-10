import { css, StyleSheet } from 'aphrodite'
import Header from './header'
const styles = StyleSheet.create({	
	body: {
		background: '#1d1d1d',
		color: 'white',
		height: '100vh',
		fontFamily: '"Helvetica Neue", Helvetica, Sans serif',
		padding: "30px 10px"
	}
})

const Layout = props => {
	return (
		<div className={css(styles.body)}>
			<Header />
			<style>{`body {
				margin: 0;
			}`}</style>
			{props.children}
		</div>
	)
}

export default Layout