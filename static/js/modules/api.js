import * as render from "./render.js";

export async function fetchBook(name){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
  
    const config = {
      Authorization: `Bearer ${secret}`
    };
  
    const url = `${cors}${endpoint}${name}&authorization=${key}&detaillevel=${detail}&output=json`;
    
    //set loading screen
    const parent = document.getElementById('results');
    parent.innerHTML = "Loading please wait..."

    //do an api call
    try {
        const response = await fetch(url, config);
        //handle client error with fetch
        if (response.ok) {
            return response.json();
        }
        else {
            return Promise.reject(response);
        }
    }
    catch (err) {
        console.log("something went wrong. ", err);
    }
}