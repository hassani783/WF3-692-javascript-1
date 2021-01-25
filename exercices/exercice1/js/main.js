window.onload = function(){
    
    //recuparation des elements avec l'ancienne methode
    //selectionner par le nom du balise
    var p = document.getElementsByTagName('p');
    var div = document.getElementsByTagName('div');
    //selectionner par id
    var cardDiv = document.getElementById('card');
    //selectionner par classe
    var cardDiv1 = document.getElementsByClassName('card');
    console.log(  "all paragraph: ", p,"div: ", div,"cardDiv: ",card, "cardDiv1: ", card);

    //recuperation des element avec la nouvelel mathode
    //selectionner tt les p
    var pWithQuerySelectorByTagName = document.querySelectorAll('p');
    //selectionner juste la 1er p
    //var pWithQuerySelectorByTagName = document.querySelector('p');
    //selectionner par id
    var divWithQuerySelectorById = document.querySelector('#card');
   //selectionner par class
    var divWithQuerySelectorByClassName =  document.querySelector('.card');
    //afficher dans la console
    console.log("pWithQuerySelector: ", pWithQuerySelectorByTagName); 
    console.log("divWithQuerySelectorById: ", divWithQuerySelectorById);
    console.log("divWithQuerySelectorByClassName: ", divWithQuerySelectorByClassName);

}