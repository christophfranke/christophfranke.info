import { css, StyleSheet } from 'aphrodite/no-important'
import Router from 'next/router'

import Tracking from '../util/tracking'
import Header from './header'
import MobileHeader from './mobileHeader'
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

if (process.browser) {
		const handleRouteChange = url => {
		  Tracking.view(url)
		}

	Router.events.on('routeChangeStart', handleRouteChange)
}


const styles = StyleSheet.create({	
	body: {
		background: style.background.body,
		color: style.color.white,
		minHeight: 'calc(100vh - 60px)',
		fontFamily: style.font.primary,
		padding: "30px 10px"
	},
	header: {
		'@media (max-width: 800px)': {
			display: 'none !important'
		}
	},
	mobileHeader: {
		display: 'none',
		'@media (max-width: 800px)': {
			display: 'block'
		}
	}
})

const Layout = props => {
	return (
		<div className={css(styles.body)}>
			<Header className={css(styles.header)} />
			<MobileHeader className={css(styles.mobileHeader)} />
			<style>{reset}</style>
			{props.children}
		</div>
	)
}


export default Layout