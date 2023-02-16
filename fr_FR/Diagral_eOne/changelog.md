# Important à lire !

__Lorsque aucunes informations ne sont disponibles sur le changelog, cela implique un changement de documentation uniquement__

# 2023-02-16 - v2.4.1 (BETA)

- Compatibilité 4.3

# 2022-06-10 - v2.4.0 (STABLE)

Suite aux saturations de serveurs Diagral et des échanges avec eux, cette version apporte les changements suivants :
- le refresh automatique ne peut être inférieur à 10 minutes. Si votre refresh était inférieur, lors de la mise à jour il est forcé à 10 minutes.
- ajout d'un délai aléatoire entre 0s et 10s lors des refresh automatiques (afin d'éviter que tout les refresh se déclenche en même tems vers les serveurs de Diagral)

> Je compte sur vous tous pour appliquer cette mise à jour afin que les serveurs Diagral ne s'écroulent plus et que nous puissions tous avoir un plugin opérationnel dans l'attente d'un travail commun avec Diagral pour trouver une solution.
> 
> Pour ceux qui souhaite avoir une réactivité accrue, d'autres solutions existe pour ne mettre à jour que lorsque un changement est détecté en utilisant par exemple le Webhook : https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Webhook
> 
> _Les cas d'usages peuvent être :_
> * Macrodroid sur Android qui à chaque notification de l'application Diagral, fait un appel au Webhook
> * Un jeedom qui reçoit les SMS de Diagral et lance un refresh par scénario
> * etc....
> Partagez vos idées ou réflexion sur Community

# 2022-03-29 - v2.3.8 (BETA)
- Ajout du badge 9 et 10

# 2022-03-11 - v2.3.7 (BETA)

- Ajout de l'affichage du sous-type pour les Commandes / Transmetteurs / Sensors / Sirenes
# 2022-01-31 - v2.3.6 (BETA)

- Intégration du nouveau mode tableau de Jeedom Core 4.2
# 2021-12-15 - v2.3.5 (BETA)

- Support de la version Jeedom 4.2
# 2021-09-17 - v2.3.4

- Correction d'un bug sur la cron qui ne rafraichissait pas les centrales dont le systemid était égale à 0
# 2021-09-17 - v2.3.3

- Correction d'un bug sur l'activation partielle
# 2021-09-13 - v2.3.1

- Passage en stable de la version 2.3.1
# 2021-08-26 - v2.3.1 (BETA)

- Ajout d'un log dans le code
# 2O21-08-26 - v2.3.0 (BETA)

- Ajout du support des [Commandes / Transmetteurs / Sensors / Sirenes](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Equipements%20supportés)
- Ajout du support des [Motorisation Garage Adyx](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Equipements%20supportés)
- Ajout du support des [Modules KNX Light](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Equipements%20supportés)
- Ajout du support des [Motorisation Volet Adyx](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Equipements%20supportés)
- Ajout du support des [Modules Volet KNX](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Equipements%20supportés)
- Ajout d'un webhook pour lancer des [mises à jour sur reception de notification d'application mobile](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Webhook)

# 2021-05-26 - v2.2.0 (BETA)

- Ajout du support des [Cameras Diagral](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Equipements%20supportés)
# 2021-05-14 - v2.1.0 (BETA)

- Ajout du support des [Portails Adyx](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Equipements%20supportés)

# 2021-05-13 - v2.0.2 (BETA)

- Ajout d'un module de génération des DiagDebug (cf. [documentation](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Génération%20d’un%20package%20DiagDebug))
- Passage des erreurs de [suivi d'installation](https://mguyard.github.io/Jeedom-Documentations/fr_FR/Diagral_eOne/documentation#Suivi%20d’installation) de warning à debug pour moi charger les logs au vu de l'importance des erreurs
- Ajout de quelques tooltip dans la page de configuration du plugin

# 2021-05-08 - v2.0.1

- Passage en stable de la version 2.0.1 (incluant les fonctionnalités BETA de la version 2.0.0 et 2.0.1)

# 2021-04-14 - v2.0.1 (BETA)

- Correction d'un bug sur la récupération du nombre de mises à jour Diagral disponibles

# 2021-02-03 - v2.0.0 (BETA)

<span style="color:red">__/!\ Version préparant l'intégration de produits eOne autre que l'alarme (Camera / Portail)__</span>

Cette version intègre cependant quelques fonctionnalités ci-dessous :
- Gestion des détecteurs à images
- Consultation des vidéos générés par le détecteur à Images
- Lancement par scénario d'une création de vidéo sur un détecteur à images
- Téléchargement automatique des vidéos du détecteur à image
- Gestion d'une purge automatique des vidéos (nombre maximale de vidéos configurable dans le plugin)
- Fourniture d'une commande incluant la position de la dernière vidéo (pour l'envoyer dans une alerte par exemple)
- Ajout d'une option dans l'équipement centrale pour désactiver le widget du plugin

