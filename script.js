//your JS code here. If required.
let namebox = document.querySelector('input')
namebox.addEventListener('click', ()=>{
	let uppercase = namebox.value.toUpperCase()
	namebox.value = uppercase
})