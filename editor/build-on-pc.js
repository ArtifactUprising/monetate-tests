function finishModalClose(){
  try{
  var finishModal = document.getElementById("finishOnPC");
  finishModal.style.display = "none";
  }
  catch(e){
    console.log(e);
  }
  
}

function buildString2(){
  try{
      var email = 
          to = " ",
          subject = "My Artifact Uprising Project"
          body = "Continue your Project using the following link:%0D%0A" + encodeURIComponent(window.location.href);
            //this is where we would need to find the a link we want to put the mailto link in
          //link = document.getElementById('link'),
          message = ''
      if (to){
        email.className = 'not'
        message = 'mailto:'+to
        subject||body?message+='?':false
        subject?message+='subject='+subject:false
        subject&&body?message+='&body='+body:false
        !subject&&body?message+='body='+body:false
        //this is where we need to assign it to the ahref
         // console.log("message - " + message);

        window.open(message);
      } else {
        console.log("whoops");
        email.focus()
      }
  }
   catch(e){
    console.log(e);
  }
    }
