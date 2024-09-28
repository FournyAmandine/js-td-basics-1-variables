// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    somme
    * quel est le résultat de l'opération ?
    9
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    colle les deux mots
    * quel est le résultat de l'opération ?
    cinqquatre
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    colle les deux également
    * quel est le résultat de l'opération ?
    quatre5
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
    ça écrit tout car tout ce qu'il y a entre guillemets est une chaine de caractère donc il n'y a pas d'opération
*/

// Cas 1 : 4 et 5 sont toutes deux de type nombres
console.log(5+4);
// Cas 2 : 4 et 5 sont toutes deux de type chaîne
console.log('cinq'+'quatre');
// Cas 3 : 4 est de type chaîne et 5 est de type nombre
console.log('quatre'+5);
// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets
console.log('quatre+cinq');
console.log('5+4');
