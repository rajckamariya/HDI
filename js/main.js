window.addEventListener('load', (event) => {
//   setInterval(secFirstSlider,3000); 
});
//----------------------SECTION 2 TOUCH SLIDER------------------------------//
let secFirst_slide1 = document.getElementsByClassName('sec-first__card--1')[0];
let secFirst_slide2 = document.getElementsByClassName('sec-first__card--2')[0];
let secFirst_slide3 = document.getElementsByClassName('sec-first__card--3')[0];

function slideSection(el,e){
  var x = e.changedTouches[0].pageX;
  if(x<=200){
    if(el.nextElementSibling.style.transform===null)
    {
      el.style.transform = "translateX(0)";  
    }else{
      el.style.transform = "translateX(-110%)";
      el.nextElementSibling.style.transform = "translateX(0)";
    }
  }
  if(x>=200){
    if(el.previousElementSibling.style.transform===null){
      el.style.transform = "translateX(0)";  
    }else{
    el.style.transform = "translateX(110%)";
    el.previousElementSibling.style.transform = "translateX(0)";
    }
  }
}
//-----------------------SECTION 3 MOBILE SLIDER---------------------//

var secThirdPrevious = document.getElementById('sec-third__previous');
var secThirdNext = document.getElementById('sec-third__next');
var secThirdSlides = document.getElementsByClassName('secThirdSlider');
var pos=0;
console.log(secThirdPrevious);
secThirdPrevious.addEventListener("click", ()=>{
  console.log(pos);
  if(pos !== 0){
    pos+=110;
    secThirdSlides[0].style.transform = "translateX("+pos+"%)";
    secThirdSlides[1].style.transform = "translateX("+(110+pos)+"%)";
    secThirdSlides[2].style.transform = "translateX("+(220+pos)+"%)";
  }
  
});
secThirdNext.addEventListener("click", ()=>{
  console.log(pos,"left side click");
  if(secThirdSlides[2].style.transform !== 'translateX(0%)'){
    pos-=110;
    secThirdSlides[0].style.transform = "translateX("+pos+"%)";
    secThirdSlides[1].style.transform = "translateX("+(110+pos)+"%)";
    secThirdSlides[2].style.transform = "translateX("+(220+pos)+"%)";
    secThirdPrevious.style.display = "block";
  }
  
  
});

//-----------------------SECTION 4 TABLE SHOW------------------------//

var plus = document.getElementById("sec-fourth-action");

plus.addEventListener("click", showTables);
function showAnswer(el){
  let answer = el.previousElementSibling.children[0];
  let question = el.previousElementSibling;
  answer.style.display = "block";
  answer.style.opacity = "1";
  question.style.fontSize = "1.8rem";
  answer.style.marginTop = "1.8rem"; 
  el.style.display = "none";
  el.nextElementSibling.style.display = "block";
}
function hideAnswer(el){
  let answer = el.previousElementSibling.previousElementSibling.children[0];
  let question = el.previousElementSibling.previousElementSibling;
  answer.style.display = "none";
  answer.style.opacity = "0";
  question.style.fontSize = "2rem";
  answer.style.marginTop = "0"; 
  el.style.display = "none";
  el.previousElementSibling.style.display = "block";
}
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
var teriff__cardSize = 37.4;
var teriff__position = 0;
var teriff__indexStart = document.querySelector('.teriff__index--start');
var teriff__indexEnd = document.querySelector('.teriff__index--end');
var teriff__allCards = document.querySelectorAll('.teriff__card');
var teriff__sliderSize = teriff__allCards.length %3;
teriff__indexStart.classList.add('teriff__index--start-primary')
var teriff_slider=document.getElementById('teriff__slider');

teriff__next.addEventListener('click',function(){nextSlide(teriff__sliderSize,"teriff__position",teriff__cardSize,teriff__previous,teriff__next,teriff__indexEnd,teriff__indexStart,teriff_slider,"teriff__")});
teriff__previous.addEventListener('click',function(){previousSlide(teriff__sliderSize,"teriff__position",teriff__cardSize,teriff__previous,teriff__next,teriff__indexEnd,teriff__indexStart,teriff_slider,"teriff__")});


//---------TIP SLIDER----------//


var tip__next = document.querySelector('.tip__next');
var tip__previous = document.querySelector('.tip__previous');
var tip__cardSize=48;
var tip__position = 0;
var tip__indexStart = document.querySelector('.tip__index--start');
var tip__indexEnd = document.querySelector('.tip__index--end');
var tip__allCards = document.querySelectorAll('.tip__card');
var tip__sliderSize = tip__allCards.length %2;
if(tip__sliderSize===0){
tip__sliderSize=2;
}
tip__indexStart.classList.add('tip__index--start-primary')
var tip_slider=document.getElementById('tip__slider');

tip__next.addEventListener('click',function(){nextSlide(tip__sliderSize,"tip__position",tip__cardSize,tip__previous,tip__next,tip__indexEnd,tip__indexStart,tip_slider,"tip__")});
tip__previous.addEventListener('click',function(){previousSlide(tip__sliderSize,"tip__position",tip__cardSize,tip__previous,tip__next,tip__indexEnd,tip__indexStart,tip_slider,"tip__")});



function nextSlide(sliderSize,position,cardSize,previous, next, indexEnd, indexStart,slider,str){
  
  window[position]-=cardSize;
  console.log(slider)
  if(window[position]>=0)
  {
    previous.style.display="none";
  }
  else{
    previous.style.display="block";
    indexEnd.classList.remove(str+'index--end-primary');
  }
  if(window[position]===(-cardSize*sliderSize)){
    next.style.display = "none";
    indexEnd.classList.add(str+'index--end-primary');
    indexStart.classList.remove(str+'index--start-primary');
  }
  else{
    next.style.display = "block";
    indexEnd.classList.remove(str+'index--end-primary');

  }

  slider.style.transform='translateX('+window[position]+'rem)';
}
function previousSlide(sliderSize,position,cardSize,previous, next, indexEnd, indexStart,slider,str){
  console.log(slider);
  window[position]+=cardSize;
  if(window[position]>=0)
  {
    previous.style.display="none";
    indexStart.classList.add(str+'index--start-primary');
    indexEnd.classList.remove(str+'index--end-primary');
  }
  else{
    previous.style.display="block";
  }
  if(window[position]===(-37.4*sliderSize)){
    next.style.display = "none";
  }
  else{
    next.style.display = "block";
  }
  slider.style.transform='translateX('+window[position]+'rem)';
}



