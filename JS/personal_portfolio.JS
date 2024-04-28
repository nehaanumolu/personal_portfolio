document.addEventListener("DOMContentLoaded", function() {
    const technicalSkills = document.getElementById('technical-skill');
    const softSkills = document.getElementById('soft-skill');

    let scrollAmount = 10;
    let scrollInterval = setInterval(function() {
        technicalSkills.scrollTop += scrollAmount;
        softSkills.scrollTop += scrollAmount;
    }, 50);

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    technicalSkills.addEventListener('mouseover', stopScrolling);
    technicalSkills.addEventListener('touchstart', stopScrolling);
    softSkills.addEventListener('mouseover', stopScrolling);
    softSkills.addEventListener('touchstart', stopScrolling);
});
