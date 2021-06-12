class Food{
  constructor(){}   

  display(){
    background(46,139,87);
    fill("red")
   
    var button=createButton("Feed the Dog");
    button.position(400,125);

    if(button.mousePressed(function(){
       foodS=foodS-1; 
       gameState=1;
       dog.addImage(happyDog);
       milkBotltle2.visible=true;
       database.ref('/').update({'gameState':gameState});
    }));
    
    var addFood=createButton("Add Food");
    addFood.position(500,125);

    if(addFood.mousePressed(function(){
      dog.addImage(sadDog);
      milkBotltle2.visible=false;
      foodS=foodS+1;
      gameState=2;
      database.ref('/').update({'gameState':gameState});
    }));
  }
}