// Language System for qado
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('qado-language') || 'de';
        this.translations = window.translations || {
            de: {
                // Navigation
                'nav.platform': 'Plattform',
                'nav.pricing': 'Preise',
                'nav.faq': 'FAQ',
                'nav.company': 'Unternehmen',
                'nav.login': 'Login',
                'nav.get-started': 'Jetzt starten',
                'nav.about': 'Über uns',
                'nav.careers': 'Karriere',
                'nav.contact': 'Kontakt',
                'nav.impressum': 'Impressum',
                'nav.datenschutz': 'Datenschutz',
                
                // Platform dropdown
                'platform.product-features': 'Produktfeatures',
                'platform.contract-review': 'Vertragsprüfung',
                'platform.order-review': 'Bestellprüfung',
                'platform.invoice-review': 'Rechnungsprüfung',
                'platform.penalty-management': 'Vertragsstrafenmanagement',
                'platform.quality-management': 'Qualitätsmanagement',
                
                // FAQ dropdown
                'faq.frequent-questions': 'Häufige Fragen',
                'faq.data-protection': 'Datenschutz',
                'faq.technical-approach': 'Technischer Ansatz',
                'faq.interfaces': 'Schnittstellen',
                'faq.industries': 'Branchen & Anwendungsfälle',
                'faq.roi': 'ROI',
                'faq.support': 'Support',
                
                // Hero Section
                'hero.title': 'Catch Overspending.',
                'hero.subtitle': 'Mit qado sparen Unternehmen im Einkauf Millionen: Preise werden konsequent optimiert, Rabatte ausgenutzt und Vertragsstrafen durchgesetzt',
                'hero.demo_button': 'Demo buchen',
                'hero.learn_more': 'Mehr erfahren',
                'hero.pill1': 'Transparenz',
                'hero.pill2': 'Weniger Arbeit',
                'hero.pill3': 'Einsparungen',
                
                // Product Section
                'product.title': 'Ausgabenreduktion. 24/7. In der ganzen Supply Chain.',
                'product.contracts.title': 'Vertragsmanagement',
                'product.contracts.description': 'qado analysiert automatisch alle Verträge und identifiziert versteckte Kostentreiber und Optimierungspotenziale in Echtzeit.',
                'product.contracts.benefit1': 'Intelligente Klausel-Erkennung',
                'product.contracts.benefit2': 'Automatische Preiskontrolle',
                'product.contracts.benefit3': 'Risikobewertung in Echtzeit',
                'product.orders.title': 'Bestelloptimierung',
                'product.orders.description': 'qado optimiert jede Bestellung automatisch und nutzt alle verfügbaren Rabatte und Vertragsbedingungen optimal aus.',
                'product.orders.benefit1': 'Intelligentes Ausnutzen von Rabatten',
                'product.orders.benefit2': 'Identifizierung von falschen Preisen',
                'product.orders.benefit3': 'Sicherstellung korrekter Lieferdaten',
                'product.invoices.title': 'Rechnungsprüfung',
                'product.invoices.description': 'qado prüft automatisch alle Rechnungen gegen Vertragsbedingungen und erkennt sofortige Abweichungen und Fehlerquellen.',
                'product.invoices.benefit1': 'Automatische Rechnungsvalidierung',
                'product.invoices.benefit2': 'Preisabweichungen erkennen',
                'product.invoices.benefit3': 'Duplikate automatisch identifizieren',
                'product.penalty.title': 'Penalty- und Qualitätsmanagement',
                'product.penalty.description': 'qado verfolgt systematisch alle Vertragsstrafen und Qualitätsverletzungen und sorgt für deren konsequente Durchsetzung.',
                'product.penalty.benefit1': 'SLA-Verletzungen automatisch identifizieren',
                'product.penalty.benefit2': 'Strukturierter Claims-Prozess',
                'product.penalty.benefit3': 'Qualitätsstandards überwachen',
                
                // Contact Page
                'contact.hero.title': 'Kontakt',
                'contact.hero.subtitle': 'Wir freuen uns auf Ihre Nachricht',
                'contact.tab.booking': 'Termin buchen',
                'contact.tab.form': 'Kontaktformular',
                'contact.booking.title': 'Termin direkt buchen',
                'contact.booking.subtitle': 'Buche einen Termin mit unserem Team für eine persönliche Demo und Beratung.',
                'contact.booking.benefit1.title': 'Flexible Zeiten',
                'contact.booking.benefit1.description': 'Wähle einen passenden Termin aus unserem Kalender',
                'contact.booking.benefit2.title': 'Personalisierte Demo',
                'contact.booking.benefit2.description': 'Maßgeschneiderte Präsentation für Ihre Anforderungen',
                'contact.form.title': 'Kontaktformular',
                'contact.form.subtitle': 'Senden Sie uns eine Nachricht und wir melden uns schnellstmöglich bei Ihnen.',
                'contact.email': 'E-Mail',
                'contact.phone': 'Telefon',
                'contact.location': 'Standort',
                'contact.form.firstname': 'Vorname *',
                'contact.form.lastname': 'Nachname *',
                'contact.form.email': 'E-Mail *',
                'contact.form.phone': 'Telefon',
                'contact.form.company': 'Unternehmen *',
                'contact.form.position': 'Position',
                'contact.form.topic': 'Thema der Anfrage (optional)',
                'contact.form.topic.demo': 'Produktdemo',
                'contact.form.topic.pricing': 'Preise und Lizenzierung',
                'contact.form.topic.partnership': 'Partnerschaft & Kooperation',
                'contact.form.topic.investor': 'Investor Relations',
                'contact.form.topic.media': 'Medien & Presse',
                'contact.form.topic.other': 'Sonstiges',
                'contact.form.message': 'Nachricht *',
                'contact.form.message.placeholder': 'Beschreiben Sie Ihr Anliegen...',
                'contact.form.privacy': 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
                'contact.form.privacy.link': 'Datenschutzerklärung',
                'contact.form.submit': 'Nachricht senden',
                'contact.form.privacy.error': 'Bitte akzeptieren Sie die Datenschutzerklärung.',
                'contact.form.field.error.firstname': 'Bitte geben Sie Ihren Vornamen ein.',
                'contact.form.field.error.lastname': 'Bitte geben Sie Ihren Nachnamen ein.',
                'contact.form.field.error.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
                'contact.form.field.error.company': 'Bitte geben Sie Ihr Unternehmen ein.',
                'contact.form.field.error.message': 'Bitte geben Sie eine Nachricht ein.',
                
                // Footer
                'footer.solutions': 'Lösungen',
                'footer.company': 'Unternehmen',
                'footer.legal': 'Rechtliches',
                'footer.copyright': 'Alle Rechte vorbehalten',
                'footer.cookie_settings': 'Cookie-Einstellungen',
                
                // Company links
                'company.about': 'Über uns',
                'company.careers': 'Karriere',
                'company.contact': 'Kontakt',
                
                // Notifications
                'notification.email': 'E-Mail',
                'notification.slack': 'Slack',
                'notification.qado': 'qado',
                'notification.now': 'Jetzt',
                'notification.time1': '2 Min',
                'notification.time2': '5 Min',
                'notification.title1': 'Indexpreis gesunken – Einsparung erkannt',
                'notification.title2': 'Lieferverzug festgestellt',
                'notification.title3': 'Rechenfehler in Rechnung erkannt',
                'notification.body1': 'Die Kupferpreise sind gefallen. Dein Vertrag sieht jetzt eine Preisreduktion von 2,3 % vor.',
                'notification.body2': 'Ein Zulieferer hat die vereinbarte Lieferfrist überschritten. Vertragsstrafe von 15.000 € möglich.',
                'notification.body3': 'In der Rechnung zu PO #7312 wurde die falsche Preisliste angewendet. Abweichung: +4,7 % gegenüber Vertrag.',
                
                // Partners
                'partners.kicker': 'Vertrauen & Expertise',
                'partners.title': 'Unsere Partner, Investoren und Erfahrungen',
                'partners.subtitle': 'Vertrauen Sie auf die Expertise von Einkauf und Supply Chain Branchenführern und die Erfahrung unserer Partner.',
                
                // References
                'reference.name1': 'Klaus Linderich',
                'reference.role1': 'Einkaufs- und Supply Chain-Leiter',
                'reference.quote1': '"Overspending systematisch anzugehen ist ein starker Hebel für unsere Profitabilität. Mit qado haben wir eine Lösung gefunden, die uns hilft, Einsparungen transparent zu machen und Vertragsstrafen automatisch zu verfolgen."',
                'reference.name2': 'Martin Dassler',
                'reference.role2': 'Geschäftsführer',
                'reference.quote2': '"Die Integration von qado in unsere bestehenden Prozesse war nahtlos. Wir sparen nicht nur Zeit, sondern haben auch die Kontrolle über unsere Ausgaben zurückgewonnen. Die KI-gestützte Prüfung funktioniert zuverlässig und effizient."',
                
                // Value Proposition
                'valueprop.title': 'Ausgabenreduktion. 24/7. In der ganzen Supply Chain.',
                'valueprop.description': '<b>Mit qado werden Verträge endlich konsequent umgesetzt:</b> Unsere KI-gestützte Software prüft automatisch jegliche Dokumente gegen die zugrunde liegenden Verträge. Abweichungen bei Preisen, Rabatten oder Vertragsstrafen werden dabei in Echtzeit erkannt, dokumentiert und auf Wunsch direkt zurückgefordert.<br><br><b>So stellen wir sicher, dass vereinbarte Konditionen auch tatsächlich realisiert werden:</b> Preise bleiben optimiert, Rabatte werden ausgeschöpft und SLA-Strafen durchgesetzt. Selbst wenn Unternehmen bestimmte Einsparungen aus strategischen Gründen nicht sofort ziehen, schafft qado volle Transparenz und damit eine belastbare Grundlage für faktenbasierte Nachverhandlungen.<br><br><b>Das Ergebnis:</b> weniger Overspending, sofort messbare Einsparungen und mehr Verhandlungsmacht ohne zusätzlichen Aufwand für den Einkauf. Dank nahtloser Integration in bestehende ERP-Systeme wird qado zum spezialisierten Ausgabenprüfer, der die Einhaltung Ihrer Verträge automatisiert sicherstellt.',
                
                // Features
                'features.title': 'Produktfunktionen',
                'features.tab.contracts': 'Vertragsprüfung',
                'features.tab.orders': 'Bestellprüfung',
                'features.tab.invoices': 'Rechnungsprüfung',
                'features.tab.penalty': 'Vertragsstrafenmanagement',
                'features.tab.quality': 'Qualitätsmanagement',
                'features.contracts.description': 'Automatisierte Vertragsanalyse mit KI-gestützter Klausel-Erkennung für maximale Transparenz und Compliance.',
                'features.contracts.bullet1': 'Verstehe jede Vertragsklausel in Sekunden',
                'features.contracts.bullet2': 'Automatischer Vergleich zu Rahmenverträgen',
                'features.contracts.bullet3': 'Live-Indexpreis-Updates',
                'features.contracts.bullet4': 'Risikobewertung in Echtzeit',
                'features.contracts.bullet5': 'Automatische Vertragsverlängerungen',
                
                // Benefits Section
                'benefits.kicker': 'Warum qado?',
                'benefits.title': 'Messbarer Mehrwert für Einkauf & Supply Chain',
                'benefits.subtitle': 'qado verwandelt Vertragsklauseln in gelebte Realität – mit Fokus auf Einsparungen, nahtlose Prozesse und sichere Daten.',
                'benefits.roi.title': 'Return on Investment (ROI)',
                'benefits.roi.description': 'Wir verdienen nur, wenn Sie sparen: Unser Value-Based-Pricing koppelt den Preis an Ihre realisierten Einsparungen.',
                'benefits.roi.tag1': 'Value Pricing',
                'benefits.roi.tag2': '2–4 % Einsparung',
                'benefits.roi.tag3': 'Sofortiger ROI',
                'benefits.ux.title': 'UX &<br>Flexibilität',
                'benefits.ux.description': 'qado passt sich an Ihre Prozesse an – nicht umgekehrt. Intuitive Oberfläche, rollenbasierte Workflows und flexible Konfiguration sorgen für schnelle Akzeptanz im Team.',
                'benefits.ux.tag1': 'Intuitiv',
                'benefits.ux.tag2': 'Rollenbasiert',
                'benefits.ux.tag3': 'Anpassbar',
                'benefits.integration.title': 'System-Integration',
                'benefits.integration.description': 'Nahtlose Anbindung an Ihre ERP- und SCM-Systeme. Offene APIs und Standardschnittstellen garantieren durchgängige Datenflüsse ohne Medienbrüche.',
                'benefits.integration.tag1': 'SAP/Oracle',
                'benefits.integration.tag2': 'Offene APIs',
                'benefits.integration.tag3': 'Auto-Import',
                'benefits.security.title': 'Datensicherheit & Compliance',
                'benefits.security.description': 'Ihre Daten bleiben geschützt: qado ist DSGVO-konform, bietet Audit-Trails und setzt auf modernste Verschlüsselung und Zero-Trust-Architektur.',
                'benefits.security.tag1': 'DSGVO',
                'benefits.security.tag2': 'Audit-Trail',
                'benefits.security.tag3': 'Verschlüsselt',
                
                // Contact Page - Additional
                'contact.booking.benefit3.title': 'Direkter Austausch',
                'contact.booking.benefit3.description': 'Stellen Sie alle Ihre Fragen direkt an unser Expertenteam',
                
                // Features Page
                'features.kicker': 'Produkt-Features',
                'features.title': 'Intelligente Vertrags- und Bestelloptimierung',
                'features.subtitle': 'Vier Kernfunktionen, die Ihr Einkaufsmanagement revolutionieren und automatisch Einsparungen generieren.',
                'features.tab.contracts': 'Vertragsmanagement',
                'features.tab.orders': 'Bestelloptimierung',
                'features.tab.invoices': 'Rechnungsprüfung',
                'features.tab.penalty': 'Penalty- und Qualitätsmanagement',
                'features.contracts.description': 'qado analysiert automatisch alle Verträge und identifiziert versteckte Kostentreiber und Optimierungspotenziale in Echtzeit.',
                'features.contracts.bullet1': 'Indexpreise durchsetzen',
                'features.contracts.bullet2': 'Rabatte und Boni sichern',
                'features.contracts.bullet3': 'Vertragsanpassungen rechtzeitig initiieren',
                'features.contracts.bullet4': 'Klare SLAs definieren',
                'features.contracts.bullet5': 'Rahmenverträge umsetzen',
                'features.orders.description': 'qado optimiert jede Bestellung automatisch und nutzt alle verfügbaren Rabatte und Vertragsbedingungen optimal aus.',
                'features.orders.bullet1': 'Maverick vermeiden',
                'features.orders.bullet2': 'Staffelpreise ausschöpfen',
                'features.orders.bullet3': 'Abrufe bündeln',
                'features.orders.bullet4': 'Artikel & Einheiten korrekt bestellen',
                'features.orders.bullet5': 'Standards statt Sonderbestellungen nutzen',
                'features.invoices.description': 'qado prüft automatisch alle Rechnungen gegen Vertragsbedingungen und erkennt sofortige Abweichungen und Fehlerquellen.',
                'features.invoices.bullet1': 'Preise konsequent abgleichen',
                'features.invoices.bullet2': 'Falsche Zuschläge erkennen',
                'features.invoices.bullet3': 'Skonti und Rabatte einfordern',
                'features.invoices.bullet4': 'Indizes korrekt berechnen',
                'features.invoices.bullet5': 'Doppelte Rechnungen verhindern',
                'features.penalty.description': 'qado verfolgt systematisch alle Vertragsstrafen und Qualitätsverletzungen und sorgt für deren konsequente Durchsetzung.',
                'features.penalty.bullet1': 'Vertragsstrafen einfordern',
                'features.penalty.bullet2': 'Qualitätsmängel abrechnen',
                'features.penalty.bullet3': 'Minderleistungen verrechnen',
                'features.penalty.bullet4': 'Gewährleistungsrechte ausschöpfen',
                'features.hero.title': 'Produktfeatures',
                'features.hero.subtitle': 'Entdecken Sie die mächtigen KI-gestützten Funktionen von qado für eine vollständig automatisierte Ausgabenprüfung',
                'features.stats.accuracy': 'Genauigkeit',
                'features.stats.monitoring': 'Überwachung',
                'features.stats.savings': 'Kosteneinsparung',
                'features.contracts.title': 'Vertragsprüfung',
                'features.contracts.dashboard.title': 'Vertragsanalyse Dashboard',
                'features.contracts.validation.title': 'Bestellvalidierung',
                'features.orders.title': 'Bestellprüfung',
                'features.invoices.title': 'Rechnungsprüfung',
                'features.invoices.processing.title': 'Rechnungsverarbeitung',
                'features.invoices.penalties.title': 'Strafenmanagement',
                'features.penalties.title': 'Vertragsstrafenmanagement',
                'features.quality.title': 'Qualitätsmanagement',
                'features.quality.dashboard.title': 'Qualitätsdashboard',
                'features.integration.title': 'Nahtlose Integration',
                'features.cta.title': 'Bereit für die Zukunft der Ausgabenprüfung?',
                
                // Pricing Page
                'pricing.hero.title': 'Transparente Preismodelle',
                'pricing.hero.subtitle': 'Wählen Sie das passende Modell für Ihre Compliance-Anforderungen',
                'pricing.section.title': 'Wählen Sie das passende Modell',
                'pricing.section.subtitle': 'Transparenz & Kontrolle – vom schnellen Einstieg bis zur vollautomatisierten Compliance.',
                
                // About Page
                'about.hero.title': 'Über qado',
                'about.mission.title': 'Unsere Mission',
                'about.values.title': 'Unsere Werte',
                'about.values.precision.title': 'Präzision',
                'about.values.efficiency.title': 'Effizienz',
                'about.values.security.title': 'Sicherheit',
                'about.values.innovation.title': 'Innovation',
                'about.team.title': 'Unser Team',
                'about.team.sarah.name': 'Dr. Sarah Weber',
                'about.team.michael.name': 'Michael Chen',
                'about.team.anna.name': 'Anna Müller',
                'about.history.title': 'Unsere Geschichte',
                'about.history.founding.title': 'Gründung',
                'about.history.first-customers.title': 'Erste Kunden',
                'about.history.series-a.title': 'Serie A',
                'about.history.expansion.title': 'Internationale Expansion',
                'about.history.ai-revolution.title': 'KI-Revolution',
                'about.why-qado.title': 'Warum qado?',
                'about.why-qado.innovation.title': 'Innovation',
                'about.why-qado.focus.title': 'Fokus',
                'about.why-qado.partnership.title': 'Partnerschaft',
                'about.technology.title': 'Unsere Technologie',
                'about.technology.ai.title': 'KI & Machine Learning',
                'about.technology.nlp.title': 'Natural Language Processing',
                'about.technology.realtime.title': 'Echtzeit-Verarbeitung',
                'about.technology.security.title': 'Enterprise Security',
                'about.cta.title': 'Bereit für die Zukunft des Einkaufs?',
                
                // Careers Page
                'careers.hero.title': 'Karriere bei qado',
                'careers.jobs.title': 'Offene Stellen',
                'careers.jobs.senior-dev.title': 'Senior Developer',
                'careers.jobs.senior-dev.expectations.title': 'Was Sie erwartet:',
                'careers.jobs.senior-dev.profile.title': 'Ihr Profil:',
                'careers.jobs.senior-dev.nice-to-have.title': 'Nice-to-have:',
                'careers.jobs.bd-intern.title': 'Business Development Internship',
                'careers.jobs.bd-intern.expectations.title': 'Was Sie erwartet:',
                'careers.jobs.bd-intern.profile.title': 'Ihr Profil:',
                'careers.jobs.bd-intern.offer.title': 'Was wir bieten:',
                'careers.process.title': 'Bewerbungsprozess',
                'careers.process.apply.title': 'Bewerbung einreichen',
                'careers.process.interview.title': 'Erstgespräch',
                'careers.process.technical.title': 'Technisches Interview',
                'careers.process.team-fit.title': 'Team-Fit',
                'careers.process.offer.title': 'Angebot',
                'careers.cta.title': 'Bereit für Ihre nächste Herausforderung?',
                
                // FAQ Page
                'faq.hero.title': 'Häufig gestellte Fragen',
                'faq.privacy.title': '🔒 Datenschutz & Sicherheit',
                'faq.technical.title': '⚙️ Technischer Ansatz',
                'faq.integration.title': '🔌 Schnittstellen & Integration',
                'faq.industries.title': '🏭 Branchen & Anwendungsfälle',
                'faq.costs.title': '💰 Kosten & ROI',
                'faq.support.title': '🛠️ Support & Service',
                'faq.cta.title': 'Haben Sie weitere Fragen?',
                
                // Login Page
                'login.title': 'Anmelden',
                
                // Index Page
                'index.cta.title': 'Jetzt Ausgabenprüfung beauftragen',
                
                // Contact Page
                'contact.location': 'Standort',
                
                // Pricing Page
                'pricing.cta.title': 'Jetzt Ausgabenprüfung beauftragen',
                
                // Common
                'common.learn_more': 'Mehr erfahren',
                'common.get_started': 'Jetzt starten',
                'common.contact': 'Kontakt',
                'common.close': 'Schließen',
                'common.accept': 'Akzeptieren',
                'common.decline': 'Ablehnen',
                'common.settings': 'Einstellungen'
            },
            en: {
                // Navigation
                'nav.platform': 'Platform',
                'nav.pricing': 'Pricing',
                'nav.faq': 'FAQ',
                'nav.company': 'Company',
                'nav.login': 'Login',
                'nav.get-started': 'Get Started',
                'nav.about': 'About Us',
                'nav.careers': 'Careers',
                'nav.contact': 'Contact',
                'nav.impressum': 'Imprint',
                'nav.datenschutz': 'Privacy Policy',
                
                // Platform dropdown
                'platform.product-features': 'Product Features',
                'platform.contract-review': 'Contract Review',
                'platform.order-review': 'Order Review',
                'platform.invoice-review': 'Invoice Review',
                'platform.penalty-management': 'Penalty Management',
                'platform.quality-management': 'Quality Management',
                
                // FAQ dropdown
                'faq.frequent-questions': 'Frequent Questions',
                'faq.data-protection': 'Data Protection',
                'faq.technical-approach': 'Technical Approach',
                'faq.interfaces': 'Interfaces',
                'faq.industries': 'Industries & Use Cases',
                'faq.roi': 'ROI',
                'faq.support': 'Support',
                
                // Hero Section
                'hero.title': 'Catch Overspending.',
                'hero.subtitle': 'With qado, companies save millions in procurement: prices are consistently optimized, discounts are utilized and contract penalties are enforced',
                'hero.demo_button': 'Book Demo',
                'hero.learn_more': 'Learn More',
                'hero.pill1': 'Transparency',
                'hero.pill2': 'Less Work',
                'hero.pill3': 'Savings',
                
                // Product Section
                'product.title': 'Expense Reduction. 24/7. Across the Entire Supply Chain.',
                'product.contracts.title': 'Contract Management',
                'product.contracts.description': 'qado automatically analyzes all contracts and identifies hidden cost drivers and optimization potential in real-time.',
                'product.contracts.benefit1': 'Intelligent Clause Recognition',
                'product.contracts.benefit2': 'Automatic Price Control',
                'product.contracts.benefit3': 'Real-time Risk Assessment',
                'product.orders.title': 'Order Optimization',
                'product.orders.description': 'qado automatically optimizes every order and optimally utilizes all available discounts and contract terms.',
                'product.orders.benefit1': 'Intelligent Discount Utilization',
                'product.orders.benefit2': 'Identification of Incorrect Prices',
                'product.orders.benefit3': 'Ensuring Correct Delivery Dates',
                'product.invoices.title': 'Invoice Review',
                'product.invoices.description': 'qado automatically checks all invoices against contract terms and immediately detects deviations and error sources.',
                'product.invoices.benefit1': 'Automatic Invoice Validation',
                'product.invoices.benefit2': 'Detect Price Deviations',
                'product.invoices.benefit3': 'Automatically Identify Duplicates',
                'product.penalty.title': 'Penalty and Quality Management',
                'product.penalty.description': 'qado systematically tracks all contract penalties and quality violations and ensures their consistent enforcement.',
                'product.penalty.benefit1': 'Automatically Identify SLA Violations',
                'product.penalty.benefit2': 'Structured Claims Process',
                'product.penalty.benefit3': 'Monitor Quality Standards',
                
                // Contact Page
                'contact.hero.title': 'Contact',
                'contact.hero.subtitle': 'We look forward to your message',
                'contact.tab.booking': 'Book Appointment',
                'contact.tab.form': 'Contact Form',
                'contact.booking.title': 'Book Appointment Directly',
                'contact.booking.subtitle': 'Book an appointment with our team for a personal demo and consultation.',
                'contact.booking.benefit1.title': 'Flexible Times',
                'contact.booking.benefit1.description': 'Choose a suitable appointment from our calendar',
                'contact.booking.benefit2.title': 'Personalized Demo',
                'contact.booking.benefit2.description': 'Tailored presentation for your requirements',
                'contact.form.title': 'Contact Form',
                'contact.form.subtitle': 'Send us a message and we will get back to you as soon as possible.',
                'contact.email': 'E-Mail',
                'contact.phone': 'Phone',
                'contact.location': 'Location',
                'contact.form.firstname': 'First Name *',
                'contact.form.lastname': 'Last Name *',
                'contact.form.email': 'E-Mail *',
                'contact.form.phone': 'Phone',
                'contact.form.company': 'Company *',
                'contact.form.position': 'Position',
                'contact.form.topic': 'Topic of Inquiry (optional)',
                'contact.form.topic.demo': 'Product Demo',
                'contact.form.topic.pricing': 'Pricing & Licensing',
                'contact.form.topic.partnership': 'Partnership & Cooperation',
                'contact.form.topic.investor': 'Investor Relations',
                'contact.form.topic.media': 'Media & Press',
                'contact.form.topic.other': 'Other',
                'contact.form.message': 'Message *',
                'contact.form.message.placeholder': 'Describe your inquiry...',
                'contact.form.privacy': 'I have read the privacy policy and agree to the processing of my data.',
                'contact.form.privacy.link': 'Privacy Policy',
                'contact.form.submit': 'Send Message',
                'contact.form.privacy.error': 'Please accept the privacy policy.',
                'contact.form.field.error.firstname': 'Please enter your first name.',
                'contact.form.field.error.lastname': 'Please enter your last name.',
                'contact.form.field.error.email': 'Please enter a valid email address.',
                'contact.form.field.error.company': 'Please enter your company.',
                'contact.form.field.error.message': 'Please enter a message.',
                
                // Footer
                'footer.solutions': 'Solutions',
                'footer.company': 'Company',
                'footer.legal': 'Legal',
                'footer.copyright': 'All rights reserved',
                'footer.cookie_settings': 'Cookie Settings',
                
                // Company links
                'company.about': 'About Us',
                'company.careers': 'Careers',
                'company.contact': 'Contact',
                
                // Notifications
                'notification.email': 'E-Mail',
                'notification.slack': 'Slack',
                'notification.qado': 'qado',
                'notification.now': 'Now',
                'notification.time1': '2 Min',
                'notification.time2': '5 Min',
                'notification.title1': 'Index price dropped – Savings detected',
                'notification.title2': 'Delivery delay identified',
                'notification.title3': 'Calculation error in invoice detected',
                'notification.body1': 'Copper prices have fallen. Your contract now provides for a price reduction of 2.3%.',
                'notification.body2': 'A supplier has exceeded the agreed delivery period. Contract penalty of €15,000 possible.',
                'notification.body3': 'The wrong price list was applied in the invoice for PO #7312. Deviation: +4.7% compared to contract.',
                
                // Partners
                'partners.kicker': 'Trust & Expertise',
                'partners.title': 'Our Partners, Investors and Experiences',
                'partners.subtitle': 'Trust in the expertise of industry leaders and the experience of our reference customers.',
                
                // References
                'reference.name1': 'Klaus Linderich',
                'reference.role1': 'Head of Procurement and Supply Chain',
                'reference.quote1': '"Systematically addressing overspending is a strong lever for our profitability. With qado, we found a solution that helps us make savings transparent and automatically track contract penalties."',
                'reference.name2': 'Martin Dassler',
                'reference.role2': 'Managing Director',
                'reference.quote2': '"The integration of qado into our existing processes was seamless. We not only save time but have also regained control over our expenses. The AI-powered review works reliably and efficiently."',
                
                // Value Proposition
                'valueprop.title': 'Expense Auditing. 24/7. Entire Value Chain.',
                'valueprop.description': 'qado is your specialized AI expense auditor that matches every order and invoice with all contract terms, enforces SLA contract penalties and makes savings transparent – fully integrated into your ERP systems.',
                
                // Features
                'features.title': 'Product Features',
                'features.tab.contracts': 'Contract Review',
                'features.tab.orders': 'Order Review',
                'features.tab.invoices': 'Invoice Review',
                'features.tab.penalty': 'Penalty Management',
                'features.tab.quality': 'Quality Management',
                'features.contracts.description': 'Automated contract analysis with AI-powered clause recognition for maximum transparency and compliance.',
                'features.contracts.bullet1': 'Understand every contract clause in seconds',
                'features.contracts.bullet2': 'Automatic comparison to framework agreements',
                'features.contracts.bullet3': 'Live index price updates',
                'features.contracts.bullet4': 'Real-time risk assessment',
                'features.contracts.bullet5': 'Automatic contract extensions',
                
                // Benefits Section
                'benefits.title': 'Why qado?',
                'benefits.roi.title': 'Immediate ROI',
                'benefits.roi.description': 'Value-based pricing ensures measurable results.',
                'benefits.ai.title': 'AI in the Background',
                'benefits.ai.description': 'Invisible, but effective – seamlessly into your processes.',
                'benefits.onboarding.title': 'Fast Onboarding',
                'benefits.onboarding.description': 'Ready in days, not months.',
                'benefits.human.title': 'Human in the Loop',
                'benefits.human.description': 'AI + human control for maximum security.',
                
                // Contact Page - Additional
                'contact.booking.benefit3.title': 'Direct Exchange',
                'contact.booking.benefit3.description': 'Ask all your questions directly to our expert team',
                
                // Features Page
                'features.title': 'Expense Reduction. 24/7. Across the Entire Supply Chain.',
                'features.tab.contracts': 'Contract Management',
                'features.tab.orders': 'Order Optimization',
                'features.tab.invoices': 'Invoice Review',
                'features.tab.penalty': 'Penalty and Quality Management',
                'features.contracts.description': 'qado automatically analyzes all contracts and identifies hidden cost drivers and optimization potential in real-time.',
                'features.contracts.bullet1': 'Enforce Index Prices',
                'features.contracts.bullet2': 'Secure Discounts and Bonuses',
                'features.contracts.bullet3': 'Initiate Contract Adjustments in Time',
                'features.contracts.bullet4': 'Define Clear SLAs',
                'features.contracts.bullet5': 'Implement Framework Agreements',
                'features.orders.description': 'qado automatically optimizes every order and optimally utilizes all available discounts and contract terms.',
                'features.orders.bullet1': 'Avoid Maverick Purchasing',
                'features.orders.bullet2': 'Utilize Tiered Pricing',
                'features.orders.bullet3': 'Bundle Call-offs',
                'features.orders.bullet4': 'Order Articles & Units Correctly',
                'features.orders.bullet5': 'Use Standards Instead of Special Orders',
                'features.invoices.description': 'qado automatically checks all invoices against contract terms and immediately detects deviations and error sources.',
                'features.invoices.bullet1': 'Consistently Compare Prices',
                'features.invoices.bullet2': 'Recognize Incorrect Surcharges',
                'features.invoices.bullet3': 'Claim Discounts and Rebates',
                'features.invoices.bullet4': 'Calculate Indices Correctly',
                'features.invoices.bullet5': 'Prevent Duplicate Invoices',
                'features.penalty.description': 'qado systematically tracks all contract penalties and quality violations and ensures their consistent enforcement.',
                'features.penalty.bullet1': 'Claim Contract Penalties',
                'features.penalty.bullet2': 'Bill Quality Defects',
                'features.penalty.bullet3': 'Charge Underperformance',
                'features.penalty.bullet4': 'Utilize Warranty Rights',
                'features.hero.title': 'Product Features',
                'features.hero.subtitle': 'Discover the powerful AI-powered features of qado for fully automated expense auditing',
                'features.stats.accuracy': 'Accuracy',
                'features.stats.monitoring': 'Monitoring',
                'features.stats.savings': 'Cost Savings',
                'features.contracts.title': 'Contract Review',
                'features.contracts.dashboard.title': 'Contract Analysis Dashboard',
                'features.contracts.validation.title': 'Order Validation',
                'features.orders.title': 'Order Review',
                'features.invoices.title': 'Invoice Review',
                'features.invoices.processing.title': 'Invoice Processing',
                'features.invoices.penalties.title': 'Penalty Management',
                'features.penalties.title': 'Contract Penalty Management',
                'features.quality.title': 'Quality Management',
                'features.quality.dashboard.title': 'Quality Dashboard',
                'features.integration.title': 'Seamless Integration',
                'features.cta.title': 'Ready for the Future of Expense Auditing?',
                
                // Pricing Page
                'pricing.hero.title': 'Transparent Pricing Models',
                'pricing.hero.subtitle': 'Choose the right model for your compliance requirements',
                'pricing.section.title': 'Choose the Right Model',
                'pricing.section.subtitle': 'Transparency & Control – from quick start to fully automated compliance.',
                
                // About Page
                'about.hero.title': 'About qado',
                'about.mission.title': 'Our Mission',
                'about.values.title': 'Our Values',
                'about.values.precision.title': 'Precision',
                'about.values.efficiency.title': 'Efficiency',
                'about.values.security.title': 'Security',
                'about.values.innovation.title': 'Innovation',
                'about.team.title': 'Our Team',
                'about.team.sarah.name': 'Dr. Sarah Weber',
                'about.team.michael.name': 'Michael Chen',
                'about.team.anna.name': 'Anna Müller',
                'about.history.title': 'Our History',
                'about.history.founding.title': 'Foundation',
                'about.history.first-customers.title': 'First Customers',
                'about.history.series-a.title': 'Series A',
                'about.history.expansion.title': 'International Expansion',
                'about.history.ai-revolution.title': 'AI Revolution',
                'about.why-qado.title': 'Why qado?',
                'about.why-qado.innovation.title': 'Innovation',
                'about.why-qado.focus.title': 'Focus',
                'about.why-qado.partnership.title': 'Partnership',
                'about.technology.title': 'Our Technology',
                'about.technology.ai.title': 'AI & Machine Learning',
                'about.technology.nlp.title': 'Natural Language Processing',
                'about.technology.realtime.title': 'Real-time Processing',
                'about.technology.security.title': 'Enterprise Security',
                'about.cta.title': 'Ready for the Future of Procurement?',
                
                // Careers Page
                'careers.hero.title': 'Careers at qado',
                'careers.jobs.title': 'Open Positions',
                'careers.jobs.senior-dev.title': 'Senior Developer',
                'careers.jobs.senior-dev.expectations.title': 'What to expect:',
                'careers.jobs.senior-dev.profile.title': 'Your profile:',
                'careers.jobs.senior-dev.nice-to-have.title': 'Nice-to-have:',
                'careers.jobs.bd-intern.title': 'Business Development Internship',
                'careers.jobs.bd-intern.expectations.title': 'What to expect:',
                'careers.jobs.bd-intern.profile.title': 'Your profile:',
                'careers.jobs.bd-intern.offer.title': 'What we offer:',
                'careers.process.title': 'Application Process',
                'careers.process.apply.title': 'Submit Application',
                'careers.process.interview.title': 'Initial Interview',
                'careers.process.technical.title': 'Technical Interview',
                'careers.process.team-fit.title': 'Team Fit',
                'careers.process.offer.title': 'Offer',
                'careers.cta.title': 'Ready for Your Next Challenge?',
                
                // FAQ Page
                'faq.hero.title': 'Frequently Asked Questions',
                'faq.privacy.title': '🔒 Data Protection & Security',
                'faq.technical.title': '⚙️ Technical Approach',
                'faq.integration.title': '🔌 Interfaces & Integration',
                'faq.industries.title': '🏭 Industries & Use Cases',
                'faq.costs.title': '💰 Costs & ROI',
                'faq.support.title': '🛠️ Support & Service',
                'faq.cta.title': 'Have More Questions?',
                
                // Login Page
                'login.title': 'Login',
                
                // Index Page
                'index.cta.title': 'Start Expense Auditing Now',
                
                // Contact Page
                'contact.location': 'Location',
                
                // Pricing Page
                'pricing.cta.title': 'Start Expense Auditing Now',
                
                // Common
                'common.learn_more': 'Learn More',
                'common.get_started': 'Get Started',
                'common.contact': 'Contact',
                'common.close': 'Close',
                'common.accept': 'Accept',
                'common.decline': 'Decline',
                'common.settings': 'Settings'
            }
        };
        
        this.init();
    }
    
    init() {
        this.updateLanguageToggle();
        this.translatePage();
        this.bindEvents();
    }
    
    updateLanguageToggle() {
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            const langText = toggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLanguage.toUpperCase();
            }
        }
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
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
        
        // Update HTML attributes
        document.documentElement.lang = this.currentLanguage;
        
        // Update page title
        const titleKey = document.querySelector('title[data-translate]');
        if (titleKey) {
            const titleTranslation = this.getTranslation(titleKey.getAttribute('data-translate'));
            if (titleTranslation) {
                document.title = titleTranslation;
            }
        }
    }
    
    getTranslation(key) {
        return this.translations[this.currentLanguage]?.[key] || key;
    }
    
    switchLanguage() {
        this.currentLanguage = this.currentLanguage === 'de' ? 'en' : 'de';
        localStorage.setItem('qado-language', this.currentLanguage);
        this.updateLanguageToggle();
        this.translatePage();
    }
    
    bindEvents() {
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.switchLanguage();
            });
        }
    }
}

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
