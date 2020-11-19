var yourFavList;

//this runs at the start to iterate through all the cards on the page and add the html block with the <3
setTimeout(function() {

  loadFavs();

}, 500);




try{
  //this is by page pagination on desktop
  var paginationPage = document.querySelectorAll("[class*=Pagination__PaginationWrapper]")[0];
  if(document.documentElement.clientWidth > 768){
    paginationPage.addEventListener("click", reloadOnPaginate);
  }



  //this is pagination for all select
  var paginationChangeParent = document.querySelectorAll('[size="12"]')[2];
  if(document.documentElement.clientWidth > 768){
    paginationChange2 = paginationChangeParent.children[2];
    paginationChange2.addEventListener("click", reloadOnPaginate);

  }

  var loadMorePagination = document.querySelector("[class*='Pagination__LoadMoreContainer']");
  if(document.documentElement.clientWidth < 769){

    loadMorePagination.addEventListener("click", reloadOnPaginate);
  }




  //this is pagination for 24-48 counts this is the 24/48 select
  var paginationChange = document.querySelectorAll("[class*=singleValue]")[0];

  // create a new instance of `MutationObserver` named `observer`, 
  // passing it a callback function
  PaginationStationObserver = new MutationObserver(function(mutationsList, observer) {
    reloadOnPaginate();
  });


  // call `observe` on that MutationObserver instance, 
  // passing it the element to observe, and the options object
  if(document.documentElement.clientWidth > 768){
    PaginationStationObserver.observe(paginationChange, {attributes: true, childList: true, subtree: true, characterData:true});

  }

  //this runs when pagination is triggered to iterate through all the cards on the page and add the html block with the <3

}
catch(e){
  console.log(e);
}


function reloadOnPaginate(){
  try{
    setTimeout(function() {

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

    }, 500);
  }
  catch(e){
    console.log(e);
  }


}


function loadFavs() {
  try{
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
  catch(e){
    console.log(e);
  }

}



function reLoadFavs() {
  try{
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
  catch(e){
    console.log(e);
  }

}



function addToFavs(){

  try{

    if(this.classList.contains("favorited")){

      var removeLink = this.nextSibling.firstChild.href;
      removeFav(removeLink);
    }

    else{


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
  catch(e){
    console.log(e);
  }


}



function removeFav(link) {
  try{
    var favoritesList = JSON.parse(localStorage.getItem("yourFavList"));

    favoritesList = favoritesList.filter(fav=>fav.link!==link);

    localStorage.setItem('yourFavList', JSON.stringify(favoritesList));
    reLoadFavs();

  }
  catch(e){
    console.log(e);
  }


}

