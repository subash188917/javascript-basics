//Array

// let vegs = new Array();

// vegs = ['Carrot','Beetroot'];

// console.log(vegs);

// let vegs = [];

// vegs = ['Carrot','Beetroot'];

// console.log(vegs);
// let vegs = ['Carrot','Beetroot','pumkin'];
// vegs.push('beans');
// vegs.unshift('beans');
// vegs.pop('beans');

// console.log(vegs.shift());
// console.log(vegs);

// let vegs = ['Carrot','Beetroot','pumkin'];

// // 
// console.log(vegs.length);


//Two dimensional array
let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat[i].length;j++){
        console.log(mat[i][j]);
    }
}