window.onload = function(){
    //Traduire en code ceci : faire une liste 12 fruits et légumes qui s'appelera fruitsLegumes.
    var fruitsLegumes = ["banane" , "pomme" , "fraise"];
    console.log(fruitsLegumes)

/*Traduire en code ceci: faire une liste qui référence tous ce que vous avez mis dans un panier, ce panier doit 
être vide au départ.*/
var panier = [];
 for(var item of fruitsLegumes ){
     console.log("item tableau: ", item);
     var fruitSuprime = fruitsLegumes.shift();
     panier.push(fruitSuprime);

 };
 console.log("panier: ", panier);
 console.log(fruitsLegumes);

 for(var i=fruitsLegumes.length ; i>0 ; i--){
    var fruitSuprime = fruitsLegumes.shift();
    panier.push(fruitSuprime);
 }
 console.log("panier: ", panier);
 console.log(fruitsLegumes);
 /*Traduire en code ceci : faire une liste qui s'appelera panier, elle référencera à la fois le nom du légume
 ainsi que sont prix à l'unité*/
 var panier = [
    {
        Legume: 'carotte',
        prixUnite: 2,
        quantite : 3
    },
    {
        Legume: 'tomate',
        prixUnite: 1.40,
        quantite : 2
    },
    {
        Legume: 'petit pois',
        prixUnite: 3.2,
        quantite : 5
    },
    {
        Legume: 'patate',
        prixUnite: 1.90,
        quantite : 6
    }
];
/*Traduire en ceci: crée une liste qui s'appelera prixTotalsFruitsLegumes cette liste devra contenir le total
 pour chaque fruit&légume. Ce prix total sera variable par rapport à la quantité. (à noté que cette liste au début
     est vide)*/
     var prixTotalsFruitsLegumes = [];

     for(var Legume of panier){
        var Total = Legume.prixUnite * Legume.quantite ;
        prixTotalsFruitsLegumes.push(Total);
     };
     console.log("key :" ,prixTotalsFruitsLegumes , "value :", prixTotalsFruitsLegumes);

     //Traduire en code ceci : crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.

     var prixTotal = 0;
    for(var i= 0; i<prixTotalsFruitsLegumes.length ; i++){
        prixTotal = prixTotal + prixTotalsFruitsLegumes[i] ;
        //return prixTotal;
    };
    console.log(prixTotal);
















/*Traduire en code ceci : faire une liste 12 fruits et légumes qui s'appelera fruitsLegumes.**
 var fruitsLegumes = [ "banane" , "pomme" , "fraise", "orange" ,"poire" ,
                     "kiwi" , "climentine" , "ananas" , "pasteque",
                      "raisin" , "tomate" ];
/*Traduire en code ceci: faire une liste qui référence tous ce que vous avez mis dans un panier, ce panier doit 
être vide au départ.*/
 /*var panier= [];
 console.log(panier);
 for(var article of fruitsLegumes){
    console.log("panier: ", article);
   };
   

 /*for(var i=fruitsLegumes.length ; i>0 ; i--){
    fruitsLegumes.shift()
 };
 console.log(fruitsLegumes);


 
 /*for(var panier in fruitsLegumes){
    //panier.push();
    console.log("panier: ", panier);
}
 //tableau3.push("banane");
/*Traduire en code ceci : faire une liste qui s'appelera panier, elle référencera à la fois le nom du légume
 ainsi que sont prix à l'unité*/
 /*var panier = [
    {
        Legume: 'carotte',
        prixUnite: 2,
        quantite : 3
    },
    {
        Legume: 'tomate',
        prixUnite: 1.40,
        quantite : 2
    },
    {
        Legume: 'petit pois',
        prixUnite: 3.2,
        quantite : 5
    },
    {
        Legume: 'patate',
        prixUnite: 1.90,
        quantite : 6
    }
];
/*Traduire en ceci: crée une liste qui s'appelera prixTotalsFruitsLegumes cette liste devra contenir le total
 pour chaque fruit&légume. Ce prix total sera variable par rapport à la quantité. (à noté que cette liste au début
     est vide)*/
    /*var prixTotalsFruitsLegumes =[];
    for(var Legume of panier){
        prixTotalsFruitsLegumes.push(Legume.prixUnite * Legume.quantite) ;  
        console.log("Legume :" , Legume);
    }
    //console.log(prixTotalsFruitsLegumes);
//Traduire en code ceci : crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.
    /*for(var i= prixTotalsFruitsLegumes[0] ; i<prixTotalsFruitsLegumes.length ; i++){

    }*/

}