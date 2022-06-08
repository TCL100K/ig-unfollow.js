(async function(){
	const delay = (ms) => new Promise(_ => setTimeout(_, ms))
	const findBtn = (txt) => [...document.querySelectorAll('button').entries()].map(([pos, btn]) => btn).filter((btn) => btn.innerText === txt)
	const bl = findBtn('Following')
	const eta = (len) => { if (len >= 60) { return `${Math.floor(len / 60)} hour ${len % 60} min` } return `${len} min` }

	console.log(`ETA: ${eta(bl.length)}`)
	console.log("Start")
	for (let i = 0; i < bl.length; i++) {
		let b = bl[i]
		if (!b) continue
		b.click()
		await delay(100)
		let confirm = findBtn('Unfollow')[0]
		confirm.click()
		console.log(`Unfollow ${i + 1}`)
		console.log(`ETA: ${eta(bl.length - i)}`)
		await delay(60 * 1000)
	}
	console.log('Finish')
})()
