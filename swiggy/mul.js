let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li'); // Corrected 'li' as a string
let elementToShow = 3;

let sliderContainerWidth = sliderContainer.clientWidth;
let cardWidth = sliderContainerWidth / elementToShow;

slider.style.width = (cards.length * cardWidth) + 'px';
slider.style.marginLeft = '0px'; // Initialize marginLeft to 0

for (let i = 0; i < cards.length; i++) {
    let element = cards[i];
    element.style.width = cardWidth + 'px';
}

function prev() {
    let currentMargin = +slider.style.marginLeft.slice(0, -2); // Get current margin
    let newMargin = currentMargin + cardWidth; // Calculate new margin
    if (newMargin > 0) {
        newMargin = 0; // Constrain to the maximum margin
    }
    slider.style.marginLeft = newMargin + 'px'; // Apply new margin
}

function next() {
    let currentMargin = +slider.style.marginLeft.slice(0, -2); // Get current margin
    let maxMargin = -cardWidth * (cards.length - elementToShow); // Calculate maximum margin
    let newMargin = currentMargin - cardWidth; // Calculate new margin
    if (newMargin < maxMargin) {
        newMargin = maxMargin; // Constrain to the minimum margin
    }
    slider.style.marginLeft = newMargin + 'px'; // Apply new margin
}