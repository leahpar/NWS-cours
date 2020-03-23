# Télétravail

**Objectif du jour : mettre en place environnement de dev de votre projet.**

- Travailler à distance
- Travailler à plusieurs


**Pour cela : Faire un joli README complet (markdown)**


Mise en pratique derniers cours :
- TP CMS : Présentation projet, installation, configuration, git...
- Docker : Conteneurisation, installabilité...
- TDD : Mise en place de tests (PHPUnit, Behat... Jest...)


## Readme.md

### Projet

Nom, description du projet, consignes, tout ça tout ça...

Équipe


### Git

(github @leahpar / gitlab @raphaelbacco / bitbucket @raphaelbacco)

Description des branches


### Prérequis

- Langages + version (rétrocompatibilité)
- Outils (et comment les installer) : docker, composer, npm...
- BDD (et comment l'installer) : mysql, sqlite, mongoDB...

Trucs bien que j'ai vu sur le TP CMS pour les dépendances pas courantes :
- Bruno : comment installer facilement Deno avec Chocolatey (windows) ou Homebrew (macos).
- Adrien : Proposer une image docker avec MongoDB tout prêt.


### Installation

```git clone```, ```composer install```, ```npm install```...


### Configuration

Création utilisateur bdd, fichier ```toto.conf``` à modifier...


### Initialisation bdd / migration bdd

- Script de création des tables
- Script de migration

=> Faire des scripts réentrants


### Lancement

```docker-compose exec server run -p 8080```...

(et aussi comment l'arrêter le cas échéant)


### Utilisation

http://localhost:8080


### Tests

Comment lancer les tests.

Grouper les tests. Pour ne pas lancer systématiquement l'intégralité des tests.

Commencer par des tests de bon fonctionnement de l'environnement :
- test connexion bdd
- test connexion back : http 200 ou 403 sur l'API
- test connexion front : http 200 sur la page d'accueil
- test compilation ressources (js, css...) : http 200 sur les ressources en question
- tests API externes en ligne + connexion OK sur ces API 
- ...


### Automatisation

- Make (sauf Windows)
- Composer (php)
- npm, yarn (js)
- Capistrano (orienté déploiement)






