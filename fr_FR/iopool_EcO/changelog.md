# Important à lire !

__Lorsque aucunes informations ne sont disponibles sur le changelog, cela implique un changement de documentation uniquement__

# 2022-04-27 - v2.0.8 (BETA)

- Déplacement de la configuration de la durée minimum et maximum de filtration dans une partie "Options avancées" de la durée de filtration
- Ajout d'une option avancée de temporisation entre l'execution de la commande et la vérification de bonne execution (par defaut aucune temporisation)
- Ajout d'une option avancée de ré-essai lors de l'échec d'une éxécution de commande (max 10)
- AJout d'une option avancée de délai entre les ré-essai suite à un échec (max 30 secondes)
- Corrections graphiques du widget sous Firefox

# 2022-04-25 - v2.0.7 (BETA)

- Ajout du lancement des Boost sur le widget. Seul le lancement peut être effectué car l'arrêt du boost est automatique. Au besoin vous pouvez arrêter la pompe manuellement depuis le widget, ce qui rendra le boost inopérant.

# 2022-04-24 - v2.0.6 (BETA)

- Correction d'un bug qui affichait la modale d'historique du temps de filtration recommandé (si actif) lors du clic On/Off de filtration intégré en 2.0.5

# 2022-04-24 - v2.0.5 (BETA)

- Ajout sur le widget de l'état de filtration et bouton On/Off si la [filtration automatique](documentation#Filtration) est active

# 2022-04-23 - v2.0.4 (BETA)

- Correction d'un souci d'affichage du widget sur Firefox

# 2022-04-23 - v2.0.3 (BETA)

- Correction d'un souci d'affichage du widget avec un utilisateur non administrateur

# 2022-03-10 - v2.0.1 (BETA)

- Intégration d'un systéme de gestion de la filtration (cf [Documentation](documentation#Filtration))
- Intégration de notification sur le temps de filtration effectué dans la journée (cf [Documentation](documentation#Boost%20de%20filtration))
- Intégration d'une gestion de boost (compatible homekit) (cf [Documentation](documentation#Notifications))

# 2022-03-10 - v1.1.2 (STABLE)

- Passage en stable de la version 1.1.2
# 2021-09-29 - v1.1.2 (BETA)

- Ajout de la capacité d'envoyer des notifications
# 2021-09-21 - v1.0.13 (STABLE)

- Passage en stable de la version 1.0.13
# 2021-09-11 - v1.0.13 (BETA)

- Correction d'un bug d'affichage pour les données OUTDATED
# 2021-09-09 - v1.0.12 (BETA)

- Correction d'un bug d'import des données lorsque l'on a plusieurs EcO
- Ajout d'un message d'alerte en cas de changement de clé API dans la configuration du plugin si des équipements existent dans le plugin
- Amélioration du widget pour mieux gérer les valeurs vides
- Ajout sur le widget de l'information de la source des données
# 2021-09-09 - v1.0.11 (BETA)

- Mise à jour des traductions fr_FR et eu_US
# 2021-09-08 - v1.0.10 (BETA)

- Ajout d'un affichage du mode WINTER sur le dashboard quand la sonde est en mode hivernage
# 2021-09-08 - v1.0.9 (BETA)

- Passage de la fréquence de [rafraichissement automatique](https://mguyard.github.io/Jeedom-Documentations/fr_FR/iopool_EcO/documentation#Automatique) de 15mn à 5mn (cf. doc)
- Mise à jour des traductions fr_FR et en_US
# 2021-09-07 - v1.0.8 (BETA)

- Intégration des SPA pour ajuster les seuils de température
# 2021-09-06 - v1.0.7 (BETA)

- Correction du bug d'affichage du temps de filtration lors d'une heure entiere
# 2021-09-05 - v1.0.6 (BETA)

- Correction d'un souci (bug ??) avec le cache widget de Jeedom qui altérait le code Javascript du Widget. Désormais le cache du widget (et uniquement celui-ci) est purgé avant génération/refresh. C'est un workaround sans impact pour vous mais je vais essayé de comprendre pourquoi le cache widget de Jeedom fait cela
# 2021-09-05 - v1.0.5 (BETA)

- Correction du widget pour gérer les multiples widget iopool sur le dashboard et eviter les collisions
# 2021-09-04 - v1.0.4 (BETA)

- Changement de la crontab : Avant cette version, le rafraichissement automatique se faisait toutes les 15 minutes (0,15,30,45) comme la durée entre 2 analyses de la sonde. Cependant ainsi il fallait attendre le prochain rafraichissement (t+1) pour avoir la valeur (t) et donc on avait un décalage de 15 minutes (même si l'historisation était a la bonne heure). Désormais le rafraichissement se fait toutes les 15 minutes mais déclalé de 2 minutes (2,17,32,47) pour avoir les données plus rapidement.
# 2021-09-04 - v1.0.3 (BETA)

- Correction d'un bug css sur la partie action (partie du mileu) sous Firefox
- Désormais la méthode de lissage de l'historique des commandes historisées ne sont plus écrasées lors d'une synchronisation ou sauvegarde de l'équipement
# 2021-09-04 - v1.0.2 (BETA)

- Correction de typo (Merci @benj29)
- Ajout d'un accent sur la commande "Dernière mesure - Température" (Merci @benj29)
# 2021-09-03 - v1.0.1 (BETA)

- Correction de typo sur dashboard widget
# 2021-09-03 - v1.0.0 (BETA)

- Sortie de la premiere version du plugin