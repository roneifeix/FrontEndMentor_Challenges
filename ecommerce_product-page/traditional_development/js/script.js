window.addEventListener("load", () => {
    toggleImagesContainer();
})

function toggleImagesContainer() {
    let width = document.body.clientWidth;
    if(width >= 685) { /* under 700px */
        let carrousselContainer = document.getElementById('carroussel-container');
        carrousselContainer.className = 'lightbox';
        carrousselContainer.classList.remove('carroussel');
    }
}

function showNavBar() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.style.display = 'block';
}

function hiddenNavBar() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.style.display = 'none';
}

function showCart() {
    var cartContainer = document.querySelector('header');
    cartContainer.style.display = 'block';
}

function hiddenCart() {
    var cartContainer = document.querySelector('header');
    cartContainer.style.display = 'none';
}