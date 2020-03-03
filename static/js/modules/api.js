export async function fetchBookByName(name){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = 'd7519ea81ad4e06ab5e5dac46ddeb63a';
    const secret = '274658a302d1cfe874e73aed9d6ccef5';
    const detail = 'Minimum';
  
    const config = {
      Authorization: `Bearer ${secret}`
    };
  
    const url = `${cors}${endpoint}${name}&p=jeugd&authorization=${key}&detaillevel=${detail}&output=json`;

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

export async function fetchBookById(id){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/details/?id=';
    const key = 'd7519ea81ad4e06ab5e5dac46ddeb63a';
    const secret = '274658a302d1cfe874e73aed9d6ccef5';
    const detail = 'default';
  
    const config = {
      Authorization: `Bearer ${secret}`
    };
  
    const url = `${cors}${endpoint}${id}&authorization=${key}&detaillevel=${detail}&output=json`;

    //set loading screen
    const detailsPage = document.getElementById('book_details');
    detailsPage.innerHTML = "Loading please wait..."

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