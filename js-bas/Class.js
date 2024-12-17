//Object

let user = {
    name:'subs',
    age :29
};

class User{
    name = 'subs';
    age=23;

    dispaly(){
        console.log('Name:',this.name);
        console.log('Age',this.age);
    }
}

let subs = new User();
subs.dispaly();