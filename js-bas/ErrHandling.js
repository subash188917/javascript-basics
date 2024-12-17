let a = undefined;

try{
    console.log(a.name);
}
catch(error){
    throw new SyntaxError();
}
