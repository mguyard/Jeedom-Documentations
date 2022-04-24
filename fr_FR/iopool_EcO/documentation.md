![Logo](images/iopool_EcO_icon.png)


# Présentation 

[iopool](https://iopool.com/) est une société belge qui propose une sonde connectée (EcO) sans abonnement pour vous aider à gérer votre __Piscine ou Spa__.

Outre la sonde, iopool c'est aussi une [application mobile](https://iopool.com/fr/lapplication-mobile/), [produits d'entretien](https://iopool.com/fr/produits-chimiques/) et des [accessoires](https://shop.iopool.com/fr/collections/accessories) pour piscine.


# Principe du plugin

La sonde iopool est uniquement compatible Bluetooth et l'ensemble des informations et actions sont disponibles directement dans l'application mobile iopool lorsque vous êtes à portée du bluetooth. Ces données sont ensuite transmises par l'application au cloud iopool.

Cependant, iopool propose un [relais Bluetooth/Wifi](https://shop.iopool.com/fr/collections/accessories/products/bluetooth-wifi-gateway) que vous laissez à portée Bluetooth de la piscine et qui permet de collecter les données de la sonde EcO et les transmettre en wifi vers le cloud iopool. Ainsi depuis n'importe où, vous pouvez accéder aux informations de votre piscine avec votre application mobile iopool et avec votre Jeedom.

Ce plugin est donc une interface avec le __CLOUD iopool__

# Pré-requis/Recommandation

L'utilisation d'un [relais Bluetooth/Wifi](https://shop.iopool.com/fr/collections/accessories/products/bluetooth-wifi-gateway) est une recommandation au fonctionnement du plugin.

![Photo relais Wifi](images/PhotoRelaisWifi.jpg)

![Fonctionnement du relais Bluetooth/Wifi](images/RelayWifiWorkingSchema.jpg)

__En effet, si vous ne possédez pas de relais, les données que le plugin pourra afficher, seront uniquement les données que votre application aura collectées en Bluetooth.
Il est donc recommandé d'utiliser le relais pour avoir des données plus régulières sans devoir ouvrir votre application et vous approcher de votre piscine/SPA.__

# Economisez de l'argent avec le parrainage iopool

Si vous n'êtes pas encore client iopool et que vous souhaitez acquérir la sonde EcO, je vous propose [mon lien de parrainage](http://iopool.refr.cc/marc25) qui vous fera __économiser 25 Euros__ pour l'achat d'un des [EcO Start](https://shop.iopool.com/fr-fr/collections/start-packs) comme le pack [EcO Start + Relais Bluetotth-Wi-Fi](https://shop.iopool.com/fr-fr/collections/start-packs/products/eco-start-and-connect). Avec le parrainage, le [pack EcO Start](https://shop.iopool.com/fr-fr/collections/start-packs/products/eco-start) vous reviendra à 174€ au lieu de 199€

> De mon côté, je recevrai aussi un bon d'achat de 25 Euros. Un moyen qui ne vous coûte rien (qui vous fait même gagner 25 Euros) et qui permettra de soutenir le développement du plugin.

<br/>Pour profiter des 25 euros de réduction, rien de plus simple :
- Cliquez sur [le lien de parrainage](http://iopool.refr.cc/marc25)
- Récupérez votre votre de réduction de 25€
- Passez votre commande d'un pack [EcO Start](https://shop.iopool.com/fr-fr/collections/start-packs)

> Si vous avez déjà un compte iopool mais n'avez jamais commandé, contactez le support pour demander la suppression de votre compte afin que vous puissiez créer un nouveau compte et profiter du bon de réduction (Note: vous pouvez aussi créer un compte avec une nouvelle adresse email).

![Code Parrainage](images/iopool_parrainage.png)

# Installation et configuration du plugin

Installer le plugin sur votre Jeedom et activez le.
Une fois actif, vous devez saisir dans la configuration du plugin, votre clé API ainsi que le paramètre de température.

![Configuration du plugin](images/configurationPlugin.png)

## Avoir votre clé API

Faites simplement une demande au support iopool au travers de votre application mobile : Plus > Support > Envoyez-nous un message

# Découverte des sondes

Pour découvrir l'ensemble des sondes de votre compte, aller dans le plugin et cliquez sur "Synchronisation".
L'ensemble des sondes vont être créées.

> Par défaut, les sondes sont créées pour une utilisation __Piscine__. Si vous l'utilisez au sein d'un SPA, éditez l'équipement pour le configurer en tant que type SPA. Ainsi les seuils de températures seront ajustées sur le widget du dashboard.

# Affichage sur le dashboard

Le plugin inclut un widget qui vous donne visuellement un retour sur les informations récoltées

![Widget](images/widget.png)
![WidgetHivernage](images/widget-hivernage.png)

# Rafraichissement

## Automatique

Une tâche CRON s'exécute toute les 5 minutes.

> Afin de ne pas surcharger le cloud iopool de requetes simultanées, un temps d'attente aléatoire entre 0 et 10 secondes s'ajoute lors du lancement du rafraichissement automatique des données
> Ce temps d'attente n'est ajouté qu'une seule fois même si l'on a plusieures sondes.

## Manuelle

Dans un scénario, vous pouvez utiliser la commande __Rafraichir__ afin de reforcer un refresh des informations.
Un bouton de refresh est aussi disponible en haut à droite du widget.

# Filtration

> <span style="color:red">__FONCTIONNALITE DISPONIBLE UNIQUEMENT EN BETA A PARTIR DE v2.0.0__</span>

## Filtration automatique

La sonde iopool EcO permet à partir des informations saisie sur votre piscine (dimension, hauteur d'eau, puissance de pompe, etc...) dans l'application iopool, le temp de filtration recommandé. Ce temps est disponible dans la commande information __Temps de filtration recommandé__

![Filtration](images/filtration.png)

Il est possible au sein d'une sonde EcO du plugin, d'activer la filtration automatique de votre piscine ou SPA. Pour cela, il vous faut une prise connectée, pilotable par Jeedom. Jeedom doit être en mesure de :
- Allumer la prise (Commande Action)
- Eteindre la prise (Commande Action)
- Retourner son statut (Commande Info = 0 : Eteint / 1 : Allumé)

Une fois la filtration activée dans le plugin, vous pouvez configurer les commandes correspondantes à votre prise connectée.

La durée de filtration utilisée comme base est celle fournie par iopool et votre sonde. Toutefois, il est possible de paramétrer son comportement et surcharger le temps recommandé pour iopool.

Plusieurs options sont disponibles pour paramétrer l'usage du temps de filtration recommandé par iopool :
- Définir jusqu'à 2 plages de filtration
- Répartir du temps entre les plages de filtration
- Heure de début des plages de filtrations (l'heure de fin étant définie automatiquement)

Il est possible de surcharger le temps de filtration recommandé par iopool, en l'augmentant ou en le réduisant, en configurant les champs __Durée minimum de filtration__ et __Durée maximum de filtration__

> La partie filtration du plugin fonctionne à partir d'un agenda de filtration qu'il génére automatiquement et quotidiennement pour chaque sonde.
>
> Le cache est généré dans les 15 minutes précédent l'heure de début de la première plage de filtration, afin d'avoir le temps de filtration recommandé le plus pertinent. 

## Boost de filtration

Lors de certaines situations (comme l'application de produits), il peut être nécessaire de faire fonctionner la pompe pour une durée spécifique (Boost).

Le plugin intégre donc des commandes permettant de lancer/arrêter des Boosts de filtration pour :
- 1H
- 4H
- 8H
- 24h

> Ces commandes de boost possèdent automatiquement des types générique permettant par exemple, d'être disponible au sein de HomeBridge (et donc par extention, Homekit - Google, Alexa et d'autres solution utilisant les types génériques devraient eux aussi être fonctionnels)

Un boost de filtration vient en complément à la filtration. Ce qui veut dire qu'il ne réduira pas le temps de filtration recommandé par iopool et utilisé par la filtration du plugin.

Cependant, si une période de boost chevauche une période de filtration, la filtration effectuée sera un cumul des périodes.

> _Exemple 1 : Une période de filtration est configurée  de 11h à 16h (5h de filtration recommandé par iopool - configuré en une seule plage). Si un boost de 4H est lancé à 10h30, la filtration effectuée sera de 10h30 à 16h sans interruption._
> 
> _Exemple 2 : Une période de filtration est configurée de 11h à 13h et de 16h à 18h (4h de filtration recommandé par iopool - configuré en deux plages 50/50). Si un boost de 8H est lancé à 10h30, la filtration effectuée sera de 10h30 à 18h30 sans interruption._

Les commandes de boost ne sont pas disponibles sur le widget. Elles sont pensées pour être déclenchées depuis un mobile (via Homekit, Google, Alexa, etc...) après un traitement de votre piscine/spa. Toutefois, vous pouvez aussi les lancer depuis la commande de l'équipement, ou encore par un scenario si besoin.

# Commandes

> Actuellement le plugin utilise toutes les commandes disponible par l'API iopool

Il existe actuellement plusieurs commandes qui sont décrites ci-dessous :

## Action

* __Rafraichir__ : Mise à jour des informations de la sonde EcO

> Il existe aussi des commandes d'action de [Boost de filtration](#Boost%20de%20filtration)

## Info

* __Mode de la sonde__ : Permet de connaitre le mode de la sonde (STANDARD / OPENING / WINTER / INITIALISATION)
* __Etat général__ : Permet d'extrapoler à partir des informations collectées le fameux drapeau présent sur l'application iopool (GREEN / ORANGE / RED)
* __Action requise__ : Permet de savoir si une action est requise (1) ou non (0). L'API ne fournit pas la liste des actions
* __Temps de filtration recommandé__ : Depuis la version 2.9.0, iopool affiche un temps de filtration recommandé basé sur le débit de la pompe, le volume d'eau et la température de votre piscine. Idéal pour l'utiliser dans un scénario qui déclenche votre pompe, vous saurez maintenant quand l'arrêter avec une valeur dynamique.
* __Dernière mesure - Temperature__ : Température d'eau relevée par la sonde EcO
* __Dernière mesure - pH__ : Mesure pH de la sonde EcO
* __Dernière mesure - orp__ : Mesure de la capacité de désinfection
* __Dernière mesure - mode de reception__ : Mode de réception de la valeur (standard = application / gateway = Relais Bluetooth/Wifi)

> Il existe aussi des commandes d'information de [Boost de filtration](#Boost%20de%20filtration)

# Notifications

> <span style="color:red">__FONCTIONNALITE DISPONIBLE UNIQUEMENT EN BETA A PARTIR DE v1.1.0__</span>

Le plugin permet de générer des notifications lorsque certains indicateurs passent en warning ou critical.
Pour le configurer, un nouvel onglet est disponible sur l'équipement.

> L'envoi de notification s'appui sur un plugin tiers configurable (DiscordLink, Telegram, etc...)
> 
> Seules les commandes de type "action" et sous-type "message" peuvent être utilisé pour envoyer les notifications. Ce type de commande correspond généralement aux commandes de notification traditionnelles

Vous pouvez définir de recevoir des alertes pour tout ou parti de ces indateurs:
* __Données obsolètes__ : Correspond à la non réception de valeure de la sonde eCo depuis plus de 24h
* __Etat global__ : Correspond à un passage en alerte du drapeau global
* __ORP__ : Correspond au passage en alerte du ORP
* __pH__ : Correspond au passage en alerte du pH
* __Température__ : Correspond au passage en alerte de la température
* __Durée de filtration__ : Permet d'émettre une notification avec le temps de [filtration](#Filtration) effectué

Il est possible de positionner des filtres:
* __Alertes critiques uniquement__ : Permet de ne pas prendre en compte les alertes Attention (warning)
* __Retour à la normale__ : Permet de recevoir une notification lors du retour à la normal des indicateurs selectionnés

![Widget](images/notifications.png)
# Historisation

Les commandes suivantes sont historisées par défaut :
* __Temps de filtration recommandé__
* __Dernière mesure - Temperature__
* __Dernière mesure - pH__
* __Dernière mesure - orp__

Afin que les valeurs ne soient pas moyennées dans l'historique, le plugin force que l'historisation Jeedom de ces commandes ne soient pas lissées.
Ainsi les valeurs affichées dans l'historique correspondent bien aux valeurs collectées.
Dans le cas contraire, par défaut Jeedom fait une moyenne toutes les 5 minutes des valeurs et donc sera moins précis.

L'inconvénient est que donc plus de valeurs peuvent être stockées et donc consommer plus de place en base de données (qui a un impact à terme sur l'espace disque dur).

Si vous souhaitez changer ce comportement, il suffit de suivre ce [tutoriel](https://jeedomiser.fr/article/historiser-vos-commandes/#Mode_de_lissage) pour remettre un lissage par défaut (moyenne). L'article est globalement très interessant à lire pour votre culture de l'historisation au sein de Jeedom.

# Numerotation des versions

La numérotation des versions est effectuée ainsi pour le moment :
- Premier chiffre : La version majeure du plugin (modifications importantes)
- Second chiffre : La version mineure du plugin (ajout de petites fonctionnalités)
- Troisième chiffre : La version correctrice du plugin (résolution de bugs)

# Roadmap
