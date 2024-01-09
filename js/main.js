//NOTE - 1 - print number from 1 to 100; 
//2 - multiples of 3 print "Fizz"; 
//3 - multiples of 5 print "Buzz"; 
//4 - multiples of 3 and 5 print "FizzBuzz"
//5 - BONUS use append() to create container with boxes w/ numbers inside
//6 - BONUS add differents styles to every box

 for (let i = 1; i <= 100; i++) {
    // console.log(i)
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("BuzzFizz")
    } else if ((i % 3) === 0) {
        console.log("Fizz")
    } else if ((i % 5) === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
 }