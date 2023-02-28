window.addEventListener('DOMContentLoaded', function (event) {
    const images = document.getElementsByClassName('galleryImage')

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', handleClick);
    }
});

function handleClick() {
    alert('Image Clicked')
}