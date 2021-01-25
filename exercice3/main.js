window.onload = function(){

var color = ["red", "blue", "white", "black", "orange", "tomato", "yellow"];



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
 }
}