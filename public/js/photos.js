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
        console.log(this.id + ' Clicked')
        // Get the clicked image
        let img = event.target;

        // Create a new div to hold the enlarged image
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";

        // Create a new image that is a copy of the clicked image
        let enlargedImg = new Image();
        enlargedImg.src = img.src;
        enlargedImg.style.maxWidth = "90%";
        enlargedImg.style.maxHeight = "90%";
        enlargedImg.style.width = "auto";
        enlargedImg.style.height = "400px";
        enlargedImg.style.objectFit = "contain";

        // Add the enlarged image to the overlay div
        overlay.appendChild(enlargedImg);

        // Add the overlay div to the body of the page
        document.body.appendChild(overlay);

        // Add an event listener to the overlay div to remove it when clicked
        overlay.addEventListener("click", function () {
            document.body.removeChild(overlay);
        });
    }

}
catch (e) {
    console.log(e)
}