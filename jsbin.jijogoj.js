var houses = ['Stark', 'Arryn', 'Baratheon', 'Tully', 'Greyjoy', 'Lannister', 'Tyrell', 'Martell', 'Targaryen'];
houses.push('Kozlowski', 'Eternall Doom');
houses.unshift('Czekolada');
var deletedFromBeginning = houses.shift();
var deletedFromBeginning = houses.pop();

console.log(houses);