'use strict';

const googleTrns = document.getElementById('google_translate_element');

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
};

const storeData = function () {
   localStorage.setItem('data', true);
   window.location.replace('http://127.0.0.1:5501/WannaCall.html');
};

const replacePlace = function () {
   const value = localStorage.getItem('data');
   if (!value) {
      window.location.replace('http://127.0.0.1:5501/landing_page.html');
   }
};
