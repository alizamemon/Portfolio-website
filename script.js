document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
        skill.querySelector('.skill-list').classList.toggle('active');
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const formControls = this.querySelectorAll('.form-control');

    formControls.forEach(input => {
        if (!input.value) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            isValid = false;
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
        formControls.forEach(input => input.classList.remove('valid'));
    } else {
        alert('Please fill out all fields correctly.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const offset = 80; // Adjust this value based on the header height
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    });
});



  