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

function displayModal() {
  try{
    if (document.referrer.indexOf("cart") > -1) {
       styleSafelyById('save-modal', 'display', 'flex');
    }
  }
  catch(e){
    console.log(e);
  }
}

function closeModal(){
  
  try{
    styleSafelyById("save-modal", "display", "none");
  }
  catch(e){
    console.log(e);
  }
}

document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {//keycode is an Integer, not a String
    styleSafelyById("save-modal", "display", "none");
    }
});

document.onload = displayModal();
