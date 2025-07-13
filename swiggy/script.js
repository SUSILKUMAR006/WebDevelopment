let currentSlideID = 1; // Start from the first slide
const sliderElement = document.getElementById('slider');
const totalSlides = sliderElement.childElementCount;
console.log(totalSlides); // Debug: Check total slides

// Function to show the next slide
function next() {
    if (currentSlideID < totalSlides) {
        currentSlideID++;
        showSlide();
    }
}

// Function to show the previous slide
function prev() {
    if (currentSlideID > 1) {
        currentSlideID--;
        showSlide();
    }
}

// Function to display the current slide and hide others
function showSlide() {
    const slides = document.getElementById('slider').getElementsByTagName('li');
    for (let i = 0; i < totalSlides; i++) {
        const element = slides[i];
        if (currentSlideID === i + 1) {
            element.classList.remove('hidden');
             // Show the current slide
        } else {
            element.classList.add('hidden'); // Hide other slides
        }
    }
}


// Initialize the slider by showing the first slide
showSlide();