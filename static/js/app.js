/*** Fetching data -> refactor into module later ***/
const parent = document.getElementById('results');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'star wars';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

function init(){
  renderAlphabet();
}

// fetch(url, config)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     render(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// render data
function render(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
            <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
          `;
    parent.insertAdjacentHTML('beforeend', html);
  });
}

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {// up arrow
      //animate jump

      //get selected letter
      const letter = alphabetArray[2];

      //add letter to display
      const display = document.getElementById('name');
      let word = display.innerHTML;
      word = word + letter;
      display.innerHTML = word;
    }
    else if (e.keyCode == '37') {// left arrow
      alphabetArray.unshift(alphabetArray.splice(alphabetArray.length - 1, 1)[0]);
      renderAlphabet();
    }
    else if (e.keyCode == '39') {// right arrow
      alphabetArray.push(alphabetArray.splice(0, 1)[0]);
      renderAlphabet();
    }else if (e.keyCode == '8') {// right arrow
      removeLetter();
    }
}

function removeLetter(){
  const display = document.getElementById('name');
  let word = display.innerHTML;
  word = word.substring(0, word.length - 1);
  display.innerHTML = word;
}

const alphabetArray = ["Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", 
                    "I", "J", "K", "L", "M", "N", "O", "P", 
                    "Q", "R", "S", "T", "U", "V", "W", "X",];
function renderAlphabet(){
  const parent = document.getElementById('keyboard');
  
  //clear div
  parent.innerHTML = "";

  //add data
  for (let index = 0; index < 5; index++) {
    //check for index out of bounds
    const html = `
            <section>
              ${
                alphabetArray[index]
              }
            </section>
          `;

    parent.insertAdjacentHTML('beforeend', html);    
  } 
}

init()
