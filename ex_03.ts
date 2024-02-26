
/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

const personName: string = "asifNawaz";


// lowercase
console.log(personName.toLowerCase());

// upercase
console.log(personName.toUpperCase());

// titlecase

let firsLetter: string = personName.charAt(0).toUpperCase();
let restLetter: string = personName.slice(1).toLowerCase();


let titlecase = firsLetter + restLetter

console.log(titlecase);
