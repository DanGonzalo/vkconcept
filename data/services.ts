export const services = {
  "portage-salarial-vietnam": {
    title: "Portage salarial IT au Vietnam", subtitle: "Les talents dont vous avez besoin. Une collaboration simplifiée.",
    description: "Externalisez vos ressources IT au Vietnam avec VK Concept : freelances, CTO fractionné et équipes dédiées, accompagnés par une interface francophone.",
    intro: "VK Concept vous permet de collaborer avec des professionnels IT basés au Vietnam tout en bénéficiant d’un accompagnement administratif et d’un référent francophone. Vous gardez la maîtrise de vos projets ; nous facilitons l’organisation de votre collaboration.",
    offers: [
      ["Freelance IT en portage", "Un expert intégré à votre projet, avec un accompagnement pour les contrats, la facturation et la gestion administrative."],
      ["CTO fractionné", "Un CTO senior pour orienter votre stratégie technique, prioriser votre feuille de route et accompagner vos décisions à distance."],
      ["Équipe dédiée externalisée", "Une équipe projet réunissant développeurs et chef de projet, dimensionnée selon votre périmètre et votre charge de travail."],
    ],
    capabilities: ["Développeurs full stack, frontend et backend", "Chefs de projet IT", "Testeurs et spécialistes QA", "Experts en cybersécurité", "Gestion des contrats et coordination RH", "Durée des missions adaptée à vos besoins"],
    heading: "Une équipe locale, un dialogue en français.",
    approach: "Nous clarifions les compétences recherchées, la durée de la mission et les modalités de suivi. L’accompagnement administratif et le cadre contractuel sont définis dans la proposition, en fonction de votre situation.",
    faq: [["Quels profils peut-on mobiliser ?", "Développeurs full stack, frontend ou backend, chefs de projet, testeurs QA et experts en cybersécurité : la sélection dépend des compétences et de la disponibilité requises pour votre mission."], ["Peut-on constituer une équipe dédiée ?", "Oui. Nous proposons des équipes projet avec un chef de projet. Leur composition et leur taille sont précisées au cadrage."], ["Comment obtenir une proposition ?", "Présentez votre besoin, les compétences recherchées et votre calendrier. Nous pourrons définir le périmètre de l’accompagnement et établir un devis."]],
  },
  "developpement-logiciel": {
    title: "Développement logiciel sur mesure", subtitle: "De votre idée à un produit utile, fiable et évolutif.",
    description: "Développement web et mobile, SaaS, API, ERP et CRM : VK Concept conçoit et maintient vos logiciels sur mesure avec ses équipes au Vietnam.",
    intro: "Notre équipe de développeurs au Vietnam vous accompagne dans la conception, le développement et la maintenance de logiciels adaptés à vos besoins métier. Nous construisons une démarche compatible avec votre organisation et la complexité du projet.",
    offers: [
      ["MVP et applications web / mobiles", "Validez votre idée avec une première version fonctionnelle et priorisez les fonctionnalités qui répondent aux besoins de vos utilisateurs."],
      ["Produits SaaS et outils métier", "Développez une plateforme SaaS, un outil de gestion, une solution e-commerce ou des intégrations ERP et CRM."],
      ["Maintenance et évolution", "Faites évoluer vos applications existantes avec des corrections, des mises à jour et un accompagnement technique adapté."],
    ],
    capabilities: ["Applications web et mobiles", "API et microservices", "Plateformes e-commerce", "Intégrations ERP et CRM", "Tests et assurance qualité", "Maintenance des applications existantes"],
    heading: "Des technologies au service de votre produit.",
    approach: "React, Angular, Vue.js et Flutter pour les interfaces ; Node.js, Python, Java, PHP et .NET pour le backend ; PostgreSQL, MySQL et MongoDB pour les données. Nous pouvons travailler avec AWS, Azure et Google Cloud. Les choix techniques sont établis selon vos besoins, votre environnement et la maintenance attendue.",
    faq: [["Quelles technologies utilisez-vous ?", "L’équipe intervient notamment sur React, Angular, Vue.js, Flutter, Node.js, Python, Java, PHP et .NET. Le choix dépend de votre produit et de vos systèmes existants."], ["Quels modèles de collaboration proposez-vous ?", "Nous proposons des modalités au forfait ou en régie. Le modèle retenu, les livrables et le suivi sont définis dans votre proposition."], ["Quel délai prévoir pour un MVP ?", "Le délai dépend des fonctionnalités, des intégrations et des ressources nécessaires. Nous le précisons après avoir cadré une première version réaliste."]],
  },
  "intelligence-artificielle": {
    title: "Consulting et développement IA", subtitle: "L’intelligence au service de votre croissance.",
    description: "VK Concept accompagne vos projets IA : audit, stratégie, machine learning, chatbots, vision par ordinateur, automatisation et formation des équipes.",
    intro: "Explorez les usages de l’intelligence artificielle qui répondent à vos enjeux. Nos experts vous accompagnent de l’identification des opportunités à la conception et à l’intégration de solutions robustes, en étroite collaboration avec vos équipes.",
    offers: [
      ["Audit et stratégie IA", "Identifiez et priorisez vos cas d’usage, évaluez la faisabilité et construisez une feuille de route adaptée à votre entreprise."],
      ["Développement et intégration", "Concevez des modèles prédictifs, des moteurs de recommandation, des chatbots multilingues ou des outils d’analyse de documents."],
      ["Formation de vos équipes", "Comprenez les possibilités de l’IA et du machine learning grâce à des ateliers en présentiel ou à distance."],
    ],
    capabilities: ["Machine learning : prédiction, classification et clustering", "Deep learning et reconnaissance d’images", "Vision par ordinateur pour images et vidéos", "NLP : chatbots, traduction et analyse de sentiments", "Automatisation intelligente des flux de travail", "Conseil et priorisation des cas d’usage"],
    heading: "Partir d’un usage concret. Mesurer sa valeur.",
    approach: "Prédiction des ventes, contrôle qualité par l’image, classification de documents, recherche intelligente ou analyse des retours clients : chaque projet commence par un besoin et des données. Nous évaluons les contraintes, testons une solution et préparons son intégration, notamment avec TensorFlow et PyTorch lorsque ces outils sont adaptés.",
    faq: [["Quels cas d’usage pouvez-vous explorer ?", "Chatbots pour le service client, prédiction des ventes, reconnaissance d’images, classification de documents, analyse de sentiments et moteurs de recherche intelligents font partie des exemples proposés."], ["Faut-il déjà disposer de données ?", "Cela dépend du cas d’usage. L’audit permet d’évaluer les données disponibles, leur qualité et les besoins nécessaires à la solution envisagée."], ["Proposez-vous une formation ?", "Oui. Des ateliers sur l’IA et le machine learning sont proposés aux équipes, en présentiel ou à distance, avec un programme à définir selon vos objectifs."]],
  },
};
export type ServiceSlug = keyof typeof services;
