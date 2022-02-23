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
