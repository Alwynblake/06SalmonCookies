//What is a JS Object?
//var name = 'Michaelangelo';

function sayHello(name){
  return `Hello, ${name}, how are you today?`;
}

var turtleMichaelangelo = {
  //property: value,
  name: 'Michaelangelo',
  shell: true,
  age: 15,
  color: 'orange',
  type: 'box',
  size: 62.3,
  ninja: true,
  mutant: true,
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
};

var turtleDonatello = {
  //property: value,
  name: 'Donatello',
  shell: true,
  age: 15,
  color: 'purple',
  type: 'box',
  size: 62.3,
  ninja: true,
  mutant: true,
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  render() {
    //create an element
    //provide content for that element
    //append the elemnt to the page (in a specific place)
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    var messageEl = document.createElement('p');

    nameEl.textContent = this.name;
    messageEl.textContent = `I am a ninja and I am ${this.color}`;


    container.appendChild(nameEl);
    container.appendChild(messageEl);  
    console.log('container', container);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(container);  
  }
};

var nums = [1, 2, 3, 4]; // arrays should generally have like data types

turtleMichaelangelo.render;
