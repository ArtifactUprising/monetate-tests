/* this is Nick's safety first function to help style elements across functions */

function styleSafelyById2(elementId, styleProp, styleValue) {
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


/* Open nav when someone clicks on the annoucment bar; however, checks first to see if they are double clicking to select the promo code aka timeout */
var wdsclickTimeOut;

function wdsopenBannerNav() {
  try{
    clickTimeOut = setTimeout(function () {
      var selection = window.getSelection();

      if (selection.toString().length === 0) {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        var vh = window.innerHeight * 0.01;

        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', "height", vh+"px");

        styleSafelyById2('wds-banner-overlay', 'height', 'calc(var(--vh, 1vh)*100');
      }
    }, 150);
  }
  catch(e){
    console.log(e);
  }
}


/* Close when someone clicks on the "x" symbol inside the overlay */

function wdscloseBannerNav() {
  try{
    styleSafelyById2('wds-banner-overlay', 'height', '0%');
    styleSafelyById2('wds-code-copied', 'opacity', '0');
    styleSafelyById2('wds-code-copied', 'padding', '2px 0 0 0');
  }
  catch(e){
    console.log(e);
  }
}


/* this copies the promocode on click from the off-screen input box then it shows the word copied once a user clicks the copy icon */

function wdscopyPromoCode() {
  try{
    /* Get the text field */
    var wdscopyText = document.getElementById("wds-promo-code-copy");
    wdscopyText.select();
    wdscopyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");
    styleSafelyById2('wds-code-copied', 'opacity', '100%');
    styleSafelyById2('wds-code-copied', 'padding', '2px 0 0 16px');
  }
  catch(e){
    console.log(e);
  }
}


setTimeout(function(){ 
  try{
    var wdsNav = document.getElementsByTagName('nav')[0];
    if(wdsNav){
    wdsNav.style.zIndex = 0;
    }
  }
  catch(e){}
}, 0);
