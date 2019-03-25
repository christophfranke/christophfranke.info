import { css, StyleSheet } from 'aphrodite'

import Header from './header'
import style from '../style'

const reset = `
body {
	margin: 0;
}

p {
	font-size: 18px;
	line-height: 24px;
	font-weight: 300;
}
`

const styles = StyleSheet.create({	
	body: {
		background: '#1d1d1d',
		color: 'white',
		minHeight: 'calc(100vh - 60px)',
		fontFamily: style.font.primary,
		padding: "30px 10px"
	}
})

const Layout = props => {
	return (
		<div className={css(styles.body)}>
			<Header />
			<style>{reset}</style>
			{props.children}
		</div>
	)
}

export default Layout