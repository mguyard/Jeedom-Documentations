# Important à lire !

# 2022-11-03 - v1.3.0 (BETA)

- Mise en place de la nouvelle API de connexion [https://developer.mercedes-benz.com/content-page/migration_2022](https://developer.mercedes-benz.com/content-page/migration_2022)

> <span style="color:red">_La migration de la nouvelle API Mercedes nécessite de retourner dans votre [console Mercedes](https://developer.mercedes-benz.com/console) pour générer à nouveau votre  API Key, ClientID, Client Secret et les reporter dans la configuration du plugin.
Il vous faudrait aussi remettre la Redirect URL disponible dans la configuration du plugin. Vous pouvez relire la documentation au besoin qui explique cela lors d'une première installation du plugin._</span>

# 2022-06-13 - v1.2.11 (STABLE)

- Passage en stable de la version 1.2.10
- Ajout du VIN W1V

# 2022-04-28 - v1.2.10 (BETA)

- Correction d'un bug de récuperation de fuelstatus pour les véhicules hybrides

# 2022-02-03 - v1.2.9 (STABLE)

- Adaptation du callback OAUTH2 pour résoudre les changements de sécurité du CORE JEEDOM 4.2

# 2022-02-01 - v1.2.8 (STABLE)

- Intégration de l'Odomètre via l'API 'Pay As You Drive Insurance'.
> <span style="color:red">_Pour les installations effectives, il faut ajouter l'API 'Pay As You Drive Insurance' sur la console Mercedes (peut prendre quelques minutes avant l'activation complète) mais il faut aussi 'Refaire la connexion Mercedes' depuis la configuration du plugin afin d'ajouter les droits au plugin sur la nouvelle API 'Pay As You Drive Insurance'_</span>

# 2022-01-31 - v1.2.7 (STABLE)

- Passage en stable de la version 1.2.7
> <span style="color:red">_Suite à une mise à jour Mercedes, l'application de cette mise à jour aura pour effet de retirer la coherence pour les utilisateurs existant. Ils devront donc aller modifier la Redirect URL dans la console Mercedes à partir de l'URL fournit dans la configuration du plugin_</span>

# 2022-01-31 - v1.2.7 (BETA)

- Ajout des logs en cas d'utilisation de l'accès interne au lieu de l'externe lors de la connexion Mercedes
# 2022-01-31 - v1.2.6 (BETA)

- Intégration du nouveau mode tableau de Jeedom Core 4.2
# 2021-11-07 - v1.2.5 (BETA)

- Intégration des widgets par defaut Jeedom pour l'utilisation mobile

# 2021-10-30 - v1.2.4 (BETA)

- Correction suite à un changement dans la [console Mercedes](https://developer.mercedes-benz.com/console). Désormais si la Redirect URLs est en HTTPS avec le port 443 ou bien en HTTP avec le port 80, la console Mercedes retire le port ce qui fait que Mercedes renvoi une erreur.

> <span style="color:red">_L'application de cette mise à jour aura pour effet de retirer la coherence pour les utilisateurs existant. Ils devront donc aller modifier la Redirect URL dans la console Mercedes à partir de l'URL fournit dans la configuration du plugin_</span>

# 2021-10-30 - v1.2.3 (BETA)

- Nettoyage des logs non voulu (ajouté par CURL) en mode DEBUG
# 2021-10-30 - v1.2.2 (BETA)

- Ajout du support des VIN WDC
# 2021-05-08 - v1.2.1 (STABLE)

- Passage en stable de la version 1.2.1

# 2021-04-12 - v1.2.1 (BETA)

- Ajout de la gestion des véhicule coupés (permet de retirer les informations portes et fenêtres arrières du widget)
  - ___Pour tout les utilisateurs : Suite a la mise à jour, il faut verifier le style appliqué à votre véhicule___
- Réduction de la taille du widget pour avoir un widget plus compact
- Ajout d'une option pour désactiver l'utilisation du widget du plugin

# 2021-04-12 - v1.0.4 (STABLE)

- Passage en stable de la version 1.0.4

# 2021-03-18 - v1.0.4 (BETA)

- Ajout du support des VIN W1N

# 2021-01-31 - v1.0.3 (BETA)

- Correction de l'erreur qui apparaissait dans le http.error (PHP Warning:  Declaration of Mercedes_me::getImage($vin) should be compatible with eqLogic::getImage())
- Modification des niveaux d'alerte pour moins polluer le Centre de Message

# 2020-10-22 - v1.0.2 (STABLE)

- Correction visuel sur la liste des équipements

# 2020-10-22 - v1.0.1 (STABLE)

- Changement de la méthode de gestion de l'energie du véhicule (passage en liste déroulante à la place de case à cocher)
  - Les véhicules déjà créé doivent normalement migrer automatiquement dans le nouveau mode de gestion des énergie. Dans le cas contraire, il vous faudra sauvegarder manuellement l'energie du véhicule.
- Ajout des véhicules hybrides
- Ajout du support des VINs W1K (nouveau VIN 2020)
- Blocage de la création d'un véhicule avec un VIN déjà utilisé (pour éviter les doublons)
- Optimisation de l'affichage des images de vehicule

# 2020-10-18 - v1.0 (STABLE)

- Sortie de la première version stable. Merci à __Robin86__ et __Petit_Malin__ pour leur beta-test.