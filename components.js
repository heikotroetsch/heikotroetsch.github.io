// Header, Footer and Cookie Components
const cookieBannerHTML = `
<div id="cookie-consent-banner" class="cookie-consent-banner">
    <div class="cookie-consent-content">
        <div class="cookie-consent-text">
            <h3 data-translate="cookie.title">🍪 Cookie-Einstellungen</h3>
            <p data-translate="cookie.description">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                Einige Cookies sind notwendig für das Funktionieren der Seite, während andere uns helfen, 
                die Website zu verbessern.
            </p>
            <p>
                <a href="datenschutz.html" target="_blank" rel="noopener" data-translate="cookie.privacy_link">Mehr Informationen in unserer Datenschutzerklärung</a>
            </p>
        </div>
        <div class="cookie-consent-actions">
            <button type="button" class="cookie-btn cookie-btn-accept-all" onclick="cookieConsent.acceptAll()" data-translate="cookie.accept_all">
                Alle akzeptieren
            </button>
            <button type="button" class="cookie-btn cookie-btn-reject" onclick="cookieConsent.rejectAll()" data-translate="cookie.reject_all">
                Alle ablehnen
            </button>
            <button type="button" class="cookie-btn cookie-btn-customize" onclick="cookieConsent.showSettings()" data-translate="cookie.settings">
                Einstellungen
            </button>
        </div>
    </div>
</div>`;

const cookieSettingsModalHTML = `
<div id="cookie-settings-modal" class="cookie-settings-modal">
    <div class="cookie-settings-overlay" onclick="cookieConsent.hideSettings()"></div>
    <div class="cookie-settings-content">
        <div class="cookie-settings-header">
            <h3 data-translate="cookie.settings_title">Cookie-Einstellungen</h3>
            <button type="button" class="cookie-close" onclick="cookieConsent.hideSettings()">&times;</button>
        </div>
        <div class="cookie-settings-body">
            <p data-translate="cookie.settings_description">Wählen Sie aus, welche Cookies Sie akzeptieren möchten:</p>
            <div class="cookie-categories" id="cookie-categories">
                <!-- Categories will be populated by JavaScript -->
            </div>
        </div>
        <div class="cookie-settings-footer">
            <button type="button" class="cookie-btn cookie-btn-secondary" onclick="cookieConsent.hideSettings()" data-translate="cookie.cancel">
                Abbrechen
            </button>
            <button type="button" class="cookie-btn cookie-btn-primary" onclick="cookieConsent.saveSettings()" data-translate="cookie.save">
                Einstellungen speichern
            </button>
        </div>
    </div>
</div>`;

const headerHTML = `
<header class="site-header" id="top">
    <div class="header-inner">
        <a href="index.html" class="brand" aria-label="qado Home">
            <img src="assets/qado_logo.svg" alt="qado Logo" class="brand-logo">
        </a>
        <nav class="main-nav" aria-label="Hauptnavigation">
            <div class="nav-item dropdown">
                <a href="index.html#features" class="nav-link" data-translate="nav.platform">Plattform</a>
                <div class="dropdown-menu">
                    <div class="dropdown-column">
                        <h4 data-translate="platform.product-features">Produktfeatures</h4>
                        <a href="index.html#features" class="dropdown-link" data-translate="platform.contract-review">Vertragsmanagement</a>
                        <a href="index.html#features" class="dropdown-link" data-translate="platform.order-review">Bestelloptimierung</a>
                        <a href="index.html#features" class="dropdown-link" data-translate="platform.invoice-review">Rechnungsprüfung</a>
                        <a href="index.html#features" class="dropdown-link" data-translate="platform.penalty-management">Penalty- und Qualitätsmanagement</a>
                    </div>
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="faq.html" class="nav-link" data-translate="nav.faq">FAQ</a>
                <div class="dropdown-menu">
                    <div class="dropdown-column">
                        <h4 data-translate="faq.frequent-questions">Häufige Fragen</h4>
                        <a href="faq.html#was-ist-qado" class="dropdown-link" data-translate="faq.our-approach">Unser Ansatz</a>
                        <a href="faq.html#integration-technik" class="dropdown-link" data-translate="faq.integration-tech">Integration & Technik</a>
                        <a href="faq.html#kosten-roi" class="dropdown-link" data-translate="faq.costs-roi">Kosten & ROI</a>
                        <a href="faq.html#datenschutz-sicherheit" class="dropdown-link" data-translate="faq.data-protection">Datenschutz & Sicherheit</a>
                    </div>
                </div>
            </div>
            <div class="nav-item">
                <a href="about.html" class="nav-link" data-translate="company.about">Über uns</a>
            </div>
            
            <!-- Mobile CTA - only visible in mobile hamburger menu -->
            <div class="mobile-cta">
                <a href="login.html" class="login-link" data-translate="nav.login">
                    Login
                </a>
                <a class="btn btn-primary" href="contact.html" data-translate="nav.get-started">Jetzt starten</a>
                <button class="lang-toggle" id="mobile-lang-toggle">
                    <span class="lang-text">DE</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z"/>
                    </svg>
                </button>
            </div>
            
        </nav>
        <div class="header-cta">
            <a href="login.html" class="login-link" id="login-btn" data-translate="nav.login">
                Login
            </a>
            <a class="btn btn-primary" href="contact.html" data-translate="nav.get-started">Jetzt starten</a>
            <button class="lang-toggle" id="lang-toggle">
                <span class="lang-text">DE</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </button>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Navigation öffnen" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>`;

