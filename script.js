document.getElementById("trigger").onclick = function() {
  open()
};

function open() {
  document.getElementById("menu").classList.toggle("show");
}

//pop-up
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');



let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++){
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e){
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    })
  }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupCloseIcon(el.closest('.popup'));
      e.preventDefault();
    })
  }
}
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive){
      popupClose(popupActive, false);
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')){
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}
function bodyUnLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
  bode.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px'
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('popup.open');
    popupClose(popupActive);
  }
});
const popupLogIn = document.getElementsByClassName('visible')
const popupReg = document.getElementsByClassName('not-visible')
let styleNot = popupReg[0].style;
let styleVis = popupLogIn[0].style;
function popupClick() {
  styleNot.display = 'block';
  styleVis.display = 'none'
}
//language 

const lang=[ 'РУС','ENG' , 'УКР']
function myFunction() {
    let value = lang.shift(); 
    lang.push(value);
    document.getElementById("language").innerHTML=value;
    document.getElementById("language-mini").innerHTML=value;
}
//img
const buttonOne = document.getElementsByClassName('button-one');
const buttonTwo = document.getElementsByClassName('button-two');
const buttonThree = document.getElementsByClassName('button-three');
let styleOne = buttonOne[0].style;
let styleTwo = buttonTwo[0].style;
let styleThree = buttonThree[0].style;
function oneImg() {
  styleOne.display = 'flex';
  styleTwo.display = 'none';
  styleThree.display= 'none';
}
function twoImg() {
  styleOne.display = 'none';
  styleTwo.display = 'flex';
  styleThree.display= 'none';
}
function threeImg() {
  styleOne.display = 'none';
  styleTwo.display = 'none';
  styleThree.display= 'flex';
}
