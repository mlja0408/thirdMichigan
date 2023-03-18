let images = ' '
let id = ' '
let counter = 1; 
window.addEventListener('DOMContentLoaded', function (event) {
    images = document.getElementsByClassName('galleryImage')
    try {
		
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('click', handleClick);
            id = images[i].id= 'Image ' + counter;
			counter++;
        }
    }
    catch (e) {
        console.log(e)
    }
    
});

try {
    function handleClick() {
        console.log(this.id + ' Clicked' )
		for (let i = 1; i <= counter; i++) {
			const image = document.getElementById('Image ' + i);
			// image.classList.remove('selected');
		}
		const clickedImage = document.getElementById(this.id);
        clickedImage.classList.toggle('selected');

    }
}
catch (e) {
    console.log(e)
}