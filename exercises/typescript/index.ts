// Booleans
let muted: boolean = true;
muted = false;
 // Numbers
let numerador: number = 42;
let denominador: number = 6;
let result = numerador / denominador;

// Strings
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arrays
let people: string[] = [];
people = ['Isable', 'Carlos', 'Victor'];
people.push("9000");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(2);

// Enum
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

let favoriteColor: Color = Color.Red;
console.log(`My favorite color is ${favoriteColor}`);

// Any
let test: any = "Joker";
test = { type: 'Wildcard' }; 

// Object
let res: object = { type: 'Wildcard' };