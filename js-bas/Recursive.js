//Recursive function

//-base case
//-update statement
//-recursive call

//5=>5*4*3*2*1=120

// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

function sum(n){
    if(n==1){
        return 1;
    }
    return n + sum(n-1);
}
console.log(sum(5));