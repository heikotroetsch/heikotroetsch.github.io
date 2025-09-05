// qado landing page interactivity
document.addEventListener('DOMContentLoaded', function() {
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

    // Tabs behavior
    const tabButtons = Array.from(document.querySelectorAll('.tab'));
    const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
    function activateTab(index) {
        tabButtons.forEach((btn, i) => {
            const selected = i === index;
            btn.classList.toggle('active', selected);
            btn.setAttribute('aria-selected', selected ? 'true' : 'false');
        });
        tabPanels.forEach((panel, i) => {
            const show = i === index;
            panel.classList.toggle('show', show);
            if (show) panel.removeAttribute('hidden');
            else panel.setAttribute('hidden', '');
        });
    }
    tabButtons.forEach((btn, i) => {
        btn.addEventListener('click', () => activateTab(i));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') activateTab((i + 1) % tabButtons.length);
            if (e.key === 'ArrowLeft') activateTab((i - 1 + tabButtons.length) % tabButtons.length);
        });
    });

    // Language toggle (placeholder: DE/EN switch visual only)
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            langToggle.textContent = langToggle.textContent === 'DE' ? 'EN' : 'DE';
        });
    }

    // Marquee pause on hover for accessibility
    const marquee = document.querySelector('.marquee-track');
    if (marquee) {
        marquee.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
        marquee.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
    }
});