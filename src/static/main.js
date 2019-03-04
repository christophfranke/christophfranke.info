window.addEventListener('load', () => {
	const target = getLiame('kdoor@fkulvwrskiudqnh.lqir')
	const prefix = getLiame('pdlowr')

	const liame = document.querySelector('.liame')
	liame.innerHTML = target
	liame.setAttribute('href', `${prefix}:${target}`)
})


const getLiame = str => {
	const codeA = 'a'.charCodeAt(0)
	const codeZ = 'z'.charCodeAt(0)

	return str.split('').map(letter => {
		const code = letter.charCodeAt()
		if (code >= codeA && code <= codeZ) {
			return String.fromCharCode(code - 3)
		} else {
			return letter
		}
	}).join('')
}