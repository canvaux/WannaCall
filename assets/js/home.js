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

// 1 -> change first link url -> http://yourwebsitename.com/Wanncall;
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
