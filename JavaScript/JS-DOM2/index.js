//add 200 para 

// measuring time 
// const t1=performance.now();
// let Creatediv=document.createElement('div');


// for(let i=1;i<=100;i++){
//     let Newpara=document.createElement('p');
//     // let Newtext='This Is Para '+i;
//     Newpara.textContent='This Is Para '+i;
//     // console.log(Newpara);
//     Creatediv.appendChild(Newpara);
// }

// document.body.appendChild(Creatediv);
// const t2=performance.now();

// console.log('This took -> '+ (t2-t1)+ ' ms');


const t1=performance.now();
let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let Newpara=document.createElement('p');
    // let Newtext='This Is Para '+i;
    Newpara.textContent='This Is Para '+i;
    // console.log(Newpara);
    fragment.appendChild(Newpara);
}
document.body.appendChild(fragment);

 const t2=performance.now();

 console.log('This took -> '+ (t2-t1)+ ' ms');


//  set time out 
setTimeout(()=>{
    console.log("Running brother");
},"10000");//bad practice to pass in string
setTimeout(()=>{
    console.log("Running brother");
},1000);//good practice