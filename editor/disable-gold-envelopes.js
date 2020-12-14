// this only runs in the editor...

try {
  var monWidth = window.innerWidth;

  //allows time for the elements to load in...
  setTimeout(function() {
    //this gets for the viewport width to run the desktop or the mobile JS

    if (monWidth > 768) {
      try {
        //this is the customizable menu on desktop
        var monCM = document.getElementsByClassName('Accordion ')[0];
        monCM.addEventListener("mouseenter", function() {

          setTimeout(function() {

            var monGoldLuster = document.querySelector("[alt^='Gold Luster']");

            if (monGoldLuster) {

              //here we disable the pointer events and add not allowed cursor on the parent element.

              var monGoldLusterParent = monGoldLuster.parentElement;
              monGoldLusterParent.disabled = "true";
              monGoldLusterParent.style.cursor = "not-allowed";
              monGoldLuster.style.opacity = "0.3";
              monGoldLuster.style.pointerEvents = "none";

            }
          }, 500);
          var monCMAccordian = document.getElementsByClassName('Accordion__toggle')[0];
          monCMAccordian.addEventListener("click", function() {

            setTimeout(function() {

              var monGoldLuster = document.querySelector("[alt^='Gold Luster']");
              if (monGoldLuster) {

                //if it isn't collapsed it gets here and sets the element to the radio button
                var monGoldLusterParent = monGoldLuster.parentElement;
                monGoldLusterParent.disabled = "true";
                monGoldLusterParent.style.cursor = "not-allowed";
                monGoldLuster.style.opacity = "0.3";
                monGoldLuster.style.cursor = "not-allowed";
                monGoldLuster.style.pointerEvents = "none";

              }
            }, 200);
          });
        });
      } catch (e) {
        console.log(e);
      }

      //this is for when the users collapses and expands the Customize Menu when sidebar is expanded
    }
  }, 200);
} catch (e) {
  console.log(e);

}





//this runs on mobile devices to use a touch instead of a hover

try {
  setTimeout(function() {

    //this is the paintbrush custom menu
    if (monWidth < 769) {
      var monMobileCM = document.getElementsByClassName('icon-paintbrush')[0];
      monMobileCM.addEventListener("click", function() {
        setTimeout(function() {


          var monGoldLuster = document.querySelector("[alt^='Gold Luster']");
          var monGoldLusterParent = monGoldLuster.parentElement;
          monGoldLusterParent.disabled = "true";
          monGoldLuster.style.opacity = "0.3";
          monGoldLuster.style.pointerEvents = "none";

        }, 100);
        var monCMAccordian = document.getElementsByClassName('Accordion__toggle')[0];
        monCMAccordian.addEventListener("click", function() {

          setTimeout(function() {

            var monGoldLuster = document.querySelector("[alt^='Gold Luster']");
            if (monGoldLuster) {

              //if it isn't collapsed it gets here and sets the element to the radio button
              var monGoldLusterParent = monGoldLuster.parentElement;
              monGoldLusterParent.disabled = "true";
              monGoldLusterParent.style.cursor = "not-allowed";
              monGoldLuster.style.opacity = "0.3";
              monGoldLuster.style.cursor = "not-allowed";
              monGoldLuster.style.pointerEvents = "none";

            }
          }, 200);
        });
      });
    }
  }, 2000);

} catch (e) {
  console.log(e);
}




//this only runs on the holiday-card PDPs

try{
//finds the champs envelope color
var champs = document.querySelector("[alt^='AUA7CHAMP']");
//targets the radio button
var champsRadio = document.querySelector("[alt^='AUA7CHAMP']").parentElement;
champs.style.opacity = ".5";
champsRadio.style.cursor = "not-allowed";
champs.style.pointerEvents = "none";
}
catch(e){
  console.log(e);
}

