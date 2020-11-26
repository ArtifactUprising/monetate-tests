var foundGiftCard;



function GCModalClose(){

  try{
    document.getElementById('GCModal').style.display = "none";
  }
  catch(e){
    console.log(e);
  }


}

function giftCardQuantity(){
  try{
    //gets the title of the cart items;
    var h4Tags = document.getElementsByTagName("h4");

    //cart items we want to look for
    var searchText = ("Gift Card");



    //this looks through the cart and if it finds one of the searchText variables it adds the limited stock div to the cart item
    for (var i = 0; i < h4Tags.length; i++) {
      try{
        if (h4Tags[i].textContent == searchText) {

          found = h4Tags[i];

          //desktop divs
          if(window.innerWidth > 768){
            var GCquantityOuter = found.parentNode.parentNode.nextSibling.firstChild;
            var GCquantityDisabled = GCquantityOuter.firstChild;


            //new div styling
            GCquantityOuter.setAttribute('style', 'cursor: pointer;');
            GCquantityDisabled.setAttribute('style', 'pointer-events: none; opacity: .4;');
            GCquantityOuter.addEventListener("click", function() { console.log("do we get here?"); try{document.getElementById('GCModal').style.display = "flex";}catch(e){console.log(e);}});
          }//end of desktop if


          else{
            //mobile divs
            var GCquantityDisabledMobile = found.parentNode.parentNode.previousSibling;
            var GCquantityOuterMobile = found.parentNode.parentNode.previousSibling.parentNode;

            GCquantityOuterMobile.setAttribute('style', 'cursor: pointer;');
            GCquantityDisabledMobile.setAttribute('style', 'pointer-events: none; opacity: .4;');
            GCquantityOuterMobile.addEventListener("touchend", function() {
              try{document.getElementById('GCModal').style.display = "flex";}
              catch(e){console.log(e);}});

          }
        }
      }
      catch(e){
        console.log(e);
      }
    }
  }
  catch(e){console.log(e);}
}




window.onload = giftCardQuantity();
