try{
  var products = document.querySelectorAll("[class*='ProductCard__ProductDetails']");

  for (let i = 0; i < products.length; i++) {
    var currentPrice = products[i].firstChild.nextElementSibling.innerText;
    currentPrice = currentPrice.substring(1);
    currentPrice = parseInt(currentPrice);
    var salePrice = Math.ceil(currentPrice - (currentPrice * 0.2));

    //the next builds the div and adds the sale price to said div
    var priceDiv = products[i].firstChild.nextElementSibling;
    var salePriceDiv = document.createElement("div");

    salePriceContent = "<span style = 'display: inline-block; margin-left: 10px; font-weight: 600; text-decoration: none !important; color: #000 !important'>" + ("$" + salePrice) + "</span>" ;
    products[i].lastChild.insertAdjacentHTML("beforeend", salePriceContent);
    priceDiv.style.textDecoration= "line-through";
    priceDiv.style.color = "#757575";

  }
}
catch(e){}



