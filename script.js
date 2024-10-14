// header

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });




window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function () {
        // Remove the active class from all items
        document.querySelectorAll('.service-item').forEach(i => i.classList.remove('active'));

        // Add the active class to the clicked item
        this.classList.add('active');

        // Hide all service sections
        document.querySelectorAll('.service-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected service section
        const service = this.getAttribute('data-service');
        document.getElementById(service).style.display = 'block';
    });
});


// contact page
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
});

// recruitment

document.getElementById("recruitmentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Recruitment form submitted!");
});
