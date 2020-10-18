# FAQ

## Probleme de récupération des données

-   Vérifiez que vous avez bieen accès à internet
-   Vérifiez que le Cloud Mercedes ne recontre pas d'incident : [https://developer.mercedes-benz.com/status](https://developer.mercedes-benz.com/status)
-   Passage en debug des logs du plugin et attendre/lancer une nouvelle synchronisation

## Que veulent dire les erreurs 204

Mercedes ne renvoi que les données qui ont changé dans les 12 dernières heures. L'erreur 204 (visible uniquement en log debug) n'est pas vraiment une erreur mais plutôt l'information que Mercedes n'a aucune données a envoyer au plugin

## J'ai de temps en temps des erreurs 401 Invalid or missing authorization/API

Le Cloud Mercedes est moyennement stable et il possible que quelques fois dans la journée, vous receviez des erreurs 401. Aucune action n'est a engager si ces erreurs sont occasionnelles.