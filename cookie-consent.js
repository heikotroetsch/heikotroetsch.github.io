// GDPR-compliant Cookie Consent Manager
class CookieConsent {
    constructor() {
        this.cookieName = 'qado-cookie-consent';
        this.cookieVersion = '1.0';
        this.cookieExpiry = 365; // days
        this.categories = {
            necessary: {
                name: 'cookie.necessary',
                description: 'cookie.necessary_desc',
                required: true,
                cookies: ['qado-cookie-consent']
            },
            functional: {
                name: 'cookie.functional',
                description: 'cookie.functional_desc',
                required: false,
                cookies: []
            },
            analytics: {
                name: 'cookie.analytics',
                description: 'cookie.analytics_desc',
                required: false,
                cookies: []
            }
        };
        
        this.init();
    }

    init() {
        // Check if consent has already been given
        const existingConsent = this.getCookieConsent();
        
        if (!existingConsent) {
            // Wait for language system to be ready
            if (window.languageManager) {
                this.showConsentBanner();
            } else {
                // Wait for language system to load
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(() => this.showConsentBanner(), 100);
                });
            }
        } else {
            // Apply existing consent regardless of version
            this.applyConsent(existingConsent);
        }
        
        // Add event listeners
        this.addEventListeners();
    }

    getTranslation(key) {
        if (window.languageManager && window.languageManager.getTranslation) {
            return window.languageManager.getTranslation(key);
        }
        return key;
    }

    showConsentBanner() {
        // Remove existing banner if present
        const existingBanner = document.getElementById('cookie-consent-banner');
        if (existingBanner) {
            existingBanner.remove();
        }

        // Use HTML from components.js if available, otherwise create fallback
        if (typeof cookieBannerHTML !== 'undefined') {
            document.body.insertAdjacentHTML('beforeend', cookieBannerHTML);
        } else {
            // Fallback HTML creation
            const banner = document.createElement('div');
            banner.id = 'cookie-consent-banner';
            banner.className = 'cookie-consent-banner';
            banner.innerHTML = `
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
            `;
            document.body.appendChild(banner);
        }
        
        // Translate the banner content
        this.translateBanner();
        
        // Add animation
        setTimeout(() => {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) {
                banner.classList.add('cookie-consent-show');
            }
        }, 100);
    }

    translateBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (!banner) return;

        const elements = banner.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' && element.placeholder) {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    }

    showSettings() {
        // Remove existing modal if present
        const existingModal = document.getElementById('cookie-settings-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Use HTML from components.js if available, otherwise create fallback
        if (typeof cookieSettingsModalHTML !== 'undefined') {
            document.body.insertAdjacentHTML('beforeend', cookieSettingsModalHTML);
            
            // Populate categories
            this.populateCookieCategories();
            
            // Translate the modal content
            this.translateModal();
        } else {
            const modal = document.createElement('div');
            modal.id = 'cookie-settings-modal';
            modal.className = 'cookie-settings-modal';
            
            let categoriesHTML = '';
            Object.keys(this.categories).forEach(key => {
                const category = this.categories[key];
                const isChecked = category.required ? 'checked disabled' : '';
                const name = this.getTranslation(category.name);
                const description = this.getTranslation(category.description);
                categoriesHTML += `
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <label class="cookie-toggle">
                                <input type="checkbox" id="cookie-${key}" ${isChecked} ${category.required ? 'data-required="true"' : ''}>
                                <span class="cookie-toggle-slider"></span>
                            </label>
                            <h4>${name}</h4>
                        </div>
                        <p class="cookie-category-description">${description}</p>
                        ${category.cookies.length > 0 ? `
                            <div class="cookie-list">
                                <small>Cookies: ${category.cookies.join(', ')}</small>
                            </div>
                        ` : ''}
                    </div>
                `;
            });

            modal.innerHTML = `
                <div class="cookie-settings-overlay" onclick="cookieConsent.hideSettings()"></div>
                <div class="cookie-settings-content">
                    <div class="cookie-settings-header">
                        <h3 data-translate="cookie.settings_title">Cookie-Einstellungen anpassen</h3>
                        <button type="button" class="cookie-settings-close" onclick="cookieConsent.hideSettings()">×</button>
                    </div>
                    <div class="cookie-settings-body">
                        <p data-translate="cookie.settings_description">
                            Hier können Sie festlegen, welche Cookies Sie zulassen möchten. 
                            Notwendige Cookies können nicht deaktiviert werden.
                        </p>
                        <div class="cookie-categories">
                            ${categoriesHTML}
                        </div>
                    </div>
                    <div class="cookie-settings-footer">
                        <button type="button" class="cookie-btn cookie-btn-secondary" onclick="cookieConsent.hideSettings()" data-translate="cookie.cancel">
                            Abbrechen
                        </button>
                        <button type="button" class="cookie-btn cookie-btn-accept" onclick="cookieConsent.saveSettings()" data-translate="cookie.save">
                            Einstellungen speichern
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        // Add animation
        setTimeout(() => {
            const modal = document.getElementById('cookie-settings-modal');
            if (modal) {
                modal.classList.add('cookie-settings-show');
            }
        }, 100);
    }

    translateModal() {
        const modal = document.getElementById('cookie-settings-modal');
        if (!modal) return;

        const elements = modal.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' && element.placeholder) {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    }

    populateCookieCategories() {
        const categoriesContainer = document.getElementById('cookie-categories');
        if (!categoriesContainer) return;

        let categoriesHTML = '';
        Object.keys(this.categories).forEach(key => {
            const category = this.categories[key];
            const isChecked = category.required ? 'checked disabled' : '';
            const name = this.getTranslation(category.name);
            const description = this.getTranslation(category.description);
            categoriesHTML += `
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-${key}" ${isChecked} ${category.required ? 'data-required="true"' : ''}>
                            <span class="cookie-toggle-slider"></span>
                        </label>
                        <h4>${name}</h4>
                    </div>
                    <p class="cookie-category-description">${description}</p>
                    ${category.cookies.length > 0 ? `
                        <div class="cookie-list">
                            <small>Cookies: ${category.cookies.join(', ')}</small>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        categoriesContainer.innerHTML = categoriesHTML;
    }

    hideSettings() {
        const modal = document.getElementById('cookie-settings-modal');
        if (modal) {
            modal.classList.remove('cookie-settings-show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }

    acceptAll() {
        const consent = {
            version: this.cookieVersion,
            timestamp: new Date().toISOString(),
            categories: {}
        };

        Object.keys(this.categories).forEach(key => {
            consent.categories[key] = true;
        });

        this.saveConsent(consent);
        this.hideConsentBanner();
        this.applyConsent(consent);
    }

    rejectAll() {
        const consent = {
            version: this.cookieVersion,
            timestamp: new Date().toISOString(),
            categories: {}
        };

        Object.keys(this.categories).forEach(key => {
            consent.categories[key] = this.categories[key].required;
        });

        this.saveConsent(consent);
        this.hideConsentBanner();
        this.applyConsent(consent);
    }

    saveSettings() {
        const consent = {
            version: this.cookieVersion,
            timestamp: new Date().toISOString(),
            categories: {}
        };

        Object.keys(this.categories).forEach(key => {
            const checkbox = document.getElementById(`cookie-${key}`);
            consent.categories[key] = checkbox ? checkbox.checked : this.categories[key].required;
        });

        this.saveConsent(consent);
        this.hideSettings();
        this.hideConsentBanner();
        this.applyConsent(consent);
    }

    saveConsent(consent) {
        const consentString = JSON.stringify(consent);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + this.cookieExpiry);
        
        // Set cookie with multiple fallback methods
        try {
            document.cookie = `${this.cookieName}=${encodeURIComponent(consentString)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict; Secure`;
        } catch (e) {
            // Fallback for older browsers
            document.cookie = `${this.cookieName}=${encodeURIComponent(consentString)}; expires=${expiryDate.toUTCString()}; path=/`;
        }
        
        // Also store in localStorage as backup
        try {
            localStorage.setItem(this.cookieName, consentString);
        } catch (e) {
            console.warn('localStorage not available for cookie consent backup');
        }
    }

    getCookieConsent() {
        // First try to get from cookies
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === this.cookieName) {
                try {
                    return JSON.parse(decodeURIComponent(value));
                } catch (e) {
                    console.warn('Failed to parse cookie consent from cookie');
                }
            }
        }
        
        // Fallback to localStorage
        try {
            const stored = localStorage.getItem(this.cookieName);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.warn('Failed to parse cookie consent from localStorage');
        }
        
        return null;
    }

    applyConsent(consent) {
        // Apply consent settings
        Object.keys(consent.categories).forEach(category => {
            const isAllowed = consent.categories[category];
            
            // Enable/disable tracking based on consent
            switch (category) {
                case 'analytics':
                    if (isAllowed) {
                        this.enableAnalytics();
                    } else {
                        this.disableAnalytics();
                    }
                    break;
                case 'functional':
                    if (isAllowed) {
                        this.enableFunctional();
                    } else {
                        this.disableFunctional();
                    }
                    break;
            }
        });

        // Fire consent event
        window.dispatchEvent(new CustomEvent('cookieConsentApplied', { 
            detail: consent 
        }));
    }

    enableAnalytics() {
        // Add analytics code here when needed
        console.log('Analytics cookies enabled');
    }

    disableAnalytics() {
        // Remove analytics code here when needed
        console.log('Analytics cookies disabled');
    }

    enableFunctional() {
        // Add functional cookies here when needed
        console.log('Functional cookies enabled');
    }

    disableFunctional() {
        // Remove functional cookies here when needed
        console.log('Functional cookies disabled');
    }

    hideConsentBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('cookie-consent-show');
            banner.classList.add('cookie-consent-hidden');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    addEventListeners() {
        // Add cookie settings link to footer
        const footerLinks = document.querySelector('.footer-links');
        if (footerLinks && !document.getElementById('cookie-settings-link')) {
            const cookieLink = document.createElement('a');
            cookieLink.id = 'cookie-settings-link';
            cookieLink.href = '#';
            cookieLink.setAttribute('data-translate', 'cookie.settings_link');
            cookieLink.textContent = this.getTranslation('cookie.settings_link');
            cookieLink.onclick = (e) => {
                e.preventDefault();
                this.showSettings();
            };
            footerLinks.appendChild(cookieLink);
        }

        // Listen for language changes to retranslate cookie elements
        window.addEventListener('languageChanged', () => {
            this.translateBanner();
            this.translateModal();
            this.populateCookieCategories();
        });
    }

    // Public method to revoke consent
    revokeConsent() {
        document.cookie = `${this.cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        try {
            localStorage.removeItem(this.cookieName);
        } catch (e) {
            console.warn('Failed to remove from localStorage');
        }
        location.reload();
    }

    // Public method to clear consent for testing
    clearConsent() {
        document.cookie = `${this.cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        try {
            localStorage.removeItem(this.cookieName);
        } catch (e) {
            console.warn('Failed to remove from localStorage');
        }
        this.showConsentBanner();
    }
    
    // Debug method to check cookie status
    debugCookieStatus() {
        const cookieConsent = this.getCookieConsent();
        console.log('Cookie Consent Status:', cookieConsent);
        console.log('All Cookies:', document.cookie);
        console.log('localStorage backup:', localStorage.getItem(this.cookieName));
        return cookieConsent;
    }
}

// Initialize cookie consent when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for language system to be ready
    if (window.languageManager) {
        window.cookieConsent = new CookieConsent();
    } else {
        // Wait a bit for language system to load
        setTimeout(() => {
            window.cookieConsent = new CookieConsent();
        }, 100);
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CookieConsent;
} 