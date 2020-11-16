function ClearMultiTab(){
try{
  
  var clearTabError = document.getElementsByClassName("notification__clear")[0];
  
  clearTabError.click();
  
  
}

catch(e){
  console.log(e);
}
}

document.onload = ClearMultiTab();
