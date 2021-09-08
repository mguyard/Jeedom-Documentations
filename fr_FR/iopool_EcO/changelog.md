# Important à lire !

__Lorsque aucunes informations ne sont disponibles sur le changelog, cela implique un changement de documentation uniquement__

# 2021-09-08 - v1.0.10 (BETA)

- Ajout d'un affichage du mode WINTER sur le dashboard quand la sonde est en mode hivernage
# 2021-09-08 - v1.0.9 (BETA)

- Passage de la fréquence de [rafraichissement automatique](https://mguyard.github.io/Jeedom-Documentations/fr_FR/iopool_EcO/documentation#Automatique) de 15mn à 5mn (cf. doc)
- Mise à jour des traductions fr_FR et eu_US
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