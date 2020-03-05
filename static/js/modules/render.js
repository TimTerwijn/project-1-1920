import * as vars from "./vars.js";
import * as api from "./api.js";

//render list of subjects
export function subjects(){
  //get keyboard parent
  const parent = document.getElementById('keyboard');
  
  //clear parent
  parent.innerHTML = "";

  //add data
  for (let index = 0; index < 3; index++) {
    //check for index out of bounds
    const html = `
            <section>
              <p>
              ${
                vars.subjects[index].name
              }
              </p>
            </section>
          `;

    parent.insertAdjacentHTML('beforeend', html);    
  } 
}

//render more of that subject
export function subject(subject){
  //get keyboard parent
  const parent = document.getElementById('keyboard');
  
  //clear parent
  parent.innerHTML = "";

  //add data
  for (let index = 0; index < 3; index++) {
    //check for index out of bounds
    const html = `
            <section>
              <p>
              ${
                subject[index]
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

    //check if you are in subject menu 1, EX: Animal, country
    if(vars.menu == 1){
      vars.subjects.unshift(vars.subjects.splice(vars.subjects.length - 1, 1)[0]);
      
      //rerender subjects
      subjects();
    }
    //check if you are in subject menu 2, EX: Horse, Dog
    else if(vars.menu == 2){
      //subject is already selected
      const subject = vars.subjects[1].value;
      
      subject.unshift(subject.splice(subject.length - 1, 1)[0]);

      //rerender subjects
      this.subject(subject);
    }
    //check if you are in subject menu 3, EX: book 1 of horse, book 2 of horse
    else if(vars.menu == 3){
      //swap books
      vars.books.unshift(vars.books.splice(vars.books.length - 1, 1)[0]);
          
      //render books
      books();
    }
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

    //check if you are in subject menu 1, EX: Animal, country
    if(vars.menu == 1){
      vars.subjects.push(vars.subjects.splice(0, 1)[0]);
      
      //rerender subjects
      subjects();
    }
    //check if you are in subject menu 2, EX: Horse, Dog
    else if(vars.menu == 2){
      //subject is already selected
      const subject = vars.subjects[1].value;
      
      subject.push(subject.splice(0, 1)[0]);

      //rerender subjects
      this.subject(subject);
    }
    //check if you are in subject menu 3, EX: book 1 of horse, book 2 of horse
    else if(vars.menu == 3){
      //swap books
      vars.books.push(vars.books.splice(0, 1)[0]);
          
      //render books
      books();
    }
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

  //if marco does not jump
  if(!isJumping){
    flipBox.classList.add("marco-jump");

    //wait for animation to compleet, then remove class
    const promise = vars.sleep(2000);
    promise.then(function(){
      flipBox.classList.remove("marco-jump");
    })  
  }  
}

// render books
export function books() {
  //get books
  const books = vars.books;
  
  //get parent
  const parent = document.getElementById('keyboard');
  
  //empty parent
  parent.innerHTML = "";
  
  //render books
  for (let index = 0; index < 3; index++) {
    const item = books[index];
    
    const html = `
            <a href="#details/${item.id}" </a>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
            </a>
          `;
    parent.insertAdjacentHTML('beforeend', html);
  }
}

function toggleVisibility(element){
  element.classList.toggle("hidden");
}

function hide(element){
  element.className = "hidden";
}

function hideAllPages(){
  const searchPage = document.getElementById("search_page");
  const detailsPage = document.getElementById("details_page");

  hide(searchPage);
  hide(detailsPage);
}

export function searchPage(){
  //hide all pages
  hideAllPages();

  //show start page
  const searchPage = document.getElementById("search_page");
  toggleVisibility(searchPage);
}

export function detailsPage(bookId){
  //hide all pages
  hideAllPages();
  
  //get book from api
  const promise = api.fetchBookById(bookId);
  
  try{
    //show details of book
    promise.then(result => {
      //render book
      const book = result.record;
      renderBookDetails(book);
    })

    //show details page
    const detailsPage = document.getElementById("details_page");
    toggleVisibility(detailsPage);
  }catch (err) {
    messages.innerHTML = "something went wrong. ";
  }
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