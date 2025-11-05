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
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = header.classList.contains('nav-open');
            
            if (isOpen) {
                // Closing: Add closing class for animation
                header.classList.add('closing');
                hamburger.setAttribute('aria-expanded', 'false');
                
                // Remove classes after animation completes
                setTimeout(() => {
                    header.classList.remove('nav-open', 'closing');
                }, 300);
                
                console.log('Hamburger menu closing with animation');
            } else {
                // Opening: Add nav-open class
                header.classList.add('nav-open');
                hamburger.setAttribute('aria-expanded', 'true');
                console.log('Hamburger menu opening');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && header.classList.contains('nav-open')) {
                header.classList.add('closing');
                hamburger.setAttribute('aria-expanded', 'false');
                
                setTimeout(() => {
                    header.classList.remove('nav-open', 'closing');
                }, 300);
                
                console.log('Hamburger menu closed by outside click');
            }
        });
        
        // Close menu when clicking on navigation links
        const navLinks = header.querySelectorAll('.nav-link, .dropdown-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (header.classList.contains('nav-open')) {
                    header.classList.add('closing');
                    hamburger.setAttribute('aria-expanded', 'false');
                    
                    setTimeout(() => {
                        header.classList.remove('nav-open', 'closing');
                    }, 300);
                    
                    console.log('Hamburger menu closed by nav link click');
                }
            });
        });
    }
    
    // Test function for hamburger menu
    window.testHamburgerMenu = function() {
        console.log('Testing hamburger menu...');
        const header = document.querySelector('.site-header');
        const hamburger = document.getElementById('hamburger');
        
        if (!header || !hamburger) {
            console.error('Header or hamburger not found');
            console.log('Available elements:');
            console.log('- .site-header:', document.querySelector('.site-header'));
            console.log('- #hamburger:', document.getElementById('hamburger'));
            console.log('- All buttons:', document.querySelectorAll('button'));
            return;
        }
        
        console.log('Header found:', header);
        console.log('Hamburger found:', hamburger);
        console.log('Current nav-open class:', header.classList.contains('nav-open'));
        console.log('Hamburger display style:', window.getComputedStyle(hamburger).display);
        console.log('Hamburger visibility:', window.getComputedStyle(hamburger).visibility);
        
        // Toggle the menu
        hamburger.click();
        
        setTimeout(() => {
            console.log('After toggle - nav-open class:', header.classList.contains('nav-open'));
            console.log('Aria-expanded:', hamburger.getAttribute('aria-expanded'));
        }, 100);
    };
    
    // Debug function to check mobile view
    window.debugMobileView = function() {
        console.log('=== Mobile View Debug ===');
        console.log('Window width:', window.innerWidth);
        console.log('Window height:', window.innerHeight);
        console.log('Screen width:', screen.width);
        console.log('Screen height:', screen.height);
        console.log('User agent:', navigator.userAgent);
        
        const header = document.querySelector('.site-header');
        const hamburger = document.getElementById('hamburger');
        const mainNav = document.querySelector('.main-nav');
        const headerCta = document.querySelector('.header-cta');
        
        console.log('Header element:', header);
        console.log('Hamburger element:', hamburger);
        console.log('Main nav element:', mainNav);
        console.log('Header CTA element:', headerCta);
        
        if (hamburger) {
            console.log('Hamburger styles:');
            const styles = window.getComputedStyle(hamburger);
            console.log('- display:', styles.display);
            console.log('- visibility:', styles.visibility);
            console.log('- opacity:', styles.opacity);
            console.log('- position:', styles.position);
            console.log('- z-index:', styles.zIndex);
        }
        
        if (header) {
            console.log('Header classes:', header.className);
            console.log('Header has nav-open:', header.classList.contains('nav-open'));
        }
    };
    
    // Initialize header functionality
    function initHeaderFunctionality() {
        console.log('Initializing header functionality...');
        
        // Re-run the header initialization
        const header = document.querySelector('.site-header');
        const hamburger = document.getElementById('hamburger');
        
        if (hamburger && header) {
            console.log('Setting up hamburger menu...');
            
            // Check if we're on mobile
            const isMobile = window.innerWidth <= 768;
            console.log('Is mobile view:', isMobile);
            
            if (!isMobile) {
                console.log('Desktop view detected - hamburger menu disabled');
                return;
            }
            
            // Ensure hamburger is visible on mobile
            hamburger.style.display = 'inline-block';
            hamburger.style.visibility = 'visible';
            hamburger.style.opacity = '1';
            
            // Remove existing listeners to avoid duplicates
            const newHamburger = hamburger.cloneNode(true);
            hamburger.parentNode.replaceChild(newHamburger, hamburger);
            
            // Add new event listener (only on mobile)
            newHamburger.addEventListener('click', (e) => {
                console.log('Hamburger clicked!');
                e.stopPropagation();
                e.preventDefault();
                
                // Double-check we're still on mobile
                if (window.innerWidth > 768) {
                    console.log('Desktop view detected during click - ignoring');
                    return;
                }
                
                const isOpen = header.classList.contains('nav-open');
                console.log('Menu is currently open:', isOpen);
                
                if (isOpen) {
                    header.classList.remove('nav-open');
                    newHamburger.setAttribute('aria-expanded', 'false');
                    console.log('Hamburger menu closed');
                } else {
                    header.classList.add('nav-open');
                    newHamburger.setAttribute('aria-expanded', 'true');
                    console.log('Hamburger menu opened');
                }
            });
            
            // Close menu when clicking outside (only on mobile)
            document.addEventListener('click', (e) => {
                if (window.innerWidth > 768) return;
                
                if (!header.contains(e.target)) {
                    header.classList.remove('nav-open');
                    newHamburger.setAttribute('aria-expanded', 'false');
                    console.log('Hamburger menu closed by outside click');
                }
            });
            
            // Close menu when clicking on navigation links (only on mobile)
            const navLinks = header.querySelectorAll('.nav-link, .dropdown-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth > 768) return;
                    
                    header.classList.remove('nav-open');
                    newHamburger.setAttribute('aria-expanded', 'false');
                    console.log('Hamburger menu closed by nav link click');
                });
            });
            
            // Mobile language toggle
            const mobileLangToggle = document.getElementById('mobile-lang-toggle');
            if (mobileLangToggle) {
                mobileLangToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Use the same language toggle logic as desktop
                    const desktopLangToggle = document.getElementById('lang-toggle');
                    if (desktopLangToggle) {
                        desktopLangToggle.click();
                    }
                });
            }
            
            console.log('Hamburger menu setup complete for mobile');
        } else {
            console.error('Header or hamburger not found during initialization');
        }
    }
    
    // Make initHeaderFunctionality available globally
    window.initHeaderFunctionality = initHeaderFunctionality;
    
    // Additional safety check - run after a delay to ensure DOM is ready
    setTimeout(() => {
        console.log('Running delayed header initialization...');
        initHeaderFunctionality();
    }, 500);
    
    // Also run when window loads
    window.addEventListener('load', () => {
        console.log('Running header initialization on window load...');
        initHeaderFunctionality();
        
        // Also re-initialize mobile tab selector on window load
        setTimeout(() => {
            const mobileTabSelector = document.getElementById('mobile-tab-selector');
            if (mobileTabSelector && !mobileTabSelector.hasAttribute('data-initialized')) {
                console.log('Re-initializing mobile tab selector on window load...');
                mobileTabSelector.setAttribute('data-initialized', 'true');
                mobileTabSelector.addEventListener('change', function() {
                    const selectedTabId = this.value;
                    console.log('Mobile tab selected (window load):', selectedTabId);
                    
                    // Update desktop tabs
                    const tabButtons = Array.from(document.querySelectorAll('.tab'));
                    tabButtons.forEach(btn => {
                        const isActive = btn.getAttribute('aria-controls') === selectedTabId;
                        btn.classList.toggle('active', isActive);
                        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
                    });
                    
                    // Update tab panels
                    const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
                    tabPanels.forEach(panel => {
                        const isActive = panel.id === selectedTabId;
                        panel.classList.toggle('show', isActive);
                        panel.hidden = !isActive;
                    });
                });
            }
        }, 500);
    });
    
    // Re-run when window is resized
    window.addEventListener('resize', () => {
        console.log('Window resized, re-initializing header...');
        initHeaderFunctionality();
    });
    
    // Force hamburger menu to be visible on mobile
    function forceHamburgerVisible() {
        const hamburger = document.getElementById('hamburger');
        if (hamburger && window.innerWidth <= 768) {
            hamburger.style.display = 'inline-block';
            hamburger.style.visibility = 'visible';
            hamburger.style.opacity = '1';
            console.log('Forced hamburger menu to be visible');
        }
    }
    
    // Run force visibility function
    forceHamburgerVisible();
    
    // Also run on resize
    window.addEventListener('resize', forceHamburgerVisible);
    
    // Make functions available globally
    window.forceHamburgerVisible = forceHamburgerVisible;
    
           // Comprehensive test function
           window.testMobileHamburger = function() {
               console.log('=== COMPREHENSIVE HAMBURGER MENU TEST ===');
               
               // Check window size
               console.log('Window size:', window.innerWidth, 'x', window.innerHeight);
               console.log('Is mobile view:', window.innerWidth <= 768);
               
               // Check elements
               const header = document.querySelector('.site-header');
               const hamburger = document.getElementById('hamburger');
               const mainNav = document.querySelector('.main-nav');
               const headerCta = document.querySelector('.header-cta');
               
               console.log('Header found:', !!header);
               console.log('Hamburger found:', !!hamburger);
               console.log('Main nav found:', !!mainNav);
               console.log('Header CTA found:', !!headerCta);
               
               if (hamburger) {
                   const styles = window.getComputedStyle(hamburger);
                   console.log('Hamburger styles:');
                   console.log('- display:', styles.display);
                   console.log('- visibility:', styles.visibility);
                   console.log('- opacity:', styles.opacity);
                   console.log('- position:', styles.position);
                   console.log('- z-index:', styles.zIndex);
                   console.log('- width:', styles.width);
                   console.log('- height:', styles.height);
                   console.log('- top:', styles.top);
                   console.log('- right:', styles.right);
                   console.log('- transform:', styles.transform);
                   
                   // Force visibility and positioning
                   hamburger.style.display = 'inline-block';
                   hamburger.style.visibility = 'visible';
                   hamburger.style.opacity = '1';
                   hamburger.style.position = 'absolute';
                   hamburger.style.top = '50%';
                   hamburger.style.right = '16px';
                   hamburger.style.transform = 'translateY(-50%)';
                   console.log('Forced hamburger visibility and positioning');
                   
                   // Test click
                   console.log('Testing hamburger click...');
                   hamburger.click();
                   
                   setTimeout(() => {
                       console.log('After click:');
                       console.log('- Header has nav-open:', header?.classList.contains('nav-open'));
                       console.log('- Aria-expanded:', hamburger.getAttribute('aria-expanded'));
                       
                       // Test second click
                       console.log('Testing second click...');
                       hamburger.click();
                       
                       setTimeout(() => {
                           console.log('After second click:');
                           console.log('- Header has nav-open:', header?.classList.contains('nav-open'));
                           console.log('- Aria-expanded:', hamburger.getAttribute('aria-expanded'));
                       }, 100);
                   }, 100);
               }
               
               // Check CSS media queries
               const mediaQuery = window.matchMedia('(max-width: 768px)');
               console.log('Media query matches:', mediaQuery.matches);
               
               return {
                   windowWidth: window.innerWidth,
                   isMobile: window.innerWidth <= 768,
                   elementsFound: {
                       header: !!header,
                       hamburger: !!hamburger,
                       mainNav: !!mainNav,
                       headerCta: !!headerCta
                   },
                   hamburgerStyles: hamburger ? {
                       display: window.getComputedStyle(hamburger).display,
                       visibility: window.getComputedStyle(hamburger).visibility,
                       opacity: window.getComputedStyle(hamburger).opacity,
                       position: window.getComputedStyle(hamburger).position,
                       top: window.getComputedStyle(hamburger).top,
                       right: window.getComputedStyle(hamburger).right,
                       transform: window.getComputedStyle(hamburger).transform
                   } : null
               };
           };
           
           // Quick test function
           window.quickHamburgerTest = function() {
               const hamburger = document.getElementById('hamburger');
               const header = document.querySelector('.site-header');
               
               if (!hamburger || !header) {
                   console.error('Hamburger or header not found');
                   return false;
               }
               
               console.log('Quick test - clicking hamburger...');
               hamburger.click();
               
               setTimeout(() => {
                   const isOpen = header.classList.contains('nav-open');
                   console.log('Menu is open:', isOpen);
                   return isOpen;
               }, 100);
           };
           
           // Test mobile tab selector functionality
           window.testMobileTabSelector = function() {
               console.log('=== Testing Mobile Tab Selector (script.js) ===');
               const mobileTabSelector = document.getElementById('mobile-tab-selector');
               console.log('Mobile tab selector found:', !!mobileTabSelector);
               
               if (mobileTabSelector) {
                   console.log('Current value:', mobileTabSelector.value);
                   console.log('Available options:', Array.from(mobileTabSelector.options).map(opt => opt.value));
                   console.log('Is initialized:', mobileTabSelector.hasAttribute('data-initialized'));
                   console.log('Display style:', window.getComputedStyle(mobileTabSelector).display);
                   console.log('Visibility:', window.getComputedStyle(mobileTabSelector).visibility);
                   console.log('Opacity:', window.getComputedStyle(mobileTabSelector).opacity);
                   console.log('Position:', window.getComputedStyle(mobileTabSelector).position);
                   console.log('Z-index:', window.getComputedStyle(mobileTabSelector).zIndex);
                   
                   // Test if dropdown is clickable
                   console.log('Testing click event...');
                   mobileTabSelector.click();
                   
                   // Test switching to different tabs
                   const options = Array.from(mobileTabSelector.options);
                   options.forEach((option, index) => {
                       setTimeout(() => {
                           console.log(`Testing option ${index + 1}: ${option.value}`);
                           mobileTabSelector.value = option.value;
                           mobileTabSelector.dispatchEvent(new Event('change'));
                       }, index * 1000);
                   });
               } else {
                   console.error('Mobile tab selector not found!');
               }
           };
           
           // Test dropdown options visibility
           window.testDropdownOptions = function() {
               console.log('=== Testing Dropdown Options Visibility ===');
               const mobileTabSelector = document.getElementById('mobile-tab-selector');
               
               if (mobileTabSelector) {
                   const options = Array.from(mobileTabSelector.options);
                   console.log('Number of options:', options.length);
                   
                   options.forEach((option, index) => {
                       console.log(`Option ${index + 1}:`, {
                           value: option.value,
                           text: option.text,
                           selected: option.selected,
                           disabled: option.disabled,
                           style: window.getComputedStyle(option)
                       });
                   });
                   
                   // Test programmatic selection
                   console.log('Testing programmatic selection...');
                   mobileTabSelector.selectedIndex = 1;
                   mobileTabSelector.dispatchEvent(new Event('change'));
                   
                   setTimeout(() => {
                       console.log('After selection - value:', mobileTabSelector.value);
                       console.log('After selection - selectedIndex:', mobileTabSelector.selectedIndex);
                   }, 100);
               }
           };
           
           // Comprehensive dropdown test
           window.testDropdownComprehensive = function() {
               console.log('=== Comprehensive Dropdown Test ===');
               const mobileTabSelector = document.getElementById('mobile-tab-selector');
               
               if (!mobileTabSelector) {
                   console.error('Mobile tab selector not found!');
                   return;
               }
               
               // Check if element is visible and clickable
               const rect = mobileTabSelector.getBoundingClientRect();
               console.log('Dropdown position and size:', {
                   top: rect.top,
                   left: rect.left,
                   width: rect.width,
                   height: rect.height,
                   visible: rect.width > 0 && rect.height > 0
               });
               
               // Check computed styles
               const styles = window.getComputedStyle(mobileTabSelector);
               console.log('Computed styles:', {
                   display: styles.display,
                   visibility: styles.visibility,
                   opacity: styles.opacity,
                   position: styles.position,
                   zIndex: styles.zIndex,
                   overflow: styles.overflow,
                   pointerEvents: styles.pointerEvents
               });
               
               // Check parent containers
               let parent = mobileTabSelector.parentElement;
               let level = 0;
               while (parent && level < 5) {
                   const parentStyles = window.getComputedStyle(parent);
                   console.log(`Parent level ${level}:`, {
                       tagName: parent.tagName,
                       className: parent.className,
                       overflow: parentStyles.overflow,
                       position: parentStyles.position,
                       zIndex: parentStyles.zIndex
                   });
                   parent = parent.parentElement;
                   level++;
               }
               
               // Test click events
               console.log('Testing click events...');
               mobileTabSelector.addEventListener('click', () => {
                   console.log('Click event fired!');
               });
               
               mobileTabSelector.addEventListener('focus', () => {
                   console.log('Focus event fired!');
               });
               
               mobileTabSelector.addEventListener('mousedown', () => {
                   console.log('Mousedown event fired!');
               });
               
               // Try to trigger dropdown
               console.log('Attempting to trigger dropdown...');
               mobileTabSelector.focus();
               mobileTabSelector.click();
               
               // Test all options
               const options = Array.from(mobileTabSelector.options);
               console.log('Testing all options...');
               options.forEach((option, index) => {
                   setTimeout(() => {
                       console.log(`Setting option ${index + 1}: ${option.text}`);
                       mobileTabSelector.selectedIndex = index;
                       mobileTabSelector.dispatchEvent(new Event('change'));
                   }, index * 500);
               });
           };
           
           // Test fallback dropdown
           window.testFallbackDropdown = function() {
               console.log('=== Testing Fallback Dropdown ===');
               showFallbackDropdown();
           };
           
           // Force show fallback dropdown
           window.forceFallbackDropdown = function() {
               console.log('=== Forcing Fallback Dropdown ===');
               if (window.innerWidth <= 768) {
                   const nativeSelect = document.getElementById('mobile-tab-selector');
                   const fallbackSelect = document.getElementById('mobile-tab-selector-fallback');
                   
                   if (nativeSelect && fallbackSelect) {
                       nativeSelect.style.display = 'none';
                       fallbackSelect.style.display = 'block';
                       initFallbackDropdown();
                       console.log('Fallback dropdown forced to show');
                   } else {
                       console.error('Native select or fallback select not found');
                   }
               } else {
                   console.log('Fallback dropdown only works on mobile devices');
               }
           };
           
           // Force dropdown to front
           window.forceDropdownToFront = function() {
               console.log('=== Forcing Dropdown to Front ===');
               const mobileTabSelector = document.getElementById('mobile-tab-selector');
               const fallbackSelect = document.getElementById('mobile-tab-selector-fallback');
               
               if (mobileTabSelector) {
                   mobileTabSelector.style.zIndex = '99999';
                   mobileTabSelector.style.position = 'relative';
                   console.log('Native dropdown z-index set to 99999');
               }
               
               if (fallbackSelect) {
                   fallbackSelect.style.zIndex = '99999';
                   fallbackSelect.style.position = 'relative';
                   const options = fallbackSelect.querySelector('.mobile-tab-selector-options');
                   if (options) {
                       options.style.zIndex = '99999';
                       options.style.position = 'absolute';
                   }
                   console.log('Fallback dropdown z-index set to 99999');
               }
               
               // Also ensure all parent containers don't clip the dropdown
               const featuresSection = document.querySelector('.features');
               if (featuresSection) {
                   featuresSection.style.overflow = 'visible';
                   featuresSection.style.zIndex = '1';
               }
               
               const containerXl = document.querySelector('.container-xl');
               if (containerXl) {
                   containerXl.style.overflow = 'visible';
               }
               
    console.log('Dropdown forced to front with maximum z-index');
};

