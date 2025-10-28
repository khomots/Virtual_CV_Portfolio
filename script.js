

// Function to handle smooth scrolling
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.header').offsetHeight, // Adjust for fixed header height
            behavior: 'smooth'
        });
    }
}

// 1. Navigation Links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior
        const targetSection = this.innerText.toLowerCase(); // Get text from link (e.g., "Portfolio" -> "portfolio")
        // Map common text to actual section IDs
        let targetId;
        switch(targetSection) {
            case 'portfolio':
                targetId = 'home'; // Assuming 'Portfolio' links to the home section
                break;
            case 'about':
                targetId = 'about';
                break;
            case 'services':
                targetId = 'services';
                break;
            case 'experience':
                targetId = 'experience';
                break;
            case 'projects':
                targetId = 'projects';
                break;
            case 'education':
                // Assuming you'll add an 'education' section later
                targetId = 'education';
                break;
            default:
                targetId = 'home'; // Fallback
        }
        smoothScroll(targetId);

        // Optional: Remove 'active' class from all and add to the clicked one
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});


// 2. "contact me" button in header
const contactHeaderBtn = document.querySelector('.header .contact');
if (contactHeaderBtn) {
    contactHeaderBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        smoothScroll('contact');
    });
}

// 3. "Hire me" button in Home section
const hireMeBtn = document.querySelector('.home-content .btn-1');
if (hireMeBtn) {
    hireMeBtn.addEventListener('click', function() {
        // Option 1: Scroll to contact form
        smoothScroll('contact');

        // Option 2: Open mail client (if you prefer this over scrolling)
        // window.location.href = 'mailto:your.email@example.com?subject=Inquiry%20from%20Portfolio';
    });
}

// 4. "Experience" buttons
const experienceBtns = document.querySelectorAll('.btn-2'); // Select all elements with class btn-2

experienceBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent default behavior if it's an <a> tag
        if (this.tagName === 'A') {
            event.preventDefault();
        }
        smoothScroll('experience');
    });
});

// 5. "Send Message" button in Contact Form (input type="submit")
const sendMessageBtn = document.querySelector('.contact-form .btn-1[type="submit"]');
const contactForm = document.querySelector('.contact-form form');

if (sendMessageBtn && contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission (page reload)

        // Here's where you'd typically handle sending the form data.
        // For a client-side only portfolio, you might just show a confirmation.
        alert('Message sent successfully! (This is a dummy message. Form data is not actually sent yet.)');

        

        // Then you'd use fetch() or XMLHttpRequest to send it to a backend server.
        // For now, we'll just log it to the console.
        console.log('Form Submitted!');
        // console.log('Full Name:', fullName);
        // console.log('Email:', email);
        // console.log('Phone:', phoneNumber);
        // console.log('Subject:', subject);
        // console.log('Message:', message);

        // Optional: Clear the form fields after submission
        contactForm.reset();
    });
}

const footerNavLinks = document.querySelectorAll('.footer .list a'); // Selects <a> tags inside .footer .list
footerNavLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior

        // Get the target ID from the href attribute (e.g., "#services" -> "services")
        const targetId = this.getAttribute('href').substring(1);

        // Call the smoothScroll function
        smoothScroll(targetId);

        // Optional: Update 'active' class on the header navigation if desired
        // (This will highlight the corresponding section in the main nav when clicked from the footer)
        navLinks.forEach(nav => nav.classList.remove('active')); // Remove from all
        const correspondingHeaderLink = document.querySelector(`.navbar a[href*="${targetId}"]`);
        if (correspondingHeaderLink) {
            correspondingHeaderLink.classList.add('active');
        }
    });
});