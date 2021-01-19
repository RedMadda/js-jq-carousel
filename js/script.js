// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le
// immagini dello slider;
// Inoltre, per scorrere le immagini, permettere anche l’uso delle frecce
// sinistra e destra della tastiera
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima
// immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine
// attuale da visualizzare nello slider

// PREV
// click su prev, scorre img a sx
var prevSelection = $("div.slider-wrapper > div.prev");
prevSelection.click(prevLeftImg);

// cambio pallino prev/sx quando clicco su .prev

prevSelection.click(prevLeftPoint);

// NEXT
// click su .next, scorre img a dx
var nextSelection = $("div.slider-wrapper > div.next");
nextSelection.click(nextRightImg);

// cambio pallino next/dx quando clicco su .next

nextSelection.click(nextRightPoint);

// clicco su arrow left. scorre img a sx

$("body").keydown(function(e){
  if ( event.which == 37 ) {
    prevLeftImg();
    prevLeftPoint();
  }
});

// clicco su arrow right. scorre img a dx

$("body").keydown(function(e){
  if ( event.which == 39 ) {
    nextRightImg();
    nextRightPoint();
  }
});

// FUNZIONI

// PREV
// cambio img prev/sx
function prevLeftImg() {
  var currentImg = $("img.active");
  currentImg.removeClass("active");

  if( currentImg.hasClass("first")) {
    $("img.last").addClass("active");
  } else {
    currentImg.prev().addClass("active");
  }
}

// cambio pallino prev/sx
function prevLeftPoint() {
  var currentPoint = $("div.nav > i.active");
  currentPoint.removeClass("active");

  if ( currentPoint.hasClass("first") ) {
    $("div.nav > i.last").addClass("active");
  } else {
    currentPoint.prev().addClass("active");
  }
}


// NEXT
// cambio img next/dx
function nextRightImg(){
  var currentImg = $("img.active");
  currentImg.removeClass("active");

  if (currentImg.hasClass("last")) {
    $(".first").addClass("active");
  } else {
    currentImg.next().addClass("active");
  }
}

// cambio pallino next/dx
function nextRightPoint() {
  var currentPoint = $("div.nav > i.active");
  currentPoint.removeClass("active");

  if (currentPoint.hasClass("last")) {
    $("div.nav > i.first").addClass("active");
  } else {
    currentPoint.next().addClass("active");
  }
}
