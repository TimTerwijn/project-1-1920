import {renderData} from "./render.js";

export function fetchBook(name){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
  
    const config = {
      Authorization: `Bearer ${secret}`
    };
  
    const url = `${cors}${endpoint}${name}&authorization=${key}&detaillevel=${detail}&output=json`;
    
    const parent = document.getElementById('results');
    parent.innerHTML = "Loading please wait..."
  
    fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderData(data);
    })
    .catch(err => {
        console.log(err);
    });
  }