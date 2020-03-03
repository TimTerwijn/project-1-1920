import {Routie} from "../vendor/routie.min.js";
import * as render from "./render.js";

routie({

    //startPage
    "":() => {
        render.startPage();
    },
    //the search page
    "yes": () => {
        render.searchPage();
    },
    //the random page
    "no": () => {
        render.randomSubjectsPage();
    },
    //the search page
    "details": () => {
        alert("todo");
    },
});