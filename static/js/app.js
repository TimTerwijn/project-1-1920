/*** Fetching data -> refactor into module later ***/
import {checkKey} from "./modules/controller.js";
import * as render from "./modules/render.js";
import * as vars from "./modules/vars.js";
import * as api from "./modules/api.js";

function init(){
  render.alphabet();
}

export function onLeftKey(){
  render.walkLeft();  
}

export function onRightKey(){
  render.walkRight(); 
}

export function onTopKey(){
  //animate jump
  render.playerJump();

  //get letter
  const letter = vars.alphabet[2];

  //add letter to word
  render.addLetterToWord(letter);

  //get word
  const display = document.getElementById('name');
  const word = display.innerHTML;

  //search books in api
  const promise = api.fetchBook(word);
  promise.then(books => {
    //render books
    render.books(books);
  })  
}

export function onBackspaceKey(){
  //remove last letter from word
  render.removeLastLetter();

  //get word
  const display = document.getElementById('name');
  const word = display.innerHTML;

  //search books in api
  const promise = api.fetchBook(word);
  promise.then(books => {
    //render books
    render.books(books);
  }) 
}

init();