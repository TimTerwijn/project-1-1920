import {Routie} from "../vendor/routie.min.js";
import * as render from "./render.js";

routie({
    //startPage
    "":() => {
        render.searchPage();
    },
    'details/:id': (id) => {
        render.detailsPage(id);
    }
});