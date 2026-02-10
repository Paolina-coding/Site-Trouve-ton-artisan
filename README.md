Les prérequis de ce projet sont:
  Node.js
  Un éditeur de code comme Visual Studio Code
  MySQL
  Git
  Un navigateur web

Vous pouvez alors ouvrir un terminal
  Taper les commandes suivantes pour cloner le projet
    git clone https://github.com/votre-repo/trouve-ton-artisan.git
    cd trouve-ton-artisan
  Puis pour installer les dépendances du frontent
    cd client
    npm install
  Et les dépendances du backend
    cd express_app
    npm install

Vous pouvez créer la base de données en local avec phpMyAdmin par exemple et les scripts SQL présents dans le dossier SQL de ce projet

Vous pouvez alors lancer le projet:
  Lancer l'API (le backend) en vous placant dans un terminal dans le dossier express_app et en tapant npm run dev
  Lancer le frontend en vous placant dans un terminal dans le dossier client et en tapant npm start
  L'application se lancera alors dans votre navigateur à l'adresse http://localhost:3000
