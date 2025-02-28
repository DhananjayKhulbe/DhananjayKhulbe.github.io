// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('data-section');
        showSection(sectionId);
        // Update URL fragment
        window.location.hash = sectionId;
        window.scrollTo({ top: 0, behavior: 'instant' });
    });
});

// Handle URL hash on page load
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if(hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection('home');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
});

// Resume modal functionality
const modal = document.getElementById('resumeModal');
const btn = document.getElementById('resumeBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
}