'use strict';

const googleTrns = document.getElementById('google_translate_element');
const loginButtonElm = document.querySelector('.login_button_div');

function googleTranslateElementInit() {
   google.translate.TranslateElement({ pageLanguage: 'en' }, googleTrns);

   getTheDomElm();
}

const getChildElm = function (elm) {
   const childNodesElm = elm.childNodes;
   return childNodesElm;
};

const getTheDomElm = function () {
   const skiptranslateELm = document.querySelector('.skiptranslate');
   const googTeComboElm = document.querySelector('.goog-te-combo');

   const childNodes = getChildElm(skiptranslateELm);
   childNodes[1].remove();

   // googTeComboElm.addEventListener('change', function (event) {
   //    let value = event.target.value;

   //    console.log(value);

   //    // if (value === 'cs') {
   //    //    loginButtonElm.style.fontSize = '10px';
   //    // } else if (value === 'hr') {
   //    //    loginButtonElm.style.fontSize = '11px';
   //    // } else if (value === 'af') {
   //    //    loginButtonElm.style.fontSize = '11px';
   //    // } else if (value === 'am') {
   //    //    loginButtonElm.style.fontSize = '14px';
   //    // } else if (value === 'ar') {
   //    //    loginButtonElm.style.fontSize = '12px';
   //    // } else if (value === 'be') {
   //    //    loginButtonElm.style.fontSize = '14px';
   //    // } else if (value === 'cs') {
   //    //    loginButtonElm.style.fontSize = '12px';
   //    // } else if (value === 'my') {
   //    //    loginButtonElm.style.fontSize = '12px';
   //    // } else if (value === 'ca') {
   //    //    loginButtonElm.style.fontSize = '12px';
   //    // } else if (value === 'bg') {
   //    //    loginButtonElm.style.fontSize = '12px';
   //    // }

   //    console.log(valueInnerText);
   // });
};

// 1 -> change first link url -> http://yourwebsitename.com/index;
// 2 -> change your localhost url -> http://yourwebsitename.com/landing_page;

const storeData = function () {
   localStorage.setItem('data', true);
   window.location.replace('http://localhost/wa/index');
};

const replacePlace = function () {
   const value = localStorage.getItem('data');
   if (!value) {
      window.location.replace('http://localhost/wa/landing_page');
   }
};
