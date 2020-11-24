//CLP ADD TO FAVS FUNCTIONALITY ONLY RUNS ON CLP

var yourFavList;

//this runs at the start to iterate through all the cards on the page and add the html block with the <3
setTimeout(function() {

  loadFavs();



}, 1000);


//this attempts to set a listener event to detect if a user goes to the next page of results or increases the # of cards per page
function loadPaginationStation() {


  setTimeout(function() {

    var paginationStation = document.getElementById("react-select-2-input");
    paginationStation.addEventListener("change", reloadOnPaginate);

  }, 500);
}

//document.onload = loadPaginationStation();

paginationChange = document.querySelectorAll("[class*=singleValue]")[0];


// create a new instance of `MutationObserver` named `observer`, 
// passing it a callback function
PaginationStationObserver = new MutationObserver(function(mutationsList, observer) {
  reloadOnPaginate();
});

// call `observe` on that MutationObserver instance, 
// passing it the element to observe, and the options object
PaginationStationObserver.observe(paginationChange, {attributes: true, childList: true, subtree: true, characterData:true});




//this runs when pagination is triggered to iterate through all the cards on the page and add the html block with the <3



function reloadOnPaginate(){

  favHtml = '<div class="favs"><!-- card favs div --></div>';
  var cardElementList = document.querySelectorAll("[class*='ProductGrid__GridItem']");
  var favoritesList = JSON.parse(localStorage.getItem("yourFavList")) || [];


  cardElementList.forEach(el => {
   
         



    if(!el.firstElementChild.classList.contains("favs")){

    el.insertAdjacentHTML("afterbegin", favHtml);
    el.firstChild.addEventListener("click", addToFavs);
    }
    
    var cardUrl = el.getElementsByTagName("a")[0];
    const maybeFavoriteCard = favoritesList.find(fav => fav.link === cardUrl.href);      



    if (maybeFavoriteCard && !el.firstChild.classList.value.includes('favorited')) {
      el.firstChild.classList.add('favorited');
    }
    
    else if(!maybeFavoriteCard && el.firstChild.classList.value.includes('favorited')){
      el.firstChild.classList.remove('favorited');
    }
  });
  
  
}
  
  
function loadFavs() {
  favHtml = '<div class="favs"><!-- card favs div --></div>';
  var cardElementList = document.querySelectorAll("[class*='ProductGrid__GridItem']");
  var favoritesList = JSON.parse(localStorage.getItem("yourFavList")) || [];
  cardElementList.forEach(el => {
    el.insertAdjacentHTML("afterbegin", favHtml);
    el.firstChild.addEventListener("click", addToFavs);
    var cardUrl = el.getElementsByTagName("a")[0];
    const maybeFavoriteCard = favoritesList.find(fav => fav.link === cardUrl.href);      



    if (maybeFavoriteCard && !el.firstChild.classList.value.includes('favorited')) {
      el.firstChild.classList.add('favorited');
    }
    
    else if(!maybeFavoriteCard && el.firstChild.classList.value.includes('favorited')){
      el.firstChild.classList.remove('favorited');
    }
  });
}



function reLoadFavs() {
  favHtml = '<div class="favs"><!-- card favs div --></div>';
  var cardElementList = document.querySelectorAll("[class*='ProductGrid__GridItem']");
  var favoritesList = JSON.parse(localStorage.getItem("yourFavList")) || [];
  cardElementList.forEach(el => {
    var cardUrl = el.getElementsByTagName("a")[0];
    const maybeFavoriteCard = favoritesList.find(fav => fav.link === cardUrl.href);      
    if (maybeFavoriteCard && !el.firstChild.classList.value.includes('favorited')) {
      el.firstChild.classList.add('favorited');
    }
    
    else if(!maybeFavoriteCard && el.firstChild.classList.value.includes('favorited')){
      el.firstChild.classList.remove('favorited');
    }
  });
}



function addToFavs(){
  //console.log("this in addToFas " + this.innerHTML);
  if(this.classList.contains("favorited")){
    
  //var favoritesList = JSON.parse(localStorage.getItem("yourFavList"));
  var removeLink = this.nextSibling.firstChild.href;
    removeFav(removeLink);
  }
  
  else{
    
    console.log("this = "+ this);
    console.log ("this.sibling" + this.nextSibling);
        console.log ("this get element tag " + this.nextSibling.firstChild.getElementsByTagName("img")[0].alt);
    


    var favTitle = this.nextSibling.firstChild.getElementsByTagName("img")[0].alt;


    var favLink = this.nextSibling.firstChild.href;


    var favObj = {"title" : favTitle, "link" : favLink};


    // Parse the JSON stored in allEntriesP
    var existingEntries2 = JSON.parse(localStorage.getItem("yourFavList"));
    if(existingEntries2 == null) existingEntries2 = [];

    localStorage.setItem("favObj", JSON.stringify(favObj));
    // Save allEntries back to local storage
    existingEntries2.push(favObj);
    localStorage.setItem("yourFavList", JSON.stringify(existingEntries2));




    this.classList.add("favorited");

  }

    reLoadFavs();

}



