let images=["https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2065_20210802120634.png/format:webp",
 			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2112_20210803180905.png/format:webp", 
 			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2115_20210803151025.png/format:webp", 
 			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2161_20210730103703.png/format:webp",
 			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2111_20200923172009.png/format:webp",
			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2121_20210311083848.png/format:webp",
 			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2152_20210708114859.jpeg/format:webp", 
			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2106_20210608152339.png/format:webp", 
			"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2090_20210212162619.png/format:webp",
	 		"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2093_20210802103223.png/format:webp",
	  		"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2119_20210701165028.png/format:webp", 
	  		"https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2164_20210518210149.png/format:webp"]


let currID=0; //current ID of images

/**
 * Set the correct big image to the slider
 *
 * @param {number} ID The ID of  each thumbnail photo.
 * 
 * @return {number} In HTML file, unique ID of each thumbnail photo is sending to SetIMG function.
 * 					SetIMG function show selected thumbnail image as big image in the main slide screen.
 */

function SetIMG(ID){
	let imgunits = document.querySelector('.Slideimg > img');
	imgunits.src = images[ID];
	let allimgs=document.querySelectorAll('.thumbnail img');
	let i=0;
	while(i<allimgs.length){
		allimgs[i].classList.remove('activeImage');
		i++;
	}
	currID=ID;
	
	let activeImage = allimgs[currID];
	activeImage.classList.add('activeImage'); 
}

/**
 * When right arrow button in slider is clikced, next image is showing
 */

function prevButton(){
	if(currID==0){ //if the first image is showing, go to the last photo
		currID=images.length;
	}
	currID--;
	SetIMG(currID);
}

/**
 * When left arrow button in slider is clikced, previous image is showing
 */
function nextButton(){
	if(currID==images.length-1){ // if the last photo is showing go to the first photo
		currID=-1;
	}
	currID++;
	SetIMG(currID);
}

document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key;

//* if right arrow key is pressed from keyboar,
//* show the next image
    if (key === 'ArrowRight' ||  key === 39) {
        nextButton();
    }

//* if left arrow key is pressed from keyboard;
//* show the previous image

	else if(key==='ArrowLeft' || key==37){
		prevButton();
	}
});