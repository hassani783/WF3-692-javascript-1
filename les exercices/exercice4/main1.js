window.onload = function(){
    //Traduire en code ceci : faire une liste 12 fruits et légumes qui s'appelera fruitsLegumes.
    var fruitsLegumes = ["banane" , "pomme" , "fraise"];
    console.log(fruitsLegumes)

/*Traduire en code ceci: faire une liste qui référence tous ce que
 vous avez mis dans un panier, ce panier doit 
être vide au départ.*/
var panier = [];
//explication:
/*la boucle for of c'est juste pour parcourir le tableau
 et le console.log pour l'afficher ??  */
 for(var article of fruitsLegumes ){
     console.log("article tableau: ", article);
 };
 console.log("panier: ", panier);
 console.log(fruitsLegumes);
 //explication:
/* on a utilise la decrementation parceque shift va 
supprime le dernier element du tableau avant qu'il 
soit pusher dans l'aute tableau*/
// pourquoi on a pas besoin de faire -1
 for(var i=fruitsLegumes.length ; i>0 ; i--){
    var fruitSuprime = fruitsLegumes.shift();
    panier.push(fruitSuprime);
 }
 console.log("panier: ", panier);
 console.log(fruitsLegumes);
}