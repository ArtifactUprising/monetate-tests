try{
var priceDiv = document.getElementById("product-details-price");
var salePriceDiv = document.getElementById("salePrice");

const observer = new MutationObserver(calcSale);
observer.observe(priceDiv, {
  childList: true, // observe direct children
  subtree: true, // lower descendants too
  characterDataOldValue: true, // pass old data to callback
});
}
catch(e){}

function calcSale(){
  try{
  var price = priceDiv.innerText;
  price = price.substring(1);
  price = parseInt(price);
  var salePrice = Math.ceil(price - (price * 0.2));
  salePriceDiv.innerHTML = ("$" + salePrice) + "<span id='code' onclick='copyPromoCode()'>Use code: MOMTIME</span>";
  }
  catch(e){}
}

/* this copies the promocode on click from the off-screen input box then it shows the word copied once a user clicks the copy icon */

function copyPromoCode() {
  try{
    /* Get the text field */
    var copyText = "MOMTIME";
    navigator.clipboard.writeText(copyText);
    document.execCommand("copy");
    var copied = document.getElementById("code-copied2");
    console.log("copied = " + copied);
    copied.classList.add("code-copied-clicked");
    
  }
  catch(e){}
}
calcSale();
