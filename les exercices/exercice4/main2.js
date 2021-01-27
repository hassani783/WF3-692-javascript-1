window.onload = function(){
//Traduire en code ceci: nous avons un panier qui est une liste d'un ensemble d'article qui référence 
    //le nom de l'article, le prix, la quantité
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
    //Traduire en code ceci: dans votre panier il doit y avoir au moins 4 articles

       console.log(panier);
       for(var article of panier){
           console.log("article :" , article);
       var prix = article.quantite * article.prixUnite;
       }; console.log("prix total :" ,prix , "€");
       
    //créer une liste renseignant le nom du fruit,la quantité et le prix à l'unité
    var fruit ={
        nom : "fraise" ,
        quantite : 4 , 
        prixUnite : 1.40
    }
   // Essayer d'accéder à une propriété d'un objet
   console.log("property fruit :" ,fruit.nom);
    console.log("type property", typeof fruit.nom,"property fruit: ", fruit.nom);
/*Une fois que savez accéder à une propriété d'un objet procéder un calcul entre la propriété 
quantité et la propriété prix unitaire pour obtenir le prix.*/
var prixTotal = fruit.prixUnite * fruit.quantite;
 /*var totalquantite = console.log("property fruit :" ,fruit.quantite);
var totalpri = console.log("property fruit :" ,fruit.prixUnite);
var prix = totalpri * totalquantite ;*/
console.log(prixTotal);
}