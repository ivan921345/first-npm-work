export default function cerateMurkup(obj){
	return obj.map((el,idx) => {
		return `
		<div class="landingPages__imageCard" >
			<img src="${el.src}" alt="landing image">
			<a href="#" class="landingImage--text">Landing image ${idx}</a>
		</div>
		`
	}).join('')
}
