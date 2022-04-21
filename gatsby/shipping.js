//this changes the inner content of the shipping accordion under the primary CTA
function holidayShipping(){

try{
  //click truth just checks if the accordion is open or closed so we don't try to grab something that doesn't exist 
  if(clickTruth == true){
    clickTruth = false;

    return;
  }

  else{
    clickTruth = true;
    setTimeout(() => {
      //this logic desides which div we are going to modify since the html structure is different in desktop and mobile
      if (viewportWidth > 767) {
      shippingText = document.getElementsByClassName("new-shipping-copy desktop-only")[0];
                      shippingText.innerHTML = "<p>" + "We have worked with our production partners and recommend following the below schedule to get your products in time for the holidays." + "</p>" + "</br>" + "<p>" + "Standard - Estimated 5-8 Business Days" + "</p>" + "<p>" + "Economy - Estimated 3-7 Business Days" + "</p>" + "<p>" + "Expedited - Estimated 2-5 Business Days" + "</p>" + "<p>" + "Rush - Estimated 1-3 Business Days" + "</p>";
      }
      else{
        shippingTextM = document.getElementsByClassName("new-shipping-copy au-mobile-only")[0];
                      shippingTextM.innerHTML = "<p>" + "We have worked with our production partners and recommend following the below schedule to get your products in time for the holidays." + "</p>" + "</br>" + "<p>" + "Standard - Estimated 5-8 Business Days" + "</p>" + "<p>" + "Economy - Estimated 3-7 Business Days" + "</p>" + "<p>" + "Expedited - Estimated 2-5 Business Days" + "</p>" + "<p>" + "Rush - Estimated 1-3 Business Days" + "</p>";
      } } , 50);

  }

}
catch(e){
  console.log(e);
}

}

try{
var shippingText;
var shippingTextM;
var clickTruth = false;
var shipA = document.getElementById("accordion-shipping");
//this just changes the outside text on the accordion
shipA.innerHTML = "Shipping and Production Guidelines";

shipA.addEventListener("click", holidayShipping);



//this is because the IDs are different for mobile and desktop and also checks if there was a resize event like rotating a phone
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 767) {
console.log('Wide viewport');
} else {
console.log('Small viewport');
}

window.addEventListener('resize', function () {
viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 767) {
  console.log('Wide viewport');
} else {
  console.log('Small viewport');
}
}, false);

}

catch(e){
}
