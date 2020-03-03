export const alphabet = ["Z", " ", "A", "B", "C", "D", "E", "F", "G", "H", 
                    "I", "J", "K", "L", "M", "N", "O", "P", 
                    "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];

export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}