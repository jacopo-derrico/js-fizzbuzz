//NOTE - 1 - print number from 1 to 100; 
//2 - multiples of 3 print "Fizz"; 
//3 - multiples of 5 print "Buzz"; 
//4 - multiples of 3 and 5 print "FizzBuzz"
//5 - BONUS use append() to create container with boxes w/ numbers inside
//6 - BONUS add differents styles to every box

//  for (let i = 1; i <= 100; i++) {
//     // console.log(i)
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log("BuzzFizz")
//     } else if ((i % 3) === 0) {
//         console.log("Fizz")
//     } else if ((i % 5) === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
//  };

//  const container = document.createElement("div");
//  const box = document.createElement("div");
//  const text = document.createElement("p");

const container = document.getElementById('container');


for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("BuzzFizz")
        const box = `<div class="box box-bf">BuzzFizz</div>`;
        container.innerHTML += box
    } else if ((i % 3) === 0) {
        console.log("Fizz")
        const box = `<div class="box box-f">Fizz</div>`;
        container.innerHTML += box
    } else if ((i % 5) === 0) {
        console.log("Buzz")
        const box = `<div class="box box-b">Buzz</div>`;
        container.innerHTML += box
    } else {
        console.log(i)
        const box = `<div class="box box-number">${i}</div>`;
        container.innerHTML += box
    }
};