// Update mobile dropdown text when language changes
function updateMobileDropdownText() {
    const fallbackText = document.getElementById('mobile-tab-selector-text');
    if (fallbackText) {
        // Get the current active option or default to first option
        const activeOption = document.querySelector('.mobile-tab-option.active');
        if (activeOption) {
            fallbackText.textContent = activeOption.textContent;
        } else {
            // Default to first option text
            const firstOption = document.querySelector('.mobile-tab-option');
            if (firstOption) {
                fallbackText.textContent = firstOption.textContent;
            }
        }
    }
}

// Listen for language changes
window.addEventListener('languageChanged', function(e) {
    console.log('Language changed to:', e.detail.language);
    // Update mobile dropdown text after language change
    setTimeout(updateMobileDropdownText, 100);
});

// Test function to check CTA visibility
window.testCTAVisibility = function() {
    console.log('=== Testing CTA Visibility ===');
    
    const mobileCTA = document.querySelector('.mobile-cta');
    const desktopCTA = document.querySelector('.header-cta');
    const windowWidth = window.innerWidth;
    
    console.log('Window width:', windowWidth);
    console.log('Is desktop (>=769px):', windowWidth >= 769);
    console.log('Mobile CTA found:', !!mobileCTA);
    console.log('Desktop CTA found:', !!desktopCTA);
    
    if (mobileCTA) {
        const mobileCTAStyles = window.getComputedStyle(mobileCTA);
        console.log('Mobile CTA styles:');
        console.log('- display:', mobileCTAStyles.display);
        console.log('- visibility:', mobileCTAStyles.visibility);
        console.log('- opacity:', mobileCTAStyles.opacity);
        console.log('- height:', mobileCTAStyles.height);
        console.log('- position:', mobileCTAStyles.position);
        console.log('- left:', mobileCTAStyles.left);
    }
    
    if (desktopCTA) {
        const desktopCTAStyles = window.getComputedStyle(desktopCTA);
        console.log('Desktop CTA styles:');
        console.log('- display:', desktopCTAStyles.display);
        console.log('- visibility:', desktopCTAStyles.visibility);
    }
    
    return {
        windowWidth,
        isDesktop: windowWidth >= 769,
        mobileCTA: {
            found: !!mobileCTA,
            display: mobileCTA ? window.getComputedStyle(mobileCTA).display : 'N/A',
            visibility: mobileCTA ? window.getComputedStyle(mobileCTA).visibility : 'N/A'
        },
        desktopCTA: {
            found: !!desktopCTA,
            display: desktopCTA ? window.getComputedStyle(desktopCTA).display : 'N/A',
            visibility: desktopCTA ? window.getComputedStyle(desktopCTA).visibility : 'N/A'
        }
    };
};

