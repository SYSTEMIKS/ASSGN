// Automatically update the copyright year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Initialize an empty array to hold testimonials
const testimonials = [];

// Function to display testimonials
function displayTestimonials() {
    const testimonialList = document.getElementById('testimonial-list');
    testimonialList.innerHTML = ''; // Clear previous testimonials

    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        testimonialDiv.innerHTML = `<strong>${testimonial.name}</strong><p>${testimonial.message}</p>`;
        testimonialList.appendChild(testimonialDiv);
    });
}

// Handle form submission
document.getElementById('testimonialForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Add the new testimonial to the array
    testimonials.push({ name, message });

    // Clear the form
    this.reset();

    // Display updated testimonials
    displayTestimonials();
});

// Initial call to display testimonials (if any)
displayTestimonials();
