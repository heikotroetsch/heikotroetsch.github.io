// GDPR-compliant Cookie Consent Manager
class CookieConsent {
    constructor() {
        this.cookieName = 'qado-cookie-consent';
        this.cookieVersion = '1.0';
        this.cookieExpiry = 365; // days
        this.isSettingsOpen = false; // Track if settings modal is open
        this.categories = {
            necessary: {
                nameKey: 'cookie.necessary',
                descKey: 'cookie.necessary_desc',
                required: true,
                cookies: ['qado-cookie-consent']
            },
            functional: {
                nameKey: 'cookie.functional',
                descKey: 'cookie.functional_desc',
                required: false,
                cookies: []
            },
            analytics: {
                nameKey: 'cookie.analytics',
                descKey: 'cookie.analytics_desc',
                required: false,
                cookies: []
            }
        };
        
        this.init();
    }

    init() {
        // Simple initialization without complex waiting logic
        const existingConsent = this.getCookieConsent();
        if (!existingConsent || existingConsent.version !== this.cookieVersion) {
            // Wait a brief moment for language manager to be ready
            setTimeout(() => this.showConsentBanner(), 100);
        } else {
            this.applyConsent(existingConsent);
        }

        // Add event listeners
        this.addEventListeners();

        // Listen for language changes
        window.addEventListener('languageChanged', () => {
            this.handleLanguageChange();
        });
    }

    // Helper to get translations
    t(key) {
        try {
            if (window.languageManager && typeof window.languageManager.getTranslation === 'function') {
                return window.languageManager.getTranslation(key) || key;
            }
            // Fallback to global translations
            const lang = (localStorage && localStorage.getItem('qado-language')) || 'de';
            if (window.translations && window.translations[lang] && window.translations[lang][key]) {
                return window.translations[lang][key];
            }
        } catch (e) {
            // Silently fall back to key
        }
        return key;
    }

    showConsentBanner() {
        // Remove existing banner if present
        const existingBanner = document.getElementById('cookie-consent-banner');
        if (existingBanner) {
            existingBanner.remove();
        }

        // Create banner HTML
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h3>${this.t('cookie.title')}</h3>
                    <p>${this.t('cookie.description')}</p>
                    <p>
                        <a href="datenschutz.html" target="_blank" rel="noopener">${this.t('cookie.privacy_link')}</a>
                    </p>
                </div>
                <div class="cookie-consent-actions">
                    <button type="button" class="cookie-btn cookie-btn-accept-all" onclick="cookieConsent.acceptAll()">
                        ${this.t('cookie.accept_all')}
                    </button>
                    <button type="button" class="cookie-btn cookie-btn-reject" onclick="cookieConsent.rejectAll()">
                        ${this.t('cookie.reject_all')}
                    </button>
                    <button type="button" class="cookie-btn cookie-btn-customize" onclick="cookieConsent.showSettings()">
                        ${this.t('cookie.settings')}
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        
        // Add animation
        setTimeout(() => {
            banner.classList.add('cookie-consent-show');
        }, 100);
    }

    showSettings() {
        // Remove existing modal if present
        const existingModal = document.getElementById('cookie-settings-modal');
        if (existingModal) {
            existingModal.remove();
        }

        this.isSettingsOpen = true; // Set flag when opening settings

        const modal = document.createElement('div');
        modal.id = 'cookie-settings-modal';
        modal.className = 'cookie-settings-modal';
        let categoriesHTML = '';
        Object.keys(this.categories).forEach(key => {
            const category = this.categories[key];
            const isChecked = category.required ? 'checked disabled' : '';
            const name = this.t(category.nameKey);
            const desc = this.t(category.descKey);
            categoriesHTML += `
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookie-${key}" ${isChecked} ${category.required ? 'data-required="true"' : ''}>
                            <span class="cookie-toggle-slider"></span>
                        </label>
                        <h4>${name}</h4>
                    </div>
                    <p class="cookie-category-description">${desc}</p>
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
                    <h3>${this.t('cookie.settings_title')}</h3>
                    <button type="button" class="cookie-settings-close" onclick="cookieConsent.hideSettings()">×</button>
                </div>
                <div class="cookie-settings-body">
                    <p>${this.t('cookie.settings_description')}</p>
                    <div class="cookie-categories">
                        ${categoriesHTML}
                    </div>
                </div>
                <div class="cookie-settings-footer">
                    <button type="button" class="cookie-btn cookie-btn-secondary" onclick="cookieConsent.hideSettings()">
                        ${this.t('cookie.cancel')}
                    </button>
                    <button type="button" class="cookie-btn cookie-btn-accept" onclick="cookieConsent.saveSettings()">
                        ${this.t('cookie.save')}
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Add animation
        setTimeout(() => {
            modal.classList.add('cookie-settings-show');
        }, 100);
    }

    hideSettings() {
        const modal = document.getElementById('cookie-settings-modal');
        if (modal) {
            modal.classList.remove('cookie-settings-show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
        this.isSettingsOpen = false; // Clear flag when closing settings
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
            cookieLink.textContent = this.t('cookie.settings_link');
            cookieLink.onclick = (e) => {
                e.preventDefault();
                this.showSettings();
            };
            footerLinks.appendChild(cookieLink);
        }
    }

    handleLanguageChange() {
        // Only re-render banner if consent hasn't been given yet
        const existingConsent = this.getCookieConsent();
        const banner = document.getElementById('cookie-consent-banner');
        
        if (banner && (!existingConsent || existingConsent.version !== this.cookieVersion)) {
            // Re-render banner only if consent is needed
            this.showConsentBanner();
        }

        // Re-render modal ONLY if it's intentionally open
        if (this.isSettingsOpen) {
            this.showSettings();
        }

        // Update footer link text
        const cookieLink = document.getElementById('cookie-settings-link');
        if (cookieLink) {
            cookieLink.textContent = this.t('cookie.settings_link');
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