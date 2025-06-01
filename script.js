// script.js

// Hero Button Interaction
/*
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    alert('Get your free quote now!');
});

// Service Card Hover Effect
const serviceCards = document.querySelectorAll('.card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#FF6A00';
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#FFB800';
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset();
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateSavings);
    }

    function calculateSavings() {
        const currentBillInput = document.getElementById('currentBill');
        const annualSavingsElement = document.getElementById('annualSavings');
        const tenYearSavingsElement = document.getElementById('tenYearSavings');

        if (!currentBillInput) return;

        const currentBill = parseFloat(currentBillInput.value);

        if (isNaN(currentBill) || currentBill <= 0) {
            alert('Please enter a valid monthly bill amount.');
            return;
        }

        const annualSavings = currentBill * 12 * 0.10; // Assuming 10% savings
        const tenYearSavings = annualSavings * 10;

        annualSavingsElement.textContent = `$${annualSavings.toFixed(2)}`;
        tenYearSavingsElement.textContent = `$${tenYearSavings.toFixed(2)}`;
    }
});
