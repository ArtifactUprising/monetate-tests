var foundShip;

function runIt(){
  try{
setTimeout(function(){ 

  if(!foundShip){
    var cartItem = document.getElementsByTagName("h4");

var calRefillText = "Modern Wall Calendar Refill Pack";
var calText = "Modern Wall Calendar";

    for (var i = 0; i < cartItem.length; i++) {
      if (cartItem[i].textContent == calText || cartItem[i].textContent == calRefillText) {
        foundShip = cartItem[i];
        break;
      }
    }
  }





  if(foundShip != null || foundShip != undefined){

    var shipExpedited = document.querySelectorAll("[class*=ShippingMethodItemWrapper]")[1];

    var shipRush = document.querySelectorAll("[class*=ShippingMethodItemWrapper]")[2];

    if(shipExpedited){
    shipExpedited.style.display = "none";
    }
    
    if(shipRush){
    shipRush.style.display = "none";
    }

  } 

}, 500);
  }
  catch(e){
    console.log(e);
  }

}
window.onload = runIt();
