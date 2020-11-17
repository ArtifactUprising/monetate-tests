var found;

function urgency(){
  
  if(!found){

  
  var h4Tags = document.getElementsByTagName("h4");
var searchText = "Baby Book | The Story of You";

for (var i = 0; i < h4Tags.length; i++) {
  if (h4Tags[i].textContent == searchText) {
    found = h4Tags[i];
    break;
  }
}

//parent div
    
var urgencyDiv = found.closest('[class^=styled__CartItemContainer]').parentNode;
    
    //var urgencyDiv = found.parentElement;

//new div
var urgencyHTML = document.createElement("div");

//new div styling
urgencyHTML.setAttribute('style', 'background-color: #627A7A; padding: 5px 8px; border-radius: 2px; width: 118px; font-family: lato; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; font-size: 12px; color: #FFF; text-align: center; margin-bottom: 16px;');

//new div inner html but here is only text
urgencyHTML.innerText = "Selling Fast";

//add this as the first child (aka element) to the urgencyDiv which is the product container
urgencyDiv.prepend(urgencyHTML);
  }
  
}


window.onload = urgency();
