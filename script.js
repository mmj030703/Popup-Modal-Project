const popupBtn = document.querySelector('.btn');
const popupContainer = document.querySelector('.popup');
const cancelBtn = document.querySelector('.close-btn');

popupBtn.addEventListener('click', () => {
    popupContainer.classList.toggle('blur');
    popupContainer.style.display = "grid";
});

cancelBtn.addEventListener('click', () => {
    popupContainer.classList.toggle('blur');
    popupContainer.style.display = "none";
});