// Test function for language toggle
window.testLanguageToggle = function() {
    console.log('=== Testing Language Toggle ===');
    
    const desktopToggle = document.getElementById('lang-toggle');
    const mobileToggle = document.getElementById('mobile-lang-toggle');
    const currentLang = window.language ? window.language.currentLanguage : 'unknown';
    
    console.log('Current language:', currentLang);
    console.log('Desktop toggle found:', !!desktopToggle);
    console.log('Mobile toggle found:', !!mobileToggle);
    
    if (desktopToggle) {
        const desktopText = desktopToggle.querySelector('.lang-text');
        console.log('Desktop toggle text:', desktopText ? desktopText.textContent : 'N/A');
    }
    
    if (mobileToggle) {
        const mobileText = mobileToggle.querySelector('.lang-text');
        console.log('Mobile toggle text:', mobileText ? mobileText.textContent : 'N/A');
    }
    
    // Test language switching
    if (window.language && typeof window.language.switchLanguage === 'function') {
        console.log('Testing language switch...');
        window.language.switchLanguage();
        setTimeout(() => {
            const newLang = window.language.currentLanguage;
            console.log('Language after switch:', newLang);
        }, 100);
    }
    
    return {
        currentLanguage: currentLang,
        desktopToggle: !!desktopToggle,
        mobileToggle: !!mobileToggle,
        languageManager: !!window.language
    };
};

// Ensure mobile dropdown is hidden on desktop
function hideMobileDropdownOnDesktop() {
    if (window.innerWidth > 768) {
        const mobileTabSelector = document.getElementById('mobile-tab-selector');
        const fallbackSelect = document.getElementById('mobile-tab-selector-fallback');
        
        if (mobileTabSelector) {
            mobileTabSelector.style.display = 'none';
        }
        if (fallbackSelect) {
            fallbackSelect.style.display = 'none';
        }
    }
}

// Hide mobile dropdown on desktop when page loads
hideMobileDropdownOnDesktop();

// Hide mobile dropdown on desktop when window is resized
window.addEventListener('resize', hideMobileDropdownOnDesktop);

// Test function to preview cookie window
window.previewCookieWindow = function() {
    console.log('=== Previewing Cookie Window ===');
    
    // Clear any existing cookie consent data
    localStorage.removeItem('qado-cookie-consent');
    localStorage.removeItem('qado-language');
    sessionStorage.clear();
    
    // Force show cookie banner
    const cookieBanner = document.querySelector('.cookie-consent-banner');
    if (cookieBanner) {
        cookieBanner.classList.add('cookie-consent-show');
        console.log('Cookie banner shown');
    } else {
        console.log('Cookie banner not found, reloading page...');
        location.reload();
    }
};

// Test function to show cookie settings modal
window.previewCookieSettings = function() {
    console.log('=== Previewing Cookie Settings Modal ===');
    
    const cookieSettingsModal = document.querySelector('.cookie-settings-modal');
    if (cookieSettingsModal) {
        cookieSettingsModal.classList.add('cookie-settings-show');
        console.log('Cookie settings modal shown');
    } else {
        console.log('Cookie settings modal not found');
    }
};

// Test function for mobile language toggle
window.testMobileLanguageToggle = function() {
    console.log('=== Testing Mobile Language Toggle ===');
    
    const mobileToggle = document.getElementById('mobile-lang-toggle');
    const desktopToggle = document.getElementById('lang-toggle');
    
    console.log('Mobile toggle found:', !!mobileToggle);
    console.log('Desktop toggle found:', !!desktopToggle);
    
    if (mobileToggle) {
        const mobileText = mobileToggle.querySelector('.lang-text');
        console.log('Mobile toggle text:', mobileText ? mobileText.textContent : 'Not found');
        console.log('Mobile toggle classes:', mobileToggle.className);
        console.log('Mobile toggle attributes:', mobileToggle.attributes);
        
        // Check if mobile toggle has event listeners
        console.log('Mobile toggle event listeners:', getEventListeners ? getEventListeners(mobileToggle) : 'getEventListeners not available');
    }
    
    if (desktopToggle) {
        const desktopText = desktopToggle.querySelector('.lang-text');
        console.log('Desktop toggle text:', desktopText ? desktopText.textContent : 'Not found');
    }
    
    if (window.language) {
        console.log('Current language:', window.language.currentLanguage);
        console.log('Language manager available:', !!window.language);
        console.log('Language manager type:', typeof window.language);
        console.log('switchLanguage function:', typeof window.language.switchLanguage);
    } else {
        console.log('Language manager not available');
    }
    
    // Test clicking the mobile toggle
    if (mobileToggle) {
        console.log('Simulating mobile toggle click...');
        mobileToggle.click();
        
        // Check state after click
        setTimeout(() => {
            console.log('After click - Current language:', window.language ? window.language.currentLanguage : 'N/A');
            const mobileText = mobileToggle.querySelector('.lang-text');
            console.log('After click - Mobile toggle text:', mobileText ? mobileText.textContent : 'Not found');
        }, 100);
    }
};

