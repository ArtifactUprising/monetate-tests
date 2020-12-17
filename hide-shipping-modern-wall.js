var foundShip;

function runIt(){
  try{
setTimeout(function(){ 
  console.log("modernShip Function called");

  if(!foundShip){
    var cartItem = document.getElementsByTagName("h4");
            console.log("cartItem " + cartItem.length);

    var searchText = ("Modern Wall Calendar Refill Pack", "Modern Wall Calendar");
                console.log("searchText " + searchText);

    for (var i = 0; i < cartItem.length; i++) {
      if (cartItem[i].textContent == searchText) {
        foundShip = cartItem[i];
        console.log("foundShip " + foundShip);
        break;
      }
    }
  }



        console.log("foundShip before if " + foundShip);


  if(foundShip != null || foundShip != undefined){

    var shipExpedited = document.querySelectorAll("[class*=ShippingMethodItemWrapper]")[1];
            console.log("shipExpedited " + shipExpedited);

    var shipRush = document.querySelectorAll("[class*=ShippingMethodItemWrapper]")[2];
    console.log("shipRush " + shipRush);

    shipExpedited.style.display = "none";
    shipRush.style.display = "none";

  } 

}, 500);
  }
  catch(e){
    console.log(e);
  }

}
window.onload = runIt();
