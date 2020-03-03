/*** Fetching data -> refactor into module later ***/
import * as router from "./modules/router.js";
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
  const flipBox = document.getElementById("player-flip-box");

  //stop if Marco is already jumping
  let isJumping = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "marco-jump"){
      isJumping = true;
    }
  });

  if(!isJumping){
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
    // const promise = api.fetchBookByName(word);
    // promise.then(books => {
    //   //render books
    //   render.books(books);
    // })  
  }
}

export function onBackspaceKey(){
  //remove last letter from word
  render.removeLastLetter();

  //get word
  const display = document.getElementById('name');
  const word = display.innerHTML;

  //search books in api
  const promise = api.fetchBookByName(word);
  promise.then(books => {
    //render books
    render.books(books);
  }) 
}

init();