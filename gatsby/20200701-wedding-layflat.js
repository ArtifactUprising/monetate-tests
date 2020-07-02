try{ 
var newText = document.querySelector("label[for='option-4195']");  if(newText != null){
    newText.innerHTML = "Custom Text";
  }  newText.addEventListener("mouseenter", function( event ) { 
    var hoverText = document.getElementsByClassName("pdp-tooltip__label")[0];
    if(hoverText != null){
      hoverText.innerHTML = "Custom Text";
      hoverText.style.textTransform = "uppercase";
    }  }, false);  newText.addEventListener("click", function( event ) {     setTimeout(function() {
      var labelText = document.getElementsByClassName("pdp-form__field-label__value");      var labelText0 = labelText[0];
      var labelText1 = labelText[1];
      var labelText2 = labelText[2];
      var labelText3 = labelText[3];
      var labelText4 = labelText[4];
      var labelText5 = labelText[5];      if(labelText0){
        var labelTextInner0 = labelText0.innerHTML;
        if(labelTextInner0 === 'Simple Text'){
          labelText0.innerHTML = "custom text";
        }
      }
      if(labelText1){        var labelTextInner1 = labelText1.innerHTML;
        if(labelTextInner1 === 'Simple Text'){
          labelText1.innerHTML = "custom text";
        }
      }
      if(labelText2){        var labelTextInner2 = labelText2.innerHTML;
        if(labelTextInner2 === 'Simple Text'){
          labelText2.innerHTML = "custom text";
        }
      }
      if(labelText3){        var labelTextInner3 = labelText3.innerHTML;
        if(labelTextInner3 === 'Simple Text'){
          labelText3.innerHTML = "custom text";
        }
      }
      if(labelText4){        var labelTextInner4 = labelText4.innerHTML;
        if(labelTextInner4 === 'Simple Text'){
          labelText4.innerHTML = "custom text";
        }
      }
      if(labelText5){        var labelTextInner5 = labelText5.innerHTML;
        if(labelTextInner5 === 'Simple Text'){
          labelText5.innerHTML = "custom text";
        }
      }    }, 0);  }, false);}
catch(e){}