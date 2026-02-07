-- création de la base de données
DROP DATABASE IF EXISTS artisans_ARA;
CREATE DATABASE artisans_ARA;

-- création de l'utilisateur responsable avec tous les droits sur cette base de données (ici le mot de passe a été modifié car le fichier est sur GitHub)
DROP USER IF EXISTS 'responsable'@'localhost';
CREATE USER 'responsable'@'localhost' IDENTIFIED BY '***'; 
GRANT ALL PRIVILEGES ON artisans_ARA.* TO 'responsable'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- on se place dans la BDD
USE artisans_ARA;

-- création des tables
CREATE TABLE categorie(
    id_categorie INT PRIMARY KEY AUTO_INCREMENT,
    nom_categorie VARCHAR(50) NOT NULL
);

CREATE TABLE specialite(
    id_specialite INT PRIMARY KEY AUTO_INCREMENT,
    nom_specialite VARCHAR(255) NOT NULL,
    id_categorie INT NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
);

CREATE TABLE artisan(
    id_artisan INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    ville VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    a_propos TEXT NOT NULL,
    site_web VARCHAR(255),
    top_artisan BOOLEAN NOT NULL,
    id_specialite INT NOT NULL,
    FOREIGN KEY (id_specialite) REFERENCES specialite(id_specialite)
);