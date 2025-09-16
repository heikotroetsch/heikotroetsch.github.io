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
        
        if (nativeSelect && fallbackSelect) {
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