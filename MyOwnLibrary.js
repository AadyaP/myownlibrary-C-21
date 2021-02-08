function isTouching(movingrect,fixedrect){
    if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
      fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
       movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
        fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
         return true;
       }
     
    else{return false;}
  
  }
  
  function bounceOff(movingrect,fixedrect){
    if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
      fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
        movingrect.velocityX=movingrect.velocityX*-1
        fixedrect.velocityX=fixedrect.velocityX*-1
      }
      if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
        fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
          movingrect.velocityY=movingrect.velocityY*-1
          fixedrect.velocityY=movingrect.velocityY*-1
        }
  }
  
  