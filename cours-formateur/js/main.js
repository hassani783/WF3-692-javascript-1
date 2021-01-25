window.onload = function(){
    // Avant
    var p = document.getElementsByTagName('p');
    var div = document.getElementsByTagName('div');
    var greenP = document.getElementById('green');
    var p1 = document.getElementsByClassName('p1');
    console.log("greenP: ",greenP, "div: ", div, "all paragraph: ", p, "p1: ", p1);
    // Aujourd'hui
    var pWithQuerySelectorByTagName = document.querySelector('p');
    var pWithQuerySelectorById = document.querySelector('#green');
    var pWithQuerySelectorByClassName =  document.querySelector('.p1');
    console.log("pWithQuerySelector: ", pWithQuerySelectorByTagName); 
    console.log("pWithQuerySelectorById: ", pWithQuerySelectorById);
    console.log("pWithQuerySelectorByClassName: ", pWithQuerySelectorByClassName);
    
    // Pour pouvoir récupérer plusieurs éléments avec querySelector
    // Il faut utiliser querySelectorAll()
    var getAllParagrapheWithQuerySelectorAll = document.querySelectorAll('p');
    console.log("getAllParagrapheWithQuerySelectorAll: ", getAllParagrapheWithQuerySelectorAll)
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
        }



    }

