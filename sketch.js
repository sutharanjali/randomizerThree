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
  age: "100",
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
  species: "an Urgal",
  age: "unknown",
  occupation: "an Urgal Warchief"
}];

let nameIndex;
let speciesIndex;
let ageIndex;
let occupationIndex;
let cnv;
let button;

function setup() {
  cnv = createCanvas(windowWidth, 600);
  cnv.parent('#canvasDiv');

  textSize(20);
  textAlign(CENTER);
  textFont('Amaranth');

  background(random(100, 255), random(100, 255), random(100, 255));
  text("Life can be pretty random.", width/2, 100);
  text("As you click to generate your character,", width/2, 135);
  text("think about how that person came to", width/2, 170);
  text("join their occupation.", width/2, 205);
  text("What circumstances and world events allowed it?", width/2, 240);
  text("Real life is much like this randomizer.", width/2, 300);
  text("What random events led to where you are today?", width/2, 335);

  button = createButton('Create your Character!');
  button.position(width/2 - button.width/2, 650);
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

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
  background(random(100, 255), random(100, 255), random(100, 255));
  nameIndex = int(random(fantasy.length));
  speciesIndex = int(random(fantasy.length));
  ageIndex = int(random(fantasy.length));
  occupationIndex = int(random(fantasy.length));

  text("Your name is " + fantasy[nameIndex].name + ".", width/2, 100);
  text("You are " + fantasy[speciesIndex].species, width/2, 135);
  text("and you are " + fantasy[ageIndex].age + " years old.", width/2, 170);
  text("You are " + fantasy[occupationIndex].occupation + ".", width/2, 205);
  text("Story Time!", width/2, 300);
  text("How did " + fantasy[speciesIndex].species + " who is " + fantasy[ageIndex].age + " years old", width/2, 335);
  text("become " + fantasy[occupationIndex].occupation + "?", width/2, 370);
}

function loadAnimation() {
  setTimeout(loadingDot, 0);
  setTimeout(loadingDot1, 250);
  setTimeout(loadingDot2, 500);

}

function buttonPressed() {
  background(random(100, 255), random(100, 255), random(100, 255));
  setTimeout(randomizer, 750);
  loadAnimation();
}
