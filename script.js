//Welcome screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("welcome-screen").classList.add("fade-out");
    }, 3000); // fade out after 2 seconds
});

// ----- Fade-in on scroll for hero, about, why sections -----
const faders = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// ----- Services Section: Sticky image updates on scroll -----
const serviceSections = document.querySelectorAll('.service-section');
const serviceImage = document.querySelector('.service-image');

const serviceObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // 50% of section visible
};

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const newImage = entry.target.dataset.image;
            if(serviceImage.src !== newImage) {
                serviceImage.src = newImage;
            }
        }
    });
}, serviceObserverOptions);

serviceSections.forEach(section => serviceObserver.observe(section));