const footerHTML = `
<footer class="site-footer" role="contentinfo">
    <div class="container-xl footer-grid">
        <div class="footer-brand">
            <img src="assets/qado_logo_white.svg" alt="qado Logo" class="footer-logo">
            <p class="slogan" data-translate="footer.slogan">Catch Overspending</p>
            <p class="badges" data-translate="footer.badges">100% DSGVO-konform · Made in Germany</p>
        </div>
        <div class="footer-links">
            <div class="col">
                <h4 data-translate="footer.solutions">Lösungen</h4>
                <a href="index.html#features" class="dropdown-link" data-translate="platform.contract-review">Vertragsmanagement</a>
                <a href="index.html#features" class="dropdown-link" data-translate="platform.order-review">Bestelloptimierung</a>
                <a href="index.html#features" class="dropdown-link" data-translate="platform.invoice-review">Rechnungsprüfung</a>
                <a href="index.html#features" class="dropdown-link" data-translate="platform.penalty-management">Penalty- und Qualitätsmanagement</a>
            </div>
            <div class="col">
                <h4 data-translate="footer.company">Unternehmen</h4>
                <a href="about.html" data-translate="company.about">Über uns</a>
                <a href="contact.html" data-translate="company.contact">Kontakt</a>
                <a href="impressum.html" data-translate="nav.impressum">Impressum</a>
                <a href="datenschutz.html" data-translate="nav.datenschutz">Datenschutz</a>
            </div>
        </div>
    </div>
    <div class="container-xl footer-bottom">
        <div class="footer-bottom-content">
            <button class="cookie-settings-toggle" onclick="cookieConsent.showSettings()" title="Cookie-Einstellungen">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zM9.75 21.79c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.12.12.12.32 0 .44-.1.1-.23.15-.37.15z"/>
                    <path d="M14.26 14.01c-.1 0-.2-.03-.29-.08-.23-.16-.28-.47-.12-.7.16-.23.47-.28.7-.12.23.16.28.47.12.7-.08.11-.2.16-.33.16zM17.74 14.01c-.1 0-.2-.03-.29-.08-.23-.16-.28-.47-.12-.7.16-.23.47-.28.7-.12.23.16.28.47.12.7-.08.11-.2.16-.33.16zM12.01 16.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                </svg>
            </button>
            <p>© 2025 qado GbR. <span data-translate="footer.copyright">Alle Rechte vorbehalten.</span></p>
        </div>
    </div>
</footer>`;

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
    
    // Load cookie components
    loadCookieComponents();
    
    // Re-initialize header functionality after loading
    initHeaderFunctionality();
    
    // Initialize platform dropdown tab switching
    initPlatformDropdownTabs();
    
    // Check for stored tab activation
    checkForTabActivation();
    
    // Re-initialize mobile tab selector after components are loaded
    initMobileTabSelector();
});

// Load cookie components
function loadCookieComponents() {
    // Add cookie banner to body if not already present
    if (!document.getElementById('cookie-consent-banner')) {
        document.body.insertAdjacentHTML('beforeend', cookieBannerHTML);
    }
    
    // Add cookie settings modal to body if not already present
    if (!document.getElementById('cookie-settings-modal')) {
        document.body.insertAdjacentHTML('beforeend', cookieSettingsModalHTML);
    }
}

// Initialize header functionality (dropdowns, hamburger menu, etc.)
function initHeaderFunctionality() {
    // Language toggle functionality is now handled by language.js

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            this.setAttribute('aria-expanded', this.classList.contains('active'));
        });
    }

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const navLink = dropdown.querySelector('.nav-link');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        let hideTimeout;
        
        if (navLink && dropdownMenu) {
            // Show dropdown on hover
            dropdown.addEventListener('mouseenter', function() {
                // Clear any pending hide timeout
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
                
                dropdownMenu.style.display = 'block';
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
            });
            
            // Hide dropdown with delay on mouse leave
            dropdown.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(() => {
                    dropdownMenu.style.display = 'none';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                }, 300); // 300ms delay
            });
            
            // Keep dropdown open when hovering over the menu itself
            dropdownMenu.addEventListener('mouseenter', function() {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
            });
            
            // Hide dropdown when leaving the menu
            dropdownMenu.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(() => {
                    dropdownMenu.style.display = 'none';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                }, 300);
            });
        }
    });
}

