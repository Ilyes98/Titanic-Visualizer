### Description de l'Application

Ce projet est une application web développée en React pour gérer une base de données de passagers. L'application permet de télécharger un fichier CSV contenant des informations sur les passagers, de les afficher sous forme de liste ou de graphique, et de filtrer les données.

## Architecture

L'application suit une architecture frontend React simple mais efficace, composée des éléments suivants :

- **Components** : Ce dossier contient les composants réutilisables de l'application, tels que FileUpload, PassengerList, GenderChart, Pagination, et Menu. Chaque composant est responsable d'une fonctionnalité spécifique de l'interface utilisateur.

- **Styles** : Ce dossier contient les fichiers CSS pour styliser les différents composants de l'application.

- **App.js** : Le composant principal de l'application, responsable de la mise en page générale et de la gestion de l'état global.

## Besoins Fonctionnels

L'application répond aux besoins fonctionnels suivants :

- **Téléchargement de fichiers** : Les utilisateurs peuvent télécharger un fichier CSV contenant des informations sur les passagers.

- **Affichage des Passagers** : Les passagers sont affichés sous forme de liste ou de graphique, selon le mode sélectionné par l'utilisateur.

- **Filtrage des Données** : Les utilisateurs peuvent filtrer les passagers en fonction de critères spécifiques tels que le nom, le sexe, ou l'âge.

- **Pagination** : Les résultats sont paginés pour améliorer la performance et l'expérience utilisateur.

### Backend (Flask / MongoDB)

- **Models** : Ce dossier contient les modèles de données MongoDB pour l'application, définissant la structure des documents stockés dans la base de données.

- **Routes** : Ce dossier contient les routes de l'API RESTful utilisées pour gérer les passagers.

## Besoins Fonctionnels

L'application répond aux besoins fonctionnels suivants :

- **Téléchargement de fichiers** : Les utilisateurs peuvent télécharger un fichier CSV contenant des informations sur les passagers.

- **Affichage des Passagers** : Les passagers sont affichés sous forme de liste ou de graphique, selon le mode sélectionné par l'utilisateur.

- **Filtrage des Données** : Les utilisateurs peuvent filtrer les passagers en fonction de critères spécifiques tels que le nom.

- **Pagination** : Les résultats sont paginés pour améliorer la performance et l'expérience utilisateur.

## Exécution du projet en local

L'application peut être déployée sur un serveur Web compatible avec React et Flask. Pour déployer l'application localement, vous pouvez suivre ces étapes :

1. Cloner le dépôt GitHub : `git clone https://github.com/Ilyes98/Titanic-Visualizer.git`
2. Installer les dépendances Frontend : `cd client && npm install`
3. Installer les dépendances Backend : `cd application && npm install`
4. Démarrer le serveur Backend : `cd application &&  python app.py`
5. Démarrer l'application Frontend : `cd client && npm start`
