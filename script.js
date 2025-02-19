//your JS code here. If required.
let namebox = document.querySelector('input')
namebox.addEventListener('change', ()=>{
	let uppercase = namebox.value.toUpperCase()
	namebox.value = uppercase
})