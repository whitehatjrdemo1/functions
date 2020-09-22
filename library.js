function isTouching(object1,object2){
    var distX=object1.width/2+object2.width/2;
  var distY=object1.height/2+object2.height/2;
    if(object1.x-object2.x<=distX&&
      object2.x-object1.x<=distX&&
      object2.y-object1.y<=distY&&
      object1.y-object2.y<=distY){
  return(true);
    }else{
      return(false);
    }
  }
  
  function bounceOff(object1,object2){
    var distX=object1.width/2+object2.width/2;
    var distY=object1.height/2+object2.height/2;
    // if(object2.velocityX===0&&object2.velocityY===0){
    verR1=object1.x+object1.width/2;
     verL1=object1.x-object1.width/2;
     verB1=object1.x+object1.width/2;
     verT1=object1.x-object1.width/2;
     verR2=object2.x+object2.width/2;
     verL2=object2.x-object2.width/2;
     verB2=object2.x+object2.width/2;
     verT2=object2.x-object2.width/2;

     if(verR2<=verR1&&verR2>=verL1){
      object2.x=object1.x-object1.width/2-object2.width/2;
      
     }else
     if(verL2<=verR1&&verL2>=verL1){
        object2.x=object1.x+object1.width/2+object2.width/2;
     }else

     if(verT2<=verB1&&verT2>=verT1){
      object2.y=object1.y-object1.height/2-object2.height/2;
      
     }else 
     if(verB2<=verB1&&verB2>=verT1){
        object2.y=object1.y+object1.height/2+object2.height/2;
     }
     // //    if (object1.x-object2.x<distX){
    //     object2.x=(verL+object2.width/2)-1;
    //    }
    //    if (object2.x-object1.x<distX){
    //     object2.x=(verR+object2.width/2)+1;
    //    }
    //    if (object1.y-object2.y<distY){
    //     object2.y=(verT+object2.height/2)-1;
    //    }
    //    if (object2.y-object1.y<distY){
    //     object2.y=(verT+object2.height/2)+1;
    //    }
    // }
       if(object1.x-object2.x<=distX&&
        object2.x-object1.x<=distX&&
        object2.y-object1.y<=distY&&
        object1.y-object2.y<=distY){
         
        //   object2.y;

        object2.velocityX=object2.velocityX*(-1);
        object2.velocityY=object2.velocityY*(-1);
    
  }
}