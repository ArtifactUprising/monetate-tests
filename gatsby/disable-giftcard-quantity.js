var foundGiftCard;
function giftCardQuantity(){
  try{
    //gets the title of the cart items;
    var h4Tags = document.getElementsByTagName("h4");

    //cart items we want to look for
    var searchText = ("Gift Card");
    console.log("searchText = " + searchText);
    


    //this looks through the cart and if it finds one of the searchText variables it adds the limited stock div to the cart item
    for (var i = 0; i < h4Tags.length; i++) {
      if (h4Tags[i].textContent == searchText) {
    console.log("inside if");

        found = h4Tags[i];
            console.log("found = " + found);

        //parent div
                    console.log("GCquantityOuter.parentNode.parentNode.nextSibling = " + found.parentNode.parentNode.nextSibling.innerHTML);

        var GCquantityOuter = found.parentNode.parentNode.nextSibling.firstChild;
        var GCquantityDisabled = GCquantityOuter.firstChild;

        //new div styling
        GCquantityOuter.setAttribute('style', 'cursor: not-allowed;');
        GCquantityDisabled.setAttribute('style', 'pointer-events: none; opacity: .5;');

      }
    }
  }
  catch(e){
    console.log(e);
  }
}


window.onload = giftCardQuantity();
