const hamburgerEl = document.querySelector('.hamburger');
const mobileNavEl = document.querySelector('.mobile-nav');

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
    }, 300);
}

// function writeText() {
//     h1El.innerText = text.slice(0, idx);
//     idx++;

//     if (idx <= text.length) {
//         setTimeout(writeText, 250);
//     }
// }

writeText();
