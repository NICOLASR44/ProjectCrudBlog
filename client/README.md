# ProjectCrubBlog

# Application de Gestion d'Articles avec Effets Parallax et Suivi de la Souris

## Description

Ce projet est une application web interactive construite avec **React** qui permet de gérer des articles de blog (CRUD) tout en intégrant des animations interactives telles qu'une citrouille qui suit la souris et un effet parallax lors du défilement de la page.

## Fonctionnalités

- **Gestion des articles** : Créer, lire, mettre à jour et supprimer des articles via une interface utilisateur intuitive.
- **Citrouille interactive** : Une citrouille suit la souris en temps réel pour une expérience utilisateur ludique.
- **Effet Parallax** : Des branches d'arbres apparaissent et bougent sur les côtés lorsque l'utilisateur fait défiler la page.
- **Formulaire interactif** : Utilisation de formulaires pour l'ajout et la gestion d'articles avec des messages de redirection.
- **Affichage dynamique des articles** : Les articles sont présentés sous forme de cartes.

## Composants principaux

### 1. Navbar

- **Fichier** : `Navbar.jsx`
- Ce composant affiche la barre de navigation en haut de la page. Il contient les liens vers différentes sections de l'application.

### 2. RedirectAfterCreation

- **Fichier** : `RedirectAfterCreation.jsx`
- Ce composant affiche un message après la création d'un article, informant l'utilisateur qu'il sera redirigé vers la page d'accueil.

### 3. Title

- **Fichier** : `Title.jsx`
- Ce composant affiche les titres sur différentes pages du site avec un style personnalisé.

### 4. ArticleCard

- **Fichier** : `ArticleCard.jsx`
- Composant pour afficher chaque article sous forme de carte avec des informations comme le titre, l'auteur, et la date de création.

### 5. BlogCard

- **Fichier** : `BlogCard.jsx`
- Similaire à `ArticleCard`, ce composant présente un aperçu des articles publiés sous forme de cartes cliquables.

### 6. Footer

- **Fichier** : `Footer.jsx`
- Ce composant affiche le pied de page de l'application avec les informations relatives au site.

### 7. Home

- **Fichier** : `Home.jsx`
- Il s'agit de la page d'accueil. Elle contient un titre de bienvenue, un aperçu des articles sous forme de `BlogCards` et l'animation interactive de la citrouille.

### 8. ManageArticle

- **Fichier** : `ManageArticle.jsx`
- Ce composant gère l'ajout, la modification et la suppression des articles via un formulaire interactif.

### 9. ViewArticle

- **Fichier** : `ViewArticle.jsx`
- Ce composant est utilisé pour afficher un article en détail.

## Installation

### Prérequis

- **Node.js** (v14+)
- **MySQL** pour la base de données

### Étapes

1. **Cloner le dépôt** :

```bash
git clone https://github.com/ton-compte/ton-repo.git
cd ton-repo

# Installation des dépendances :

# Pour le frontend
cd client
npm install

# Pour le backend
cd ../server
npm install

#Configurer les variables d'environnement :

APP_PORT=3310
APP_SECRET=your_secret_key
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog_database
CLIENT_URL=http://localhost:3000

#License

### Adaptations spécifiques :
- **URL du dépôt GitHub** : Remplace par l'URL de ton projet.
- **Dépendances** : Vérifie si d'autres dépendances spécifiques doivent être mentionnées (par exemple, `Nodemailer` ou `Joi` pour la validation).
- **Structure du projet** : Complète la structure avec d'autres fichiers ou dossiers si nécessaire.

Ce fichier README est maintenant prêt à être utilisé dans ton projet. Si tu souhaites des modifications supplémentaires, fais-le moi savoir !

```
