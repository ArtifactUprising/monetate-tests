
/* creating the arrays for loading in images, copy, and links */

var link = [
  "https://www.artifactuprising.com/photo-books/layflat-photo-album",
  "https://www.artifactuprising.com/photo-calendar/modern-wall-calendar",
  "https://www.artifactuprising.com/photo-books/baby-board-book",
  "https://www.artifactuprising.com/photo-books/hardcover-photo-book",
  "https://www.artifactuprising.com/frames/gallery-frames",
  "https://www.artifactuprising.com/photo-books/color-series-photo-book",
];

var prodImg = [
  "https://media.artifactuprising.com/monetate/reviews/layflat.jpg?width=640",
  "https://media.artifactuprising.com/monetate/reviews/modern-wall-calendar.jpg?width=640",
  "https://media.artifactuprising.com/monetate/reviews/board-board-book.jpg?width=640",
  "https://media.artifactuprising.com/monetate/reviews/hardcover2.jpg?width=640",
  "https://media.artifactuprising.com/monetate/reviews/frame.jpg?width=640",
  "https://media.artifactuprising.com/monetate/reviews/colorseries.jpg?width=640",
];

var ProductName = [
  "Layflat Photo Album",
  "Modern Wall Calendar",
  "Baby Board Book",
  "Hardcovrer Photo Book",
  "Gallery Frame",
  "Color Series Photo Book",
];

var stars = [
  "--rating: 5;",
  "--rating: 5;",
  "--rating: 5;",
  "--rating: 5;",
  "--rating: 5;",
  "--rating: 5;",

];

var starsAria = [
  "Rating of this product is 5 out of 5.",
  "Rating of this product is 5 out of 5.",
  "Rating of this product is 5 out of 5.",
  "Rating of this product is 5 out of 5.",  
  "Rating of this product is 5 out of 5.",
  "Rating of this product is 5 out of 5.",  
];

var review = [
  "I keep coming back to AU for their high quality printing, inding, gorgeous cover colours and foil stamping options.",
  "There are SO many reasons why I LOVE AU 😍✨💖 the paper and print quality is unbeatable and the cost is good, well worth every penny. ",
  "They love their new favorite books (about themselves). These custom Baby Board Books are so sweet, and the perfect new addition to their bookshelf.",
  "The picture quality was fantastic! I love all the options for arranging your photos. It looks even better in person than it did online. I couldn’t be happier!",
  "With my expectations high, when I saw my framed photograph, I was blown away. 10/10 and I will recommend AU to anyone that asks! Will definitely be using them again!",
  "After every trip my husband and I take I buy these little books. The pages are a good thickness for paging through, and the color choices are so cute. I'll be back to get another book after my next trip!",
];






//these are the html divs vars for box1
var box1Link = document.getElementById("box1");
var box1ProductImage = document.getElementById("box1Img");
var box1ProductName = document.getElementById("box1Title");
var box1Stars = document.getElementById("box1Stars");
var box1Review = document.getElementById("box1Review");

//these are the html divs vars for box2
var box2Link = document.getElementById("box2");
var box2ProductImage = document.getElementById("box2Img");
var box2ProductName = document.getElementById("box2Title");
var box2Stars = document.getElementById("box2Stars");
var box2Review = document.getElementById("box2Review");

//these are the html divs vars for box3
var box3Link = document.getElementById("box3");
var box3ProductImage = document.getElementById("box3Img");
var box3ProductName = document.getElementById("box3Title");
var box3Stars = document.getElementById("box3Stars");
var box3Review = document.getElementById("box3Review");


var boxNum = 0;




try{
  function boxPushMobile() {

    if (boxNum >= link.length-1) {
      boxNum = 0;
    } else {
      boxNum++;
    }


    box1Link.href = link[boxNum];
    box1ProductImage.innerHTML = `<img src='${prodImg[boxNum]}' id='GuideImg'>`;
    box1ProductName.innerHTML = ProductName[boxNum];
    box1Stars.style = stars[boxNum];
    box1Stars.setAttribute('aria-label', starsAria[boxNum]);   
    box1Review.innerHTML = review[boxNum];

  }
}

catch(e){
  console.log(e);
}

try{
  function boxPullMobile() {
    if (boxNum <= 0) {
      boxNum = link.length-1;
    } 
    else {
      boxNum--;
    }
    box1Link.href = link[boxNum];
    box1ProductImage.innerHTML = `<img src='${prodImg[boxNum]}' id='GuideImg'>`;
    box1ProductName.innerHTML = ProductName[boxNum];
    box1Stars.style = stars[boxNum];
    box1Stars.setAttribute('aria-label', starsAria[boxNum]);   
    box1Review.innerHTML = review[boxNum];

  }
}

catch(e){
  console.log(e);
}







