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
                'about.team.nicolas.bio': 'Nicolas war Strategieberater bei McKinsey mit umfangreicher Erfahrung in Finance und Procurement, Wertsteigerung und Digitalisierung. Mit zwei Masterabschlüssen in Finance und einem Bachelor in Betriebswirtschaftslehre promovierte er im Bereich Entrepreneurial Finance.',
                'about.team.patrick.bio': 'Patrick war Strategieberater bei Kearney im Bereich Digital Procurement und Supply Chain Optimierung. Seine Schwerpunkte lagen in GenAI, Machine Learning und Advanced Analytics. Mit einem Master in Business Intelligence und einem Bachelor in Wirtschaftsingenieurwesen bringt er fundierte operative Expertise mit.',
                'about.team.heiko.bio': 'Heiko war Product Manager bei Enpal und verantwortete den Aufbau eines vernetzten und KI-gestützten Systems für Wärmepumpen. Dabei leitete er ein Team von Software-Entwicklern zur Entwicklung von marktreifen IT-Produkten. Mit Master und Bachelor in Wirtschaftsinformatik von der Universität Mannheim fokussierte er auf verteilte, energieeffiziente Systeme.',
                
                // Meta descriptions
                'meta.about.description': 'Lernen Sie das qado-Team kennen: Nicolas Pardon, Patrick Gundlach und Heiko Trötsch - Experten für KI-gestützte Einkaufsoptimierung.',
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
                'platform.contract-review': 'Contract Review',
                'platform.order-review': 'Order Review',
                'platform.invoice-review': 'Invoice Review',
                'platform.penalty-management': 'Penalty Management',
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
                'about.team.nicolas.bio': 'Nicolas was a strategy consultant at McKinsey with extensive experience in finance and procurement, value creation and digitalization. With two master\'s degrees in finance and a bachelor\'s in business administration, he completed his doctorate in entrepreneurial finance.',
                'about.team.patrick.bio': 'Patrick was a strategy consultant at Kearney in Digital Procurement and Supply Chain Optimization. His focus areas included GenAI, Machine Learning and Advanced Analytics. With a Master\'s in Business Intelligence and a Bachelor\'s in Industrial Engineering, he brings solid operational expertise.',
                'about.team.heiko.bio': 'Heiko was a Product Manager at Enpal and was responsible for building a networked and AI-supported system for heat pumps. He led a team of software developers in developing market-ready IT products. With a master\'s and bachelor\'s in business informatics from the University of Mannheim, he focused on distributed, energy-efficient systems.',
                
                // Meta descriptions
                'meta.about.description': 'Meet the qado team: Nicolas Pardon, Patrick Gundlach and Heiko Trötsch - experts in AI-powered procurement optimization.',
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
                this.bindToggleButton();
                this.updateLanguageToggle();
                checkCount++;
                setTimeout(checkForToggle, 200); // Check every 200ms
            }
        };
        checkForToggle();
    }
    
    updateLanguageToggle() {
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            const langText = toggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLanguage.toUpperCase();
            }
        }
        
        // Also check for any other language toggle elements
        const allToggles = document.querySelectorAll('.lang-toggle .lang-text');
        allToggles.forEach(langText => {
            langText.textContent = this.currentLanguage.toUpperCase();
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
        
        // Dispatch language change event
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }
    
    bindEvents() {
        // Use event delegation since the lang-toggle button might be loaded dynamically
        document.addEventListener('click', (e) => {
            if (e.target.closest('#lang-toggle') || e.target.closest('.lang-toggle')) {
                e.preventDefault();
                e.stopPropagation();
                this.switchLanguage();
            }
        });

        // Also try direct binding for immediate elements
        this.bindToggleButton();
        
        // Re-bind when header is loaded dynamically
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE && 
                            (node.id === 'lang-toggle' || node.querySelector('#lang-toggle'))) {
                            this.bindToggleButton();
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
    
    bindToggleButton() {
        const toggle = document.getElementById('lang-toggle');
        if (toggle && !toggle.hasAttribute('data-language-bound')) {
            toggle.setAttribute('data-language-bound', 'true');
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
