const {Tamagochi, Dinosaur, Dog, Snake} = require('./lib')

const dino = new Dinosaur('Tim', 'Stegosaurus')

console.log(dino)

dino.dayChange()
console.log(dino)
dino.cleanPet()
console.log(dino)
dino.eveningChange()
console.log(dino)
dino.playWithPet()
console.log(dino)
dino.hourChange()
console.log(dino)
dino.feedPet()
console.log(dino)
dino.makeSound()
console.log(dino)