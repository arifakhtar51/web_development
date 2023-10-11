// function a(){
//     alert('HII this IS ME');
// }
// document.addEventListener('click',a);

// const head=document.querySelector('#wrapper');
// console.log(head);//console webpage par dekhna padega inspect kar ke



// let links=document.querySelectorAll('a');
// console.log(links);


// links[0].addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("Maja aa gya Bhai");
// });



let NewDiv=document.createElement('div');
function abc(event){
    if(event.target.nodeName==='SPAN')
    console.log('I have clicked on para'+ event.target.textContent);
};
NewDiv.addEventListener('click',abc);
for(let i=1;i<=100;i++){
    let New_para=document.createElement('span');
    New_para.textContent="this is para"+i;

    
    NewDiv.appendChild(New_para);
    
}
document.body.appendChild(NewDiv);