// Test function to debug language switching
window.debugLanguageSwitching = function() {
    console.log('=== Debugging Language Switching ===');
    
    if (window.language) {
        console.log('Initial language:', window.language.currentLanguage);
        console.log('Calling switchLanguage...');
        window.language.switchLanguage();
        console.log('After switch - language:', window.language.currentLanguage);
        
        // Check toggles
        const mobileToggle = document.getElementById('mobile-lang-toggle');
        const desktopToggle = document.getElementById('lang-toggle');
        
        if (mobileToggle) {
            const mobileText = mobileToggle.querySelector('.lang-text');
            console.log('Mobile toggle text after switch:', mobileText ? mobileText.textContent : 'Not found');
        }
        
        if (desktopToggle) {
            const desktopText = desktopToggle.querySelector('.lang-text');
            console.log('Desktop toggle text after switch:', desktopText ? desktopText.textContent : 'Not found');
        }
    } else {
        console.log('Language manager not available');
    }
};

// Function to force re-initialize language system
window.reinitializeLanguageSystem = function() {
    console.log('=== Re-initializing Language System ===');
    
    // Remove existing language manager
    if (window.language) {
        delete window.language;
    }
    if (window.languageManager) {
        delete window.languageManager;
    }
    
    // Re-create language manager
    if (typeof LanguageManager !== 'undefined') {
        window.languageManager = new LanguageManager();
        window.language = window.languageManager;
        console.log('Language system re-initialized');
    } else {
        console.log('LanguageManager class not available');
    }
};

// Test function to clear debugging and test mobile toggle
window.testMobileToggleClean = function() {
    console.log('=== Testing Mobile Toggle (Clean) ===');
    
    const mobileToggle = document.getElementById('mobile-lang-toggle');
    if (!mobileToggle) {
        console.error('Mobile toggle not found!');
        return;
    }
    
    console.log('Current language:', window.language ? window.language.currentLanguage : 'N/A');
    console.log('Toggle text:', mobileToggle.querySelector('.lang-text')?.textContent);
    
    // Test switching to English
    console.log('Switching to English...');
    mobileToggle.click();
    
    setTimeout(() => {
        console.log('After switch - Language:', window.language ? window.language.currentLanguage : 'N/A');
        console.log('After switch - Toggle text:', mobileToggle.querySelector('.lang-text')?.textContent);
        
        // Test switching back to German
        console.log('Switching back to German...');
        mobileToggle.click();
        
        setTimeout(() => {
            console.log('After switch back - Language:', window.language ? window.language.currentLanguage : 'N/A');
            console.log('After switch back - Toggle text:', mobileToggle.querySelector('.lang-text')?.textContent);
        }, 100);
    }, 100);
};

// Comprehensive test for mobile language toggle
window.testMobileToggleComprehensive = function() {
    console.log('=== Comprehensive Mobile Toggle Test ===');
    
    const mobileToggle = document.getElementById('mobile-lang-toggle');
    const desktopToggle = document.getElementById('lang-toggle');
    
    if (!mobileToggle) {
        console.error('Mobile toggle not found!');
        return;
    }
    
    console.log('1. Initial State:');
    console.log('  - Language:', window.language ? window.language.currentLanguage : 'N/A');
    console.log('  - Mobile toggle text:', mobileToggle.querySelector('.lang-text')?.textContent);
    console.log('  - Desktop toggle text:', desktopToggle?.querySelector('.lang-text')?.textContent);
    
    // Test multiple switches
    const testSwitches = [
        { name: 'Switch 1 (DE → EN)', expected: 'en' },
        { name: 'Switch 2 (EN → DE)', expected: 'de' },
        { name: 'Switch 3 (DE → EN)', expected: 'en' },
        { name: 'Switch 4 (EN → DE)', expected: 'de' }
    ];
    
    let currentTest = 0;
    
    const runNextTest = () => {
        if (currentTest >= testSwitches.length) {
            console.log('=== All tests completed ===');
            return;
        }
        
        const test = testSwitches[currentTest];
        console.log(`\n${currentTest + 1}. ${test.name}:`);
        
        mobileToggle.click();
        
        setTimeout(() => {
            const actualLanguage = window.language ? window.language.currentLanguage : 'N/A';
            const mobileText = mobileToggle.querySelector('.lang-text')?.textContent;
            const desktopText = desktopToggle?.querySelector('.lang-text')?.textContent;
            
            console.log(`  - Language: ${actualLanguage} (expected: ${test.expected})`);
            console.log(`  - Mobile toggle: ${mobileText}`);
            console.log(`  - Desktop toggle: ${desktopText}`);
            
            const success = actualLanguage === test.expected;
            console.log(`  - Result: ${success ? '✅ PASS' : '❌ FAIL'}`);
            
            currentTest++;
            setTimeout(runNextTest, 200);
        }, 100);
    };
    
    runNextTest();
};

// Test function specifically for mobile language toggle
window.testMobileLanguageToggle = function() {
    console.log('=== Testing Mobile Language Toggle ===');
    
    const mobileToggle = document.getElementById('mobile-lang-toggle');
    if (!mobileToggle) {
        console.error('Mobile toggle not found!');
        return;
    }
    
    console.log('Mobile toggle found:', mobileToggle);
    console.log('Current language:', window.language ? window.language.currentLanguage : 'N/A');
    
    // Check if toggle is bound
    const isBound = mobileToggle.hasAttribute('data-language-bound');
    console.log('Toggle is bound:', isBound);
    
    // Check toggle text
    const toggleText = mobileToggle.querySelector('.lang-text');
    console.log('Toggle text element:', toggleText);
    console.log('Toggle text content:', toggleText ? toggleText.textContent : 'Not found');
    
    // Test clicking the toggle
    console.log('Testing toggle click...');
    mobileToggle.click();
    
    // Check state after click
    setTimeout(() => {
        console.log('After click - Language:', window.language ? window.language.currentLanguage : 'N/A');
        console.log('After click - Toggle text:', toggleText ? toggleText.textContent : 'Not found');
        
        // Test clicking again
        console.log('Testing toggle click again...');
        mobileToggle.click();
        
        setTimeout(() => {
            console.log('After second click - Language:', window.language ? window.language.currentLanguage : 'N/A');
            console.log('After second click - Toggle text:', toggleText ? toggleText.textContent : 'Not found');
        }, 100);
    }, 100);
};

// Test function to verify impressum changes
window.testImpressumChanges = function() {
    console.log('=== Testing Impressum Changes ===');
    
    // Check if USt-ID section is removed
    const vatSection = document.querySelector('[data-translate="impressum.vat.title"]');
    console.log('USt-ID section removed:', !vatSection);
    
    // Check if only own images are listed
    const imageSection = document.querySelector('[data-translate="impressum.images.title"]');
    if (imageSection) {
        const imageList = imageSection.parentElement.querySelector('ul');
        const listItems = imageList ? imageList.querySelectorAll('li') : [];
        console.log('Image credits section found:', !!imageSection);
        console.log('Number of image sources:', listItems.length);
        console.log('Only own images listed:', listItems.length === 1);
        
        if (listItems.length > 0) {
            console.log('Image sources:');
            listItems.forEach((item, index) => {
                console.log(`  ${index + 1}. ${item.textContent}`);
            });
        }
    } else {
        console.log('Image credits section not found');
    }
    
    // Check updated date
    const updatedText = document.querySelector('[data-translate="impressum.updated"]');
    console.log('Updated date text:', updatedText ? updatedText.textContent : 'Not found');
    console.log('Date shows September 2025:', updatedText ? updatedText.textContent.includes('September 2025') : false);
    
    console.log('=== Impressum Changes Test Complete ===');
};

// Test function to verify datenschutz date change
window.testDatenschutzDate = function() {
    console.log('=== Testing Datenschutz Date Change ===');
    
    const updatedText = document.querySelector('[data-translate="datenschutz.updated"]');
    console.log('Updated date text:', updatedText ? updatedText.textContent : 'Not found');
    console.log('Date shows September 2025:', updatedText ? updatedText.textContent.includes('September 2025') : false);
    
    console.log('=== Datenschutz Date Test Complete ===');
};

// Test function to verify notification popup values
window.testNotificationPopups = function() {
    console.log('=== Testing Notification Popup Values ===');
    
    const notifications = document.querySelectorAll('.notification-item');
    console.log('Found notifications:', notifications.length);
    
    notifications.forEach((notification, index) => {
        const type = notification.classList.contains('email-notification') ? 'email' :
                    notification.classList.contains('slack-notification') ? 'slack' :
                    notification.classList.contains('system-notification') ? 'system' : 'unknown';
        
        console.log(`Notification ${index + 1} (${type}):`);
        
        const popup = notification.querySelector('.savings-popup');
        if (popup) {
            console.log('  - Popup text:', popup.textContent);
            console.log('  - Is dynamic:', popup.hasAttribute('data-dynamic'));
            console.log('  - Expected:', type === 'email' ? '+€2.300' : 
                       type === 'slack' ? '+€15.000' : 
                       type === 'system' ? '+€8.750' : 'unknown');
            console.log('  - Correct value:', popup.textContent === (type === 'email' ? '+€2.300' : 
                       type === 'slack' ? '+€15.000' : 
                       type === 'system' ? '+€8.750' : 'unknown'));
        } else {
            console.log('  - No popup found');
        }
    });
    
    console.log('=== Notification Popup Test Complete ===');
};

