
function signInFirst() {
    alert("You need to sign in first before you can use this feature.");
}

function completeProfile() {
    alert("Please Complete your profile first!.");
}

window.addEventListener('load', function() {
    const preloaderWrapper = document.querySelector('.preloader-wrapper');
    preloaderWrapper.classList.add('hide');
});