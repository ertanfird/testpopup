import $  from 'jquery';
import '../scss/main.scss';
import Inputmask from "inputmask";

const activePopup = document.querySelector('#activePopup');
const popup = document.querySelector('#popup');
const email = document.querySelector('#email');


//Loader=========================================
$(window).on('load', function () {
  var $preloader = $('#loader');
  $preloader.delay(600).fadeOut('slow');
});


//Popup==========================================
activePopup.onclick = () => {popup.className = 'popup open'};
closePopup.onclick = () => {popup.className = 'popup'};

//Validation=====================================
Inputmask({"mask": "*{1,20}@*{1,20}.*{1,20}"}).mask(email);
