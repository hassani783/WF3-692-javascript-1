 /*Convertir en code ceci: Faire une fonction qui vous permettra de créer n'importe quel éléments 
    HTML qui retournera cet élément html*/
    function createItemHtml(elementHtml){
    var item = document.createElement(elementHtml);
    return item;
    };
    var createDiv = createItemHtml('div');
    console.log(createDiv);

