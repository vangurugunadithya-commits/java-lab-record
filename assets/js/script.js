const mainHeader = document.getElementById('main-header');
const mainGrid = document.getElementById('main-grid');
const fullPageView = document.getElementById('full-page-view');
const fullPageContent = document.getElementById('full-page-content');

function openWeek(element) {
    const title = element.querySelector('h2').innerText;
    const detailsHtml = element.querySelector('.week-details').innerHTML;
    
    fullPageContent.innerHTML = `<h2>${title}</h2>${detailsHtml}`;
    
    mainHeader.style.display = 'none';
    mainGrid.style.display = 'none';
    fullPageView.style.display = 'block';
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function closeWeek() {
    fullPageView.style.display = 'none';
    mainGrid.style.display = 'grid';
    mainHeader.style.display = 'block';
    
    fullPageContent.innerHTML = '';
}

const cursorGlow = document.querySelector('.cursor-glow');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let glowX = mouseX;
let glowY = mouseY;

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;
    cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
    requestAnimationFrame(animateGlow);
}

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (!isTouchDevice) {
    animateGlow();
} else {
    cursorGlow.style.display = 'none';
}
