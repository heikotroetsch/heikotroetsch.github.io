// Check if logo exists and show/hide accordingly
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const logoPlaceholder = document.getElementById('logo-placeholder');
    
    // Try to load the logo
    logo.onload = function() {
        logo.style.display = 'block';
        logoPlaceholder.style.display = 'none';
    };
    
    logo.onerror = function() {
        logo.style.display = 'none';
        logoPlaceholder.style.display = 'flex';
    };
    
    // Trigger the load check
    logo.src = logo.src;
});

// Variable to track form submission
var submitted = false;

// Function to show success message after Google Form submission
function showSuccess() {
    if (submitted) {
        const successMessage = document.getElementById('success-message');
        const emailInput = document.getElementById('email-input');
        
        // Clear the input and show success
        emailInput.value = '';
        successMessage.classList.add('show');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // Reset submitted flag
        submitted = false;
    }
}

// Email validation function (still useful for client-side validation)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add form validation before submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.email-form');
    const emailInput = document.getElementById('email-input');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const email = emailInput.value.trim();
            
            if (!email || !isValidEmail(email)) {
                e.preventDefault();
                showError('Please enter a valid email address');
                return false;
            }
        });
    }
});

// Show error function
function showError(message) {
    const emailInput = document.getElementById('email-input');
    const originalPlaceholder = emailInput.placeholder;
    
    emailInput.style.borderColor = '#ff6b6b';
    emailInput.placeholder = message;
    emailInput.style.color = '#ff6b6b';
    
    setTimeout(() => {
        emailInput.style.borderColor = '';
        emailInput.placeholder = originalPlaceholder;
        emailInput.style.color = '#333';
    }, 3000);
}

// Allow Enter key to trigger form submission
document.getElementById('email-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.target.closest('form').dispatchEvent(new Event('submit'));
    }
});

// Add some subtle scroll effects if needed
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body::before');
    
    // You can add scroll effects here if the page becomes longer
});

// Optional: Add some interactive elements
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Console message for developers
console.log('🚀 Qado - AI Procurement Revolution Coming Soon!');
console.log('Built with ❤️ for the future of procurement'); 