// Arrow functions
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);

// One parameter function
const greet = name => `Hello ${name}!`;
greet('Asser');
// Returns: Hello Asser!

// Empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();
// Prints: Hello Udacity Student!

// Multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');
// Prints: Here's your chocolate ice cream in a waffle cone.

// Concise body syntax:
// - has no curly braces surrounding the function body
// - and automatically returns the expression.

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);

// Block body syntax:
// - it uses curly braces to wrap the function body
// - and a return statement needs to be used to actually return something from the function.

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});

/*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
	square => square * square
);

console.log(...squares);

// Prints: 1 4 9 16 25 36 49 64 81 100

// Default function parameters
function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

/*Returns:
Welcome Student!
Welcome James!
Howdy Richard!*/

// Default array parameter
function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid();
// Returns: Generates a 5 x 5 grid

// Default object parameter
function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae();
// Returns: Your sundae has 1 scoop with Hot Fudge toppings.