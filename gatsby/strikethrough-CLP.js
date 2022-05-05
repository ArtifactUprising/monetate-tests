function strikeThrough(){
          
  //wait till all CLPs are loaded
  setTimeout(() => { 
    try{
      var products = document.querySelectorAll("[class*='ProductCard__ProductDetails']");
          //iterates through the CLP list and grabs the price and removes the $

      for (let i = 0; i < products.length; i++) {
        var currentPrice = products[i].firstChild.nextElementSibling.innerText;
        currentPrice = currentPrice.substring(1);
        currentPrice = parseInt(currentPrice);

         //checks if it is a FROM price (which is not included on the sale)
        var fromPricing = isNaN(currentPrice);

        if(fromPricing != true){
          var salePrice = Math.ceil(currentPrice - (currentPrice * 0.2));
          var priceDiv = products[i].firstChild.nextElementSibling;
          var salePriceDiv = document.createElement("div");
          
          //builds the span and adds the sale price to the price
          salePriceContent = "<span id = 'salePrice' style = 'display: inline; margin-left: 10px; font-weight: 600; text-decoration: none !important; color: #000 !important;'>" + ("$" + salePrice) + "</span>" ;
          products[i].lastChild.insertAdjacentHTML("beforeend", salePriceContent);
          priceDiv.classList.add("line-through");
          document.getElementById('salePrice').style.textDecoration = "none !important";
        }
        
         //This re-fires the function when pagination is triggered since the page doesn't reload and monetate doesn't fire
        document.querySelectorAll("[class*='styled__CLPPaginationWrapper']")[0].addEventListener("click", strikeThrough);
      }
    }
    catch(e){}
  }, 10);
}
strikeThrough();
