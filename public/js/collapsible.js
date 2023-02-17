window.addEventListener('DOMContentLoaded', function(event) {
    const coll = document.getElementsByClassName("collapsible");

// Loop through all buttons and add a click event listener to toggle the content
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", handleClick);
    }
});

function handleClick() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.style.display === "block" ? content.style.display = "none" : content.style.display = "block";
}
