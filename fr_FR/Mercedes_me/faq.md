# Plugin<br/><br/>

## Mon véhicule est-il supporté ?

Le Cloud Mercedes autorise les modèles et pays de véhicules suivant selon l'API :
-   [Vehicle Status](https://developer.mercedes-benz.com/products/vehicle_status/details)
-   [Vehicle Lock Status](https://developer.mercedes-benz.com/products/vehicle_lock_status/details)
-   [Fuel Status](https://developer.mercedes-benz.com/products/fuel_status/details)
-   [Electric Vehicle Status](https://developer.mercedes-benz.com/products/electric_vehicle_status/details)
-   [Vehicle Images](https://developer.mercedes-benz.com/products/vehicle_images/details)

# Cloud Mercedes<br/><br/>

## La console developpeur Mercedes ne me donne pas l'API Key

L'API Key n'est affichée dans la console que lorsque l'API Vehicule Image est activée.

-------------

## Probleme de récupération des données

-   Vérifiez que vous avez bien accès à internet
-   Vérifiez que le Cloud Mercedes ne recontre pas d'incident : [https://developer.mercedes-benz.com/status](https://developer.mercedes-benz.com/status)
-   Passage en debug des logs du plugin et attendre/lancer une nouvelle synchronisation pour avoir plus de détails sur l'erreur

-------------

## Erreur : Vous devez avoir un accès externe configuré et opérationnel ainsi qu’être connecté sur l’accès externe pour créer la liaison

Lors de l'activation de la connexion Cloud, vous pouvez avoir ce message qui s'affiche.
La connexion avec le cloud nécessite d'avoir un accès externe opérationnel sur son Jeedom.
Plusieurs tutoriel existe sur [Community](https://community.jeedom.com) pour faire cela, ou bien vous pouvez souscrire à l'option [DNS Jeedom](https://doc.jeedom.com/fr_FR/howto/mise_en_place_dns_jeedom).
<br/><br/>
Il est aussi important que "Activer/Refaire la connexion Mercedes" soit lancer lorsque vous êtes sur votre accès externe Jeedom. Sinon la redirection Mercedes vous renverra vers votre accès externe sur lequel vous n'êtes pas logger et donc la procédure échouera.

-------------

##  Erreur : "The requested scope is invalid, unknown ..."

Lors de l'activation de la connexion Cloud, vous pouvez avoir ce message qui s'affiche dans les logs (uniquement en DEBUG)
Vérifiez que vous avez bien activé __toutes__ les API indiquées dans la documentation.

<br/><br/><br/><br/><br/><br/>





# Logs<br/><br/>

## Erreurs 204

Le Cloud Mercedes ne renvoi que les données qui ont changé dans les 12 dernières heures. L'erreur 204 (visible uniquement en log debug) n'est pas vraiment une erreur mais plutôt l'information que Mercedes n'a aucune données à envoyer au plugin

-------------

## 401 Invalid or missing authorization/API

Le Cloud Mercedes est moyennement stable et il possible que quelques fois dans la journée, vous receviez des erreurs 401. Aucune action n'est a engager si ces erreurs sont occasionnelles.

