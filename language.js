// Language System for qado
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('qado-language') || 'de';
        this.translations = window.translations || {
            de: {
                // Navigation
                'nav.platform': 'Plattform',
                'nav.approach': 'Unser Ansatz',
                'nav.faq': 'FAQ',
                'nav.login': 'Login',
                'nav.get-started': 'Jetzt starten',
                'nav.about': 'Über uns',
                'nav.careers': 'Karriere',
                'nav.contact': 'Kontakt',
                'nav.impressum': 'Impressum',
                'nav.datenschutz': 'Datenschutz',
                
                // Platform dropdown
                'platform.product-features': 'Produktfeatures',
                'platform.contract-review': 'Vertragsmanagement',
                'platform.order-review': 'Bestelloptimierung',
                'platform.invoice-review': 'Rechnungsprüfung',
                'platform.penalty-management': 'Penalty- und Qualitätsmanagement',
                'platform.quality-management': 'Qualitätsmanagement',
                
                // FAQ dropdown
                'faq.frequent-questions': 'Häufige Fragen',
                'faq.our-approach': 'Unser Ansatz',
                'faq.integration-tech': 'Integration & Technik',
                'faq.costs-roi': 'Kosten & ROI',
                'faq.data-protection': 'Datenschutz & Sicherheit',
                
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
                'contact.other.title': 'Anderer Kontakt',
                'contact.other.subtitle': 'Wählen Sie Ihre bevorzugte Kontaktmethode:',
                'contact.other.email': 'E-Mail',
                'contact.other.phone': 'Telefon',
                'contact.other.email.description': 'Schreiben Sie uns eine E-Mail und wir melden uns schnellstmöglich bei Ihnen.',
                'contact.other.phone.description': 'Rufen Sie uns direkt an für eine persönliche Beratung.',
                'contact.other.location.description': 'Unser Hauptsitz befindet sich in München, Deutschland.',
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
                
                // Login page
                'login.title': 'Anmelden',
                'login.email.label': 'E-Mail-Adresse',
                'login.email.placeholder': 'ihre.email@beispiel.de',
                'login.password.label': 'Passwort',
                'login.password.placeholder': 'Ihr Passwort',
                'login.password.toggle': 'Passwort anzeigen/verbergen',
                'login.remember': 'Angemeldet bleiben',
                'login.button': 'Anmelden',
                'login.errors.email.required': 'E-Mail-Adresse ist erforderlich',
                'login.errors.email.invalid': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
                'login.errors.password.required': 'Passwort ist erforderlich',
                'login.errors.password.length': 'Passwort muss mindestens 6 Zeichen lang sein',
                'login.errors.credentials': 'Benutzername und/oder Passwort sind falsch',
                
                // Footer
                'footer.solutions': 'Lösungen',
                'footer.company': 'Unternehmen',
                'footer.legal': 'Rechtliches',
                'footer.copyright': 'Alle Rechte vorbehalten',
                'footer.cookie_settings': 'Cookie-Einstellungen',
                'footer.slogan': 'Catch Overspending',
                'footer.badges': '100% DSGVO-konform · Made in Germany',
                
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
                'notification.title1': 'Indexpreis gesunken',
                'notification.title2': 'Lieferverzug festgestellt',
                'notification.title3': 'Rechnungsfehler erkannt',
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
                'valueprop.description': '<b>Mit qado werden Verträge endlich konsequent umgesetzt:</b> Unsere KI-gestützte Software prüft automatisch jegliche Dokumente gegen die zugrunde liegenden Verträge. Abweichungen bei Preisen, Rabatten oder Vertragsstrafen werden dabei in Echtzeit erkannt, dokumentiert und auf Wunsch direkt zurückgefordert.<br><br><b>So stellen wir sicher, dass vereinbarte Konditionen auch tatsächlich realisiert werden:</b> Preise bleiben optimiert, Rabatte werden ausgeschöpft und SLA-Strafen durchgesetzt. Selbst wenn Unternehmen bestimmte Einsparungen aus strategischen Gründen nicht sofort ziehen, schafft qado volle Transparenz und damit eine belastbare Grundlage für faktenbasierte Nachverhandlungen.<br><br><b>Das Ergebnis:</b> Weniger Overspending, sofort messbare Einsparungen und mehr Verhandlungsmacht ohne zusätzlichen Aufwand für den Einkauf. Dank nahtloser Integration in bestehende ERP-Systeme wird qado zum spezialisierten Ausgabenprüfer, der die Einhaltung Ihrer Verträge automatisiert sicherstellt.',
                
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
                'benefits.integration.tag1': 'ERP/SCM-Systeme',
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
                'index.cta.button': 'Kontakt aufnehmen',
                
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
                'common.settings': 'Einstellungen',
                
                // Missing translations for hardcoded text
                'challenge.complex_contracts': 'Komplexe Verträge',
                'challenge.overloaded_staff': 'Überlastete Mitarbeiter',
                'challenge.rigid_erp': 'Starre ERP',
                'challenge.huge_data': 'Riesige Datenmengen',
                'reference.aptar.quote': 'Um die Einhaltung von komplexen Konditionen schnell zu prüfen haben wir bislang keine Lösung. qado hat uns dabei geholfen, systematisch Overspending zu identifizieren und Vertragsbedingungen automatisch zu überwachen.',
                'features.aria_label': 'Funktionen auswählen',
                
                // About page translations
                'about.vision.title': 'Unsere Vision',
                'about.vision.description': 'Unternehmen verhandeln komplexe Preis- und Strafklauseln mit Lieferanten aus, aber nach Vertragsabschluss überwacht niemand, ob die vereinbarten Einsparungen tatsächlich realisiert werden. Unternehmen verlieren dadurch Millionen.',
                'about.vision.solution': 'Genau da setzen wir an: Unsere KI-Software optimiert Preise konsequent, nutzt Rabatte aus und setzt Vertragsstrafen durch. Das macht qado, indem es Bestellungen, Rechnungen und Wareneingänge gegen Verträge prüft.',
                'about.stats.savings': 'Kosteneinsparungen',
                'about.stats.savings_desc': 'der Beschaffungskosten',
                'about.stats.monitoring': 'Echtzeit-Überwachung',
                'about.stats.monitoring_desc': 'automatische Prüfung',
                'about.stats.accuracy': 'Genauigkeit',
                'about.stats.accuracy_desc': 'bei der Erkennung',
                'about.team.title': 'Unser Team',
                'about.team.subtitle': 'Wir kombinieren tiefgreifende Branchenerfahrung mit technologischer Innovation, um Unternehmen dabei zu helfen, ihre Einkaufsprozesse zu optimieren und Millionen zu sparen.',
                'about.cta.title': 'Bereit für die Zukunft des Einkaufs?',
                'about.cta.subtitle': 'Lassen Sie uns gemeinsam Ihre Einkaufsprozesse revolutionieren.',
                'about.cta.demo': 'Demo anfragen',
                'about.cta.back': 'Zurück zur Startseite',
                
                // FAQ page translations
                'faq.hero.subtitle': 'Antworten auf die wichtigsten Fragen zu qado und unserer KI-gestützten Overspending-Vermeidung',
                'faq.what_is_qado.question': 'Was ist qado?',
                'faq.what_is_qado.answer': 'qado ist eine KI-Software für die Supply Chain, die Unternehmen dabei hilft, Overspending zu vermeiden. Unser System:',
                'faq.what_is_qado.bullet1': 'Prüft automatisch Bestellungen, Rechnungen und Wareneingänge gegen Vertragskonditionen',
                'faq.what_is_qado.bullet2': 'Erkennt Abweichungen in Echtzeit (falsche Preise, SLA-Verletzungen, ungenutzte Boni)',
                'faq.what_is_qado.bullet3': 'Dokumentiert und fordert zurück bei Bedarf automatisch',
                'faq.what_is_qado.bullet4': 'Integriert sich nahtlos in Ihr ERP (SAP, Oracle, MS Dynamics etc.)',
                'faq.what_is_qado.conclusion': 'Dadurch optimieren wir Preise konsequent, nutzen Rabatte aus und setzen Vertragsstrafen durch – ohne großen zusätzlichen Aufwand für den Einkauf.',
                'faq.problem.question': 'Welches Problem löst qado?',
                'faq.problem.answer': 'Unternehmen verhandeln komplexe Preis- und Strafklauseln mit Lieferanten aus, aber nach Vertragsabschluss überwacht niemand, ob die vereinbarten Einsparungen tatsächlich realisiert werden. Dadurch verlieren Unternehmen Millionen.',
                'faq.problem.causes': 'Die Ursachen:',
                'faq.problem.cause1': 'Starre ERP-Systeme',
                'faq.problem.cause2': 'Hoch komplexe Verträge',
                'faq.problem.cause3': 'Überlastete Mitarbeiter',
                'faq.problem.cause4': 'Riesige Datenmengen',
                
                // Additional FAQ translations
                'faq.how_works.question': 'Wie funktioniert qado in der Praxis?',
                'faq.how_works.phase1.title': 'Phase 1: Proof of Concept - "Wo entsteht Overspending?"',
                'faq.how_works.phase1.bullet1': 'Wir analysieren 1–3 Jahre historische Daten (Verträge, Bestellungen, Rechnungen)',
                'faq.how_works.phase1.bullet2': 'Mit unserer KI identifizieren wir Abweichungen: vergessene Rabatte, falsche Indexpreise, nicht eingezogene Vertragsstrafen',
                'faq.how_works.phase1.result': 'Ergebnis:',
                'faq.how_works.phase1.result_text': 'Ein transparenter Savings Report mit quantifizierten Einsparpotenzialen (oft 2–4% des Volumens)',
                'faq.how_works.phase1.benefit': 'Nutzen:',
                'faq.how_works.phase1.benefit_text': 'Risikofreier Start, schnelle Faktenbasis, erste messbare Aha-Effekte',
                'faq.how_works.phase2.title': 'Phase 2: Implementierung in Live-Prüfung - "Overspending in Echtzeit verhindern"',
                'faq.how_works.phase2.bullet1': 'Integration in Ihr ERP (SAP, Oracle, MS Dynamics etc.) oder per API',
                'faq.how_works.phase2.bullet2': 'Jede Bestellung und Rechnung wird automatisch gegen Vertragskonditionen geprüft',
                'faq.how_works.phase2.bullet3': 'Alerts bei Abweichungen (z. B. falsche Preise, SLA-Verletzungen, ungenutzte Boni)',
                'faq.how_works.phase2.benefit': 'Nutzen:',
                'faq.how_works.phase2.benefit_text': 'Sofortige Rückforderung, transparente Kennzahlen für Folgeverhandlungen, dauerhafte Absicherung gegen Value Leakage',
                'faq.difference.question': 'Wie unterscheidet sich qado von anderen Lösungen?',
                'faq.difference.answer': 'qado ist speziell für die Overspending-Vermeidung entwickelt und bietet:',
                'faq.difference.bullet1': 'KI-gestützte Vertragsanalyse: Versteht komplexe Vertragskonditionen automatisch',
                'faq.difference.bullet2': 'Echtzeit-Überwachung: Erkennt Abweichungen sofort, nicht erst bei der Rechnungsprüfung',
                'faq.difference.bullet3': 'Nahtlose Integration: Funktioniert mit bestehenden ERP-Systemen',
                'faq.difference.bullet4': 'Messbare Ergebnisse: 2-4% Kosteneinsparungen der Beschaffungskosten',
                'faq.difference.bullet5': 'Vollständige Transparenz: Ermöglicht Folgeverhandlungen auf Basis von Fakten',
                'faq.erp.question': 'Welche ERP-Systeme werden unterstützt?',
                'faq.erp.answer': 'qado funktioniert grundsätzlich mit allen gängigen Systemen und integriert sich nahtlos in Ihre bestehende IT-Landschaft. Die folgenden Systeme sind nur Beispiele:',
                'faq.erp.erp_systems': 'ERP-Systeme:',
                'faq.erp.erp_list': 'SAP, Oracle, Microsoft Dynamics, Infor, Workday',
                'faq.erp.accounting': 'Buchhaltung:',
                'faq.erp.accounting_list': 'DATEV, Lexware, Sage, QuickBooks',
                'faq.erp.cloud': 'Cloud-Plattformen:',
                'faq.erp.cloud_list': 'Microsoft 365, Google Workspace, Salesforce',
                'faq.erp.apis': 'APIs:',
                'faq.erp.apis_list': 'REST, GraphQL, SOAP für individuelle Integrationen',
                'faq.erp.conclusion': 'Unsere Integration erfolgt über sichere APIs und Standard-Protokolle. Keine Änderungen an Ihren bestehenden Systemen erforderlich.',
                
                // FAQ Category titles
                'faq.category.our_approach': 'Unser Ansatz',
                'faq.category.integration': 'Integration & Technik',
                'faq.category.costs': 'Kosten & ROI',
                'faq.category.privacy': 'Datenschutz & Sicherheit',
                
                // Missing FAQ questions and answers
                'faq.chatgpt.question': 'Ist qado nur ein ChatGPT-Fenster?',
                'faq.chatgpt.answer': 'Nein, qado ist weit mehr als ein einfaches ChatGPT-Interface. Unser System basiert auf:',
                'faq.chatgpt.bullet1': 'Spezialisierte KI-Modelle:',
                'faq.chatgpt.bullet1_text': 'Trainiert speziell auf Verträge, Rechnungen und Compliance',
                'faq.chatgpt.bullet2': 'Multi-Modal-Analyse:',
                'faq.chatgpt.bullet2_text': 'Verarbeitung von Text, Tabellen, Bildern und PDFs',
                'faq.chatgpt.bullet3': 'Vektor-Graphen:',
                'faq.chatgpt.bullet3_text': 'Intelligente Verknüpfung von Verträgen zu Anhängen, Anpassungen und weiteren Dokumenten',
                'faq.chatgpt.bullet4': 'Regelbasierte Engine:',
                'faq.chatgpt.bullet4_text': 'Kombination aus KI und festen Geschäftsregeln',
                'faq.chatgpt.bullet5': 'Human-in-the-Loop:',
                'faq.chatgpt.bullet5_text': 'Expertenvalidierung für kritische Entscheidungen',
                'faq.chatgpt.bullet6': 'Kontinuierliches Lernen:',
                'faq.chatgpt.bullet6_text': 'System verbessert sich durch Feedback',
                'faq.chatgpt.conclusion': 'Der entscheidende Vorteil:',
                'faq.chatgpt.conclusion_text': 'Während ChatGPT allgemeine Gespräche führt, versteht qado die komplexe Welt der Lieferantenverträge, erkennt automatisch Preisabweichungen und setzt Vertragsstrafen durch – mit messbaren Einsparungen von 2-4% Ihrer Beschaffungskosten.',
                
                'faq.costs.question': 'Wie hoch sind die Kosten für qado?',
                'faq.costs.principle': 'Unser Grundprinzip:',
                'faq.costs.principle_text': 'Wir verdienen nur Geld, wenn wir auch Ihnen Einsparungen ermöglichen. Wir passen uns flexibel an Ihre Wünsche an.',
                'faq.costs.expectation': 'Was Sie erwartet:',
                'faq.costs.bullet1': '2-4% Kosteneinsparungen',
                'faq.costs.bullet1_text': 'Ihrer Beschaffungskosten im ersten Jahr',
                'faq.costs.bullet2': 'Setup-Kosten',
                'faq.costs.bullet2_text': 'meist durch Einsparungen in den ersten Monaten gedeckt',
                'faq.costs.bullet3': 'Transparente Abrechnung',
                'faq.costs.bullet3_text': 'ohne versteckte Kosten',
                'faq.costs.success': 'Ihr Erfolg ist unser Erfolg:',
                'faq.costs.success_text': 'Wir sind nur erfolgreich, wenn Sie es sind.',
                
                'faq.roi.question': 'Welchen ROI kann ich erwarten?',
                'faq.roi.typical': 'Typische Einsparungen unserer Kunden:',
                'faq.roi.bullet1': '2-4% Kosteneinsparungen',
                'faq.roi.bullet1_text': 'Ihrer Beschaffungskosten',
                'faq.roi.bullet2': 'Break-Even',
                'faq.roi.bullet2_text': 'in 3-6 Monaten',
                'faq.roi.bullet3': 'Durchschnittlich 80% weniger',
                'faq.roi.bullet3_text': 'manuelle Prüfungen',
                'faq.roi.longterm': 'Langfristig profitieren Sie von:',
                'faq.roi.longterm_text': 'Transparenteren Verhandlungen, automatisierten Prozessen und messbaren Einsparungen ohne zusätzlichen Aufwand.',
                
                'faq.trial.question': 'Gibt es eine kostenlose Testphase?',
                'faq.trial.answer': 'Ja, wir bieten eine kostenlose Demo sowie günstige Modelle zum Vertesten ohne umfangreiche Anbindung:',
                'faq.trial.bullet1': 'Kostenlose Demo-Session:',
                'faq.trial.bullet1_text': 'Testen Sie qado anhand einiger Ihrer Verträge',
                'faq.trial.bullet2': 'Proof of Concept:',
                'faq.trial.bullet2_text': 'Analyse Ihrer historischen Daten (1-3 Jahre) ohne Anbindung an bestehende Systeme',
                'faq.trial.bullet3': 'Pilot-Projekt:',
                'faq.trial.bullet3_text': 'Implementierung in 2-3 Einkaufskategorien',
                'faq.trial.contact': 'Kontaktieren Sie uns für eine individuelle Beratung zu den besten Testoptionen für Ihr Unternehmen.',
                
                'faq.security.question': 'Wie sicher sind meine Daten bei qado?',
                'faq.security.answer': 'Ihre Daten sind bei uns in höchstem Maße geschützt durch:',
                'faq.security.bullet1': 'Ende-zu-Ende-Verschlüsselung',
                'faq.security.bullet1_text': '(AES-256, TLS 1.3) für alle Datenübertragungen',
                'faq.security.bullet2': 'DSGVO-konforme Verarbeitung',
                'faq.security.bullet2_text': 'mit expliziter Einwilligung und Datenminimierung',
                'faq.security.bullet3': 'ISO 27001 zertifizierte',
                'faq.security.bullet3_text': 'Rechenzentren ausschließlich in der EU',
                'faq.security.bullet4': 'Multi-Faktor-Authentifizierung',
                'faq.security.bullet4_text': 'und rollenbasierte Zugangskontrollen',
                'faq.security.bullet5': '24/7 Security Operations Center',
                'faq.security.bullet5_text': 'mit automatischer Bedrohungserkennung',
                'faq.security.bullet6': 'Tägliche Backups',
                'faq.security.bullet6_text': 'mit geografischer Verteilung und Point-in-Time-Recovery',
                'faq.security.conclusion': 'Alle Daten werden ausschließlich in der EU gespeichert und verarbeitet. Wir garantieren eine Recovery Time Objective (RTO) von unter 4 Stunden.',
                
                'faq.storage.question': 'Wo werden meine Daten gespeichert und verarbeitet?',
                'faq.storage.approach': 'EU-First-Ansatz:',
                'faq.storage.approach_text': 'Alle Ihre Daten werden ausschließlich in der EU gespeichert und verarbeitet.',
                'faq.storage.bullet1': 'Rechenzentren:',
                'faq.storage.bullet1_text': 'ISO 27001 zertifizierte Standorte in der EU',
                'faq.storage.bullet2': 'Datenverarbeitung:',
                'faq.storage.bullet2_text': 'Keine Datenübertragung außerhalb der EU',
                'faq.storage.bullet3': 'Backup & Recovery:',
                'faq.storage.bullet3_text': 'Geografisch verteilte Backups innerhalb der EU',
                'faq.storage.bullet4': 'Compliance:',
                'faq.storage.bullet4_text': 'Vollständige Einhaltung deutscher und europäischer Datenschutzgesetze',
                'faq.storage.bullet5': 'Transparenz:',
                'faq.storage.bullet5_text': 'Sie behalten jederzeit die volle Kontrolle über Ihre Daten',
                'faq.storage.conclusion': 'Dies gewährleistet maximale Datensicherheit und rechtliche Klarheit für Unternehmen in der EU.',
                
                // FAQ CTA section
                'faq.cta.title': 'Haben Sie weitere Fragen?',
                'faq.cta.subtitle': 'Unser Expertenteam steht Ihnen gerne für eine persönliche Beratung zur Verfügung.',
                'faq.cta.button': 'Kontakt aufnehmen',
                
                // FAQ Category titles
                'faq.category.our_approach': 'Unser Ansatz',
                'faq.category.integration': 'Integration & Technik',
                'faq.category.costs': 'Kosten & ROI',
                'faq.category.privacy': 'Datenschutz & Sicherheit',
                
                // Missing FAQ questions and answers
                'faq.chatgpt.question': 'Ist qado nur ein ChatGPT-Fenster?',
                'faq.chatgpt.answer': 'Nein, qado ist weit mehr als ein einfaches ChatGPT-Interface. Unser System basiert auf:',
                'faq.chatgpt.bullet1': 'Spezialisierte KI-Modelle:',
                'faq.chatgpt.bullet1_text': 'Trainiert speziell auf Verträge, Rechnungen und Compliance',
                'faq.chatgpt.bullet2': 'Multi-Modal-Analyse:',
                'faq.chatgpt.bullet2_text': 'Verarbeitung von Text, Tabellen, Bildern und PDFs',
                'faq.chatgpt.bullet3': 'Vektor-Graphen:',
                'faq.chatgpt.bullet3_text': 'Intelligente Verknüpfung von Verträgen zu Anhängen, Anpassungen und weiteren Dokumenten',
                'faq.chatgpt.bullet4': 'Regelbasierte Engine:',
                'faq.chatgpt.bullet4_text': 'Kombination aus KI und festen Geschäftsregeln',
                'faq.chatgpt.bullet5': 'Human-in-the-Loop:',
                'faq.chatgpt.bullet5_text': 'Expertenvalidierung für kritische Entscheidungen',
                'faq.chatgpt.bullet6': 'Kontinuierliches Lernen:',
                'faq.chatgpt.bullet6_text': 'System verbessert sich durch Feedback',
                'faq.chatgpt.conclusion': 'Der entscheidende Vorteil:',
                'faq.chatgpt.conclusion_text': 'Während ChatGPT allgemeine Gespräche führt, versteht qado die komplexe Welt der Lieferantenverträge, erkennt automatisch Preisabweichungen und setzt Vertragsstrafen durch – mit messbaren Einsparungen von 2-4% Ihrer Beschaffungskosten.',
                
                'faq.costs.question': 'Wie hoch sind die Kosten für qado?',
                'faq.costs.principle': 'Unser Grundprinzip:',
                'faq.costs.principle_text': 'Wir verdienen nur Geld, wenn wir auch Ihnen Einsparungen ermöglichen. Wir passen uns flexibel an Ihre Wünsche an.',
                'faq.costs.expectation': 'Was Sie erwartet:',
                'faq.costs.bullet1': '2-4% Kosteneinsparungen',
                'faq.costs.bullet1_text': 'Ihrer Beschaffungskosten im ersten Jahr',
                'faq.costs.bullet2': 'Setup-Kosten',
                'faq.costs.bullet2_text': 'meist durch Einsparungen in den ersten Monaten gedeckt',
                'faq.costs.bullet3': 'Transparente Abrechnung',
                'faq.costs.bullet3_text': 'ohne versteckte Kosten',
                'faq.costs.success': 'Ihr Erfolg ist unser Erfolg:',
                'faq.costs.success_text': 'Wir sind nur erfolgreich, wenn Sie es sind.',
                
                'faq.roi.question': 'Welchen ROI kann ich erwarten?',
                'faq.roi.typical': 'Typische Einsparungen unserer Kunden:',
                'faq.roi.bullet1': '2-4% Kosteneinsparungen',
                'faq.roi.bullet1_text': 'Ihrer Beschaffungskosten',
                'faq.roi.bullet2': 'Break-Even',
                'faq.roi.bullet2_text': 'in 3-6 Monaten',
                'faq.roi.bullet3': 'Durchschnittlich 80% weniger',
                'faq.roi.bullet3_text': 'manuelle Prüfungen',
                'faq.roi.longterm': 'Langfristig profitieren Sie von:',
                'faq.roi.longterm_text': 'Transparenteren Verhandlungen, automatisierten Prozessen und messbaren Einsparungen ohne zusätzlichen Aufwand.',
                
                'faq.trial.question': 'Gibt es eine kostenlose Testphase?',
                'faq.trial.answer': 'Ja, wir bieten eine kostenlose Demo sowie günstige Modelle zum Vertesten ohne umfangreiche Anbindung:',
                'faq.trial.bullet1': 'Kostenlose Demo-Session:',
                'faq.trial.bullet1_text': 'Testen Sie qado anhand einiger Ihrer Verträge',
                'faq.trial.bullet2': 'Proof of Concept:',
                'faq.trial.bullet2_text': 'Analyse Ihrer historischen Daten (1-3 Jahre) ohne Anbindung an bestehende Systeme',
                'faq.trial.bullet3': 'Pilot-Projekt:',
                'faq.trial.bullet3_text': 'Implementierung in 2-3 Einkaufskategorien',
                'faq.trial.contact': 'Kontaktieren Sie uns für eine individuelle Beratung zu den besten Testoptionen für Ihr Unternehmen.',
                
                'faq.security.question': 'Wie sicher sind meine Daten bei qado?',
                'faq.security.answer': 'Ihre Daten sind bei uns in höchstem Maße geschützt durch:',
                'faq.security.bullet1': 'Ende-zu-Ende-Verschlüsselung',
                'faq.security.bullet1_text': '(AES-256, TLS 1.3) für alle Datenübertragungen',
                'faq.security.bullet2': 'DSGVO-konforme Verarbeitung',
                'faq.security.bullet2_text': 'mit expliziter Einwilligung und Datenminimierung',
                'faq.security.bullet3': 'ISO 27001 zertifizierte',
                'faq.security.bullet3_text': 'Rechenzentren ausschließlich in der EU',
                'faq.security.bullet4': 'Multi-Faktor-Authentifizierung',
                'faq.security.bullet4_text': 'und rollenbasierte Zugangskontrollen',
                'faq.security.bullet5': '24/7 Security Operations Center',
                'faq.security.bullet5_text': 'mit automatischer Bedrohungserkennung',
                'faq.security.bullet6': 'Tägliche Backups',
                'faq.security.bullet6_text': 'mit geografischer Verteilung und Point-in-Time-Recovery',
                'faq.security.conclusion': 'Alle Daten werden ausschließlich in der EU gespeichert und verarbeitet. Wir garantieren eine Recovery Time Objective (RTO) von unter 4 Stunden.',
                
                'faq.storage.question': 'Wo werden meine Daten gespeichert und verarbeitet?',
                'faq.storage.approach': 'EU-First-Ansatz:',
                'faq.storage.approach_text': 'Alle Ihre Daten werden ausschließlich in der EU gespeichert und verarbeitet.',
                'faq.storage.bullet1': 'Rechenzentren:',
                'faq.storage.bullet1_text': 'ISO 27001 zertifizierte Standorte in der EU',
                'faq.storage.bullet2': 'Datenverarbeitung:',
                'faq.storage.bullet2_text': 'Keine Datenübertragung außerhalb der EU',
                'faq.storage.bullet3': 'Backup & Recovery:',
                'faq.storage.bullet3_text': 'Geografisch verteilte Backups innerhalb der EU',
                'faq.storage.bullet4': 'Compliance:',
                'faq.storage.bullet4_text': 'Vollständige Einhaltung deutscher und europäischer Datenschutzgesetze',
                'faq.storage.bullet5': 'Transparenz:',
                'faq.storage.bullet5_text': 'Sie behalten jederzeit die volle Kontrolle über Ihre Daten',
                'faq.storage.conclusion': 'Dies gewährleistet maximale Datensicherheit und rechtliche Klarheit für Unternehmen in der EU.',
                
                // Missing translations for existing content
                'faq.problem.conclusion': 'Genau da setzen wir an: qado macht Verhandlungserfolge messbar, verhindert Overspending und sichert sofortige Einsparungen.',
                'faq.erp.procurement': 'Procurement:',
                'faq.erp.procurement_list': 'Ariba, Coupa, Jaggaer, Ivalua, Basware',
                
                // About page team member translations
                'about.team.nicolas.role': 'Co-Founder & Sales',
                'about.team.patrick.role': 'Co-Founder & Customer Success',
                'about.team.heiko.role': 'Co-Founder & Product Development',
                'about.team.nicolas.bio': 'Nicolas war Strategieberater bei McKinsey mit umfangreicher Erfahrung in Finance und Procurement, Wertsteigerung und Digitalisierung. Mit zwei Masterabschlüssen in Finance und einem Bachelor in Betriebswirtschaftslehre promoviert er gerade an der TUM im Bereich Entrepreneurial Finance.',
                'about.team.patrick.bio': 'Patrick war Strategieberater bei Kearney im Bereich Digital Procurement und Supply Chain Optimierung. Seine Schwerpunkte lagen in GenAI, Machine Learning und Advanced Analytics. Mit einem Master in Business Intelligence und einem Bachelor in Wirtschaftsingenieurwesen bringt er fundierte operative Expertise mit.',
                'about.team.heiko.bio': 'Heiko war Product Manager bei Enpal und verantwortete den Aufbau eines vernetzten und KI-gestützten Systems für Wärmepumpen. Dabei leitete er ein Team von Software-Entwicklern zur Entwicklung von marktreifen IT-Produkten. Mit Master und Bachelor in Wirtschaftsinformatik von der Universität Mannheim fokussierte er auf verteilte, energieeffiziente Systeme.',
                
                // Meta descriptions
                'meta.about.description': 'Lernen Sie das qado-Team kennen: Nicolas Pardon, Patrick Gundlach und Heiko Trötsch - Experten für KI-gestützte Einkaufsoptimierung.',
                
                // Datenschutz (Privacy Policy) translations
                'datenschutz.title': 'Datenschutzerklärung',
                'datenschutz.hero.subtitle': 'DSGVO-konforme Datenschutzerklärung',
                'datenschutz.overview.title': '1. Datenschutz auf einen Blick',
                'datenschutz.overview.general.title': 'Allgemeine Hinweise',
                'datenschutz.overview.general.text': 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
                'datenschutz.overview.data_collection.title': 'Datenerfassung auf dieser Website',
                'datenschutz.overview.data_collection.who.title': 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
                'datenschutz.overview.data_collection.who.text': 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.',
                'datenschutz.overview.data_collection.how.title': 'Wie erfassen wir Ihre Daten?',
                'datenschutz.overview.data_collection.how.text1': 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Kontaktformular eingeben (E-Mail-Adresse für Newsletter-Anmeldung).',
                'datenschutz.overview.data_collection.how.text2': 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
                'datenschutz.overview.data_collection.why.title': 'Wofür nutzen wir Ihre Daten?',
                'datenschutz.overview.data_collection.why.text': 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Die E-Mail-Adressen aus unserem Anmeldeformular verwenden wir ausschließlich, um Sie über den Launch unserer Plattform zu informieren.',
                'datenschutz.overview.data_collection.rights.title': 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
                'datenschutz.overview.data_collection.rights.text': 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
                
                // Additional Datenschutz translations
                'datenschutz.hosting.title': '2. Hosting',
                'datenschutz.hosting.github.title': 'GitHub Pages',
                'datenschutz.hosting.github.text1': 'Wir hosten unsere Website bei GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). GitHub Pages ist ein Service von GitHub, der es ermöglicht, statische Websites direkt aus einem GitHub-Repository zu hosten. Bei jedem Aufruf unserer Website werden verschiedene Daten an die Server von GitHub übertragen und dort gespeichert (Server-Log-Dateien).',
                'datenschutz.hosting.github.text2': 'Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub:',
                'datenschutz.general.title': '3. Allgemeine Hinweise und Pflichtinformationen',
                'datenschutz.general.privacy.title': 'Datenschutz',
                'datenschutz.general.privacy.text1': 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.',
                'datenschutz.general.privacy.text2': 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
                'datenschutz.general.responsible.title': 'Hinweis zur verantwortlichen Stelle',
                'datenschutz.general.responsible.text1': 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
                'datenschutz.general.responsible.text2': 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
                'datenschutz.general.storage.title': 'Speicherdauer',
                'datenschutz.general.storage.text': 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).',
                'datenschutz.general.revocation.title': 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
                'datenschutz.general.revocation.text': 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
                'datenschutz.general.complaint.title': 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
                'datenschutz.general.complaint.text': 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
                'datenschutz.general.portability.title': 'Recht auf Datenübertragbarkeit',
                'datenschutz.general.portability.text': 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
                'datenschutz.general.information.title': 'Auskunft, Löschung und Berichtigung',
                'datenschutz.general.information.text': 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',
                'datenschutz.collection.title': '4. Datenerfassung auf dieser Website',
                'datenschutz.collection.cookies.title': 'Cookies',
                'datenschutz.collection.cookies.text1': 'Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (dauerhafte Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Dauerhafte Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.',
                'datenschutz.collection.cookies.text2': 'Wir verwenden auf unserer Website folgende Arten von Cookies:',
                'datenschutz.collection.cookies.necessary': 'Notwendige Cookies: Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden. Dazu gehört das Cookie zur Speicherung Ihrer Cookie-Einstellungen.',
                'datenschutz.collection.cookies.functional': 'Funktionale Cookies: Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung (aktuell nicht verwendet).',
                'datenschutz.collection.cookies.analytics': 'Analyse-Cookies: Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren (aktuell nicht verwendet).',
                'datenschutz.collection.cookies.text3': 'Sie können Ihre Cookie-Einstellungen jederzeit über den Link "Cookie-Einstellungen" in der Fußzeile unserer Website anpassen. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für technisch notwendige Cookies.',
                'datenschutz.external.title': '5. Externe Dienste',
                'datenschutz.external.fonts.title': 'Google Fonts',
                'datenschutz.external.fonts.text1': 'Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.',
                'datenschutz.external.fonts.text2': 'Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbilds auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.',
                'datenschutz.external.fonts.text3': 'Falls Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.',
                'datenschutz.external.fonts.text4': 'Weitere Informationen zu Google Fonts finden Sie unter',
                'datenschutz.external.fonts.text5': 'und in der Datenschutzerklärung von Google:',
                'datenschutz.rights.title': '6. Ihre Rechte als betroffene Person',
                'datenschutz.rights.text1': 'Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:',
                'datenschutz.rights.info': 'Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)',
                'datenschutz.rights.correction': 'Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)',
                'datenschutz.rights.deletion': 'Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)',
                'datenschutz.rights.restriction': 'Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)',
                'datenschutz.rights.objection': 'Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)',
                'datenschutz.rights.portability': 'Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)',
                'datenschutz.rights.text2': 'Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
                'datenschutz.rights.text3': 'Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.',
                'datenschutz.rights.text4': 'Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:',
                'datenschutz.updated': 'Stand: September 2025',
                
                // Additional missing Datenschutz translations
                'datenschutz.general.responsible.company': 'qado GbR<br>Heiko Trötsch, Nicolas Pardon, Patrick Gundlach<br>Schraudolphstraße 42<br>80799 München<br>Deutschland<br><br>E-Mail: <a href="mailto:support@qado.ai">support@qado.ai</a><br>Website: <a href="https://qado.ai">qado.ai</a>',
                'datenschutz.collection.server.title': 'Server-Log-Dateien',
                'datenschutz.collection.server.text1': 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
                'datenschutz.collection.server.list1': 'Browsertyp und Browserversion',
                'datenschutz.collection.server.list2': 'verwendetes Betriebssystem',
                'datenschutz.collection.server.list3': 'Referrer URL',
                'datenschutz.collection.server.list4': 'Hostname des zugreifenden Rechners',
                'datenschutz.collection.server.list5': 'Uhrzeit der Serveranfrage',
                'datenschutz.collection.server.list6': 'IP-Adresse',
                'datenschutz.collection.server.text2': 'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.',
                'datenschutz.collection.newsletter.title': 'Newsletter-Anmeldung (E-Mail-Sammlung)',
                'datenschutz.collection.newsletter.text1': 'Wenn Sie sich für unseren Newsletter anmelden möchten, benötigen wir von Ihnen eine E-Mail-Adresse. Eine Überprüfung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist zu bestätigen. Ergänzende Daten werden nicht bzw. nur auf freiwilliger Basis erhoben.',
                'datenschutz.collection.newsletter.text2': 'Für die Abwicklung der Newsletter nutzen wir Google Forms. Ihre Daten werden dabei an Google übertragen. Google verarbeitet Daten auch in den USA und hat sich dem EU-US Data Privacy Framework unterworfen.',
                'datenschutz.collection.newsletter.text3': 'Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Eine informelle E-Mail an support@qado.ai genügt für den Widerruf. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
                'datenschutz.collection.newsletter.text4': 'Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberührt.',
                'datenschutz.external.forms.title': 'Google Forms',
                'datenschutz.external.forms.text1': 'Auf dieser Website verwenden wir Google Forms, einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"), zur Erfassung von E-Mail-Adressen für Newsletter-Anmeldungen.',
                'datenschutz.external.forms.text2': 'Wenn Sie sich über unser Formular anmelden, werden die von Ihnen eingegebenen Daten (E-Mail-Adresse) an Google übertragen und dort gespeichert. Google kann diese Daten zur Bereitstellung, Wartung und Verbesserung ihrer Dienste verwenden.',
                'datenschutz.external.forms.text3': 'Die Datenübertragung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit durch eine E-Mail an support@qado.ai widerrufen.',
                'datenschutz.external.forms.text4': 'Google verarbeitet Daten auch in den USA und hat sich dem EU-US Data Privacy Framework unterworfen, welches die Einhaltung des europäischen Datenschutzniveaus gewährleistet.',
                'datenschutz.external.forms.text5': 'Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:',
                
                // Impressum (Legal Notice) translations
                'impressum.title': 'Impressum',
                'impressum.hero.subtitle': 'Rechtliche Angaben gemäß § 5 TMG',
                'impressum.tmg.title': 'Angaben gemäß § 5 TMG',
                'impressum.tmg.content': 'qado GbR<br>Heiko Trötsch, Nicolas Pardon, Patrick Gundlach<br>Schraudolphstraße 42<br>80799 München<br>Deutschland',
                'impressum.contact.title': 'Kontakt',
                'impressum.contact.content': 'E-Mail: <a href="mailto:support@qado.ai">support@qado.ai</a><br>Website: <a href="https://qado.ai">qado.ai</a>',
                
                // Additional Impressum German translations
                'impressum.represented.title': 'Vertreten durch',
                'impressum.represented.content': 'Heiko Trötsch<br>Nicolas Pardon<br>Patrick Gundlach',
                'impressum.responsible.title': 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
                'impressum.responsible.content': 'Heiko Trötsch<br>Schraudolphstraße 42<br>80799 München',
                'impressum.dispute.title': 'Streitschlichtung',
                'impressum.dispute.text1': 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
                'impressum.dispute.text2': 'Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
                'impressum.liability.title': 'Haftung für Inhalte',
                'impressum.liability.text1': 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
                'impressum.liability.text2': 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
                'impressum.links.title': 'Haftung für Links',
                'impressum.links.text1': 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
                'impressum.links.text2': 'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
                'impressum.copyright.title': 'Urheberrecht',
                'impressum.copyright.text1': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
                'impressum.copyright.text2': 'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
                'impressum.images.title': 'Bildnachweis',
                'impressum.images.text': 'Die auf dieser Website verwendeten Bilder stammen von:',
                'impressum.images.own': 'Eigene Fotografien und Grafiken',
                'impressum.updated': 'Stand: September 2025',
                'meta.faq.description': 'Häufig gestellte Fragen zu qado - KI-gestützte Ausgabenprüfung und Overspending-Vermeidung',
                
                // Approach page
                'approach.hero.subtitle': 'Ein bewährter 2-Phasen-Prozess, der Overspending systematisch identifiziert und dauerhaft verhindert',
                
                // Features page
                'features.integration.subtitle': 'qado integriert sich in alle Plattformen, die Ihr Team nutzt. Von ERP bis E-Mail.',
                'features.cta.subtitle': 'Starte heute – unverbindlich und DSGVO-konform',
                
                // Careers page
                'careers.hero.subtitle': 'Werden Sie Teil unseres Teams und gestalten Sie die Zukunft des Einkaufsmanagements mit.',
                'careers.jobs.subtitle': 'Entdecke unsere aktuellen Jobangebote',
                'careers.process.subtitle': 'So einfach ist es, Teil unseres Teams zu werden',
                
                // Legal pages
                'impressum.hero.subtitle': 'Rechtliche Angaben gemäß § 5 TMG',
                'datenschutz.hero.subtitle': 'DSGVO-konforme Datenschutzerklärung',
                
                // Cookie consent translations
                'cookie.title': '🍪 Cookie-Einstellungen',
                'cookie.description': 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind notwendig für das Funktionieren der Seite, während andere uns helfen, die Website zu verbessern.',
                'cookie.privacy_link': 'Mehr Informationen in unserer Datenschutzerklärung',
                'cookie.accept_all': 'Alle akzeptieren',
                'cookie.reject_all': 'Alle ablehnen',
                'cookie.settings': 'Einstellungen',
                'cookie.settings_title': 'Cookie-Einstellungen',
                'cookie.settings_description': 'Wählen Sie aus, welche Cookies Sie akzeptieren möchten:',
                'cookie.cancel': 'Abbrechen',
                'cookie.save': 'Einstellungen speichern',
                'cookie.necessary': 'Notwendige Cookies',
                'cookie.necessary_desc': 'Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.',
                'cookie.functional': 'Funktionale Cookies',
                'cookie.functional_desc': 'Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung.',
                'cookie.analytics': 'Analyse Cookies',
                'cookie.analytics_desc': 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
                'cookie.settings_link': 'Cookie-Einstellungen',
                
                // Hero section translations
                'hero.pill1': 'Transparenz',
                'hero.pill2': 'Automatisierung', 
                'hero.pill3': 'Einsparungen',
                'hero.notification.title': 'Overspending erkannt!',
                'hero.challenge.rigid_erp': 'Starre ERP'
            },
            en: {
                // Navigation
                'nav.platform': 'Platform',
                'nav.pricing': 'Pricing',
                'nav.faq': 'FAQ',
                'nav.login': 'Login',
                'nav.get-started': 'Get Started',
                'nav.about': 'About Us',
                'nav.careers': 'Careers',
                'nav.contact': 'Contact',
                'nav.impressum': 'Imprint',
                'nav.datenschutz': 'Privacy Policy',
                
                // Platform dropdown
                'platform.product-features': 'Product Features',
                'platform.contract-review': 'Contract Management',
                'platform.order-review': 'Order Optimization',
                'platform.invoice-review': 'Invoice Review',
                'platform.penalty-management': 'Penalty and Quality Management',
                'platform.quality-management': 'Quality Management',
                
                // FAQ dropdown
                'faq.frequent-questions': 'Frequent Questions',
                'faq.our-approach': 'Our Approach',
                'faq.integration-tech': 'Integration & Technology',
                'faq.costs-roi': 'Costs & ROI',
                'faq.data-protection': 'Data Protection & Security',
                
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
                'contact.other.title': 'Other Contact',
                'contact.other.subtitle': 'Choose your preferred contact method:',
                'contact.other.email': 'E-Mail',
                'contact.other.phone': 'Phone',
                'contact.other.email.description': 'Send us an email and we will get back to you as soon as possible.',
                'contact.other.phone.description': 'Call us directly for personal consultation.',
                'contact.other.location.description': 'Our headquarters is located in Munich, Germany.',
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
                
                // Login page
                'login.title': 'Sign In',
                'login.email.label': 'Email Address',
                'login.email.placeholder': 'your.email@example.com',
                'login.password.label': 'Password',
                'login.password.placeholder': 'Your Password',
                'login.password.toggle': 'Show/Hide Password',
                'login.remember': 'Stay Signed In',
                'login.button': 'Sign In',
                'login.errors.email.required': 'Email address is required',
                'login.errors.email.invalid': 'Please enter a valid email address',
                'login.errors.password.required': 'Password is required',
                'login.errors.password.length': 'Password must be at least 6 characters long',
                'login.errors.credentials': 'Username and/or password are incorrect',
                
                // Footer
                'footer.solutions': 'Solutions',
                'footer.company': 'Company',
                'footer.legal': 'Legal',
                'footer.copyright': 'All rights reserved',
                'footer.cookie_settings': 'Cookie Settings',
                'footer.slogan': 'Catch Overspending',
                'footer.badges': '100% GDPR Compliant · Made in Germany',
                
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
                'notification.title1': 'Index price dropped',
                'notification.title2': 'Delivery delay identified',
                'notification.title3': 'Invoice error detected',
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
                'valueprop.title': 'Spend Validation. 24/7. Entire Supply Chain.',
                'valueprop.description': '<b>With qado, contracts are finally implemented consistently:</b> Our AI-powered software automatically checks all documents against the underlying contracts. Deviations in prices, discounts or contract penalties are detected in real-time, documented and directly reclaimed upon request.<br><br><b>This ensures that agreed conditions are actually realized:</b> Prices remain optimized, discounts are utilized and SLA penalties are enforced. Even if companies do not immediately realize certain savings for strategic reasons, qado creates full transparency and thus a solid foundation for fact-based renegotiations.<br><br><b>The result:</b> Less overspending, immediately measurable savings and more negotiating power without additional effort for procurement. Thanks to seamless integration into existing ERP systems, qado becomes the specialized spend validation system that automatically ensures compliance with your contracts.',
                
                // Features
                'features.title': 'Product Features',
                'features.tab.contracts': 'Contract Management',
                'features.tab.orders': 'Order Optimization',
                'features.tab.invoices': 'Invoice Review',
                'features.tab.penalty': 'Penalty and Quality Management',
                'features.tab.quality': 'Quality Management',
                'features.contracts.description': 'Automated contract analysis with AI-powered clause recognition for maximum transparency and compliance.',
                'features.contracts.bullet1': 'Understand every contract clause in seconds',
                'features.contracts.bullet2': 'Automatic comparison to framework agreements',
                'features.contracts.bullet3': 'Live index price updates',
                'features.contracts.bullet4': 'Real-time risk assessment',
                'features.contracts.bullet5': 'Automatic contract extensions',
                
                // Benefits Section
                'benefits.kicker': 'Why qado?',
                'benefits.title': 'Measurable Value for Procurement & Supply Chain',
                'benefits.subtitle': 'qado transforms contract clauses into lived reality – with focus on savings, seamless processes and secure data.',
                'benefits.roi.title': 'Immediate ROI',
                'benefits.roi.description': 'Value-based pricing ensures measurable results.',
                'benefits.roi.tag1': 'Value Pricing',
                'benefits.roi.tag2': '2–4% Savings',
                'benefits.roi.tag3': 'Immediate ROI',
                
                'benefits.ux.title': 'UX &<br>Flexibility',
                'benefits.ux.description': 'qado adapts to your processes – not the other way around. Intuitive interface, role-based workflows and flexible configuration ensure quick team adoption.',
                'benefits.ux.tag1': 'Intuitive',
                'benefits.ux.tag2': 'Role-based',
                'benefits.ux.tag3': 'Customizable',
                
                'benefits.integration.title': 'System Integration',
                'benefits.integration.description': 'Seamless connection to your ERP and SCM systems. Open APIs and standard interfaces guarantee continuous data flows without media breaks.',
                'benefits.integration.tag1': 'ERP/SCM Systems',
                'benefits.integration.tag2': 'Open APIs',
                'benefits.integration.tag3': 'Auto-Import',
                
                'benefits.security.title': 'Data Security & Compliance',
                'benefits.security.description': 'Your data stays protected: qado is GDPR-compliant, offers audit trails and relies on state-of-the-art encryption and zero-trust architecture.',
                'benefits.security.tag1': 'GDPR',
                'benefits.security.tag2': 'Audit Trail',
                'benefits.security.tag3': 'Encrypted',
                
                // Contact Page - Additional
                'contact.booking.benefit3.title': 'Direct Exchange',
                'contact.booking.benefit3.description': 'Ask all your questions directly to our expert team',
                
                // Features Page
                'features.kicker': 'Product Features',
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
                'features.hero.subtitle': 'Discover the powerful AI-powered features of qado for fully automated spend validation',
                'features.stats.accuracy': 'Accuracy',
                'features.stats.monitoring': 'Monitoring',
                'features.stats.savings': 'Cost Savings',
                'features.contracts.title': 'Contract Management',
                'features.contracts.dashboard.title': 'Contract Analysis Dashboard',
                'features.contracts.validation.title': 'Order Validation',
                'features.orders.title': 'Order Optimization',
                'features.invoices.title': 'Invoice Review',
                'features.invoices.processing.title': 'Invoice Processing',
                'features.invoices.penalties.title': 'Penalty and Quality Management',
                'features.penalties.title': 'Penalty and Quality Management',
                'features.quality.title': 'Quality Management',
                'features.quality.dashboard.title': 'Quality Dashboard',
                'features.integration.title': 'Seamless Integration',
                'features.cta.title': 'Ready for the Future of Spend Validation?',
                
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
                'index.cta.title': 'Start Spend Validation Now',
                'index.cta.button': 'Get in touch',
                
                // Contact Page
                'contact.location': 'Location',
                
                // Pricing Page
                'pricing.cta.title': 'Start Spend Validation Now',
                
                // Common
                'common.learn_more': 'Learn More',
                'common.get_started': 'Get Started',
                'common.contact': 'Contact',
                'common.close': 'Close',
                'common.accept': 'Accept',
                'common.decline': 'Decline',
                'common.settings': 'Settings',
                
                // Missing translations for hardcoded text
                'challenge.complex_contracts': 'Complex Contracts',
                'challenge.overloaded_staff': 'Overloaded Staff',
                'challenge.rigid_erp': 'Rigid ERP',
                'challenge.huge_data': 'Huge Data Volumes',
                'reference.aptar.quote': 'We previously had no solution to quickly check compliance with complex terms. qado helped us systematically identify overspending and automatically monitor contract terms.',
                'features.aria_label': 'Select Functions',
                
                // About page translations
                'about.vision.title': 'Our Vision',
                'about.vision.description': 'Companies negotiate complex price and penalty clauses with suppliers, but after contract signing, no one monitors whether the agreed savings are actually realized. Companies lose millions as a result.',
                'about.vision.solution': 'This is exactly where we come in: Our AI software consistently optimizes prices, utilizes discounts and enforces contract penalties. qado does this by checking orders, invoices and goods receipts against contracts.',
                'about.stats.savings': 'Cost Savings',
                'about.stats.savings_desc': 'of procurement costs',
                'about.stats.monitoring': 'Real-time Monitoring',
                'about.stats.monitoring_desc': 'automatic checking',
                'about.stats.accuracy': 'Accuracy',
                'about.stats.accuracy_desc': 'in detection',
                'about.team.title': 'Our Team',
                'about.team.subtitle': 'We combine deep industry experience with technological innovation to help companies optimize their procurement processes and save millions.',
                'about.cta.title': 'Ready for the Future of Procurement?',
                'about.cta.subtitle': 'Let\'s revolutionize your procurement processes together.',
                'about.cta.demo': 'Request Demo',
                'about.cta.back': 'Back to Homepage',
                
                // FAQ page translations
                'faq.hero.subtitle': 'Answers to the most important questions about qado and our AI-powered overspending prevention',
                'faq.what_is_qado.question': 'What is qado?',
                'faq.what_is_qado.answer': 'qado is an AI software for the supply chain that helps companies avoid overspending. Our system:',
                'faq.what_is_qado.bullet1': 'Automatically checks orders, invoices and goods receipts against contract terms',
                'faq.what_is_qado.bullet2': 'Detects deviations in real-time (incorrect prices, SLA violations, unused bonuses)',
                'faq.what_is_qado.bullet3': 'Documents and automatically reclaims when needed',
                'faq.what_is_qado.bullet4': 'Seamlessly integrates into your ERP (SAP, Oracle, MS Dynamics etc.)',
                'faq.what_is_qado.conclusion': 'This allows us to consistently optimize prices, utilize discounts and enforce contract penalties – without much additional effort for procurement.',
                'faq.problem.question': 'What problem does qado solve?',
                'faq.problem.answer': 'Companies negotiate complex price and penalty clauses with suppliers, but after contract signing, no one monitors whether the agreed savings are actually realized. This causes companies to lose millions.',
                'faq.problem.causes': 'The causes:',
                'faq.problem.cause1': 'Rigid ERP systems',
                'faq.problem.cause2': 'Highly complex contracts',
                'faq.problem.cause3': 'Overloaded staff',
                'faq.problem.cause4': 'Huge data volumes',
                
                // Additional FAQ translations
                'faq.how_works.question': 'How does qado work in practice?',
                'faq.how_works.phase1.title': 'Phase 1: Proof of Concept - "Where does overspending occur?"',
                'faq.how_works.phase1.bullet1': 'We analyze 1-3 years of historical data (contracts, orders, invoices)',
                'faq.how_works.phase1.bullet2': 'With our AI, we identify deviations: forgotten discounts, incorrect index prices, uncollected contract penalties',
                'faq.how_works.phase1.result': 'Result:',
                'faq.how_works.phase1.result_text': 'A transparent savings report with quantified savings potential (often 2-4% of volume)',
                'faq.how_works.phase1.benefit': 'Benefit:',
                'faq.how_works.phase1.benefit_text': 'Risk-free start, quick fact base, first measurable aha effects',
                'faq.how_works.phase2.title': 'Phase 2: Implementation in live checking - "Prevent overspending in real-time"',
                'faq.how_works.phase2.bullet1': 'Integration into your ERP (SAP, Oracle, MS Dynamics etc.) or via API',
                'faq.how_works.phase2.bullet2': 'Every order and invoice is automatically checked against contract terms',
                'faq.how_works.phase2.bullet3': 'Alerts for deviations (e.g. incorrect prices, SLA violations, unused bonuses)',
                'faq.how_works.phase2.benefit': 'Benefit:',
                'faq.how_works.phase2.benefit_text': 'Immediate recovery, transparent KPIs for follow-up negotiations, permanent protection against value leakage',
                'faq.difference.question': 'How does qado differ from other solutions?',
                'faq.difference.answer': 'qado is specifically developed for overspending prevention and offers:',
                'faq.difference.bullet1': 'AI-powered contract analysis: Automatically understands complex contract terms',
                'faq.difference.bullet2': 'Real-time monitoring: Detects deviations immediately, not just during invoice checking',
                'faq.difference.bullet3': 'Seamless integration: Works with existing ERP systems',
                'faq.difference.bullet4': 'Measurable results: 2-4% cost savings of procurement costs',
                'faq.difference.bullet5': 'Complete transparency: Enables follow-up negotiations based on facts',
                'faq.erp.question': 'Which ERP systems are supported?',
                'faq.erp.answer': 'qado basically works with all common systems and integrates seamlessly into your existing IT landscape. The following systems are just examples:',
                'faq.erp.erp_systems': 'ERP Systems:',
                'faq.erp.erp_list': 'SAP, Oracle, Microsoft Dynamics, Infor, Workday',
                'faq.erp.accounting': 'Accounting:',
                'faq.erp.accounting_list': 'DATEV, Lexware, Sage, QuickBooks',
                'faq.erp.cloud': 'Cloud Platforms:',
                'faq.erp.cloud_list': 'Microsoft 365, Google Workspace, Salesforce',
                'faq.erp.apis': 'APIs:',
                'faq.erp.apis_list': 'REST, GraphQL, SOAP for individual integrations',
                'faq.erp.conclusion': 'Our integration is done through secure APIs and standard protocols. No changes to your existing systems required.',
                
                // About page team member translations
                'about.team.nicolas.role': 'Co-Founder & Sales',
                'about.team.patrick.role': 'Co-Founder & Customer Success',
                'about.team.heiko.role': 'Co-Founder & Product Development',
                'about.team.nicolas.bio': 'Nicolas was a strategy consultant at McKinsey with extensive experience in finance and procurement, value creation and digitalization. With two master\'s degrees in finance and a bachelor\'s in business administration, he is currently pursuing his PhD at TUM in entrepreneurial finance.',
                'about.team.patrick.bio': 'Patrick was a strategy consultant at Kearney in Digital Procurement and Supply Chain Optimization. His focus areas included GenAI, Machine Learning and Advanced Analytics. With a Master\'s in Business Intelligence and a Bachelor\'s in Industrial Engineering, he brings solid operational expertise.',
                'about.team.heiko.bio': 'Heiko was a Product Manager at Enpal and was responsible for building a networked and AI-supported system for heat pumps. He led a team of software developers in developing market-ready IT products. With a master\'s and bachelor\'s in business informatics from the University of Mannheim, he focused on distributed, energy-efficient systems.',
                
                // Meta descriptions
                'meta.about.description': 'Meet the qado team: Nicolas Pardon, Patrick Gundlach and Heiko Trötsch - experts in AI-powered procurement optimization.',
                
                // Datenschutz (Privacy Policy) translations
                'datenschutz.title': 'Privacy Policy',
                'datenschutz.hero.subtitle': 'GDPR-compliant privacy policy',
                'datenschutz.overview.title': '1. Privacy at a glance',
                'datenschutz.overview.general.title': 'General information',
                'datenschutz.overview.general.text': 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.',
                'datenschutz.overview.data_collection.title': 'Data collection on this website',
                'datenschutz.overview.data_collection.who.title': 'Who is responsible for data collection on this website?',
                'datenschutz.overview.data_collection.who.text': 'Data processing on this website is carried out by the website operator. You can find their contact details in the "Information on the responsible party" section of this privacy policy.',
                'datenschutz.overview.data_collection.how.title': 'How do we collect your data?',
                'datenschutz.overview.data_collection.how.text1': 'On the one hand, your data is collected when you provide it to us. This can be data that you enter in our contact form (email address for newsletter registration).',
                'datenschutz.overview.data_collection.how.text2': 'Other data is collected automatically or after your consent when you visit the website through our IT systems. This is mainly technical data (e.g. internet browser, operating system or time of page access). The collection of this data takes place automatically as soon as you enter this website.',
                'datenschutz.overview.data_collection.why.title': 'What do we use your data for?',
                'datenschutz.overview.data_collection.why.text': 'Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior. We use the email addresses from our registration form exclusively to inform you about the launch of our platform.',
                'datenschutz.overview.data_collection.rights.title': 'What rights do you have regarding your data?',
                'datenschutz.overview.data_collection.rights.text': 'You have the right to receive information free of charge at any time about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.',
                
                // Additional Datenschutz English translations
                'datenschutz.hosting.title': '2. Hosting',
                'datenschutz.hosting.github.title': 'GitHub Pages',
                'datenschutz.hosting.github.text1': 'We host our website on GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). GitHub Pages is a service from GitHub that allows static websites to be hosted directly from a GitHub repository. Every time you access our website, various data is transmitted to GitHub\'s servers and stored there (server log files).',
                'datenschutz.hosting.github.text2': 'Further information can be found in GitHub\'s privacy policy:',
                'datenschutz.general.title': '3. General information and mandatory information',
                'datenschutz.general.privacy.title': 'Data protection',
                'datenschutz.general.privacy.text1': 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the legal data protection regulations and this privacy policy.',
                'datenschutz.general.privacy.text2': 'When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.',
                'datenschutz.general.responsible.title': 'Information on the responsible party',
                'datenschutz.general.responsible.text1': 'The responsible party for data processing on this website is:',
                'datenschutz.general.responsible.text2': 'The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).',
                'datenschutz.general.storage.title': 'Storage period',
                'datenschutz.general.storage.text': 'Unless a more specific storage period is mentioned within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply. If you assert a legitimate request for deletion or revoke consent for data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial retention periods).',
                'datenschutz.general.revocation.title': 'Revocation of your consent to data processing',
                'datenschutz.general.revocation.text': 'Many data processing operations are only possible with your express consent. You can revoke consent that has already been given at any time. The legality of data processing carried out until the revocation remains unaffected by the revocation.',
                'datenschutz.general.complaint.title': 'Right to lodge a complaint with the competent supervisory authority',
                'datenschutz.general.complaint.text': 'In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, their place of work or the place of the alleged violation. The right to lodge a complaint exists without prejudice to other administrative or judicial remedies.',
                'datenschutz.general.portability.title': 'Right to data portability',
                'datenschutz.general.portability.text': 'You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only take place insofar as it is technically feasible.',
                'datenschutz.general.information.title': 'Information, deletion and correction',
                'datenschutz.general.information.text': 'Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipient and the purpose of data processing and, if applicable, a right to correction or deletion of this data. You can contact us at any time about this and other questions on the subject of personal data.',
                'datenschutz.collection.title': '4. Data collection on this website',
                'datenschutz.collection.cookies.title': 'Cookies',
                'datenschutz.collection.cookies.text1': 'Our internet pages use so-called "cookies". Cookies are small data packages and do not cause any damage to your device. They are either temporarily stored for the duration of a session (session cookies) or permanently (permanent cookies) on your device. Session cookies are automatically deleted after your visit ends. Permanent cookies remain stored on your device until you delete them yourself or an automatic deletion by your web browser occurs.',
                'datenschutz.collection.cookies.text2': 'We use the following types of cookies on our website:',
                'datenschutz.collection.cookies.necessary': 'Necessary cookies: These cookies are required for the website to function and cannot be deactivated. This includes the cookie for storing your cookie settings.',
                'datenschutz.collection.cookies.functional': 'Functional cookies: These cookies enable advanced functionality and personalization (currently not used).',
                'datenschutz.collection.cookies.analytics': 'Analytics cookies: These cookies help us understand how visitors interact with the website (currently not used).',
                'datenschutz.collection.cookies.text3': 'You can adjust your cookie settings at any time via the "Cookie Settings" link in the footer of our website. The legal basis for processing is Art. 6 para. 1 lit. a GDPR (consent) or Art. 6 para. 1 lit. f GDPR (legitimate interest) for technically necessary cookies.',
                'datenschutz.external.title': '5. External services',
                'datenschutz.external.fonts.title': 'Google Fonts',
                'datenschutz.external.fonts.text1': 'This page uses so-called Google Fonts for uniform display of fonts, which are provided by Google. When you call up a page, your browser loads the required web fonts into your browser cache to display texts and fonts correctly.',
                'datenschutz.external.fonts.text2': 'For this purpose, the browser you are using must connect to Google\'s servers. This gives Google knowledge that this website was accessed via your IP address. The use of Google Fonts is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the uniform presentation of the font on his website. If a corresponding consent has been requested, the processing takes place exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies or access to information in the user\'s end device (e.g. device fingerprinting) within the meaning of the TTDSG. The consent can be revoked at any time.',
                'datenschutz.external.fonts.text3': 'If your browser does not support web fonts, a standard font from your computer will be used.',
                'datenschutz.external.fonts.text4': 'Further information on Google Fonts can be found at',
                'datenschutz.external.fonts.text5': 'and in Google\'s privacy policy:',
                'datenschutz.rights.title': '6. Your rights as a data subject',
                'datenschutz.rights.text1': 'You can exercise the following rights at any time using the contact details provided:',
                'datenschutz.rights.info': 'Information about your data stored by us and its processing (Art. 15 GDPR)',
                'datenschutz.rights.correction': 'Correction of incorrect personal data (Art. 16 GDPR)',
                'datenschutz.rights.deletion': 'Deletion of your data stored by us (Art. 17 GDPR)',
                'datenschutz.rights.restriction': 'Restriction of data processing, insofar as we are not yet allowed to delete your data due to legal obligations (Art. 18 GDPR)',
                'datenschutz.rights.objection': 'Objection to the processing of your data by us (Art. 21 GDPR)',
                'datenschutz.rights.portability': 'Data portability, insofar as you have consented to data processing or have concluded a contract with us (Art. 20 GDPR)',
                'datenschutz.rights.text2': 'If you have given us consent, you can revoke it at any time with effect for the future.',
                'datenschutz.rights.text3': 'You can contact a supervisory authority at any time with a complaint, e.g. the supervisory authority of the federal state of your residence or the authority responsible for us as the responsible party.',
                'datenschutz.rights.text4': 'A list of supervisory authorities (for the non-public sector) with addresses can be found at:',
                'datenschutz.updated': 'Status: September 2025',
                
                // Additional missing Datenschutz English translations
                'datenschutz.general.responsible.company': 'qado GbR<br>Heiko Trötsch, Nicolas Pardon, Patrick Gundlach<br>Schraudolphstraße 42<br>80799 München<br>Germany<br><br>E-Mail: <a href="mailto:support@qado.ai">support@qado.ai</a><br>Website: <a href="https://qado.ai">qado.ai</a>',
                'datenschutz.collection.server.title': 'Server log files',
                'datenschutz.collection.server.text1': 'The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:',
                'datenschutz.collection.server.list1': 'Browser type and browser version',
                'datenschutz.collection.server.list2': 'Operating system used',
                'datenschutz.collection.server.list3': 'Referrer URL',
                'datenschutz.collection.server.list4': 'Hostname of the accessing computer',
                'datenschutz.collection.server.list5': 'Time of server request',
                'datenschutz.collection.server.list6': 'IP address',
                'datenschutz.collection.server.text2': 'A consolidation of this data with other data sources is not carried out. The collection of this data is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of his website – for this purpose the server log files must be recorded.',
                'datenschutz.collection.newsletter.title': 'Newsletter registration (email collection)',
                'datenschutz.collection.newsletter.text1': 'If you would like to register for our newsletter, we need an email address from you. Verification of the specified email address is necessary and receipt of the newsletter must be confirmed. Additional data is not collected or only collected on a voluntary basis.',
                'datenschutz.collection.newsletter.text2': 'For the processing of the newsletter, we use Google Forms. Your data is transmitted to Google in the process. Google also processes data in the USA and has submitted to the EU-US Data Privacy Framework.',
                'datenschutz.collection.newsletter.text3': 'Data processing is based on your consent (Art. 6 para. 1 lit. a GDPR). You can revoke this consent at any time. An informal email to support@qado.ai is sufficient for revocation. The legality of the data processing operations already carried out remains unaffected by the revocation.',
                'datenschutz.collection.newsletter.text4': 'The data you have deposited with us for the purpose of receiving the newsletter will be stored by us until you are removed from the newsletter and deleted after you unsubscribe from the newsletter. Data that has been stored by us for other purposes remains unaffected by this.',
                'datenschutz.external.forms.title': 'Google Forms',
                'datenschutz.external.forms.text1': 'On this website, we use Google Forms, a service of Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"), to collect email addresses for newsletter registrations.',
                'datenschutz.external.forms.text2': 'When you register via our form, the data you enter (email address) is transmitted to Google and stored there. Google may use this data to provide, maintain and improve their services.',
                'datenschutz.external.forms.text3': 'Data transmission is based on your consent pursuant to Art. 6 para. 1 lit. a GDPR. You can revoke your consent at any time by sending an email to support@qado.ai.',
                'datenschutz.external.forms.text4': 'Google also processes data in the USA and has submitted to the EU-US Data Privacy Framework, which ensures compliance with European data protection standards.',
                'datenschutz.external.forms.text5': 'Further information on the handling of user data can be found in Google\'s privacy policy:',
                
                // Impressum (Legal Notice) translations
                'impressum.title': 'Legal Notice',
                'impressum.hero.subtitle': 'Legal information according to § 5 TMG',
                'impressum.tmg.title': 'Information according to § 5 TMG',
                'impressum.tmg.content': 'qado GbR<br>Heiko Trötsch, Nicolas Pardon, Patrick Gundlach<br>Schraudolphstraße 42<br>80799 München<br>Germany',
                'impressum.contact.title': 'Contact',
                'impressum.contact.content': 'E-Mail: <a href="mailto:support@qado.ai">support@qado.ai</a><br>Website: <a href="https://qado.ai">qado.ai</a>',
                
                // Additional Impressum English translations
                'impressum.represented.title': 'Represented by',
                'impressum.represented.content': 'Heiko Trötsch<br>Nicolas Pardon<br>Patrick Gundlach',
                'impressum.responsible.title': 'Responsible for content according to § 55 para. 2 RStV',
                'impressum.responsible.content': 'Heiko Trötsch<br>Schraudolphstraße 42<br>80799 München',
                'impressum.dispute.title': 'Dispute resolution',
                'impressum.dispute.text1': 'The European Commission provides a platform for online dispute resolution (OS):',
                'impressum.dispute.text2': 'You can find our email address in the legal notice above. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
                'impressum.liability.title': 'Liability for contents',
                'impressum.liability.text1': 'As a service provider, we are responsible for our own content on these pages according to general laws pursuant to § 7 para. 1 TMG. However, according to §§ 8 to 10 TMG, we as service providers are not under obligation to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
                'impressum.liability.text2': 'Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. Upon becoming aware of such legal violations, we will remove the content immediately.',
                'impressum.links.title': 'Liability for links',
                'impressum.links.text1': 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.',
                'impressum.links.text2': 'The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. Upon becoming aware of legal violations, we will remove such links immediately.',
                'impressum.copyright.title': 'Copyright',
                'impressum.copyright.text1': 'The contents and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the scope of the copyright require the written consent of the respective author or creator.',
                'impressum.copyright.text2': 'Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding notice. Upon becoming aware of legal violations, we will remove such content immediately.',
                'impressum.images.title': 'Image credits',
                'impressum.images.text': 'The images used on this website come from:',
                'impressum.images.own': 'Own photographs and graphics',
                'impressum.updated': 'Status: September 2025',
                
                // Additional missing Impressum English translations
                'impressum.dispute.title': 'Dispute resolution',
                'impressum.dispute.text1': 'The European Commission provides a platform for online dispute resolution (OS):',
                'impressum.dispute.text2': 'You can find our email address above in the legal notice. We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.',
                'impressum.liability.title': 'Liability for content',
                'impressum.liability.text1': 'As service providers, we are liable for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG. However, according to §§ 8 to 10 TMG, we as service providers are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of the law, we will immediately remove the content in question.',
                'impressum.liability.text2': 'Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to us. As soon as an infringement of the law becomes known to us, we will immediately remove the content in question.',
                'impressum.links.title': 'Liability for links',
                'impressum.links.text1': 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.',
                'impressum.links.text2': 'The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identifiable at the time of linking. However, a permanent monitoring of the contents of the linked pages is not reasonable without concrete evidence of a violation. Upon notification of violations, we will remove such links immediately.',
                'impressum.copyright.title': 'Copyright',
                'impressum.copyright.text1': 'The content and works published on this website are governed by the copyright laws of Germany. Any duplication, processing, distribution or any form of commercialisation of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.',
                'impressum.copyright.text2': 'Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, we ask that you notify us accordingly. As soon as we become aware of any legal violations, we will remove such content immediately.',
                'impressum.images.title': 'Image credits',
                'impressum.images.text': 'The images used on this website come from:',
                'impressum.images.own': 'Own photographs and graphics',
                'meta.faq.description': 'Frequently asked questions about qado - AI-powered spend validation and overspending prevention',
                
                // Approach page
                'approach.hero.subtitle': 'A proven 2-phase process that systematically identifies and permanently prevents overspending',
                
                // Features page
                'features.integration.subtitle': 'qado integrates into all platforms your team uses. From ERP to email.',
                'features.cta.subtitle': 'Start today – non-binding and GDPR compliant',
                
                // Careers page
                'careers.hero.subtitle': 'Become part of our team and help shape the future of procurement management.',
                'careers.jobs.subtitle': 'Discover our current job offers',
                'careers.process.subtitle': 'This is how easy it is to become part of our team',
                
                // Legal pages
                'impressum.hero.subtitle': 'Legal information according to § 5 TMG',
                'datenschutz.hero.subtitle': 'GDPR compliant privacy policy',
                
                // Cookie consent translations
                'cookie.title': '🍪 Cookie Settings',
                'cookie.description': 'We use cookies to provide you with the best possible experience on our website. Some cookies are necessary for the website to function, while others help us improve the website.',
                'cookie.privacy_link': 'More information in our privacy policy',
                'cookie.accept_all': 'Accept All',
                'cookie.reject_all': 'Reject All',
                'cookie.settings': 'Settings',
                'cookie.settings_title': 'Cookie Settings',
                'cookie.settings_description': 'Choose which cookies you want to accept:',
                'cookie.cancel': 'Cancel',
                'cookie.save': 'Save Settings',
                'cookie.necessary': 'Necessary Cookies',
                'cookie.necessary_desc': 'These cookies are required for the website to function and cannot be disabled.',
                'cookie.functional': 'Functional Cookies',
                'cookie.functional_desc': 'These cookies enable advanced functionality and personalization.',
                'cookie.analytics': 'Analytics Cookies',
                'cookie.analytics_desc': 'These cookies help us understand how visitors interact with the website.',
                'cookie.settings_link': 'Cookie Settings',
                
                // Hero section translations
                'hero.pill1': 'Transparency',
                'hero.pill2': 'Automation',
                'hero.pill3': 'Savings',
                'hero.notification.title': 'Overspending detected!',
                'hero.challenge.rigid_erp': 'Rigid ERP',
                
                // FAQ Category titles
                'faq.category.our_approach': 'Our Approach',
                'faq.category.integration': 'Integration & Technology',
                'faq.category.costs': 'Costs & ROI',
                'faq.category.privacy': 'Privacy & Security',
                
                // FAQ questions and answers
                'faq.chatgpt.question': 'Is qado just a ChatGPT window?',
                'faq.chatgpt.answer': 'No, qado is much more than a simple ChatGPT interface. Our system is based on:',
                'faq.chatgpt.bullet1': 'Specialized AI Models:',
                'faq.chatgpt.bullet1_text': 'Trained specifically on contracts, invoices and compliance',
                'faq.chatgpt.bullet2': 'Multi-Modal Analysis:',
                'faq.chatgpt.bullet2_text': 'Processing of text, tables, images and PDFs',
                'faq.chatgpt.bullet3': 'Vector Graphs:',
                'faq.chatgpt.bullet3_text': 'Intelligent linking of contracts to attachments, adjustments and other documents',
                'faq.chatgpt.bullet4': 'Rule-based Engine:',
                'faq.chatgpt.bullet4_text': 'Combination of AI and fixed business rules',
                'faq.chatgpt.bullet5': 'Human-in-the-Loop:',
                'faq.chatgpt.bullet5_text': 'Expert validation for critical decisions',
                'faq.chatgpt.bullet6': 'Continuous Learning:',
                'faq.chatgpt.bullet6_text': 'System improves through feedback',
                'faq.chatgpt.conclusion': 'The decisive advantage:',
                'faq.chatgpt.conclusion_text': 'While ChatGPT conducts general conversations, qado understands the complex world of supplier contracts, automatically detects price deviations and enforces contract penalties – with measurable savings of 2-4% of your procurement costs.',
                
                'faq.costs.question': 'How much does qado cost?',
                'faq.costs.principle': 'Our basic principle:',
                'faq.costs.principle_text': 'We only earn money when we enable savings for you. We adapt flexibly to your wishes.',
                'faq.costs.expectation': 'What you can expect:',
                'faq.costs.bullet1': '2-4% cost savings',
                'faq.costs.bullet1_text': 'of your procurement costs in the first year',
                'faq.costs.bullet2': 'Setup costs',
                'faq.costs.bullet2_text': 'usually covered by savings in the first months',
                'faq.costs.bullet3': 'Transparent billing',
                'faq.costs.bullet3_text': 'without hidden costs',
                'faq.costs.success': 'Your success is our success:',
                'faq.costs.success_text': 'We are only successful when you are.',
                
                'faq.roi.question': 'What ROI can I expect?',
                'faq.roi.typical': 'Typical savings of our customers:',
                'faq.roi.bullet1': '2-4% cost savings',
                'faq.roi.bullet1_text': 'of your procurement costs',
                'faq.roi.bullet2': 'Break-even',
                'faq.roi.bullet2_text': 'in 3-6 months',
                'faq.roi.bullet3': 'On average 80% less',
                'faq.roi.bullet3_text': 'manual checks',
                'faq.roi.longterm': 'Long-term you benefit from:',
                'faq.roi.longterm_text': 'More transparent negotiations, automated processes and measurable savings without additional effort.',
                
                'faq.trial.question': 'Is there a free trial period?',
                'faq.trial.answer': 'Yes, we offer a free demo as well as affordable models for testing without extensive integration:',
                'faq.trial.bullet1': 'Free demo session:',
                'faq.trial.bullet1_text': 'Test qado with some of your contracts',
                'faq.trial.bullet2': 'Proof of Concept:',
                'faq.trial.bullet2_text': 'Analysis of your historical data (1-3 years) without connection to existing systems',
                'faq.trial.bullet3': 'Pilot project:',
                'faq.trial.bullet3_text': 'Implementation in 2-3 procurement categories',
                'faq.trial.contact': 'Contact us for individual advice on the best testing options for your company.',
                
                'faq.security.question': 'How secure is my data with qado?',
                'faq.security.answer': 'Your data is protected to the highest degree by:',
                'faq.security.bullet1': 'End-to-end encryption',
                'faq.security.bullet1_text': '(AES-256, TLS 1.3) for all data transmissions',
                'faq.security.bullet2': 'GDPR-compliant processing',
                'faq.security.bullet2_text': 'with explicit consent and data minimization',
                'faq.security.bullet3': 'ISO 27001 certified',
                'faq.security.bullet3_text': 'data centers exclusively in the EU',
                'faq.security.bullet4': 'Multi-factor authentication',
                'faq.security.bullet4_text': 'and role-based access controls',
                'faq.security.bullet5': '24/7 Security Operations Center',
                'faq.security.bullet5_text': 'with automatic threat detection',
                'faq.security.bullet6': 'Daily backups',
                'faq.security.bullet6_text': 'with geographic distribution and point-in-time recovery',
                'faq.security.conclusion': 'All data is stored and processed exclusively in the EU. We guarantee a Recovery Time Objective (RTO) of less than 4 hours.',
                
                'faq.storage.question': 'Where is my data stored and processed?',
                'faq.storage.approach': 'EU-First approach:',
                'faq.storage.approach_text': 'All your data is stored and processed exclusively in the EU.',
                'faq.storage.bullet1': 'Data centers:',
                'faq.storage.bullet1_text': 'ISO 27001 certified datacenter locations in the EU',
                'faq.storage.bullet2': 'Data processing:',
                'faq.storage.bullet2_text': 'No data transfer outside the EU',
                'faq.storage.bullet3': 'Backup & Recovery:',
                'faq.storage.bullet3_text': 'Geographically distributed backups within the EU',
                'faq.storage.bullet4': 'Compliance:',
                'faq.storage.bullet4_text': 'Full compliance with German and European data protection laws',
                'faq.storage.bullet5': 'Transparency:',
                'faq.storage.bullet5_text': 'You retain full control over your data at all times',
                'faq.storage.conclusion': 'This ensures maximum data security and legal clarity for EU companies.',
                
                // FAQ CTA section
                'faq.cta.title': 'Do you have more questions?',
                'faq.cta.subtitle': 'Our expert team is happy to provide you with personal consultation.',
                'faq.cta.button': 'Get in touch',
                
                // Missing translations for existing content
                'faq.problem.conclusion': 'This is exactly where we come in: qado makes negotiation successes measurable, prevents overspending and secures immediate savings.',
                'faq.erp.procurement': 'Procurement:',
                'faq.erp.procurement_list': 'Ariba, Coupa, Jaggaer, Ivalua, Basware'
            }
        };
        
        this.init();
    }
    
    init() {
        this.updateLanguageToggle();
        this.translatePage();
        this.bindEvents();
        
        // Set up periodic checks for the language toggle button
        // in case it's loaded dynamically by components.js
        let checkCount = 0;
        const checkForToggle = () => {
            if (checkCount < 10) { // Check up to 10 times
                // Just update the toggle, no need to bind since we use event delegation
                this.updateLanguageToggle();
                checkCount++;
                setTimeout(checkForToggle, 200); // Check every 200ms
            }
        };
        checkForToggle();
    }
    
    updateLanguageToggle() {
        const languageText = this.currentLanguage.toUpperCase();
        
        // Update desktop language toggle
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            const langText = toggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = languageText;
            }
        }
        
        // Update mobile language toggle
        const mobileToggle = document.getElementById('mobile-lang-toggle');
        if (mobileToggle) {
            const mobileLangText = mobileToggle.querySelector('.lang-text');
            if (mobileLangText) {
                mobileLangText.textContent = languageText;
            }
        }
        
        // Also check for any other language toggle elements
        const allToggles = document.querySelectorAll('.lang-toggle .lang-text');
        allToggles.forEach(langText => {
            langText.textContent = languageText;
        });
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
        
        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.getTranslation(key);
            if (translation) {
                element.placeholder = translation;
            }
        });
        
        // Handle aria-label translations
        const ariaLabelElements = document.querySelectorAll('[data-translate-aria-label]');
        ariaLabelElements.forEach(element => {
            const key = element.getAttribute('data-translate-aria-label');
            const translation = this.getTranslation(key);
            if (translation) {
                element.setAttribute('aria-label', translation);
            }
        });
        
        // Special handling for mobile dropdown elements
        this.updateMobileDropdown();
        
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
    
    updateMobileDropdown() {
        // Update mobile tab selector options
        const mobileSelector = document.getElementById('mobile-tab-selector');
        if (mobileSelector) {
            const options = mobileSelector.querySelectorAll('option[data-translate]');
            options.forEach(option => {
                const key = option.getAttribute('data-translate');
                const translation = this.getTranslation(key);
                if (translation && translation !== key) {
                    option.textContent = translation;
                }
            });
        }
        
        // Update fallback mobile dropdown text
        const fallbackText = document.getElementById('mobile-tab-selector-text');
        if (fallbackText) {
            const translation = this.getTranslation('features.tab.contracts');
            if (translation && translation !== 'features.tab.contracts') {
                fallbackText.textContent = translation;
            }
        }
        
        // Update fallback dropdown options
        const fallbackOptions = document.querySelectorAll('.mobile-tab-option[data-translate]');
        fallbackOptions.forEach(option => {
            const key = option.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation && translation !== key) {
                option.textContent = translation;
            }
        });
    }
    
    getTranslation(key) {
        return this.translations[this.currentLanguage]?.[key] || key;
    }
    
    switchLanguage() {
        this.currentLanguage = this.currentLanguage === 'de' ? 'en' : 'de';
        localStorage.setItem('qado-language', this.currentLanguage);
        this.updateLanguageToggle();
        this.translatePage();
        
        // Dispatch language change event
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }
    
    bindEvents() {
        // Use event delegation for all language toggles
        document.addEventListener('click', (e) => {
            // Check for direct clicks on language toggle elements
            if (e.target.id === 'lang-toggle' || e.target.id === 'mobile-lang-toggle' || 
                e.target.classList.contains('lang-toggle') ||
                e.target.closest('#lang-toggle') || e.target.closest('#mobile-lang-toggle')) {
                
                e.preventDefault();
                e.stopPropagation();
                
                const target = e.target.closest('#lang-toggle, .lang-toggle, #mobile-lang-toggle') || e.target;
                this.switchLanguage();
            }
        });

        // Note: We're using event delegation only, no direct binding needed
        // this.bindToggleButton();
        
        // Re-bind when header is loaded dynamically
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE && 
                            (node.id === 'lang-toggle' || node.querySelector('#lang-toggle') ||
                             node.id === 'mobile-lang-toggle' || node.querySelector('#mobile-lang-toggle'))) {
                            // Just update the toggle, no need to bind since we use event delegation
                            this.updateLanguageToggle();
                        }
                    });
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
}

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
    // Also expose as window.language for backward compatibility
    window.language = window.languageManager;
    
    // Dispatch event that language system is ready
    window.dispatchEvent(new CustomEvent('languageSystemReady', {
        detail: { languageManager: window.languageManager }
    }));
    
    // Also re-translate when window is fully loaded (in case header loads after DOMContentLoaded)
    window.addEventListener('load', () => {
        console.log('Window loaded, re-translating page');
        window.languageManager.translatePage();
        window.languageManager.updateLanguageToggle();
    });
});
