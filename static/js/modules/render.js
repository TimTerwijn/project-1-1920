import * as vars from "./vars.js";
import * as api from "./api.js";

//render alphabet
export function alphabet(){
  //get keyboard parent
  const parent = document.getElementById('keyboard');
  
  //clear parent
  parent.innerHTML = "";

  //add data
  for (let index = 0; index < 5; index++) {
    //check for index out of bounds
    const html = `
            <section>
              <p>
              ${
                vars.alphabet[index]
              }
              </p>
            </section>
          `;

    parent.insertAdjacentHTML('beforeend', html);    
  } 
}

export function walkLeft(){
  const flipBox = document.getElementById("player-flip-box");  
  
  //check if Marco does't looks at the left direction
  let looksLeft = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "flip-box"){
      looksLeft = true;
    }
  });

  //check if Marco does't looks at the left direction
  if(!looksLeft){
      //animate Marco
      flipBox.classList.add("flip-box");
  }else{
    //move array to left
    vars.alphabet.unshift(vars.alphabet.splice(vars.alphabet.length - 1, 1)[0]);
      
    //rerender alphabet
    alphabet();
  }
}

export function walkRight(){
  const flipBox = document.getElementById("player-flip-box");  

  //check if Marco looks at the left direction
  let looksLeft = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "flip-box"){
      looksLeft = true;
    }
  });

  if(looksLeft){
    //animate Marco to look right
    flipBox.classList.remove("flip-box");
  }else{
    //move array to right
    vars.alphabet.push(vars.alphabet.splice(0, 1)[0]);
    
    //rerender alphabet
    alphabet();
  }
}

export function playerJump(){
  const flipBox = document.getElementById("player-flip-box");

  //check if Marco is already jumping
  let isJumping = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "marco-jump"){
      isJumping = true;
    }
  });

  if(!isJumping){
    flipBox.classList.add("marco-jump");

    //wait for animation to compleet, then remove class
    const promise = vars.sleep(2000);
    promise.then(function(){
      flipBox.classList.remove("marco-jump");
    })  
  }  
}

export function addLetterToWord(letter){
  //add letter to display
  const display = document.getElementById('name');
  let word = display.innerHTML;
  word = word + letter;
  display.innerHTML = word;
}

export function removeLastLetter(){
  const display = document.getElementById('name');
  let word = display.innerHTML;
  word = word.substring(0, word.length - 1);
  display.innerHTML = word;
}

// render books
export function books(books) {
  //get parent
  const parent = document.getElementById('results');
  
  //empty parent
  parent.innerHTML = "";
  
  //render books
  const results = books.results;
  results.forEach((item, i) => {
    const html = `
            <a href="#details/${item.id}" </a>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
            </a>
          `;
    parent.insertAdjacentHTML('beforeend', html);
  });
}

function toggleVisibility(element){
  element.classList.toggle("hidden");
}

function hide(element){
  element.className = "hidden";
}

function hideAllPages(){
  const startPage = document.getElementById("start_page");
  const searchPage = document.getElementById("search_page");
  const detailsPage = document.getElementById("details_page");

  hide(startPage);
  hide(searchPage);
  hide(detailsPage);
}

export function startPage(){
  //hide all pages
  hideAllPages();

  //show start page
  const startPage = document.getElementById("start_page");
  toggleVisibility(startPage);
}

export function searchPage(){
  //hide all pages
  hideAllPages();

  //show start page
  const searchPage = document.getElementById("search_page");
  toggleVisibility(searchPage);
}

export function randomSubjectsPage(){
  //hide all pages
  hideAllPages();

  //show random subjects page
  const randomSubjectsPage = document.getElementById("random_subject_page");
  toggleVisibility(randomSubjectsPage);
}

export function detailsPage(bookId){
  //hide all pages
  hideAllPages();
  
  //get book from api
  const promise = api.fetchBookById(bookId);
  
  //show details of book
  promise.then(result => {
    //render book
    const book = result.record;
    renderBookDetails(book);
  })

  //show details page
  const detailsPage = document.getElementById("details_page");
  toggleVisibility(detailsPage);
}

function renderBookDetails(book){
  //get parent
  const parent = document.getElementById('book_details');
  
  //empty parent
  parent.innerHTML = "";
  
  //render book
  const html = `
    <section>${book.titles[0]}</section>
    <img src="${
      book.coverimages ? book.coverimages[1] : 'Geen samenvatting'
      }">
  `;
  
  parent.insertAdjacentHTML('beforeend', html);
}