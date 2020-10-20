# Cloud Mercedes

## La console developpeur Mercedes ne me donne pas l'API Key

L'API Key n'est affichée dans la console que lorsque l'API Vehicule Image est activée.

## Lors de l'activation de la connexion Cloud, je reçois le message : "The requested scope is invalid, unknown ..."

Vérifiez que vous avez bien activé __toutes__ les API indiquées dans la documentation.

## Probleme de récupération des données

-   Vérifiez que vous avez bien accès à internet
-   Vérifiez que le Cloud Mercedes ne recontre pas d'incident : [https://developer.mercedes-benz.com/status](https://developer.mercedes-benz.com/status)
-   Passage en debug des logs du plugin et attendre/lancer une nouvelle synchronisation pour avoir plus de détails sur l'erreur

# Logs

## Que veulent dire les erreurs 204

Le Cloud Mercedes ne renvoi que les données qui ont changé dans les 12 dernières heures. L'erreur 204 (visible uniquement en log debug) n'est pas vraiment une erreur mais plutôt l'information que Mercedes n'a aucune données à envoyer au plugin

## J'ai de temps en temps des erreurs 401 Invalid or missing authorization/API

Le Cloud Mercedes est moyennement stable et il possible que quelques fois dans la journée, vous receviez des erreurs 401. Aucune action n'est a engager si ces erreurs sont occasionnelles.