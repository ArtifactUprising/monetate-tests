function populateFavs(){
try{
  var favoritesList = JSON.parse(localStorage.getItem("yourFavList")) || [];


  var favsListDiv = document.getElementsByClassName("favsList")[0];
  favsListDiv.innerHTML = "";

  var c=0;

  for (i = 0; i < favoritesList.length; i++) {
    el = favoritesList;
    var favTitle = el[i].title;
    var favLink = el[i].link;
    var newFav = document.createElement('div');
    newFav.innerHTML = "<div class='favEl'>" +"<a target='_blank' class='favLink' href=" + favLink + ">" + favTitle + "</a></div>";                   // Insert text
    favsListDiv.appendChild(newFav);

  }
  }
  catch(e){
    console.log(e);
  }

}

populateFavs();

//toggles fav menu/list on or off
var floater = document.getElementsByClassName("floater")[0];
var floater__favs = document.getElementsByClassName('floater__favs')[0];

function toggleFavActive(){
  try{
  floater.classList.toggle("is-active");
  floater__favs.classList.toggle("favs-is-active");
    }
  catch(e){
    console.log(e);
  }
}


//this builds the mailto link from a customer's favorite card list (in local storage)
function buildString(){
  try{
  var email = 
      to = " ",
      subject = "My Favorite Cards from Artifact Uprising"
  body = mailToFavs(),
    //this is where we would need to find the a link we want to put the mailto link in
    link = document.getElementById('link'),
    message = ''
  if (to){
    email.className = 'not'
    message = 'mailto:'+to
    subject||body?message+='?':false
    subject?message+='subject='+subject:false
    subject&&body?message+='&body='+body:false
    !subject&&body?message+='body='+body:false
    window.open(message);
  } else {
    console.log("error");
    email.focus()
  }
    }
  catch(e){
    console.log(e);
  }
}




var linkArray = [];

//this builds the string of the mailto link and encodes it for use in the buildString Function
function mailToFavs(){
try{
  var favoritesList = JSON.parse(localStorage.getItem("yourFavList")) || [];

  for (i = 0; i < favoritesList.length; i++) {
    el = favoritesList;
    var favTitle = el[i].title;
    var favLink = el[i].link;

    var formattedBody = [favTitle + " - " + favLink + "\n"];
    linkArray.push(formattedBody);
  }
  var stinged = linkArray.join('');
  return encodeURIComponent(stinged);
}
  catch(e){
    console.log(e);
  }

}
