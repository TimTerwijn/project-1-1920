/*** Fetching data -> refactor into module later ***/
import * as router from "./modules/router.js";
import {checkKey} from "./modules/controller.js";
import * as render from "./modules/render.js";
import * as vars from "./modules/vars.js";
import * as api from "./modules/api.js";

function init(){
  render.subjects();
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
    
    //check if you already selected a subject
    if(!vars.isSubjectSelected()){      
      const subject = vars.subjects[1];
      
      //select subject
      subject.selected = true;

      //open subject
      render.subject(subject.value);
    }else{
      const subjectName = vars.subjects[1].value[1];

      //search books in api
      const promise = api.fetchBookByName(subjectName);
      try{
        promise.then(books => {
          //render books
          render.books(books);
        })
      }catch (err) {
          messages.innerHTML = "something went wrong.";
      }
    }      
  }
}

init();