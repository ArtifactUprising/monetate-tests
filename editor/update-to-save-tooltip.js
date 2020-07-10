/* this is Nick's safety first function to help style elements across functions */

function styleSafelyById(elementId, styleProp, styleValue) {
  try{
    const e = document.getElementById(elementId);
    if (e && e.style) {
      e.style[styleProp] = styleValue;
    }
  }
  catch(e){
    console.log(e);
  }
}

function displayModal2() {
  try{
    setTimeout(function(){
      if (document.referrer.indexOf("cart") > -1) {
        console.log("we should be displaying block");
        styleSafelyById('speech-bubble', 'display', 'block');
      }
      else{
                console.log("something is failing");

      }
    }, 2000);
  }
  catch(e){
    console.log(e);
  }
}

function closeModal(){

  try{
    styleSafelyById("speech-bubble", "display", "none");
  }
  catch(e){

  }
}

displayModal2();
