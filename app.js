//! JavaScript Loop:

let car = ['BMW', 'Volvo', 'Toyota', 'Ford', 'Tesla', 'Lamborgini'];
car.push('Saab');

// console.log(car[0]);
// console.log(car[1]);
// console.log(car[2]);
// console.log(car[3]);
// console.log(car[4]);


//! for loop:
for (let i = 0; i < car.length; i++){
    console.log(car[i]);
}


//! forEach Loop Method:
car.forEach(function (i) {
    console.log(i);
})


//! for in loop:
let person = {
    name: 'Ibrahim',
    age: 20,
    country: 'Bangladesh',
    job: 'Web Developer',
}

for (let i in person ){
    let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
    console.log(capLetter + ': ' + person[i]);
}

//! for of Loop:
for(let i of car){
    console.log(i);
}


//! While Loop:
let num = 0;
while(num < 10){
    console.log(num);
    num++;
}