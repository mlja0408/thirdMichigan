window.addEventListener('DOMContentLoaded', function (event) {
    let hamburger = document.getElementById('hamburger')
    let navBar = document.getElementById('navBar')
    hamburger.addEventListener('click', handleClick);

    function handleClick() {
        navBar.classList.toggle('active');

    }
});