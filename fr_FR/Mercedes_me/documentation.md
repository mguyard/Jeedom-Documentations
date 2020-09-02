Documentation en cours d'écriture...

![Logo](images/Mercedes_me_icon.png)

# Présentation 

Ce plugin a pour but de permettre de récuperer dans Jeedom les informations de sa Mercedes.
Il se base sur les API misent à disposition par Mercedes à l'adresse [https://developer.mercedes-benz.com](https://developer.mercedes-benz.com)

Actuellement Mercedes ne propose pas encore beaucoup de possibilitées avec son API __BRING YOUR OWN CAR (BYOC)__ (tout du moins, moins qu'avec l'application Mobile) mais il évoluera au mieux possible.

# Principe 

Mercedes propose uniquement une méthode Cloud d'interraction avec votre voiture, par conséquent ce plugin utilise une connexion internet pour interragir avec celle-ci.

C'est donc une interface __CLOUD__

# Installation et configuration du plugin

Installer le plugin sur votre Jeedom et activez le.

Afin de permettre au plugin de collecter les informations sur le Cloud Mercedes, un certains nombre de droits doivent être défini sur votre compte Mercedes.
Pour cela, connectez-vous sur [https://developer.mercedes-benz.com](https://developer.mercedes-benz.com) avec votre compte mercedes utilisé sur l'application mobile.

## Création de l'application

Aller dans la [console](https://developer.mercedes-benz.com/console) et créez une nouvelle application avec le bouton "+ ADD NEW APP"
Les champs sont a remplir ainsi :
-   Application Name : Mettre ce que vous souhaitez
-   Purpose URL : Laisser vide
-   Business Purpose : Mettre __Request my car informations__
-   Note : Laisser vide

Il devrait a partir de là, vous afficher l'APP ID.

## Ajout des APIs

Se rendre à l'adresse [dans la liste des API](https://developer.mercedes-benz.com/apis).
La liste des API a activer sont :
-   Vehicle Status
-   Vehicle Lock Status
-   Fuel Status (Seulement pour les __véhicules non-électrique__)
-   Electric Vehicle Status (seulement pour les __véhicules électriques__)

Pour activer les API, il faut procéder ainsi :
-   Cliquer sur le __bouton "TRY IT NOW"__ de l'API concernée
-   Puis sur le __bouton "> GET ACCESS"__
-   Choisir l'option __TEST THIS PRODUCT__ puis cliquez sur __NEXT__ 
-   Choisir __360°__ et cliquez sur __NEXT__
-   Selectionnez votre application créé précédement et cliquez sur __NEXT__
-   Ne modifiez rien et cliquez sur __SUBMIT__

![Activation API](images/ActivationAPI.gif)

### Cas particulier : API Vehicle Images

Il faut aussi activer l'API :
-   Vehicle Images

Cependant cette API ne fait pas parti de BYOC et donc son activation est un peu différente car c'est en fait une version d'essai limité à 5 tentatives.

Le plugin utilise cette API pour afficher une image de votre voiture sur l'équipement Jeedom.

Dans le cas où l'image ne pourrait être récupéré lors de cette version d'essai, elle est remplacé par une image standard (placeholder).

Pour activer cette API :
-   Cliquer sur le __bouton "TRY IT NOW"__ de l'API concernée
-   Puis sur le __bouton "> GET ACCESS"__
-   Choisir l'option __BRING YOUR OWN CAR__ puis cliquez sur __NEXT__ 
-   Cliquez sur __NEXT__
-   Selectionnez votre application créé précédement et cliquez sur __NEXT__
-   Ne modifiez rien et cliquez sur __SUBMIT__

## Configuration de l'application

Aller dans la [console](https://developer.mercedes-benz.com/console) et editez le champ __Redirect URLs__ afin de remplacer le https://localhost

Vous trouverez l'url à y saisir dans le champs __Redirect URLs__ de la configuration du plugin.

> Format de l'URL :
>
> _https://\<votre IP ou DNS public\>:\<port\>/plugins/Mercedes_me/core/php/callback.php?apikey=\<API Key\>_

## Configuration du plugin

Rendez-vous dans la page de configuration du plugin Mercedes Me et remplissez les champs :
-   Identifiant : Votre email de compte Mercedes
-   Mot de passe : Votre mot de passe de compte Mercedes
-   Client ID : A retrouver dans votre application Mercedes dans la [console](https://developer.mercedes-benz.com/console)
-   Client Secret : A retrouver dans votre application Mercedes dans la [console](https://developer.mercedes-benz.com/console)
-   API Key : A retrouver dans votre application Mercedes dans la [console](https://developer.mercedes-benz.com/console)

Cliquez sur __Sauvegarder__ pour enregistrer les informations saisies puis sur le bouton __Activer/Refaire la connexion Mercedes__

> Dès lors le plugin va établir la communication avec le Cloud Mercedes. Pour cela il utilise le protocole OAUTH2 qui necessite que vous saisissiez votre identifiant et mot de passe Mercedes ainsi que vous acceptiez l'utilisation des API en les cochant (fait une seule fois normalement).
> 
> Vous êtes ensuite redirigé à nouveau vers la configuration du plugin.
> 
> A partir de la, vous avez désormais dans la partie Debug, les informations montrant que la connexion est bien active et opérationnelle.

## Création de votre véhicule dans Jeedom

Dans Jeedom, aller dans __Plugins -> Objets connectés -> Mercedes Me__
-   Cliquez sur Ajouter
-   Définissez un nom à votre Equipement
-   Choissiez un objet Parent et une catégorie
-   Saisissez le VIN de votre véhicule (visible sur votre carte grise dans le champs E)

# Rafraichissement

Une particularité du Cloud Mercedes est :
-   qu'il ne récupère les données qui si il y a changement
-   qu'il ne récupère __QUE__ la donnée qui a changé et non pas toutes
-   qu'il ne stock les données que 12 heures.

## Automatique

Une tâche CRON est automatiquement créée sur base du délai de 5 minutes.

## Manuel

Dans un scénario, vous pouvez utiliser la commande __Rafraichir__ afin de reforcer un refresh des informations.

# Commandes

Il existe actuellement plusieurs commandes qui sont décrites ci-dessous :

## Action

-   __Rafraichir__ : Mise à jour des informations du véhicule

## Infos

La plupart des commandes d'informations sont des commandes qui retourne un résultat binaire (0 : Non / 1 : Oui) sauf informtion contraire ci-dessous :

-   __Verrouillage du vehicule__ : Indique si le véhicule est vérrouillé. Retourne une valeur numérique
    -   0: vehicle ouvert
    -   1: vehicle fermé de l'interieur
    -   2: vehicle fermé de l'exterieur
    -   3: vehicle fermé partiellement
-   __Verrouillage de la trappe Essence__ (uniquement pour les véhicules non-éléctrique)
-   __Essence - Nombre de Km restant__ (uniquement pour les véhicules non-éléctrique)
-   __Essence - Pourcentage restant__ (uniquement pour les véhicules non-éléctrique)
-   __Electrique - Nombre de Km restant__ (uniquement pour les véhicules éléctrique)
-   __Electrique - Pourcentage Charge Restante__ (uniquement pour les véhicules éléctrique)
-   __Statut Porte Avant Gauche__
-   __Statut Porte Avant Droite__
-   __Statut Porte Arriere Gauche__
-   __Statut Porte Arriere Droite__
-   __Statut Fenetre Avant Gauche__
-   __Statut Fenetre Avant Droite__
-   __Statut Fenetre Arriere Gauche__
-   __Statut Fenetre Arriere Droite__
-   __Statut Toit Ouvrant__
-   __Statut Capote__ (uniquement pour les cabriolets)
-   __Verrouillage du coffre__
-   __Etat d'ouverture du coffre__

# FAQ

## Probleme de récupération des données

-   Vérifiez que vous avez bieen accès à internet
-   Vérifiez que le Cloud Mercedes ne recontre pas d'incident : [https://developer.mercedes-benz.com/status](https://developer.mercedes-benz.com/status)