
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO posts (title, content, author, imageUrl, createdAt) 
VALUES 
('Introduction à HTML et CSS', 'Dans cet article, nous explorons les bases du HTML et du CSS, les deux piliers du développement front-end.', 'Jane Doe', 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', NOW()),

('JavaScript pour les débutants', 'JavaScript est le langage de programmation le plus populaire pour les applications web. Découvrez ses bases dans ce tutoriel.', 'John Smith', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', NOW()),

('Les Frameworks CSS les plus utilisés', 'Bootstrap, Tailwind, Foundation... Dans cet article, nous comparons les principaux frameworks CSS utilisés aujourd\'hui.', 'Mary Johnson', 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png', NOW()),

('Guide complet sur React.js', 'React est une bibliothèque JavaScript qui révolutionne le développement d\'interfaces utilisateur. Apprenez à créer des composants réutilisables.', 'Jane Doe', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', NOW()),

('Comprendre le modèle MVC', 'Le modèle MVC (Modèle-Vue-Contrôleur) est un paradigme fondamental pour les développeurs back-end. Apprenez comment il structure vos applications.', 'Michael Brown', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', NOW()),

('Les bonnes pratiques pour l\'accessibilité web', 'Assurez-vous que vos sites web sont accessibles à tous en respectant les standards d\'accessibilité WCAG.', 'Sarah Lee', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', NOW()),

('Démarrer avec Node.js et Express', 'Node.js permet d\'exécuter JavaScript côté serveur. Apprenez à créer des applications web avec Express, un framework léger.', 'Tom Clark', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', NOW()),

('Utiliser Git et GitHub pour la gestion de projet', 'Git est l\'outil de contrôle de version le plus utilisé. Dans cet article, découvrez comment l\'intégrer dans vos workflows avec GitHub.', 'Emily Davis', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', NOW()),

('Développement web avec API REST', 'Les API REST sont au cœur de la communication entre le front-end et le back-end. Apprenez à créer et consommer des API dans cet article.', 'Robert Wilson', 'https://upload.wikimedia.org/wikipedia/commons/6/67/JSON_Web_Token_logo.svg', NOW()),

('Optimiser les performances de votre site web', 'Un site rapide améliore l\'expérience utilisateur et le SEO. Découvrez nos conseils pour améliorer les performances de vos pages web.', 'Anna Martinez', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/SEO_LOGO.png', NOW());

-- Sélectionner tous les articles
SELECT * FROM posts;

