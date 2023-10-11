const counterValue=document.querySelector('#counter')
console.log(counterValue);
const increment= () =>{
    // get the value from UI
    
    let value =parseInt(counterValue.innerText);
    // increment the value 
    value+=1;
    // set the value from UI
    counterValue.innerText=value;
    console.log("inside function");
};
const decrement=()=>{
     // get the value from UI
    
     let value =parseInt(counterValue.innerText);
     // decrement the value 
     value-=1;
     // set the value from UI
     counterValue.innerText=value;
};


// ========  By event listner Succesfully Working =======
// const fetchValue=document.getElementById('counter');
// const button1=getElementById('neg');
// button1.addEventListener('click',decrement());