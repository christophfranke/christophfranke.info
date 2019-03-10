import { css, StyleSheet } from 'aphrodite'

import Header from './header'
import style from '../style'

const styles = StyleSheet.create({	
	body: {
		background: '#1d1d1d',
		color: 'white',
		height: '100vh',
		fontFamily: style.font.primary,
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