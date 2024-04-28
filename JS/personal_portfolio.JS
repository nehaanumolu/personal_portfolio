document.addEventListener("DOMContentLoaded", function() {
    const technicalSkills = document.getElementById('technical-skill');
    const softSkills = document.getElementById('soft-skill');

    let scrollAmount = 8; // rate of scrolling

    // technical skills scroll interval
    let techScrollInterval = setInterval(function() {
        technicalSkills.scrollTop += scrollAmount;
    }, 50);

    // soft skills scroll interval
    let softScrollInterval = setInterval(function() {
        softSkills.scrollTop += scrollAmount;
    }, 50);

    // stop technical skills scrolling
    function stopTechScrolling() {
        clearInterval(techScrollInterval);
    }

    // stop soft skills scrolling
    function stopSoftScrolling() {
        clearInterval(softScrollInterval);
    }

    // event listeners for technical skills
    technicalSkills.addEventListener('mouseover', stopTechScrolling);
    technicalSkills.addEventListener('touchstart', stopTechScrolling);

    // event listeners for soft skills
    softSkills.addEventListener('mouseover', stopSoftScrolling);
    softSkills.addEventListener('touchstart', stopSoftScrolling);
});

window.addEventListener('resize', adjustHeight);

function adjustHeight() {
    const scaleContainer = document.querySelector('.scale-container');
    if (scaleContainer) {
        const scaledHeight = window.innerHeight / 0.5; // Assuming the scale is 0.5
        scaleContainer.style.height = scaledHeight + 'px';
    }
}