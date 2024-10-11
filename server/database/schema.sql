-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: blog_app
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- ------------------------------------------------------
-- Drop and recreate the database
-- ------------------------------------------------------

DROP DATABASE IF EXISTS `blog_app`;
CREATE DATABASE `blog_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `blog_app`;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES 
(1,'Introduction à HTML et CSS','Dans cet article, nous explorons les bases du HTML et du CSS, les deux piliers du développement front-end.','Jane Doe','https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg','2024-10-10 13:32:23','2024-10-10 13:32:23'),
(2,'JavaScript pour les débutants','JavaScript est le langage de programmation le plus populaire pour les applications web. Découvrez ses bases dans ce tutoriel.','John Smith','https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg','2024-10-10 13:32:23','2024-10-10 13:32:23'),
(3,'Les Frameworks CSS les plus utilisés','Bootstrap, Tailwind, Foundation... Dans cet article, nous comparons les principaux frameworks CSS utilisés aujourd\'hui.','Mary Johnson','https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png','2024-10-10 13:32:23','2024-10-10 13:32:23'),
(4,'Guide complet sur React.js','React est une bibliothèque JavaScript qui révolutionne le développement d\'interfaces utilisateur. Apprenez à créer des composants réutilisables.','Jane Doe','https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg','2024-10-10 13:32:23','2024-10-10 13:32:23'),
(5,'Comprendre le modèle MVC','Le modèle MVC (Modèle-Vue-Contrôleur) est un paradigme fondamental pour les développeurs back-end. Apprenez comment il structure vos applications.','Michael Brown','https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png','2024-10-10 13:32:23','2024-10-10 13:32:23'),
(6,'Les bonnes pratiques pour l\'accessibilité web','Assurez-vous que vos sites web sont accessibles à tous en respectant les standards d\'accessibilité WCAG.','Sarah Lee','https://cdn.sanity.io/images/gkzz4udg/production/2bebdeb6280498f05170f855be1c724304241251-2000x1414.jpg','2024-10-10 13:32:23','2024-10-11 15:43:20'),
(7,'Démarrer avec Node.js et Express','Node.js permet d\'exécuter JavaScript côté serveur. Apprenez à créer des applications web avec Express, un framework léger.','Tom Clark','https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg','2024-10-10 13:32:23','2024-10-11 15:44:43'),
(8,'Utiliser Git et GitHub pour la gestion de projet','Git est l\'outil de contrôle de version le plus utilisé. Dans cet article, découvrez comment l\'intégrer dans vos workflows avec GitHub.','Emily Davis','https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png','2024-10-10 13:32:23','2024-10-10 13:32:23'),
(9,'Développement web avec API REST','Les API REST sont au cœur de la communication entre le front-end et le back-end. Apprenez à créer et consommer des API dans cet article.','Robert Wilson','http://localhost:3310/uploads/1728661431206.png','2024-10-10 13:32:23','2024-10-11 15:43:51'),
(10,'Optimiser les performances de votre site web','Un site rapide améliore l\'expérience utilisateur et le SEO. Découvrez nos conseils pour améliorer les performances de vos pages web.','Anna Martinez','https://audreytips.com/wp-content/uploads/2020/05/23-conseils-pour-optimiser-votre-site-web.jpg','2024-10-10 13:32:23','2024-10-11 18:03:12');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-11 20:09:46