// Test function to monitor popup flickering
window.testPopupFlickering = function() {
    console.log('=== Testing Popup Flickering ===');
    
    const emailNotification = document.querySelector('.email-notification');
    if (emailNotification) {
        const popup = emailNotification.querySelector('.savings-popup');
        if (popup) {
            console.log('Initial popup text:', popup.textContent);
            console.log('Is dynamic:', popup.hasAttribute('data-dynamic'));
            
            // Monitor for changes
            let changeCount = 0;
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' && mutation.target === emailNotification) {
                        changeCount++;
                        console.log(`Popup change detected (${changeCount}):`, mutation.addedNodes.length, 'added,', mutation.removedNodes.length, 'removed');
                        
                        const currentPopup = emailNotification.querySelector('.savings-popup');
                        if (currentPopup) {
                            console.log('Current popup text:', currentPopup.textContent);
                            console.log('Is dynamic:', currentPopup.hasAttribute('data-dynamic'));
                        }
                    }
                });
            });
            
            observer.observe(emailNotification, { childList: true, subtree: true });
            
            console.log('Monitoring popup changes for 10 seconds...');
            setTimeout(() => {
                observer.disconnect();
                console.log(`Total popup changes detected: ${changeCount}`);
                console.log('=== Popup Flickering Test Complete ===');
            }, 10000);
        } else {
            console.log('No popup found in email notification');
        }
    } else {
        console.log('Email notification not found');
    }
};

// Test function to verify extended marquee
window.testExtendedMarquee = function() {
    console.log('=== Testing Extended Marquee ===');
    
    const marquee = document.querySelector('.marquee-track');
    if (!marquee) {
        console.log('❌ Marquee track not found');
        return;
    }
    
    const logoChips = marquee.querySelectorAll('.logo-chip');
    console.log(`🏷️ Total logo chips: ${logoChips.length} (expected: 14)`);
    
    // Count unique logos
    const uniqueLogos = new Set();
    logoChips.forEach((chip, index) => {
        const img = chip.querySelector('img');
        const alt = img ? img.alt : 'Unknown';
        uniqueLogos.add(alt);
        console.log(`  ${index + 1}. ${alt}`);
    });
    
    console.log(`🎯 Unique logos: ${uniqueLogos.size} (expected: 7)`);
    console.log(`🔄 Sets of logos: ${logoChips.length / uniqueLogos.size} (expected: 2 for infinite loop)`);
    
    // Check animation
    const computedStyle = window.getComputedStyle(marquee);
    const animation = computedStyle.animation;
    console.log(`🎬 Animation: ${animation}`);
    
    // Check if animation is running
    const isAnimating = animation.includes('marquee') && !animation.includes('none');
    console.log(`✅ Animation running: ${isAnimating ? 'Yes' : 'No'}`);
    
    // Calculate expected duration
    const isMobile = window.innerWidth <= 768;
    const expectedDuration = isMobile ? '15s' : '40s';
    console.log(`⏱️ Expected duration: ${expectedDuration} (${isMobile ? 'Mobile' : 'Desktop'})`);
    console.log(`📱 Is mobile: ${isMobile}`);
    
    console.log('=== Extended Marquee Test Complete ===');
};

// Test function to verify password toggle positioning
window.testPasswordTogglePosition = function() {
    console.log('=== Testing Password Toggle Position ===');
    
    // Check if we're on the login page
    if (!window.location.pathname.includes('login.html')) {
        console.log('❌ Not on login page. Navigate to login.html first.');
        return;
    }
    
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordContainer = document.querySelector('.password-input-container');
    
    if (!passwordInput || !passwordToggle || !passwordContainer) {
        console.log('❌ Password elements not found');
        return;
    }
    
    // Get computed styles
    const inputStyle = window.getComputedStyle(passwordInput);
    const toggleStyle = window.getComputedStyle(passwordToggle);
    const containerStyle = window.getComputedStyle(passwordContainer);
    
    console.log('📱 Viewport width:', window.innerWidth);
    console.log('📱 Is mobile:', window.innerWidth <= 768);
    
    // Input dimensions
    const inputRect = passwordInput.getBoundingClientRect();
    const inputPaddingRight = parseFloat(inputStyle.paddingRight);
    console.log(`📦 Input width: ${inputRect.width}px`);
    console.log(`📦 Input padding-right: ${inputPaddingRight}px`);
    
    // Toggle button dimensions
    const toggleRect = passwordToggle.getBoundingClientRect();
    const toggleRight = parseFloat(toggleStyle.right);
    console.log(`👁️ Toggle right position: ${toggleRight}px`);
    console.log(`👁️ Toggle width: ${toggleRect.width}px`);
    console.log(`👁️ Toggle padding: ${toggleStyle.padding}`);
    
    // Calculate if toggle is properly positioned
    const expectedRight = 4; // Should be 4px on mobile
    const isCorrectlyPositioned = Math.abs(toggleRight - expectedRight) < 2;
    
    console.log(`✅ Correctly positioned: ${isCorrectlyPositioned ? 'Yes' : 'No'}`);
    console.log(`📏 Expected right: ${expectedRight}px, Actual: ${toggleRight}px`);
    
    // Check if toggle is fully visible
    const containerRect = passwordContainer.getBoundingClientRect();
    const toggleLeft = toggleRect.left;
    const toggleRightEdge = toggleRect.right;
    const containerLeft = containerRect.left;
    const containerRight = containerRect.right;
    
    const isFullyVisible = toggleLeft >= containerLeft && toggleRightEdge <= containerRight;
    console.log(`👁️ Fully visible: ${isFullyVisible ? 'Yes' : 'No'}`);
    console.log(`📏 Container bounds: ${containerLeft}px - ${containerRight}px`);
    console.log(`📏 Toggle bounds: ${toggleLeft}px - ${toggleRightEdge}px`);
    
    console.log('=== Password Toggle Position Test Complete ===');
};

// Test function to verify login page translations
window.testLoginTranslations = function() {
    console.log('=== Testing Login Page Translations ===');
    
    // Check if we're on the login page
    if (!window.location.pathname.includes('login.html')) {
        console.log('❌ Not on login page. Navigate to login.html first.');
        return;
    }
    
    // Test German translations
    console.log('🇩🇪 Testing German translations...');
    if (window.language) {
        window.language.switchLanguage('de');
        setTimeout(() => {
            const title = document.querySelector('[data-translate="login.title"]');
            const emailLabel = document.querySelector('[data-translate="login.email.label"]');
            const passwordLabel = document.querySelector('[data-translate="login.password.label"]');
            const button = document.querySelector('[data-translate="login.button"]');
            
            console.log(`📝 Title: "${title ? title.textContent : 'Not found'}"`);
            console.log(`📧 Email Label: "${emailLabel ? emailLabel.textContent : 'Not found'}"`);
            console.log(`🔒 Password Label: "${passwordLabel ? passwordLabel.textContent : 'Not found'}"`);
            console.log(`🔘 Button: "${button ? button.textContent : 'Not found'}"`);
            
            // Test English translations
            console.log('🇺🇸 Testing English translations...');
            window.language.switchLanguage('en');
            setTimeout(() => {
                console.log(`📝 Title: "${title ? title.textContent : 'Not found'}"`);
                console.log(`📧 Email Label: "${emailLabel ? emailLabel.textContent : 'Not found'}"`);
                console.log(`🔒 Password Label: "${passwordLabel ? passwordLabel.textContent : 'Not found'}"`);
                console.log(`🔘 Button: "${button ? button.textContent : 'Not found'}"`);
                
                // Test placeholders
                const emailInput = document.getElementById('email');
                const passwordInput = document.getElementById('password');
                console.log(`📧 Email Placeholder: "${emailInput ? emailInput.placeholder : 'Not found'}"`);
                console.log(`🔒 Password Placeholder: "${passwordInput ? passwordInput.placeholder : 'Not found'}"`);
                
                // Test aria-label
                const passwordToggle = document.getElementById('passwordToggle');
                console.log(`👁️ Password Toggle Aria-Label: "${passwordToggle ? passwordToggle.getAttribute('aria-label') : 'Not found'}"`);
                
                console.log('=== Login Translation Test Complete ===');
            }, 100);
        }, 100);
    } else {
        console.log('❌ Language system not available');
    }
};

// Test function to verify animation speeds
window.testMarqueeSpeed = function() {
    console.log('=== Testing Marquee Animation Speeds ===');
    
    const marquee = document.querySelector('.marquee-track');
    if (!marquee) {
        console.log('❌ Marquee track not found');
        return;
    }
    
    const computedStyle = window.getComputedStyle(marquee);
    const animation = computedStyle.animation;
    const isMobile = window.innerWidth <= 768;
    
    console.log(`📱 Viewport: ${isMobile ? 'Mobile' : 'Desktop'} (${window.innerWidth}px)`);
    console.log(`🎬 Current animation: ${animation}`);
    
    // Extract duration from animation string
    const durationMatch = animation.match(/(\d+(?:\.\d+)?)s/);
    const currentDuration = durationMatch ? durationMatch[1] + 's' : 'Unknown';
    
    console.log(`⏱️ Current duration: ${currentDuration}`);
    console.log(`🎯 Expected duration: ${isMobile ? '15s' : '40s'}`);
    
    const isCorrectSpeed = isMobile ? 
        (currentDuration === '15s' || animation.includes('15s')) :
        (currentDuration === '40s' || animation.includes('40s'));
    
    console.log(`✅ Speed correct: ${isCorrectSpeed ? 'Yes' : 'No'}`);
    
    if (!isCorrectSpeed) {
        console.log('🔧 Fixing animation speed...');
        marquee.style.animation = 'none';
        marquee.offsetHeight; // Trigger reflow
        
        if (isMobile) {
            marquee.style.animation = 'marquee 15s linear infinite';
            console.log('📱 Applied mobile speed (15s)');
        } else {
            marquee.style.animation = 'marquee 40s linear infinite';
            console.log('🖥️ Applied desktop speed (40s)');
        }
        
        setTimeout(() => {
            const newAnimation = window.getComputedStyle(marquee).animation;
            console.log(`✅ Fixed animation: ${newAnimation}`);
        }, 100);
    }
    
    console.log('=== Marquee Speed Test Complete ===');
};

