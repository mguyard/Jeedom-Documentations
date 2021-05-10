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

> _Cette méthode peut être appellée plusieurs fois._

## Ajouter le résultat d'une commande SHELL

Il est possible d'ajouter le résultat d'une commande SHELL dans le DiagDebug package. 

__Chaque commande lancée ainsi génèrera un fichier de résultat portant le nom de la commande.__

``$diag->addCmd('ifconfig -a');``

_Paramètres :_
* @param string $cmd - System command to run <span style="color:red">*</span>
* @param string $filename - Optional filename of result. If not specified, command will be use as result filename <span style="color:red">*</span>
* @param boolean $sudo - Optional to specify if command need to be run as sudo user
* @return void

> _Cette méthode peut être appellée plusieurs fois._

Il est aussi possible d'appeler plusieurs commandes en même temps :

``$diag->addCmds(array('ls -l /tmp', 'ip addr'), 'GroupedCmds');``

__Cette méthode va créer un seul fichier contenant l'ensemble des résultats des commandes SHELL.__

_Paramètres :_
* @param array $cmds - List of system commands to run <span style="color:red">*</span>
* @param string $filename - Filename where store commands results <span style="color:red">*</span>
* @param boolean $sudo - Optional to specify if command need to be run as sudo user
* @return void

> _Cette méthode peut être appellée plusieurs fois._

## Ajouter la configuration du plugin

Il est possible d'ajouter la configuration du plugin dans le DiagDebug package. 

``$diag->addPluginConf();``

## Ajouter la liste (informations incluses) des équipements du plugin

Il est possible d'ajouter la liste des équipelents du plugin dans le DiagDebug package. 

``$diag->addAllPluginEqlogic();``

## Ajouter un fichier

Il est possible d'ajouter un fichier dans le DiagDebug package. 

_Exemple 1:_
``$diag->addFile('/etc/hosts');``

_Exemple 2:_
``$diag->addFile('/var/www/html/plugins/Diagral_eOne/d*/p*');``

_Paramètres :_
* @param string $file - File with absolute path. Can be a file, folder, or glob (wildcard) <span style="color:red">*</span>
* @return void

> _Cette méthode peut être appellée plusieurs fois._

Il est aussi possible d'ajouter plusieurs fichiers au travers d'un array et une autre méthode :

``$diag->addFiles(array('/var/www/html/robots.txt','/var/www/html/mobile.manifest.php'));``

_Paramètres :_
* @param array $files - Files with absolute path. Can be a file, folder, or glob (wildcard) <span style="color:red">*</span>
* @return void

> _Cette méthode peut être appellée plusieurs fois._

## Récuperer l'archive DiagDebug

La methode suivante permet de récupérer les informations concernant le DiagDebug package généré afin de pouvoir le récupérer

``$diag->download();``

_Paramètres :_
* @return array - with filename, filesize, absolutePath and relativePath (after the Jeedom base URL)


# Comment l'intégrer ?

Voici un petit tutoriel pas-à-pas permettant de vous aider à intégrer cette classe dans votre plugin Jeedom.

## Ajoutez la classe dans votre plugin

## Déclarez la dans votre plugin

### Dans la page configuration.php de votre plugin

Ajoutez un bouton pour générer le DiagDebug Package

``<div class="form-group">
    <div class="col-lg-4"></div>
    <div class="col-lg-4">
        <button type="button" id="generateDiagDebug" class="btn btn-danger btn-lg">Générer un DiagDebug</button>
    </div>
</div>``

