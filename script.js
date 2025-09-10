// qado landing page interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    // Prevent any automatic scrolling
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    
    // Additional safety check
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });
    
    // Sticky header: add class on scroll
    const header = document.querySelector('.site-header');
    const onScroll = () => {
        if (!header) return;
        if (window.scrollY > 4) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile nav toggle
    const hamburger = document.getElementById('hamburger');
    if (hamburger && header) {
        hamburger.addEventListener('click', () => {
            const open = header.classList.toggle('nav-open');
            hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                header.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const langText = langToggle.querySelector('.lang-text');
        const langOptions = langToggle.querySelectorAll('.lang-option');
        let currentLang = 'DE';
        
        // Toggle dropdown
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langToggle.classList.toggle('active');
        });
        
        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                currentLang = selectedLang;
                langText.textContent = selectedLang;
                
                // Update active state
                langOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Close dropdown
                langToggle.classList.remove('active');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target)) {
                langToggle.classList.remove('active');
            }
        });
    }

    // Smooth anchor scroll enhancement (focus target for a11y)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
                if (header) header.classList.remove('nav-open');
            }
        });
    });

    // Handle anchor links from other pages (e.g., FAQ dropdown from landing page)
    function handleAnchorNavigation() {
        const hash = window.location.hash;
        if (hash) {
            // Wait for page to be fully loaded and components to be rendered
            setTimeout(() => {
                const target = document.querySelector(hash);
                if (target) {
                    // Scroll to target with offset for header
                    const headerHeight = header ? header.offsetHeight : 80;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    
                    // Add visual highlight using CSS class
                    target.classList.add('anchor-highlight');
                    
                    // Remove highlight after 3 seconds
                    setTimeout(() => {
                        target.classList.remove('anchor-highlight');
                    }, 3000);
                }
            }, 800); // Increased delay to ensure page is fully loaded
        }
    }

    // Run on page load
    handleAnchorNavigation();
    
    // Also run when hash changes (for SPA-like behavior)
    window.addEventListener('hashchange', handleAnchorNavigation);

    // Tabs behavior
    const tabButtons = Array.from(document.querySelectorAll('.tab'));
    const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
    
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found tab panels:', tabPanels.length);
    
    function activateTab(index) {
        console.log('Activating tab:', index);
        tabButtons.forEach((btn, i) => {
            const selected = i === index;
            btn.classList.toggle('active', selected);
            btn.setAttribute('aria-selected', selected ? 'true' : 'false');
            console.log(`Button ${i}: active=${selected}`);
        });
        tabPanels.forEach((panel, i) => {
            const show = i === index;
            panel.classList.toggle('show', show);
            if (show) {
                panel.removeAttribute('hidden');
                console.log(`Panel ${i}: showing`);
            } else {
                panel.setAttribute('hidden', '');
                console.log(`Panel ${i}: hiding`);
            }
        });
    }
    
    tabButtons.forEach((btn, i) => {
        console.log(`Adding click listener to button ${i}:`, btn.textContent);
        btn.addEventListener('click', (e) => {
            console.log('Tab clicked:', i, btn.textContent);
            e.preventDefault();
            activateTab(i);
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') activateTab((i + 1) % tabButtons.length);
            if (e.key === 'ArrowLeft') activateTab((i - 1 + tabButtons.length) % tabButtons.length);
        });
    });


    // Marquee pause on hover for accessibility
    const marquee = document.querySelector('.marquee-track');
    if (marquee) {
        marquee.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
        marquee.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
    }

    // Scroll-triggered reveal animation for sections
    const sections = document.querySelectorAll('.section:not(.hero)');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Notification cycling animation
    const notifications = document.querySelectorAll('.notification-item');
    let currentNotification = 0;
    let animationInterval;
    let isAnimating = false; // Prevent overlapping animations
    
    console.log('Found notifications:', notifications.length);
    console.log('Notifications:', notifications);
    
    if (notifications.length > 0) {
        // Initialize all notifications to be hidden
        notifications.forEach(notification => {
            notification.classList.remove('active', 'fade-out');
        });
        
        function showNotification(index) {
            console.log('Showing notification:', index);
            const notification = notifications[index];
            if (notification) {
                // Remove all classes first
                notification.classList.remove('fade-out', 'active');
                // Reset any inline styles
                notification.style.transform = '';
                notification.style.opacity = '';
                
                // Force reflow
                notification.offsetHeight;
                
                // Add active class after a small delay
                setTimeout(() => {
                    notification.classList.add('active');
                    console.log('Added active class to notification:', index);
                    
                    // Show popup after 0.5s delay after notification is fully visible
                    setTimeout(() => {
                        // Create popup dynamically
                        const popup = document.createElement('div');
                        popup.className = 'savings-popup';
                        
                        // Set different amounts based on notification type
                        if (notification.classList.contains('email-notification')) {
                            popup.textContent = '+ 2.340€';
                        } else if (notification.classList.contains('slack-notification')) {
                            popup.textContent = '+ 15.000€';
                        } else if (notification.classList.contains('system-notification')) {
                            popup.textContent = '+ 8.750€';
                        }
                        
                        // Set initial opacity to 0 and add to DOM
                        popup.style.opacity = '0';
                        notification.appendChild(popup);
                        
                        // Force reflow to ensure the element is rendered
                        popup.offsetHeight;
                        
                        // Use requestAnimationFrame to ensure smooth transition
                        requestAnimationFrame(() => {
                            popup.style.opacity = '1';
                        });
                    }, 450);
                }, 50);
            }
        }
        
        function hideNotification(index) {
            console.log('Hiding notification:', index);
            const notification = notifications[index];
            if (notification) {
                // Hide popup 0.7s before notification fades out
                const popup = notification.querySelector('.savings-popup');
                if (popup) {
                    popup.style.opacity = '0';
                    // Remove popup after fade (wait for 0.8s transition)
                    setTimeout(() => {
                        if (popup.parentNode) {
                            popup.remove();
                        }
                    }, 800);
                }
                
                // Wait 0.5s then hide notification
                setTimeout(() => {
                    // Add fade-out class immediately, then remove active
                    notification.classList.add('fade-out');
                    // Small delay before removing active class
                    setTimeout(() => {
                        notification.classList.remove('active');
                        console.log('Removed active class from notification:', index);
                    }, 10);
                }, 500);
            }
        }
        
        function cycleNotifications() {
            if (isAnimating) {
                console.log('Animation in progress, skipping cycle');
                return;
            }
            
            isAnimating = true;
            console.log('Cycling notifications, current:', currentNotification);
            
            // Hide current notification
            hideNotification(currentNotification);
            
            // Move to next notification
            currentNotification = (currentNotification + 1) % notifications.length;
            console.log('Next notification:', currentNotification);
            
            // Wait for fade-out to complete, then clean up and show new notification
            setTimeout(() => {
                // Clean up all notifications first
                notifications.forEach((notif, i) => {
                    notif.classList.remove('active', 'fade-out');
                    // Reset transform to ensure proper positioning
                    notif.style.transform = '';
                    // Remove any existing popups
                    const popup = notif.querySelector('.savings-popup');
                    if (popup) {
                        popup.remove();
                    }
                });
                
                // Small delay to ensure cleanup is complete
                setTimeout(() => {
                    showNotification(currentNotification);
                    
                    // Reset animation flag after new notification is shown
                    setTimeout(() => {
                        isAnimating = false;
                    }, 200);
                }, 100);
            }, 800); // Wait for fade-out animation to complete (500ms + 50ms + 250ms buffer)
        }
        
        // Show first notification after 1 second delay
        setTimeout(() => {
            showNotification(0);
        }, 1000);
        
        // Start cycling after 6 seconds to allow first popup to complete (1s delay + 0.5s popup delay + 3s visible + 0.5s popup hide + 1s fade = 6s total)
        setTimeout(() => {
            cycleNotifications(); // Start immediately
            animationInterval = setInterval(cycleNotifications, 5000);
        }, 6000);
    }

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log('Found FAQ questions:', faqQuestions.length);
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('data-target');
            const targetAnswer = document.getElementById(targetId);
            const faqItem = this.closest('.faq-item');
            const icon = this.querySelector('.faq-icon');
            
            console.log('FAQ clicked:', targetId, 'Target found:', !!targetAnswer);
            
            if (!targetAnswer) {
                console.error('Target answer not found:', targetId);
                return;
            }
            
            if (!faqItem) {
                console.error('FAQ item not found');
                return;
            }
            
            // Check if this FAQ is currently open
            const isOpen = faqItem.classList.contains('active');
            
            // Toggle current FAQ first
            if (isOpen) {
                // Close current FAQ
                console.log('Closing FAQ:', targetId);
                faqItem.classList.remove('active');
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
                console.log('FAQ closed successfully:', targetId);
            } else {
                // Close all other FAQs first
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                        const otherIcon = item.querySelector('.faq-icon');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Open current FAQ
                faqItem.classList.add('active');
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
                console.log('Opened FAQ:', targetId);
            }
        });
        
        // Add keyboard support
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});