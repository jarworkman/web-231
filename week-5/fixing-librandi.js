//Start Program====================================================================================

//create an empty array
var animals = new Map();

//insert values and keys
animals.set('Yorkie','dog');
animals.set('Owl','bird');
animals.set('Chihuahua','dog');
animals.set('Birman','cat');
animals.set('Penguin','bird');
animals.set('Great Dane','dog');
animals.set('Sphynx','cat');
animals.set('Parrot','bird');

//iterate each value and its key
animals.forEach(function(key, value) {
    console.log('The ' + value + ' is a type of ' + key);
})

//state the size of the map
console.log(animals.size);

//End Program====================================================================================

/*
Expected output:
Tyler Librandi
Discussion 5.1 - Advanced Arrays
Date: 6/25/2019
The Yorkie is a type of dog.
The Owl is a type of bird.
The Chihuahua is a type of dog.
The Birman is a type of cat.
The Penguin is a type of bird.
The Great Dane is a type of dog.
The Sphynx is a type of cat.
The Parrot is a type of bird.
8
*/