try{
  function boxPush() {

    if (boxNum > 1) {
      boxNum = 0;
    } else {
      boxNum= boxNum+3;
    }


    box1Link.href = link[boxNum];
    box1ProductImage.innerHTML = `<img src='${prodImg[boxNum]}' id='GuideImg'>`;
    box1ProductName.innerHTML = ProductName[boxNum];
    box1Stars.style = stars[boxNum];
    box1Stars.setAttribute('aria-label', starsAria[boxNum]);   
    box1Review.innerHTML = review[boxNum];


    box2Link.href = link[boxNum+1];
    box2ProductImage.innerHTML = `<img src='${prodImg[boxNum+1]}' id='GuideImg'>`;
    box2ProductName.innerHTML = ProductName[boxNum+1];
    box2Stars.style = stars[boxNum];
    box2Stars.setAttribute('aria-label', starsAria[boxNum+1]);    
    box2Review.innerHTML = review[boxNum+1];

    box3Link.href = link[boxNum+2];
    box3ProductImage.innerHTML = `<img src='${prodImg[boxNum+2]}' id='GuideImg'>`;
    box3ProductName.innerHTML = ProductName[boxNum+2];
    box3Stars.style = stars[boxNum+2];
    box3Stars.setAttribute('aria-label', starsAria[boxNum+2]);    
    box3Review.innerHTML = review[boxNum+2];
  }
}

catch(e){
  console.log(e);
}

try{
  function boxPull() {
    if (boxNum <= 0) {
      boxNum = link.length-1;
      box1Link.href = link[boxNum-2];
      box1ProductImage.innerHTML = `<img src='${prodImg[boxNum-2]}' class='boxImagez'>`;
      box1ProductName.innerHTML = ProductName[boxNum-2];
      box1Stars.style = stars[boxNum-2];
      box1Stars.setAttribute('aria-label', starsAria[boxNum-2]);   
      box1Review.innerHTML = review[boxNum-2];

      box2Link.href = link[boxNum-1];
      box2ProductImage.innerHTML = `<img src='${prodImg[boxNum-1]}' id='GuideImg'>`;
      box2ProductName.innerHTML = ProductName[boxNum-1];
      box2Stars.style = stars[boxNum-1];
      box2Stars.setAttribute('aria-label', starsAria[boxNum-1]);    
      box2Review.innerHTML = review[boxNum-1];

      box3Link.href = link[boxNum];
      box3ProductImage.innerHTML = `<img src='${prodImg[boxNum]}' id='GuideImg'>`;
      box3ProductName.innerHTML = ProductName[boxNum];
      box3Stars.style = stars[boxNum];
      box3Stars.setAttribute('aria-label', starsAria[boxNum]);    
      box3Review.innerHTML = review[boxNum];
      console.log(boxNum + "post");
    }
    else{

      if (boxNum == link.length-1) {
        boxNum = 0;
        box1Link.href = link[boxNum];
        box1ProductImage.innerHTML = `<img src='${prodImg[boxNum]}' id='GuideImg'>`;
        box1ProductName.innerHTML = ProductName[boxNum];
        box1Stars.style = stars[boxNum];
        box1Stars.setAttribute('aria-label', starsAria[boxNum]);   
        box1Review.innerHTML = review[boxNum];



        box2Link.href = link[boxNum+1];
        box2ProductImage.innerHTML = `<img src='${prodImg[boxNum+1]}' id='GuideImg'>`;
        box2ProductName.innerHTML = ProductName[boxNum+1];
        box2Stars.style = stars[boxNum+1];
        box2Stars.setAttribute('aria-label', starsAria[boxNum+1]);    
        box2Review.innerHTML = review[boxNum+1];

        box3Link.href = link[boxNum+2];
        box3ProductImage.innerHTML = `<img src='${prodImg[boxNum+2]}' id='GuideImg'>`;
        box3ProductName.innerHTML = ProductName[boxNum+2];
        box3Stars.style = stars[boxNum+2];
        box3Stars.setAttribute('aria-label', starsAria[boxNum+2]);    
        box3Review.innerHTML = review[boxNum+2];
      }
    }
  }
}

catch(e){
  console.log(e);
}












try{
  function boxLoad() {
    box1Link.href = link[boxNum];
    box1ProductImage.innerHTML = `<img src='${prodImg[boxNum]}' id='GuideImg'>`;
    box1ProductName.innerHTML = ProductName[boxNum];
    box1Stars.style = stars[boxNum];
    box1Stars.setAttribute('aria-label', starsAria[boxNum]);
    box1Review.innerHTML = review[boxNum];

    box2Link.href = link[boxNum+1];
    box2ProductImage.innerHTML = `<img src='${prodImg[boxNum+1]}' id='GuideImg'>`;
    box2ProductName.innerHTML = ProductName[boxNum+1];
    box2Stars.style = stars[boxNum+1];
    box2Stars.setAttribute('aria-label', starsAria[boxNum+1]);
    box2Review.innerHTML = review[boxNum+1];


    box3Link.href = link[boxNum+2];
    box3ProductImage.innerHTML = `<img src='${prodImg[boxNum+2]}' id='GuideImg'>`;
    box3ProductName.innerHTML = ProductName[boxNum+2];
    box3Stars.style = stars[boxNum+2];
    box3Stars.setAttribute('aria-label', starsAria[boxNum+2]);
    box3Review.innerHTML = review[boxNum+2];
  }
}
catch(e){
  console.log(e);
}


/* Nick's safety first function to help style elements across functions */
try{
  function styleSafelyById(elementId, styleProp, styleValue) {
    const e = document.getElementById(elementId);
    if (e && e.style) {
      e.style[styleProp] = styleValue;
    }
  }}
catch(e){
  console.log(e);
}

document.onload = boxLoad();
