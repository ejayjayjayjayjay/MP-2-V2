
function signInFirst() {
    alert("You need to sign in first before you can use this feature.");
}

window.addEventListener('load', function() {
    const preloaderWrapper = document.querySelector('.preloader-wrapper');
    preloaderWrapper.classList.add('hide');
});