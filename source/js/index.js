const refs = {
	btnContainer: document.querySelector('.joinCommunity__switcher'),
	imagesContainer: document.querySelector('.landingPagesImages--container'),
};

import data from "./lnadingPages--data.js"
import createMarkup  from "./createMurkup.js";



refs.imagesContainer.insertAdjacentHTML('beforeend', createMarkup(data))


function onGalleryContainerclick(e){
	if(e.target.nodeName !== "IMG"){
		return
	}

	console.log(e.target);

	const instance = basicLightbox.create(`
		<img src="${e.target.src}" alt="landing image" data-sizes="auto" data-src="${e.target.src}" class="lazyload">
	`)
	instance.show()
	
}

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	navigation: {
		 nextEl: '.js-nextEl',
		 prevEl: '.js-prevEl',
	},
});



refs.imagesContainer.addEventListener('click', onGalleryContainerclick)


function onContainerClick(e){
	if(e.target.nodeName !== 'BUTTON'){
		return
	}

	const currentActiveButton = document.querySelector('.js-joinCommunity--activeBtn');
	currentActiveButton.classList.remove('js-joinCommunity--activeBtn')
	e.target.classList.add('js-joinCommunity--activeBtn')

}

refs.btnContainer.addEventListener('click' , onContainerClick);


