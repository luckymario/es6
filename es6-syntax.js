/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name">${animal.name}</h3>
        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact"> ${animal.fact}</p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

/* Prints:
<div class="card">
  <h3 class="name">Cheetah</h3>
  <img src="Cheetah.jpg" alt="Cheetah" class="picture">
  <div class="description">
      <p class="fact"> Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.</p>
      <ul class="details">
          <li><span class="bold">Scientific Name</span>: Acinonyx jubatus</li>
          <li><span class="bold">Average Lifespan</span>: 10-12 years</li>
          <li><span class="bold">Average Speed</span>: 68-75 mph</li>
          <li><span class="bold">Diet</span>: carnivore</li>
      </ul>
      <p class="brief">Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.</p>
  </div>
</div>*/


/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days) {
    let firstLetter = day.charAt(0).toUpperCase();
    let rest = day.slice(1);
    console.log(`${firstLetter}${rest}`);
}

/* Prints:
Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday*/


/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);

// [ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let total = 0;

    for(const num of nums) {
        total += num;
    }
    return nums.length ? total/nums.length : 0;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

/* Prints:
4
5
312.8
0*/