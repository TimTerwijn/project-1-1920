const dieren = [
    "Aasgier", "Beverrat", "Capibara", "Doodshoofdaap", "Eikelmuis", "Fluiteend", "Gifkikker", "Heilige ibis", 
    "Juffer kraanvogel", "Kleine torenvalk", "Koereiger", "Leeuwaap", "Muskusos", "Nandoe", "Oeistitie", 
    "Peccari", "Rietvoorn", "Rode panda", "Schapenteek", "Stokstaart", "Tapir", "Veelvraat", "Wilde hond", "Zonparkiet"
];

const vakanties = [
    "Australië", "Bahama's", "Canada", "Duitsland", "Egypte", "Frankrijk", "Griekenland", "Hongarije", 
    "IJsland", "Japan", "Kroatië", "Luxemburg", "Marokko", "Nederland", "Oostenrijk", 
    "Portugal", "Qatar", "Rusland", "Spanje", "Tsjechië", "Uruguay", "Verenigde Staten", "Verenigd Koninkrijk", "Wit-Rusland", 
    "Zweden"
];

const boeken = [
    "Alice in Wonderland", "De brief voor de koning", "De GVR", "Dolfje Weekwolfje", "Harry Potter", "Hoe overleef ik", 
    "Koning van Katoren", "Kruistocht in spijkerbroek", "Matilda", "Minoes", "Narnia", "Pippi Langkous", "Pluk van de Petteflet", 
    "Polleke", "Sjakie en de chocoladefabroek", "Grimm", "De Hobbit", "Lord of the Rings", 
];

const stoer = [
    "Politie", "Ajax", "PSV", "Feyenoord", "Brandweer", "Computers", 
    "Pokémon", "Star Wars", "Lord of the Rings", "Lego", "Playmobil", "McDonald's", "Burger King", "Ridders", "Ruimte", 
    "Elektronica", "Yu-Gi-Oh"
];
    
export const subjects = [
    {"name" : "Dieren", "value" : dieren},
    {"name" : "Vakanties", "value" : vakanties},
    {"name" : "Boeken", "value" : boeken},
    {"name" : "Stoer", "value" : stoer},
]

export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}