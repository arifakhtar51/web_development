const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '!~@#$%^&*()_-+={[}]|:;"<,>.?/';
const symbolLength=symbols.length;
let password="";
let passwordLength=10;
let checkcount=0;
handleSlider();
// circle by default grey 
setIndicator("grey");


// set the length of password on display
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.textContent=passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundColor=color;
    // shadow bhi add krna hai

}

function getRandInteger(min,max){
   return  Math.floor(Math.random()*(max-min))+min;
}

function generateRandomNumber(){
     return getRandInteger(0,9);
}
function generateLowecase(){
    return String.fromCharCode(getRandInteger(97,123));//a->97   z->123
}
function generateUppercase(){
    return String.fromCharCode(getRandInteger(65,90));
}
function generateSymbol(){
    const rnd=(getRandInteger(0,symbolLength));
    console.log(rnd);
    return symbols.charAt(rnd);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="Copied";
    }
    catch(e){
        copyMsg.innerText="Failed";
    }

    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000)
}


inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();

});

copyBtn.addEventListener('click',() => {
    if(passwordDisplay.value){
        copyContent();
    }
});

function handleCheckbox(){
     checkcount=0;
     allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkcount++;
            // handleSlider();
        }

     });


     if(checkcount>passwordLength){
        passwordLength=checkcount;
        handleSlider();
     }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change',handleCheckbox)
});

generateBtn.addEventListener('click',()=>{
    if(checkcount<=0){
        return ;
    }
    if(checkcount>passwordLength){
        passwordLength=checkcount;
        handleSlider();
     }


    //  let's start to create a new passeord 

    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUppercase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowecase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRandInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex](i);
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();

});

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //random J, find out using random function
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