# 2020-10-04 - v1.3.0

- Intégration d'un listing des evenements sur la page de l'équipement

# 2020-08-04 - v1.2.7

- Changement de l'espace de stockage des fichiers de cache vers le /data pour se conformer à Jeedom V4 et son nettoyage de fichier

# 2020-08-04 - v1.2.6

- Intégration de l'alarme dans HomeBridge (cf. Documentation)
- Modification de la commande "Statut" qui devient la commande "Mode". Elle permet de connaitre le mode actif (pensez à changer vos scénarios qui utilise cette commande)
- La commande "Statut" devient un binaire qui indique si l'alarme est activée (1) ou désactivée (0)

# 2020-06-18 - v1.2.5

- Correction de l'[issue #20](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/20) impéchant la synchronisation et l'ajout de plusieures alarmes.

# 2020-04-22 - v1.2.4

- Correction sur la gestion des suivis d'installation

# 2020-04-22 - v1.2.3

- __Passage de la version en STABLE__

# 2020-04-22 - v1.2.2

- Ajout de plus de logs sur les suivi d'installation [issue #14](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/17)
- Intégration d'une latence aleatoire entre 2 et 10 secondes pour les requêtes du suivi d'installation afin d'eviter que les requêtes ne soient trop en simultanées (aucun impact sur les refresh de l'alarme même si c'est la même CRON)

# 2020-04-19 - v1.2.1

- __Passage de la version en STABLE__
- Ajout de la branche du plugin dans les données de suivi d'installation

# 2020-04-13 - v1.2.0

- Intégration de la fonctionalité de génération de scénario pour les réceptions de notification Diagral
- Mise à jour de la documentation

# 2020-04-08 - v1.1.0

- Amélioration de la [feature #14](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/14) en ajoutant l'envoi de la plateforme Jeedom.
- Ajustement de la configuration

# 2020-04-07 - v1.0.0

- Amélioration de la [feature #14](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/14) en permettant la suppression de ses données de suivie.

# 2020-04-01

- Integration de la [feature #14](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/14) permettant la synchronisation d'information pour gérer la base installée des plugins Diagral-eOne (cf. Doc)

# 2020-03-27

- Integration de la [feature #13](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/13) "Gestion de déclenchement d'alarme"

# 2020-02-15

- Intégration de la fonctionnalité "Badge Alias" qui permet de définir un alias pour les badges afin d'être mis dans la commande "IMPORT - Dernier utilisateur" lors de la réception d'emails Diagral

# 2020-02-14

- Integration de la fonctionnalité "SecureDisarm" pour bloquer le désarmement de l'alarme au travers de Jeedom pour les compte _Utilisateur_ et _Utilisateur Limité_ (cf. Documentation pour plus de détails)

# 2020-02-08

- Amélioration du parsing des emails pour gérer les badges qui ne sont pas attaché à un utilisateur.

# 2020-01-11

- Correction de l'[issue #10](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/10) qui remontait un nombre de mise à jour disponibles incorrect

# 2020-01-05

- Integration de la [feature #6](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/6) afin de ne pas afficher les scénarios sur la tuile lorsque la commande n'est pas configuré en visible sur l'équipement

# 2019-11-03

- Integration de la [feature #3](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/3) afin de ne pas afficher les scénarios sur la tuile lorsqu'aucun sont configurés.

# 2019-09-22

- Correction de l'[issue #2](https://github.com/mguyard/Jeedom-Diagral_eOne/issues/2) lorsque aucun scénarios ne sont configurés.
