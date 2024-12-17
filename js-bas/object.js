// let car={
//     name : 'Nexon',
//     brand: 'Tata',
//     driveTrain:'Petrol,diesel,ev',
//     price: 15,
//     onRoadPrice(price){
//         return this.price+2;
//     }
// };

// car['Model Year'] = 2024;

// console.log(car.onRoadPrice(11));


// console.log(car.name);
// delete car.price;
// console.log(car);
// car['Model Year'] = 2024;
// console.log(car);

// car.price = 18;
// console.log(car);

// let a={
//     name: 'subash',
//     age: 23,
//     height:5.7

// };

// console.log(a);
// a=null;
// console.log(a);
// let a={

// }

// function User(){
//     this.name = 'code';
//     this.age = function(){
//         return 24;
//     }
// }

// let subs = new User();

// console.log(subs.age());

function Add(){
    this.a = 5;
    this.b = 10;
    this.add = function(c){
        return this.a+this.b+c;
    }
}
let sum = new Add();
console.log(sum.add(4));