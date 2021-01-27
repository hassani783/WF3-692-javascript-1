window.onload = function(){

/*var color = ["red", "blue", "white", "black", "orange", "tomato", "yellow"];



// @ToDo => parcourir le tableau de conleur et l'afficher dans la console
// avec une boucle for
for(var i= 0 ; i < color.length ; i++){
    console.log(color[i]); 
 console.log('boucle + color :', 'indice: ', i , "valeur: ", color[i]);
} ; 
 // Ou bien on peut itérer dans un tableau avec la boucle du dessous

 var tableau2 = ["foo", "bar", "foo", "baz"];
 for(var item of tableau2){
     console.log("item tableau: ", item);
 }

 // Boucle pour itérer dans un objet(collection, dictionnaire)
 var monObj = {
     foo: "bar",
     hello: "world",
     age: 30
 }

 for(var keyObject in monObj){
     console.log("key: ",keyObject, "value: ", monObj[keyObject]);
 }*/
 var fruits = {
     pomme : 4,
     poire : 0,
     banane : 10,
     tomate : 6, 
 }

// Itérer sur l'objet fruits
for(var fruits2 in fruits){
    console.log("key: ", fruits2, "value: ", fruits[fruits2]);
}
/**
 * On s'attendra alors à
 * Output console: key: pomme value: 4
 * Output console: key: poire: value: 0 
 * Output console: key: banane value: 10
 * Output console: key: pomme value: 6
 */
var tableau3 = [];
// Comment ajouter dans un tableau ?
console.log("Le tableau quand il est vide: ", tableau3);
tableau3[0] = "tomate";
console.log("Le tableau aprés un ajout: ", tableau3);
console.log(tableau3[0]);

// Ajoute à la fin du tableau
tableau3.push("banane");
console.log("Ajoute banane à la fin du tableau: ",tableau3[1]);

// Ajoute au début du tableau
tableau3.unshift("poire");
console.log("Ajoute poire au debut du tableau: ", tableau3);

// supprimer le dernière élément d'un tableau
tableau3.pop();
console.log("la méthode pop supprime banane à la fin du tableau : ", tableau3);

// supprimer le première élément d'un tableau
tableau3.shift();
console.log("la méthode shift supprime poire au début du tableau: ", tableau3);

 }