// Test function to verify infinite loop
window.testInfiniteLoop = function() {
    console.log('=== Testing Infinite Loop Marquee ===');
    
    const marquee = document.querySelector('.marquee-track');
    if (!marquee) {
        console.log('❌ Marquee track not found');
        return;
    }
    
    const logoChips = marquee.querySelectorAll('.logo-chip');
    console.log(`🏷️ Total logos: ${logoChips.length}`);
    
    // Check if we have exactly 2 sets (14 logos)
    const uniqueLogos = new Set();
    logoChips.forEach((chip) => {
        const img = chip.querySelector('img');
        const alt = img ? img.alt : 'Unknown';
        uniqueLogos.add(alt);
    });
    
    const sets = logoChips.length / uniqueLogos.size;
    console.log(`🔄 Logo sets: ${sets} (should be 2 for infinite loop)`);
    console.log(`✅ Infinite loop ready: ${sets === 2 ? 'Yes' : 'No'}`);
    
    // Check animation
    const computedStyle = window.getComputedStyle(marquee);
    const animation = computedStyle.animation;
    console.log(`🎬 Animation: ${animation}`);
    
    // Check if animation moves by -50% (perfect for 2 sets)
    const isInfiniteAnimation = animation.includes('marquee-infinite') && animation.includes('-50%');
    console.log(`♾️ Infinite animation: ${isInfiniteAnimation ? 'Yes' : 'No'}`);
    
    // Monitor for seamless transition
    console.log('🔄 Monitoring for seamless transition...');
    let lastTransform = '';
    let transitionCount = 0;
    const startTime = performance.now();
    
    const monitorTransition = () => {
        const currentTransform = window.getComputedStyle(marquee).transform;
        
        if (currentTransform !== lastTransform) {
            transitionCount++;
            const elapsed = (performance.now() - startTime) / 1000;
            console.log(`📊 Transform ${transitionCount} at ${elapsed.toFixed(1)}s: ${currentTransform}`);
            lastTransform = currentTransform;
        }
        
        const elapsed = (performance.now() - startTime) / 1000;
        if (elapsed < 5) { // Monitor for 5 seconds
            requestAnimationFrame(monitorTransition);
        } else {
            console.log(`✅ Monitoring complete: ${transitionCount} transitions in 5 seconds`);
            console.log('=== Infinite Loop Test Complete ===');
        }
    };
    
    requestAnimationFrame(monitorTransition);
};

// Test function to monitor marquee smoothness
window.testMarqueeSmoothness = function() {
    console.log('=== Testing Marquee Smoothness ===');
    
    const marquee = document.querySelector('.marquee-track');
    if (!marquee) {
        console.log('❌ Marquee track not found');
        return;
    }
    
    let transformChanges = 0;
    let lastTransform = '';
    const startTime = performance.now();
    
    console.log('🔄 Monitoring transform changes for 10 seconds...');
    
    const monitorTransform = () => {
        const currentTransform = window.getComputedStyle(marquee).transform;
        
        if (currentTransform !== lastTransform) {
            transformChanges++;
            const elapsed = (performance.now() - startTime) / 1000;
            console.log(`📊 Change ${transformChanges} at ${elapsed.toFixed(1)}s: ${currentTransform}`);
            lastTransform = currentTransform;
        }
        
        const elapsed = (performance.now() - startTime) / 1000;
        if (elapsed < 10) {
            requestAnimationFrame(monitorTransform);
        } else {
            console.log(`✅ Monitoring complete: ${transformChanges} transform changes in 10 seconds`);
            console.log(`📈 Average: ${(transformChanges / 10).toFixed(1)} changes per second`);
            console.log('=== Marquee Smoothness Test Complete ===');
        }
    };
    
    requestAnimationFrame(monitorTransform);
};

// Test function to verify product feature naming consistency
window.testProductFeatureNaming = function() {
    console.log('=== Testing Product Feature Naming Consistency ===');
    
    // Check header dropdown
    const headerLinks = document.querySelectorAll('.dropdown-link[data-translate*="platform."]');
    console.log('Header dropdown links:');
    headerLinks.forEach((link, index) => {
        const key = link.getAttribute('data-translate');
        console.log(`  ${index + 1}. ${key}: "${link.textContent}"`);
    });
    
    // Check footer links
    const footerLinks = document.querySelectorAll('.footer-links .dropdown-link[data-translate*="platform."]');
    console.log('Footer links:');
    footerLinks.forEach((link, index) => {
        const key = link.getAttribute('data-translate');
        console.log(`  ${index + 1}. ${key}: "${link.textContent}"`);
    });
    
    // Check feature tabs
    const featureTabs = document.querySelectorAll('.feature-tab[data-translate*="features.tab."]');
    console.log('Feature tabs:');
    featureTabs.forEach((tab, index) => {
        const key = tab.getAttribute('data-translate');
        console.log(`  ${index + 1}. ${key}: "${tab.textContent}"`);
    });
    
    // Expected names from screenshot
    const expectedNames = [
        'Contract Management',
        'Order Optimization', 
        'Invoice Review',
        'Penalty and Quality Management'
    ];
    
    console.log('Expected names from screenshot:', expectedNames);
    
    console.log('=== Product Feature Naming Test Complete ===');
};

// Test function to check header language state
window.testHeaderLanguageState = function() {
    console.log('=== Testing Header Language State ===');
    
    const mobileToggle = document.getElementById('mobile-lang-toggle');
    const desktopToggle = document.getElementById('lang-toggle');
    
    console.log('Current language:', window.language ? window.language.currentLanguage : 'N/A');
    
    if (mobileToggle) {
        const mobileText = mobileToggle.querySelector('.lang-text');
        console.log('Mobile toggle text:', mobileText ? mobileText.textContent : 'Not found');
    }
    
    if (desktopToggle) {
        const desktopText = desktopToggle.querySelector('.lang-text');
        console.log('Desktop toggle text:', desktopText ? desktopText.textContent : 'Not found');
    }
    
    // Check header navigation text
    const navLinks = document.querySelectorAll('.nav-link[data-translate]');
    console.log('Header navigation text:');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-translate');
        console.log(`  ${key}: "${link.textContent}"`);
    });
    
    // Check if header is properly translated
    const platformLink = document.querySelector('[data-translate="nav.platform"]');
    const faqLink = document.querySelector('[data-translate="nav.faq"]');
    const aboutLink = document.querySelector('[data-translate="company.about"]');
    
    console.log('Key header elements:');
    console.log('  Platform link:', platformLink ? platformLink.textContent : 'Not found');
    console.log('  FAQ link:', faqLink ? faqLink.textContent : 'Not found');
    console.log('  About link:', aboutLink ? aboutLink.textContent : 'Not found');
};

