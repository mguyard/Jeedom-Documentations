# Important à lire !

# 2021-01-31 - v1.0.3 (BETA)

- Correction de l'erreur qui apparaissait dans le http.error (PHP Warning:  Declaration of Mercedes_me::getImage($vin) should be compatible with eqLogic::getImage())
- Modification des niveaux d'alerte pour moins polluer le Centre de Message

# 2020-10-22 - v1.0.2

- Correction visuel sur la liste des équipements

# 2020-10-22 - v1.0.1

- Changement de la méthode de gestion de l'energie du véhicule (passage en liste déroulante à la place de case à cocher)
  - Les véhicules déjà créé doivent normalement migrer automatiquement dans le nouveau mode de gestion des énergie. Dans le cas contraire, il vous faudra sauvegarder manuellement l'energie du véhicule.
- Ajout des véhicules hybrides
- Ajout du support des VINs W1K (nouveau VIN 2020)
- Blocage de la création d'un véhicule avec un VIN déjà utilisé (pour éviter les doublons)
- Optimisation de l'affichage des images de vehicule

# 2020-10-18 - v1.0

- Sortie de la première version stable. Merci à __Robin86__ et __Petit_Malin__ pour leur beta-test.