// Favicon Configuration
const FAVICON_PATH = 'assets/qado_contrast.png';

function setFavicon() {
    // Remove existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel*="icon"], link[rel*="apple-touch-icon"]');
    existingFavicons.forEach(link => link.remove());
    
    // Add new favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = FAVICON_PATH;
    document.head.appendChild(favicon);
    
    // Add Apple touch icon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.href = FAVICON_PATH;
    document.head.appendChild(appleTouchIcon);
}

// Initialize favicon when DOM is loaded
document.addEventListener('DOMContentLoaded', setFavicon);

// Platform dropdown tab switching functionality
function initPlatformDropdownTabs() {
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    console.log('Found dropdown links:', dropdownLinks.length);
    
    dropdownLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        const text = link.textContent.trim();
        console.log(`Link ${index}: href="${href}", text="${text}"`);
        
        // Check if this is a platform dropdown link (contains #features)
        if (href && href.includes('#features')) {
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
    
    // Check if we're already on the index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        // We're already on the index page, switch tab directly
        switchTab(linkText);
        // Scroll to features section
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Navigate to the landing page first
        window.location.href = 'index.html#features';
        
        // Store the tab to activate in sessionStorage
        sessionStorage.setItem('activateTab', linkText);
    }
}

// Function to switch tabs based on text content (only available on index.html)
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
            console.log('Successfully switched to tab:', targetTabId);
        } else {
            console.error('Could not find target tab or panel:', targetTabId);
        }
    } else {
        console.error('No mapping found for link text:', linkText);
    }
}

// Check for stored tab activation when page loads
function checkForTabActivation() {
    const tabToActivate = sessionStorage.getItem('activateTab');
    if (tabToActivate) {
        console.log('Activating stored tab:', tabToActivate);
        // Wait a bit for the page to fully load
        setTimeout(() => {
            switchTab(tabToActivate);
            sessionStorage.removeItem('activateTab');
        }, 1000);
    }
}

// Initialize mobile tab selector functionality
function initMobileTabSelector() {
    const mobileTabSelector = document.getElementById('mobile-tab-selector');
    console.log('Initializing mobile tab selector:', !!mobileTabSelector);
    
    if (mobileTabSelector) {
        // Remove any existing event listeners to prevent duplicates
        const newMobileTabSelector = mobileTabSelector.cloneNode(true);
        mobileTabSelector.parentNode.replaceChild(newMobileTabSelector, mobileTabSelector);
        
        newMobileTabSelector.addEventListener('change', function() {
            const selectedTabId = this.value;
            console.log('Mobile tab selected (components):', selectedTabId);
            
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
        
        console.log('Mobile tab selector initialized successfully');
    } else {
        console.error('Mobile tab selector not found in components.js');
    }
}

// Make switchTab available globally for testing
window.switchTab = switchTab;
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

// Test mobile tab selector functionality
window.testMobileTabSelector = function() {
    console.log('=== Testing Mobile Tab Selector ===');
    const mobileTabSelector = document.getElementById('mobile-tab-selector');
    console.log('Mobile tab selector found:', !!mobileTabSelector);
    
    if (mobileTabSelector) {
        console.log('Current value:', mobileTabSelector.value);
        console.log('Available options:', Array.from(mobileTabSelector.options).map(opt => opt.value));
        
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

// Initialize mobile language toggle
function initMobileLangToggle() {
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    const desktopLangToggle = document.getElementById('lang-toggle');
    
    if (mobileLangToggle && desktopLangToggle) {
        // Sync mobile toggle with desktop toggle state
        const updateMobileToggle = () => {
            const langText = desktopLangToggle.querySelector('.lang-text');
            const mobileLangText = mobileLangToggle.querySelector('.lang-text');
            if (langText && mobileLangText) {
                mobileLangText.textContent = langText.textContent;
            }
        };
        
        // Initial sync
        updateMobileToggle();
        
        // Listen for changes on desktop toggle
        desktopLangToggle.addEventListener('click', () => {
            setTimeout(updateMobileToggle, 100);
        });
        
        // Handle mobile toggle clicks
        mobileLangToggle.addEventListener('click', () => {
            // Trigger the desktop toggle click
            desktopLangToggle.click();
        });
        
        console.log('Mobile language toggle initialized');
    } else {
        console.error('Mobile or desktop language toggle not found');
    }
}

// Initialize mobile language toggle when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileLangToggle();
});
