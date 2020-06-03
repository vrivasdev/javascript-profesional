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

// ******************* Return type functions *********************
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6)

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string { // lastName could be undefined
    return `${firstName} ${lastName}`;
}

const victor = fullName('Victor');
console.log(victor);

// ************************** Interfaces ******************************
interface Rectangle {
    width: number
    height: number,
    color?: Color
}

let rectangle: Rectangle = {
    width: 4,
    height: 6,
    //color: Color.Red
};

function area(r: Rectangle): number {
    return r.height * r.width;
}

const areaRect = area(rectangle);
console.log(areaRect);

rectangle.toString = function() {
    return this.color ? `Rectangle ${this.color}` : `Rectangle`;
}

console.log(rectangle.toString());