window.onload = function(){
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
    // pour les propriete
    console.log("property color : d.color");
    console.log("property number : d.number");
    console.log("property tableau : d.tableau");
    console.log("property ogjet : d.objet");
    console.log("property func  : d.functuin()");
    console.log("property bool : d.bool");
      // pour savoir les types
    console.log("type property", typeof d.color,"property color: ", d.color);
    console.log("type property", typeof d.number,"property number: ", d.number);
    console.log("type property", typeof d.tableau,"property tableau: ", d.tableau);
    console.log("type property", typeof d.obj,"property obj: ", d.obj);
    console.log("type property", typeof d.func,"property func: ", d.func);
    console.log("type property", typeof d.bool1,"property bool1", d.bool1);
    console.log("type property", typeof d.bool2, "property bool2", d.bool2);

}