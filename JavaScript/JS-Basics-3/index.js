console.log('Running');

function run(){
    console.log('Hii my function is running ');
}

// fun calling or invoke
run();

//Named fucntion name 
function sum(){
    //console.log(arguments);//give an object
    let cnt=0;
    for(let val of arguments){
        cnt+=val;
    }
    console.log(cnt);
    return cnt;
}
console.log(sum(2 ,3 ,3,2,4,2));


// let a=1;
// a='bac';
// console.log(a);

function interest(p,r=1,t){

    return p*r*t/100;
}

console.log(interest(1,2,4));

function summi(a,b,...args){//create an array
    console.log(args);
}
summi(1,2,3,4,4);



let person={
    fName: 'arif',
    lName:'akhter'
};
console.log(person);
for(let val in person){//can't use of 
    console.log(val);
}



// GETTER AND SETTER

let Myobject={
    firstName:'Kumkum',
    lastName:'Habiba',
    
    get getter(){
        return `${Myobject.firstName} ${Myobject.lastName}`
    },
    set setter(val){
        let Name=val.split(' ');
        this.firstName=Name[0];
        this.lastName=Name[1];
    },
}

console.log(Myobject.getter);
try{
    // Myobject.setter=true;
    Myobject.setter=`Zahid AKhtar `;
}
catch{
    alert("Sorry Please Enter correct Data Type")
}
finally{
    console.log("Cleanup operations");  
    // this will execute always
}


console.log(Myobject);

{
var abc=1;
}

console.log(abc);
