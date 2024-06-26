const hamburgerEl = document.querySelector('.hamburger');
const mobileNavEl = document.querySelector('.mobile-nav');

const navLinks = document.querySelectorAll('.nav.mobile-nav a');

const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

const h1El = document.querySelector('h1');
let text = h1El.innerText;
let idx = 1; // track h1 letter

hamburgerEl.addEventListener('click', () => {
    mobileNavEl.classList.toggle('openDrawer');
    bar1.classList.toggle('animateBar1');
    bar2.classList.toggle('animateBar2');
    bar3.classList.toggle('animateBar3');
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        mobileNavEl.classList.toggle('openDrawer');
        bar1.classList.toggle('animateBar1');
        bar2.classList.toggle('animateBar2');
        bar3.classList.toggle('animateBar3');
    })
});

// Display text on screen 1 char at a time

function writeText() {
    h1El.style.opacity = 0; // Set opacity to 0 before changing text
    setTimeout(() => {
        h1El.innerText = text.slice(0, idx);
        idx++;
        if (idx <= text.length) {
            writeText();
        }
        h1El.style.opacity = 1; // Set opacity back to 1 after text change
    }, 150);
}

writeText();

const imageModal = document.querySelector('#imageModal');
const galleryImgs = document.querySelectorAll('.gallery-img');
const modalImage = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close');
const arrowContainers = document.querySelectorAll('.arrow-container');
const arrows = document.querySelectorAll('.arrow');
const rightArrow = document.querySelector('.arrow-container.right');
const leftArrow = document.querySelector('.arrow-container.left');

let currentIdx = 0;

// Enlarge Images when clicked
// galleryImgs.forEach(galleryImg => {
//     galleryImg.addEventListener('click', () => {
//         imageModal.style.display = "flex";
//         modalImage.src = galleryImg.src;
//         modalImage.alt = galleryImg.alt;
//     })
// });

galleryImgs.forEach((galleryImg, idx) => {
    galleryImg.addEventListener('click', () => {
        currentIdx = idx;
        imageModal.style.display = "flex"
        modalImage.src = galleryImg.src;
        modalImage.alt = galleryImg.alt;
    })
});

rightArrow.addEventListener('click', () => {
    currentIdx++;
    if (currentIdx > galleryImgs.length - 1) {
        currentIdx = 0;
    }
    modalImage.src = galleryImgs[currentIdx].src;
    modalImage.alt = galleryImgs[currentIdx].alt;
})

leftArrow.addEventListener('click', () => {
    currentIdx--;
    if (currentIdx < 0) {
        currentIdx = galleryImgs.length - 1;
    }
    modalImage.src = galleryImgs[currentIdx].src;
    modalImage.alt = galleryImgs[currentIdx].alt;
})

// Close image modal
closeBtn.addEventListener('click', () => {
    imageModal.style.display = "none";
    modalImage.src = "data:,";
    modalImage.alt = "Image will load here";
})
