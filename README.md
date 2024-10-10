# ProjectCrubBlog

# Application de Gestion d'Articles avec Effets Parallax et Suivi de la Souris

## Description

Ce projet est une application web interactive construite avec **React** qui permet de gérer des articles de blog (CRUD) tout en intégrant des animations interactives telles qu'une citrouille qui suit la souris et un effet parallax lors du défilement de la page.

## Aperçu

![Aperçu de la page Home](https://github.com/NICOLASR44/ProjectCrudBlog/blob/dev/client/src/assets/images/home%20capture.png?raw=true)
![Aperçu de la page Articles](https://github.com/NICOLASR44/ProjectCrudBlog/blob/dev/client/src/assets/images/form%20capture.png?raw=true)

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

# projectcrud

This project uses Harmonia. Harmonia is a framework meant to serve as a foundation for every project following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying a pedagogical tool.

## Setup & Use

**Windows users:** be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm install`
- Create environment files (`.env`) in both `server` and `client`: you can copy `.env.sample` files as starters (**don't** delete them)

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (client + server) in one terminal
- `dev:client` : Starts the React client
- `dev:back` : Starts the Express server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

## Deployment with Traefik

> ⚠️ Prerequisites : You must have installed and configured Traefik on your VPS beforehand.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- SSH_HOST : IP address of your VPS
- SSH_USER : SSH login to your VPS
- SSH_PASSWORD : SSH connection password to your VPS

And a public variable from the tab `/settings/variables/actions` :

- PROJECT_NAME : the name of the project used to create the subdomain.

> ⚠️ Warning : underscores are not allowed. They can cause trouble with the let's encrypt certificate

Use this same tab to add the other environment variables required for the project if any.

Only the server will be accessible. The root path `"/"` will redirect to the dist folder of your client. In order to allow that, please uncomment the line as explained in `server/src/app.js` (Line 102).
Because the server will also serve the client, the global variable VITE_SERVER_URL will be set with an empty string.

Your url will be ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### About the database

The database is automaticaly deployed with the name of your repo. During the build of the projet (`docker-entry.sh`), the `node migrate.js` command is executed in the server. If you want to seed automaticaly your database using the `seed.js` script, replace the `cd ./server && node ./bin/migrate.js && node index.js` by `cd ./server && node ./bin/migrate.js && node ./bin/seed.js && node index.js`

### About public assets (pictures, fonts...)

Don't use any public folder on your client. This folder won't be accessible online. You may move your public assets in the `server/public` folder. Prefer [static assets](https://vitejs.dev/guide/assets) when possible.

### About Specific Environment Variables (e.g., Email)

Students should use the template provided in the `*.env.sample*` file as `<PROJECT_NAME><SPECIFIC_NAME>=<THE_VARIABLE>`.

> ⚠️ **Warning:** The `PROJECT_NAME` should match the one used in the Git public variable.

To add it during deployment, follow these 2 steps:

- Add the following variable to the `docker-compose.prod.yml` file (as shown in the example: `PROJECT_NAME_SPECIFIC_NAME: ${PROJECT_NAME_SPECIFIC_NAME}`).
- Connect to your server via SSH. Open the global `.env` file in Traefik (`nano ./traefik/data/.env`). Add the variable with the correct value and save the file.
- Afterward, you can initiate automatic deployment. Docker will not refresh during this process.

### About Logs