// Comprehensive test for mobile language toggle
window.testMobileLanguageToggleComprehensive = function() {
    console.log('=== Comprehensive Mobile Language Toggle Test ===');
    
    // Step 1: Check if elements exist
    const mobileToggle = document.getElementById('mobile-lang-toggle');
    const desktopToggle = document.getElementById('lang-toggle');
    
    console.log('1. Element Check:');
    console.log('  - Mobile toggle exists:', !!mobileToggle);
    console.log('  - Desktop toggle exists:', !!desktopToggle);
    
    if (!mobileToggle) {
        console.error('Mobile toggle not found!');
        return;
    }
    
    // Step 2: Check language manager
    console.log('2. Language Manager Check:');
    console.log('  - window.language exists:', !!window.language);
    console.log('  - window.languageManager exists:', !!window.languageManager);
    
    if (window.language) {
        console.log('  - Current language:', window.language.currentLanguage);
        console.log('  - switchLanguage function:', typeof window.language.switchLanguage);
    }
    
    // Step 3: Check toggle states
    console.log('3. Toggle States:');
    const mobileText = mobileToggle.querySelector('.lang-text');
    const desktopText = desktopToggle ? desktopToggle.querySelector('.lang-text') : null;
    
    console.log('  - Mobile toggle text:', mobileText ? mobileText.textContent : 'Not found');
    console.log('  - Desktop toggle text:', desktopText ? desktopText.textContent : 'Not found');
    
    // Step 4: Test language switching
    console.log('4. Testing Language Switching:');
    
    if (window.language) {
        const initialLang = window.language.currentLanguage;
        console.log('  - Initial language:', initialLang);
        
        // Test switching
        console.log('  - Switching language...');
        window.language.switchLanguage();
        
        const newLang = window.language.currentLanguage;
        console.log('  - New language:', newLang);
        
        // Check if toggles updated
        setTimeout(() => {
            const mobileTextAfter = mobileToggle.querySelector('.lang-text');
            const desktopTextAfter = desktopToggle ? desktopToggle.querySelector('.lang-text') : null;
            
            console.log('  - Mobile toggle text after switch:', mobileTextAfter ? mobileTextAfter.textContent : 'Not found');
            console.log('  - Desktop toggle text after switch:', desktopTextAfter ? desktopTextAfter.textContent : 'Not found');
            
            // Test switching back
            console.log('  - Switching back...');
            window.language.switchLanguage();
            
            setTimeout(() => {
                const mobileTextFinal = mobileToggle.querySelector('.lang-text');
                const desktopTextFinal = desktopToggle ? desktopToggle.querySelector('.lang-text') : null;
                
                console.log('  - Mobile toggle text after switch back:', mobileTextFinal ? mobileTextFinal.textContent : 'Not found');
                console.log('  - Desktop toggle text after switch back:', desktopTextFinal ? desktopTextFinal.textContent : 'Not found');
                
                console.log('=== Test Complete ===');
            }, 100);
        }, 100);
    } else {
        console.error('Language manager not available for testing');
    }
};
           
           // Comprehensive test for dropdown visibility
           window.testDropdownVisibility = function() {
               console.log('=== Testing Dropdown Visibility ===');
               
               // Force dropdown to front first
               forceDropdownToFront();
               
               const mobileTabSelector = document.getElementById('mobile-tab-selector');
               const fallbackSelect = document.getElementById('mobile-tab-selector-fallback');
               
               console.log('Native select found:', !!mobileTabSelector);
               console.log('Fallback select found:', !!fallbackSelect);
               
               if (mobileTabSelector) {
                   const styles = window.getComputedStyle(mobileTabSelector);
                   console.log('Native select styles:', {
                       display: styles.display,
                       visibility: styles.visibility,
                       zIndex: styles.zIndex,
                       position: styles.position,
                       opacity: styles.opacity
                   });
                   
                   // Test click
                   console.log('Testing native select click...');
                   mobileTabSelector.click();
                   
                   // Test focus
                   mobileTabSelector.focus();
               }
               
               if (fallbackSelect) {
                   const styles = window.getComputedStyle(fallbackSelect);
                   console.log('Fallback select styles:', {
                       display: styles.display,
                       visibility: styles.visibility,
                       zIndex: styles.zIndex,
                       position: styles.position,
                       opacity: styles.opacity
                   });
                   
                   // Test fallback click
                   const trigger = fallbackSelect.querySelector('.mobile-tab-selector-trigger');
                   if (trigger) {
                       console.log('Testing fallback trigger click...');
                       trigger.click();
                   }
               }
               
               // Check if any elements are overlapping
               const allElements = document.querySelectorAll('*');
               const highZIndexElements = Array.from(allElements).filter(el => {
                   const zIndex = parseInt(window.getComputedStyle(el).zIndex);
                   return zIndex > 1000 && zIndex < 99999;
               });
               
               console.log('Elements with high z-index that might interfere:', highZIndexElements.length);
               highZIndexElements.forEach((el, index) => {
                   if (index < 5) { // Only show first 5
                       console.log(`Element ${index + 1}:`, {
                           tagName: el.tagName,
                           className: el.className,
                           zIndex: window.getComputedStyle(el).zIndex
                       });
                   }
               });
           };

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

    // Platform dropdown tab switching functionality
    function initPlatformDropdownTabs() {
        const dropdownLinks = document.querySelectorAll('.dropdown-link');
        console.log('Found dropdown links:', dropdownLinks.length);
        
        dropdownLinks.forEach((link, index) => {
            const href = link.getAttribute('href');
            const text = link.textContent.trim();
            console.log(`Link ${index}: href="${href}", text="${text}"`);
            
            // Check if this is a platform dropdown link (contains #solutions)
            if (href && href.includes('#solutions')) {
                console.log(`Setting up click handler for: ${text}`);
                // Remove any existing listeners to prevent duplicates
                link.removeEventListener('click', handlePlatformDropdownClick);
                link.addEventListener('click', handlePlatformDropdownClick);
            }
        });
    }
    
    function handlePlatformDropdownClick(e) {
        e.preventDefault();
        
        // Get the text content to determine which tab to activate
        const linkText = this.textContent.trim();
        console.log('Platform dropdown clicked:', linkText);
        
        // Scroll to solutions section first
        const solutionsSection = document.querySelector('#solutions');
        if (solutionsSection) {
            solutionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // After scrolling, switch to the appropriate tab
            setTimeout(() => {
                switchTab(linkText);
            }, 500);
        }
    }
    
    // Initialize platform dropdown tabs
    initPlatformDropdownTabs();
    
    // Re-initialize after components are loaded (in case header is loaded dynamically)
    setTimeout(() => {
        console.log('Re-initializing platform dropdown tabs...');
        initPlatformDropdownTabs();
    }, 1000);
    
    // Also re-initialize when the header is loaded via components.js
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && (node.classList?.contains('site-header') || node.querySelector?.('.dropdown-link'))) {
                        console.log('Header or dropdown detected, re-initializing...');
                        setTimeout(() => {
                            initPlatformDropdownTabs();
                        }, 100);
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Make functions available globally for testing
    window.testTabSwitching = function(tabName) {
        console.log('Testing tab switching for:', tabName);
        switchTab(tabName);
    };
    
    window.testAllTabs = function() {
        const testTabs = ['Vertragsmanagement', 'Bestelloptimierung', 'Rechnungsprüfung', 'Penalty- und Qualitätsmanagement'];
        testTabs.forEach((tab, index) => {
            setTimeout(() => {
                console.log(`Testing tab ${index + 1}: ${tab}`);
                switchTab(tab);
            }, index * 2000);
        });
    };

    // Function to switch tabs based on text content
    function switchTab(linkText) {
        console.log('switchTab called with:', linkText);
        const tabs = document.querySelectorAll('.tab');
        const tabPanels = document.querySelectorAll('.tab-panel');
        
        console.log('Found tabs:', tabs.length);
        console.log('Found panels:', tabPanels.length);
        
        // Map dropdown text to tab IDs (now both dropdown and tabs use the same text)
        const tabMapping = {
            'Vertragsmanagement': 'tab-btn-contracts',
            'Bestelloptimierung': 'tab-btn-orders',
            'Rechnungsprüfung': 'tab-btn-invoices',
            'Penalty- und Qualitätsmanagement': 'tab-btn-penalty'
        };
        
        console.log('Available mappings:', Object.keys(tabMapping));
        
        const targetTabId = tabMapping[linkText];
        console.log('Target tab ID:', targetTabId);
        
        if (targetTabId) {
            // Remove active class from all tabs and panels
            tabs.forEach(tab => {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(panel => {
                panel.classList.remove('show');
                panel.setAttribute('hidden', 'true');
            });
            
            // Activate the target tab
            const targetTab = document.getElementById(targetTabId);
            const targetPanel = document.querySelector(`#${targetTabId.replace('tab-btn-', 'tab-')}`);
            
            console.log('Target tab found:', !!targetTab);
            console.log('Target panel found:', !!targetPanel);
            
            if (targetTab && targetPanel) {
                targetTab.classList.add('active');
                targetTab.setAttribute('aria-selected', 'true');
                targetPanel.classList.add('show');
                targetPanel.removeAttribute('hidden');
                
                // Update mobile selector
                const mobileSelector = document.getElementById('mobile-tab-selector');
                if (mobileSelector) {
                    mobileSelector.value = targetPanel.id;
                }
                
                console.log('Successfully switched to tab:', targetTabId);
            } else {
                console.error('Could not find target tab or panel:', targetTabId);
            }
        } else {
            console.error('No mapping found for link text:', linkText);
        }
    }

    // Handle anchor links from other pages (e.g., FAQ dropdown from landing page)
    function handleAnchorNavigation() {
        const hash = window.location.hash;
        if (!hash) return;

        // Delay slightly to allow dynamically injected components (header/footer) to render
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (!target) return;

            // Compute offset using header height if available
            const headerHeight = header ? header.offsetHeight : 80;
            const rect = target.getBoundingClientRect();
            const targetPosition = Math.max(0, window.pageYOffset + rect.top - headerHeight - 24);

            // Smooth scroll to the calculated position
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });

            // Wait a bit for the scroll to start/settle before applying highlight
            setTimeout(() => {
                // Remove any existing temporary highlights
                document.querySelectorAll('.anchor-highlight').forEach(el => el.classList.remove('anchor-highlight'));

                // Apply highlight to the target and focus it for accessibility
                target.classList.add('anchor-highlight');
                try {
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                } catch (e) {
                    // ignore focus errors in older browsers
                }

                // Remove highlight after a short delay
                setTimeout(() => {
                    target.classList.remove('anchor-highlight');
                }, 3000);
            }, 500);
        }, 600);
    }

    // Run on page load
    handleAnchorNavigation();
    
    // Check for tab activation from other pages
    checkForTabActivation();
    
    // Also run when hash changes (for SPA-like behavior)
    window.addEventListener('hashchange', handleAnchorNavigation);

    // Tabs behavior
    const tabButtons = Array.from(document.querySelectorAll('.tab'));
    const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
    const mobileTabSelector = document.getElementById('mobile-tab-selector');
    
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found tab panels:', tabPanels.length);
    console.log('Found mobile selector:', mobileTabSelector);
    
    // Mobile tab selector functionality
    if (mobileTabSelector) {
        console.log('Mobile tab selector found and initialized');
        mobileTabSelector.addEventListener('change', function() {
            const selectedTabId = this.value;
            console.log('Mobile tab selected:', selectedTabId);
            
            // Update desktop tabs
            tabButtons.forEach(btn => {
                const isActive = btn.getAttribute('aria-controls') === selectedTabId;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
            
            // Update tab panels
            tabPanels.forEach(panel => {
                const isActive = panel.id === selectedTabId;
                panel.classList.toggle('show', isActive);
                panel.hidden = !isActive;
            });
        });
        
        // Force dropdown to front immediately
        forceDropdownToFront();
        
        // Test if native select works, if not, show fallback
        setTimeout(() => {
            testNativeSelectAndShowFallback();
        }, 1000);
    } else {
        console.error('Mobile tab selector not found!');
        // Try to find it again after a delay
        setTimeout(() => {
            const retryMobileTabSelector = document.getElementById('mobile-tab-selector');
            if (retryMobileTabSelector) {
                console.log('Mobile tab selector found on retry, initializing...');
                retryMobileTabSelector.addEventListener('change', function() {
                    const selectedTabId = this.value;
                    console.log('Mobile tab selected (retry):', selectedTabId);
                    
                    // Update desktop tabs
                    const retryTabButtons = Array.from(document.querySelectorAll('.tab'));
                    retryTabButtons.forEach(btn => {
                        const isActive = btn.getAttribute('aria-controls') === selectedTabId;
                        btn.classList.toggle('active', isActive);
                        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
                    });
                    
                    // Update tab panels
                    const retryTabPanels = Array.from(document.querySelectorAll('.tab-panel'));
                    retryTabPanels.forEach(panel => {
                        const isActive = panel.id === selectedTabId;
                        panel.classList.toggle('show', isActive);
                        panel.hidden = !isActive;
                    });
                });
                
                // Force dropdown to front immediately
                forceDropdownToFront();
                
                // Test if native select works, if not, show fallback
                setTimeout(() => {
                    testNativeSelectAndShowFallback();
                }, 1000);
            } else {
                console.error('Mobile tab selector still not found after retry');
                // Show fallback immediately if no native select found
                showFallbackDropdown();
            }
        }, 1000);
    }
    
    // Function to test if native select works and show fallback if needed
    function testNativeSelectAndShowFallback() {
        const nativeSelect = document.getElementById('mobile-tab-selector');
        const fallbackSelect = document.getElementById('mobile-tab-selector-fallback');
        
        if (!nativeSelect || !fallbackSelect) return;
        
        // Test if native select is working by checking if it responds to clicks
        let nativeSelectWorking = false;
        
        // Add a test click listener
        const testClick = () => {
            nativeSelectWorking = true;
            console.log('Native select is working');
        };
        
        nativeSelect.addEventListener('click', testClick, { once: true });
        
        // After a delay, check if the native select is working
        setTimeout(() => {
            if (!nativeSelectWorking) {
                console.log('Native select not working, showing fallback');
                showFallbackDropdown();
            }
        }, 2000);
    }
    
    // Function to show fallback dropdown
    function showFallbackDropdown() {
        const nativeSelect = document.getElementById('mobile-tab-selector');
        const fallbackSelect = document.getElementById('mobile-tab-selector-fallback');
        
        // Only show fallback on mobile devices
        if (window.innerWidth <= 768 && nativeSelect && fallbackSelect) {
            nativeSelect.style.display = 'none';
            fallbackSelect.style.display = 'block';
            initFallbackDropdown();
        }
    }
    
    // Initialize fallback dropdown functionality
    function initFallbackDropdown() {
        const trigger = document.getElementById('mobile-tab-selector-trigger');
        const options = document.getElementById('mobile-tab-selector-options');
        const text = document.getElementById('mobile-tab-selector-text');
        const optionElements = document.querySelectorAll('.mobile-tab-option');
        
        if (!trigger || !options || !text) return;
        
        // Toggle dropdown
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            options.classList.toggle('show');
        });
        
        // Set initial text to first option
        if (optionElements.length > 0) {
            text.textContent = optionElements[0].textContent;
            optionElements[0].classList.add('active');
        }
        
        // Handle option selection
        optionElements.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const value = option.getAttribute('data-value');
                const optionText = option.textContent;
                
                // Update display text
                text.textContent = optionText;
                
                // Update active state
                optionElements.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Hide dropdown
                options.classList.remove('show');
                
                // Update tabs and panels
                const tabButtons = Array.from(document.querySelectorAll('.tab'));
                const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
                
                tabButtons.forEach(btn => {
                    const isActive = btn.getAttribute('aria-controls') === value;
                    btn.classList.toggle('active', isActive);
                    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
                });
                
                tabPanels.forEach(panel => {
                    const isActive = panel.id === value;
                    panel.classList.toggle('show', isActive);
                    panel.hidden = !isActive;
                });
                
                console.log('Fallback dropdown selected:', value);
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!trigger.contains(e.target) && !options.contains(e.target)) {
                options.classList.remove('show');
            }
        });
        
        console.log('Fallback dropdown initialized');
    }
    
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
                
                // Update mobile selector if this panel is selected
                if (mobileTabSelector) {
                    mobileTabSelector.value = panel.id;
                }
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
                        // Check if popup already exists (from HTML)
                        let popup = notification.querySelector('.savings-popup');
                        
                        if (!popup) {
                            // Create popup dynamically only if it doesn't exist
                            popup = document.createElement('div');
                            popup.className = 'savings-popup';
                            popup.setAttribute('data-dynamic', 'true');
                            
                            // Set different amounts based on notification type
                            if (notification.classList.contains('email-notification')) {
                                popup.textContent = '+€2.300';
                            } else if (notification.classList.contains('slack-notification')) {
                                popup.textContent = '+€15.000';
                            } else if (notification.classList.contains('system-notification')) {
                                popup.textContent = '+€8.750';
                            }
                            
                            // Add to DOM
                            notification.appendChild(popup);
                        }
                        
                        // Ensure popup is initially hidden
                        popup.style.opacity = '0';
                        
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
                    // Only remove dynamically created popups, not HTML ones
                    const popup = notif.querySelector('.savings-popup');
                    if (popup && popup.hasAttribute('data-dynamic')) {
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

// Test function for mobile dropdown translation
window.testMobileDropdownTranslation = function() {
    console.log('=== Testing Mobile Dropdown Translation ===');
    
    const mobileSelector = document.getElementById('mobile-tab-selector');
    const fallbackText = document.getElementById('mobile-tab-selector-text');
    const fallbackOptions = document.querySelectorAll('.mobile-tab-option');
    const currentLang = window.language ? window.language.currentLanguage : 'unknown';
    
    console.log('Current language:', currentLang);
    console.log('Mobile selector found:', !!mobileSelector);
    console.log('Fallback text found:', !!fallbackText);
    console.log('Fallback options found:', fallbackOptions.length);
    
    if (mobileSelector) {
        const options = mobileSelector.querySelectorAll('option');
        console.log('Mobile selector options:');
        options.forEach((option, index) => {
            console.log(`  ${index + 1}. ${option.textContent} (${option.value})`);
        });
    }
    
    if (fallbackText) {
        console.log('Fallback text content:', fallbackText.textContent);
    }
    
    if (fallbackOptions.length > 0) {
        console.log('Fallback options:');
        fallbackOptions.forEach((option, index) => {
            console.log(`  ${index + 1}. ${option.textContent} (${option.getAttribute('data-value')})`);
        });
    }
    
    return {
        currentLanguage: currentLang,
        mobileSelector: !!mobileSelector,
        fallbackText: fallbackText ? fallbackText.textContent : 'N/A',
        fallbackOptionsCount: fallbackOptions.length
    };
};

// Waiting List Form Handler - Direct Google Forms submission
document.addEventListener('DOMContentLoaded', function() {
    const waitingListForm = document.getElementById('waitingListForm');
    
    if (waitingListForm) {
        waitingListForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('waitlist-email');
            const submitButton = waitingListForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            if (!emailInput.value || !emailInput.validity.valid) {
                emailInput.focus();
                return;
            }
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = window.language && window.language.currentLanguage === 'en' ? 'Reserving spot...' : 'Spot wird reserviert...';
            
            // Get the form action URL and create FormData
            const formUrl = waitingListForm.getAttribute('action');
            const formData = new FormData(waitingListForm);
            
            // Submit via fetch with no-cors mode (prevents CORS errors, form still submits successfully)
            fetch(formUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            }).then(function() {
                showSuccessMessage();
            }).catch(function(error) {
                // Even with errors in no-cors mode, submission usually succeeds
                console.log('Form submitted (no-cors mode)', error);
                showSuccessMessage();
            });
            
            function showSuccessMessage() {
                // Show success message
                submitButton.textContent = window.language && window.language.currentLanguage === 'en' ? '✓ Spot secured!' : '✓ Spot gesichert!';
                submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                
                // Reset form
                emailInput.value = '';
                
                // Reset button after 3 seconds
                setTimeout(function() {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    submitButton.style.background = '';
                }, 3000);
            }
        });
    }
});