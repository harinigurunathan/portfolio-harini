var typed = new Typed(".text", {
    strings: ["Frontend Developer" , "Ui/Ux Developer" , "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function () {
    const progressCircles = document.querySelectorAll('.progress');

    progressCircles.forEach(circle => {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const percent = circle.getAttribute('data-percent');
        const offset = circumference - (percent / 100) * circumference;

        // Set initial stroke-dasharray and stroke-dashoffset
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;

        // Trigger animation by changing stroke-dashoffset after a short delay
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100); // Short delay to ensure CSS transition applies
    });
    function toggleMenu() {
        var navbar = document.querySelector(".navbar");
        navbar.classList.toggle("active");
    }
    
    
});

