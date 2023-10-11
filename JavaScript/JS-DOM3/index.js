// synchronous

// function sync(){
//     console.log('first');

// }
// sync();

// console.log('second');


// setTimeout(function(){
//     console.log("third");
// },3000);

// function sync(){
//     console.log('first');

// }
// sync();

// console.log('second');



// Promises
// resolve and reject is variable we can change ;
// let p=new Promise(function(resolve,reject){

//     console.log("Hii i am here inside Promise");
//     setTimeout(function(){
//         console.log("third");
//         resolve(109);
//     },3000);

    
//     reject(new Error("Error koi hai"));
// });

// p.then((value)=>{console.log(value)});
// p.catch((error)=>console.log("recieved an error"));
// combine both first and second Method

// p.then((value)=>{console.log(value)},(error)=>console.log("recieved an error"));


// let task1= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Task 1 Completed");
//     },2000)
//     return resolve("return Val of =>Task 1");
// });

// task1.then(()=>{
//     let newPromise=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Task 2 Completed");
//         },3000)
//         resolve("return Val of =>Task 1");
//     })
//      return ("return Val of =>Task 1");
// }).then((value)=>{console.log(value)});




// async function add(){
//     return (1+10);
// }




// --------FETCH API------------------

// async function recveData(){
//     let a= await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let b=a.json();
//     // let b=a.text();
//     console.log(b);

// }


// recveData();



// ----=POST-----


// async function helper(){
//     let option={
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'ARIF ',
//           body: 'TAGDI Body',
//           userId: 1001,
//           weight:65,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
    
//       let content=await fetch('https://jsonplaceholder.typicode.com/posts',option);
//       let response=content.json();
//       return response;
// };


// async function utility(){
//     let ans=helper();
//     console.log(ans);
// }
// utility();


// ------closure---------

// var a='arif';
// function init(){
//    { var a='babbar';}
//     function rec(){
//         console.log(a);
//     }
//     rec();
//     console.log(a);
// }
// init();


function init(){
   var a='babbar';
    function rec(){
        console.log(a);
    }
    return rec();
   
}
let abc=init();


