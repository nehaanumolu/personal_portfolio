document.addEventListener("DOMContentLoaded", function() {
    const technicalSkills = document.getElementById('technical-skill');
    const softSkills = document.getElementById('soft-skill');

    let scrollAmount = 10; // rate of scrolling

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
