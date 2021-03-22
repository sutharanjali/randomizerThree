//characters from The Inheritance Cycle by Christopher Paolini
let fantasy = [{
  name: "Eragon",
  species: "a Magic Human-Elf Hybrid",
  age: "17",
  occupation: "a Dragon Rider"
}, {
  name: "Saphira",
  species: "a Dragon",
  age: "4",
  occupation: "the Head Dragon"
}, {
  name: "Arya",
  species: "an Elf",
  age: "103",
  occupation: "the Ruler of the Elves"
}, {
  name: "Nasuada",
  species: "a Human",
  age: "20",
  occupation: "the Ruler of the Broddring Empire"
}, {
  name: "Orik",
  species: "a Dwarf",
  age: "100+",
  occupation: "the Ruler of the Dwarven Kingdom"
}, {
  name: "Roran",
  species: "a Human",
  age: "19",
  occupation: "the Earl of Palancar Valley"
}, {
  name: "Blödhgarm",
  species: "a Magic Elf-Wolf Hybrid",
  age: "unknown",
  occupation: "a Spellcaster"
}, {
  name: "Durza",
  species: "a Shade",
  age: "200",
  occupation: "a Dark Magician"
}, {
  name: "Nar Garzvhog",
  species: "an Urgal (Kull)",
  age: "unknown",
  occupation: "an Urgal Warchief (Nar)"
}];

let nameIndex;
let speciesIndex;
let ageIndex;
let occupationIndex;

function setup() {
  createCanvas(600, 600);
  textSize(25);

  background(220);
  text("click to generate your character!", 50, 100);
}

function draw() {

}

function loadingDot() {
  ellipse(width * 0.25, height / 2, 40, 40);
}

function loadingDot1() {
  ellipse(width * 0.5, height / 2, 40, 40);
}

function loadingDot2() {
  ellipse(width * 0.75, height / 2, 40, 40);
}

function randomizer() {
  background(220);
  nameIndex = int(random(fantasy.length));
  speciesIndex = int(random(fantasy.length));
  ageIndex = int(random(fantasy.length));
  occupationIndex = int(random(fantasy.length));

  text("Your name is " + fantasy[nameIndex].name + ".", 50, 100);
  text("You are " + fantasy[speciesIndex].species, 50, 135);
  text("and you are " + fantasy[ageIndex].age + " years old.", 50, 170);
  text("You are " + fantasy[occupationIndex].occupation + ".", 50, 205);
}

function loadAnimation() {
  setTimeout(loadingDot, 0);
  setTimeout(loadingDot1, 250);
  setTimeout(loadingDot2, 500);

}

function mousePressed() {
  background(220);
  setTimeout(randomizer, 750);
  loadAnimation();
}
