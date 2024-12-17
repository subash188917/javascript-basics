isHalwaThere = true;

function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve('Buy 1/2 kg Halwa');
            }
            else{
                reject('Halwa Finish');
            }
        },1000);
        });
}

async function buyHalwa() {
    let result = await waitInQueue();
    console.log(result);
}

buyHalwa();