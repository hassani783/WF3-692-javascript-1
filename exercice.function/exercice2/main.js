 /*Convertir en code ceci: Faire une fonction qui vous permettra de créer n'importe quel éléments 
    HTML qui retournera cet élément html*/
    /*function createItemHtml(elementHtml){
        var item = document.createElement(elementHtml);
        return item;
        };
        var createDiv = createItemHtml('div');
        console.log(createDiv);
    
/*Reprendre l'étape du dessus et au lieu de l'afficher dans la console il faut cette fois-ci l'afficher dans le DOM*/
 /* var test = document.querySelector('body');
  test.appendChild(createDiv);
  /*Faire une fonction qui va créer un élément div et qui va créer un enfan
  t tel qu'un paragraphe et ce paragraphe doit contenir votre prénom*/
 /*function parentEnfant(parent , enfant){
    var creatediv = document.createElement(parent);
    var createP = document.createElement(enfant);
    creatediv.appendChild(createP);
    createP.innertext = "hello world !";
     return creatediv;
 }
  console.log(parentEnfant('div' , 'p'));*/

  function siblings(){
      var creatediv = document.createElement(mere);
      var createp = document.createElement(fille);
      creatediv.appendChild(createp);
      createp.innertext = "hello world !";
      return creatediv;
  }
console.log(siblings( 'div' , 'p'));
/*function parentEnfant(parent , enfant) {

    var creatediv = document.createElement(parent);
    creatediv.setAttribute('class', 'square');
    creatediv.setAttribute('id', 'centrerDiv');
    var createP=document.createElement(enfant);
    createP.setAttribute('class', 'paragraph1');
    creatediv.appendChild(createP);
    createP.innerText = "Houda Sophia Fatima Nina !";
   return creatediv;
  
 }
  
console.log(parentEnfant('div','p'));*/

