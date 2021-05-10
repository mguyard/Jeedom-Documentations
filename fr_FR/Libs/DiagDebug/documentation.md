# Présentation 

Cette librairie PHP permet aux développeurs Jeedom d'intégrer la création de packages de diagnostique au sein de leur plugin Jeedom.
Ce package de diagnostique peut inclure des logs, le resultat de commande ou encore des fichiers.

# Que permet de faire la classe

La classe permet de générer une archive DiagDebug contenant toutes les informations que le developpeur du plugin Jeedom considère comme utile à un diagnostique.
L'objectif étant qu'un utilisateur de plugin, puisse facilement fournir une liste d'élément permettant au développeur d'investiguer sur un incident.

## Déclarer la construction d'un DiagDebug Package

La classe utilise la POO (Programmation Orienté Objet). Il faut l'initialiser comme l'exemple ci-dessous.

``$diag = new DiagDebug('Diagral_eOne', '/var/www/html/');``

Paramètres (* = Obligatoire):
* PluginId *
* Emplacement de stockage de l'archive DiagDebug (par défaut, place l'archive dans le répertoire __data__ du plugin, dans un repertoire __DiagDebug__ créé automatiquement)

Les anciens DiagDebug présent dans le repertoire sont supprimés

## Ajouter les logs du plugin

## Ajouter un log spécifique du plugin

## Ajouter un log Jeedom

## Ajouter le résultat d'une commande SHELL

## Ajouter la configuration du plugin

## Ajouter la liste (informations incluses) des équipements du plugin

## Ajouter un fichier

## Récuperer l'archive DiagDebug


# Comment l'intégrer ?

## Ajoutez la classe dans votre plugin

## Déclarez la dans votre plugin

Ceci est un tutoriel d'exemple pas à pas

