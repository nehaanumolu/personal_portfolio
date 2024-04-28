document.addEventListener("DOMContentLoaded", function() {
    const technicalSkills = document.getElementById('technical-skill');
    const softSkills = document.getElementById('soft-skill');

    let scrollInterval = setInterval(function() {
        technicalSkills.scrollBy(0, 1);
        softSkills.scrollBy(0, 1);
    }, 50);

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    technicalSkills.addEventListener('mouseover', stopScrolling);
    softSkills.addEventListener('mouseover', stopScrolling);
});
