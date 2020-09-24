// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==
let searchInput = document.querySelector('.input__control.input__input.mini-suggest__input');
let nextLetter = 0;
let searchPhrase = "Меня зовут Владлен";
let submitButton = document.querySelector('button.mini-suggest__button.button_theme_websearch.button_size_ws-head.i-bem.button_js_inited');
let links = document.links;
let needSiteName = "https://vozhzhaev.ru/";
let nextPageButton = document.getElementsByTagName('a');
let docs = document.getElementsByTagName('a');
//There we are on the first page and have the submit button
if(submitButton!=undefined){
let timerId = setInterval(function(){
    searchInput.value+=searchPhrase[nextLetter];
    nextLetter++;
      if(nextLetter==searchPhrase.length) {
          clearInterval(timerId);
          submitButton.click();
      }
},10);
}else{//There we are on the next/or/another page where we don't have a submit button with the current submitButton name
    let flag = true;
    for(let i = 0;i<links.length;i++){
        if(links[i].href.indexOf(needSiteName)!=-1){
            links[i].removeAttribute('target');
            links[i].click();
            flag=false;
            break;
        }

}
    window.onload = function(){
if(flag){
    for(let i = 0;i<nextPageButton.length;i++){
 if(nextPageButton[i].getAttribute('aria-label')=="Следующая страница"){
nextPageButton[i].click();
}
}
}
    }
}
