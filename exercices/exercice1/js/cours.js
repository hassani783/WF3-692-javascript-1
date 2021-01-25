window.onload = function(){
    //avant
    //recuparation des elements avec l'ancienne methode
    //selectionner par le nom du balise
    var p = document.getElementsByTagName('p');
    var div = document.getElementsByTagName('div');
    //selectionner par id
    var cardDiv = document.getElementById('card');
    //selectionner par classe
    var cardDiv1 = document.getElementsByClassName('card');
    console.log(  "all paragraph: ", p,"div: ", div,"cardDiv: ",card, "cardDiv1: ", card);
    //Maintenant
    //recuperation des elements avec la nouvelle methode
    //selectionner tt les p
    var pWithQuerySelectorByTagName = document.querySelectorAll('p');
    //selectionner juste la 1er p
    var pWithQuerySelectorByTagName = document.querySelector('p');
    //selectionner par id
    var divWithQuerySelectorById = document.querySelector('#card');
   //selectionner par class
    var divWithQuerySelectorByClassName =  document.querySelector('.card');
    //afficher dans la console
    console.log("pWithQuerySelector: ", pWithQuerySelectorByTagName); 
    console.log("divWithQuerySelectorById: ", divWithQuerySelectorById);
    console.log("divWithQuerySelectorByClassName: ", divWithQuerySelectorByClassName);

    //les types des variables
    var a = 1;
    var b = "";
    var c = [1 , "" , function(){} , false , true ];
    var d = {
        color : "red",
        number : 1, 
        tableau : [],
        obj :{},
        func : function(){},
        bool : true
    };
    var e = function(){};
    var f = true || false;
    // pour les proprietes
    console.log("property color : d.color");
    console.log("property number : d.number");
    console.log("property tableau : d.tableau");
    console.log("property ogjet : d.objet");
    console.log("property func  : d.func(){}");
    console.log("property bool : d.bool");
      // pour savoir les types et les proprietes
    console.log("type property", typeof d.color,"property color: ", d.color);
    console.log("type property", typeof d.number,"property number: ", d.number);
    console.log("type property", typeof d.tableau,"property tableau: ", d.tableau);
    console.log("type property", typeof d.obj,"property obj: ", d.obj);
    console.log("type property", typeof d.func,"property func: ", d.func);
    console.log("type property", typeof d.bool1,"property bool1", d.bool1);
    console.log("type property", typeof d.bool2, "property bool2", d.bool2);

    // Les boucles
        // Boucle for fonctionnement 
        for(var i = 0; i <= 10; i = i + 1){
            console.log("boucle for: ",i)
        }

        // Boucle While
        var j = 0;
        while(j <= 10){
            console.log("boucle while: ", j);
            j = j + 1;
        }

        // Les tableaux
        var tableau = ["Hello", "World !"];
        console.log("value tableau 0",tableau[0]);
        console.log("value tableau 1",tableau[1]);
        // mise en pratique tableau + boucle pour parcourir notre tableau
        for(k = 0; k < 2; k = k + 1){
            console.log('boucle + tableau :', 'indice: ', k, "valeur: ", tableau[k]);
        };
            //exercice
            var color = ["red", "blue", "white", "black", "orange", "tomato", "yellow"];
// @ToDo => parcourir le tableau de conleur et l'afficher dans la console
// avec une boucle for
for(var i= 0 ; i < color.length ; i++){
    console.log(color[i]); 
 console.log('boucle + color :', 'indice: ', i , "valeur: ", color[i]);
} ; 
 // Ou bien on peut itérer dans un tableau avec la boucle du dessous
// for of (juste pour les tableaux)est equivalent du for(i=0 .....) 
 var tableau2 = ["foo", "bar", "foo", "baz"];
 for(var item of tableau2){
     console.log("item tableau: ", item);
 }

 // Boucle( for in est juste pour iterer dans les objets) pour itérer dans un objet(collection, dictionnaire)
 var monObj = {
     foo: "bar",
     hello: "world",
     age: 30
 }

 for(var keyObject in monObj){
     console.log("key: ",keyObject, "value: ", monObj[keyObject]);
 }
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
//ajouter au tablesu
// Ajoute à la fin du tableau
tableau3.push("banane");
console.log("Ajoute banane à la fin du tableau: ",tableau3[1]);

// Ajoute au début du tableau
tableau3.unshift("poire");
console.log("Ajoute poire au debut du tableau: ", tableau3);
//suprimer du tableau
// supprimer le dernièr élément d'un tableau
tableau3.pop();
console.log("la méthode pop supprime banane à la fin du tableau : ", tableau3);

// supprimer le premièr élément d'un tableau
tableau3.shift();
console.log("la méthode shift supprime poire au début du tableau: ", tableau3);

        
 }