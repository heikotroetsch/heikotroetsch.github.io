// Check if logo exists and show/hide accordingly
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const logoPlaceholder = document.getElementById('logo-placeholder');
    
    // Try to load the logo
    if (logo) {
        logo.onload = function() {
            logo.style.display = 'block';
            if (logoPlaceholder) logoPlaceholder.style.display = 'none';
        };
        
        logo.onerror = function() {
            logo.style.display = 'none';
            if (logoPlaceholder) logoPlaceholder.style.display = 'flex';
        };
        
        // Trigger the load check
        logo.src = logo.src;
    }
});

// Variable to track form submission
var submitted = false;

// Handle form submission with consent validation
function handleFormSubmit() {
    const emailInput = document.getElementById('email-input');
    const consentCheckbox = document.getElementById('privacy-consent');
    const submitBtn = document.getElementById('submit-btn');
    
    const email = emailInput.value.trim();
    
    // Validate email
    if (!email || !isValidEmail(email)) {
        showError(emailInput, 'Please enter a valid email address');
        return false;
    }
    
    // Validate consent
    if (!consentCheckbox.checked) {
        showError(consentCheckbox.parentElement, 'Please agree to receive updates');
        return false;
    }
    
    // Set submission state
    submitted = true;
    
    // Update button state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    return true;
}

// Function to show success message after Google Form submission
function showSuccess() {
    if (submitted) {
        const successMessage = document.getElementById('success-message');
        const emailInput = document.getElementById('email-input');
        const consentCheckbox = document.getElementById('privacy-consent');
        const submitBtn = document.getElementById('submit-btn');
        
        // Clear the form and show success
        emailInput.value = '';
        consentCheckbox.checked = false;
        successMessage.classList.add('show');
        
        // Reset button
        submitBtn.textContent = 'Notify Me';
        submitBtn.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // Reset submitted flag
        submitted = false;
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error function
function showError(element, message) {
    // For email input
    if (element.type === 'email') {
        const originalPlaceholder = element.placeholder;
        element.style.borderColor = '#ff6b6b';
        element.placeholder = message;
        element.style.color = '#ff6b6b';
        element.focus();
        
        setTimeout(() => {
            element.style.borderColor = '';
            element.placeholder = originalPlaceholder;
            element.style.color = '#333';
        }, 3000);
    }
    // For consent checkbox container
    else {
        const originalColor = element.style.color;
        element.style.color = '#ff6b6b';
        element.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            element.style.color = originalColor;
            element.style.animation = '';
        }, 3000);
    }
}

// Add shake animation for errors
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Allow Enter key to trigger form submission
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email-input');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const form = e.target.closest('form');
                if (form) {
                    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
                    form.dispatchEvent(submitEvent);
                }
            }
        });
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
console.log('📧 GDPR-compliant email collection enabled'); 