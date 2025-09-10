// GDPR-compliant Cookie Consent Manager
class CookieConsent {
    constructor() {
        this.cookieName = 'qado-cookie-consent';
        this.cookieVersion = '1.0';
        this.cookieExpiry = 365; // days
        this.categories = {
            necessary: {
                name: 'Notwendige Cookies',
                description: 'Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.',
                required: true,
                cookies: ['qado-cookie-consent']
            },
            functional: {
                name: 'Funktionale Cookies',
                description: 'Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung.',
                required: false,
                cookies: []
            },
            analytics: {
                name: 'Analyse Cookies',
                description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
                required: false,
                cookies: []
            }
        };
        
        this.init();
    }

    init() {
        // Check if consent has already been given
        const existingConsent = this.getCookieConsent();
        
        if (!existingConsent || existingConsent.version !== this.cookieVersion) {
            this.showConsentBanner();
        } else {
            this.applyConsent(existingConsent);
        }
        
        // Add event listeners
        this.addEventListeners();
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
                        <h3>🍪 Cookie-Einstellungen</h3>
                        <p>
                            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                            Einige Cookies sind notwendig für das Funktionieren der Seite, während andere uns helfen, 
                            die Website zu verbessern.
                        </p>
                        <p>
                            <a href="datenschutz.html" target="_blank" rel="noopener">Mehr Informationen in unserer Datenschutzerklärung</a>
                        </p>
                    </div>
                    <div class="cookie-consent-actions">
                        <button type="button" class="cookie-btn cookie-btn-accept-all" onclick="cookieConsent.acceptAll()">
                            Alle akzeptieren
                        </button>
                        <button type="button" class="cookie-btn cookie-btn-reject" onclick="cookieConsent.rejectAll()">
                            Alle ablehnen
                        </button>
                        <button type="button" class="cookie-btn cookie-btn-customize" onclick="cookieConsent.showSettings()">
                            Einstellungen
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(banner);
        }
        
        // Add animation
        setTimeout(() => {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) {
                banner.classList.add('cookie-consent-show');
            }
        }, 100);
    }

    showSettings() {
        // Remove existing modal if present
        const existingModal = document.getElementById('cookie-settings-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = 'cookie-settings-modal';
        modal.className = 'cookie-settings-modal';
        
        let categoriesHTML = '';
        Object.keys(this.categories).forEach(key => {
            const category = this.categories[key];
            const isChecked = category.required ? 'checked disabled' : '';
            categoriesHTML += `
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-${key}" ${isChecked} ${category.required ? 'data-required="true"' : ''}>
                            <span class="cookie-toggle-slider"></span>
                        </label>
                        <h4>${category.name}</h4>
                    </div>
                    <p class="cookie-category-description">${category.description}</p>
                    ${category.cookies.length > 0 ? `
                        <div class="cookie-list">
                            <small>Cookies: ${category.cookies.join(', ')}</small>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        // Use HTML from components.js if available, otherwise create fallback
        if (typeof cookieSettingsModalHTML !== 'undefined') {
            document.body.insertAdjacentHTML('beforeend', cookieSettingsModalHTML);
            
            // Populate categories
            this.populateCookieCategories();
        } else {
            modal.innerHTML = `
                <div class="cookie-settings-overlay" onclick="cookieConsent.hideSettings()"></div>
                <div class="cookie-settings-content">
                    <div class="cookie-settings-header">
                        <h3>Cookie-Einstellungen anpassen</h3>
                        <button type="button" class="cookie-settings-close" onclick="cookieConsent.hideSettings()">×</button>
                    </div>
                    <div class="cookie-settings-body">
                        <p>
                            Hier können Sie festlegen, welche Cookies Sie zulassen möchten. 
                            Notwendige Cookies können nicht deaktiviert werden.
                        </p>
                        <div class="cookie-categories">
                            ${categoriesHTML}
                        </div>
                    </div>
                    <div class="cookie-settings-footer">
                        <button type="button" class="cookie-btn cookie-btn-secondary" onclick="cookieConsent.hideSettings()">
                            Abbrechen
                        </button>
                        <button type="button" class="cookie-btn cookie-btn-accept" onclick="cookieConsent.saveSettings()">
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

    populateCookieCategories() {
        const categoriesContainer = document.getElementById('cookie-categories');
        if (!categoriesContainer) return;

        let categoriesHTML = '';
        Object.keys(this.categories).forEach(key => {
            const category = this.categories[key];
            const isChecked = category.required ? 'checked disabled' : '';
            categoriesHTML += `
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-${key}" ${isChecked} ${category.required ? 'data-required="true"' : ''}>
                            <span class="cookie-toggle-slider"></span>
                        </label>
                        <h4>${category.name}</h4>
                    </div>
                    <p class="cookie-category-description">${category.description}</p>
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
        
        document.cookie = `${this.cookieName}=${consentString}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`;
    }

    getCookieConsent() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === this.cookieName) {
                try {
                    return JSON.parse(decodeURIComponent(value));
                } catch (e) {
                    return null;
                }
            }
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
            cookieLink.textContent = 'Cookie-Einstellungen';
            cookieLink.onclick = (e) => {
                e.preventDefault();
                this.showSettings();
            };
            footerLinks.appendChild(cookieLink);
        }
    }

    // Public method to revoke consent
    revokeConsent() {
        document.cookie = `${this.cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        location.reload();
    }
}

// Initialize cookie consent when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.cookieConsent = new CookieConsent();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CookieConsent;
} 