function removeFav(link) {
      var favoritesList = JSON.parse(localStorage.getItem("yourFavList"));
  
	favoritesList = favoritesList.filter(fav=>fav.link!==link);

       localStorage.setItem('yourFavList', JSON.stringify(favoritesList));
  reLoadFavs();

}

//END OF CLP FAVS


//BUTTON FUNCTIONALY TO LIST FAVS 

function populateFavs(){
  
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

populateFavs();

var floater = document.getElementsByClassName("floater")[0];
var floater__favs = document.getElementsByClassName('floater__favs')[0];
var favsWrapper = document.getElementsByClassName('favsWrapper')[0];
var favsShare = document.getElementsByClassName('favsShare')[0];

function toggleFavActive(){
  floater.classList.toggle("is-active");
  floater__favs.classList.toggle("favs-is-active");
  favsWrapper.classList.toggle("is-active");
  favsShare.classList.toggle("is-active");
  
}

  var runOnce = 0;

function removeFavPulse(){
  console.log("runOnce " + runOnce);
  
  var floater = document.getElementsByClassName("floater__btn")[0];
  console.log("floater  " + floater);

  
if(runOnce == 0){
    console.log("ifstatement  ");

  floater.classList.toggle("pulseFav");
}

  runOnce= 1;
    console.log("runOnce after setting it to one  " + runOnce);

  
}

function buildString(){
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
        //this is where we need to assign it to the ahref
         // console.log("message - " + message);

        window.open(message);
      } else {
        console.log("whoops");
        email.focus()
      }
    }




var linkArray = [];


function mailToFavs(){
  
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

//END OF LISTING FAVS

//PDP ADD TO FAVS ONLY RUNS ON PDP PAGES

function loadFavs() {
  try{
  favHtml = '<div class="favs"><!-- card favs div --></div>';
  var currentCard = document.querySelectorAll("[class*=carousel__slide]")[0];
  var favoritesList = JSON.parse(localStorage.getItem("yourFavList")) || [];

  currentCard.insertAdjacentHTML("afterbegin", favHtml);
  currentCard.firstChild.addEventListener("click", addToFavs);
  var cardUrl = window.location.href;
  const maybeFavoriteCard = favoritesList.find(fav => fav.link === cardUrl);      



  if (maybeFavoriteCard && !currentCard.firstChild.classList.value.includes('favorited')) {
    currentCard.firstChild.classList.add('favorited');
  }

  else if(!maybeFavoriteCard && currentCard.firstChild.classList.value.includes('favorited')){
    currentCard.firstChild.classList.remove('favorited');
  }
  }
  catch(e){
    console.log(e);
}
}


loadFavs();



function addToFavs(){
  try{
  if(this.classList.contains("favorited")){

    //var favoritesList = JSON.parse(localStorage.getItem("yourFavList"));
    var removeLink = window.location.href;
    removeFav(removeLink);
  }

  else{

    var favTitle = document.querySelector("[class^='ProductDetails__ProductTitle']").innerText;

    var favLink = window.location.href;

    var favObj = {"title" : favTitle, "link" : favLink};


    // Parse the JSON stored in allEntries
    var existingEntries2 = JSON.parse(localStorage.getItem("yourFavList"));
    if(existingEntries2 == null) existingEntries2 = [];

    localStorage.setItem("favObj", JSON.stringify(favObj));
    // Save allEntries back to local storage
    existingEntries2.push(favObj);
    localStorage.setItem("yourFavList", JSON.stringify(existingEntries2));

    this.classList.add("favorited");

  }
  }
  catch(e){
    console.log(e);
  }
}



function removeFav(link) {
  try{

  var favClass = document.getElementsByClassName("favs")[0];
  var favoritesList = JSON.parse(localStorage.getItem("yourFavList"));

  favoritesList = favoritesList.filter(fav=>fav.link!==link);

  localStorage.setItem('yourFavList', JSON.stringify(favoritesList));
  favClass.classList.remove("favorited");
  }
  catch(e){
    console.log(e);
}
}

//END OF PDP ADD TO FAVS
