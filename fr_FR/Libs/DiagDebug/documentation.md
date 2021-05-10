# Présentation 

Cette librairie PHP permet aux développeurs Jeedom d'intégrer la création de packages de diagnostique au sein de leur plugin Jeedom.
Ce package de diagnostique peut inclure des logs, le resultat de commande ou encore des fichiers.

# Que permet de faire la classe

La classe permet de générer une archive DiagDebug contenant toutes les informations que le developpeur du plugin Jeedom considère comme utile à un diagnostique.
L'objectif étant qu'un utilisateur de plugin, puisse facilement fournir une liste d'élément permettant au développeur d'investiguer sur un incident.

## Déclarer la construction d'un DiagDebug Package

La classe utilise la POO (Programmation Orienté Objet). Il faut l'initialiser comme l'exemple ci-dessous.

``$diag = new DiagDebug('Diagral_eOne', '/var/www/html/');``

_Paramètres :_
* @param integer $pluginId - Jeedom plugin Id <span style="color:red">*</span>
* @param string $zipStorage - Optional Path to store DiagDebug Archive
* @return void

Les anciens DiagDebug présent dans le repertoire sont supprimés

## Ajouter les logs du plugin

Ajoute automatiquement l'ensemble des logs du plugins dans le DiagDebug package

``diag->addPluginLogs();``

## Ajouter un log Jeedom

Pour ajouter un log Jeedom :

``$diag->addJeedomLog('update');``

_Paramètres :_
* @param string $log - Log Name (without path) as show in Jeedom Logs interface <span style="color:red">*</span>
* @return void

Il est aussi possible d'en ajouter plusieurs en une fois au travers d'un autre méthode :

``$diag->addJeedomLogs(array('openvpn', 'starting'));``

_Paramètres :_
* @param array $logs - Log Name (without path) as show in Jeedom Logs interface <span style="color:red">*</span>
* @return void

> _Cette méthode peut être appellé plusieurs fois._

## Ajouter le résultat d'une commande SHELL

Il est possible d'ajouter le résultat d'une commande SHELL dans le DiagDebug package. Chaque commande lancée ainsi génèrera un fichier de résultat portant le nom de la commande.

``$diag->addCmd('ifconfig -a');``

> _Cette méthode peut être appellé plusieurs fois._

Il est aussi possible d'appeler plusieurs commandes en même temps :

``$diag->addCmds(array('ls -l /tmp', 'ip addr'), 'GroupedCmds');``

Cette méthode va créer un seul fichier contenant l'ensemble des résultats des commandes SHELL.
Le second paramètre correspond au nom a donner

> _Cette méthode peut être appellé plusieurs fois._

## Ajouter la configuration du plugin

## Ajouter la liste (informations incluses) des équipements du plugin

## Ajouter un fichier

## Récuperer l'archive DiagDebug


# Comment l'intégrer ?

## Ajoutez la classe dans votre plugin

## Déclarez la dans votre plugin

Ceci est un tutoriel d'exemple pas à pas

