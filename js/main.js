var plus = document.getElementById("sec-fourth-action");

plus.addEventListener("click", showTables);

function showTables() {
  if (plus.innerHTML === "+") {
    plus.innerHTML = "-";
    document.querySelector(".sec-fourth__tables").style.height = "max-content";
  } else {
    document.querySelector(".sec-fourth__tables").style.height = "0px";
    plus.innerHTML = "+";
  }
}

//---------TERIFF SLIDER---------//


var teriff__next = document.querySelector('.teriff__next');
var teriff__previous = document.querySelector('.teriff__previous');
var position = 0;
var indexStart = document.querySelector('.teriff__index--start');
var indexEnd = document.querySelector('.teriff__index--end');
var allCards = document.querySelectorAll('.teriff__card');
var sliderSize = allCards.length %3;
indexStart.classList.add('teriff__index--start-primary')

teriff__next.addEventListener('click',()=>{
    
  position-=37.4;
  if(position>=0)
  {
    teriff__previous.style.display="none";
  }
  else{
    teriff__previous.style.display="block";
    indexEnd.classList.remove('teriff__index--end-primary');
  }
  if(position===(-37.4*sliderSize)){
    teriff__next.style.display = "none";
    indexEnd.classList.add('teriff__index--end-primary');
    indexStart.classList.remove('teriff__index--start-primary');
  }
  else{
    teriff__next.style.display = "block";
    indexEnd.classList.remove('teriff__index--end-primary');

  }
  document.getElementById('teriff__slider').style.transform='translateX('+position+'rem)';
});

teriff__previous.addEventListener('click',()=>{
  position+=37.4;
  if(position>=0)
  {
    teriff__previous.style.display="none";
    indexStart.classList.add('teriff__index--start-primary');
    indexEnd.classList.remove('teriff__index--end-primary');
  }
  else{
    teriff__previous.style.display="block";
  }
  if(position===(-37.4*sliderSize)){
    teriff__next.style.display = "none";
  }
  else{
    teriff__next.style.display = "block";
  }
  document.getElementById('teriff__slider').style.transform='translateX('+position+'rem)';
});
