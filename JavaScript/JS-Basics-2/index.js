let rect={
    len : 10,
    bre : 22,
    draw :function(){
        console.log('i am rectangle');
        return this.len*this.bre;
    }
    
};
let a=rect.draw();
console.log(a);

// constructor function 
// pascal notation
function Rectangle(len,brea){
    this.length=len;
    this.breath=brea;
    console.log("ye hai->");
}
let obj1=new Rectangle(2,2);



// string object class 3 
let lastName=new String('artif');
console.log(lastName);

console.log(typeof(lastName));//object

console.log(typeof(2));

// alert('hi');

// let nm= -21;

// if(nm>-100){
//     console.log('True');
// }
// else{
//     console.log('False');
// }

let arr=[1,2,3,4,5];

// console.log(arr[2]);

// let indx=arr.indexOf(2);

// console.log(indx);

// deleting the element
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();

console.log(arr);

arr.splice(1,1);

console.log(arr);


// concatanation

let a1=[1,2,3];
let a2=[4,5,6];
let c3=a1.concat(a2);

console.log(c3);

console.log(c3.slice(2,3));

console.log(c3.slice(1));

let nums1=[1,23,4,5,6,7];

let nums2=[1,23,4,6,7];

let combined=[...nums1,'a',...nums2];
console.log(combined);


let array1=[1,2,3,4,5,6,70];

// for(let i=0;i<array1.length;i++){
//     console.log(array1[i]);
// }
//or

// array1.forEach(function(ele){
//     console.log(ele);
// });

let join=array1.join(',');
console.log(join);

let message='This is my home ';
let splt=message.split(' ');
console.log(splt);//creates an array


let numbers=[1,4,0,1,2,-9];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);



// filtering

let geeks=[1,2,3,-1,-2,-3,0];

    // let ans=geeks.filter(function(ele){
    //     return ele<=0;
    // });
    
    let ans=geeks.filter(ele=>ele<=0);
    console.log(ans);

let mat=[1,2,3,4,5];
let z=mat.map(function(val){
    return 'Arif'+' '+val;
});
console.log(z);


// mapping with objects

let Newarr=[1,2,3,4,-5];
let filtered=Newarr.filter(val=>val>=0);

let CreateMapWithObj=filtered.map((val)=>{
    return {ArifKa_value:val};
});
console.log(' before mapping');
console.log(filtered);
console.log(' after mapping with Object');
console.log(CreateMapWithObj);
    