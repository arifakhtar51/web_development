// console.log('My weather app');
// let API_KEY='74b3bdc3a986b712c56b0ef8e07da107';
// function renderWeatherInfo(data){
//             // console.log("weather data = > ",data);
//             let newPara=document.createElement('p');
//             newPara.textContent=`${data?.main?.temp.toFixed(2)} *C`;
//             document.body.appendChild(newPara);

// }
// async  function fetchWeatherDetails(){
//     // let latitude=15.333;
//     // let longitude=74.5335;
//     try{
//         let city="kanpur";
//         const  response= await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//             // console.log(response);
//             const data=await (response).json();
//             // console.log("weather data = > ",data);
//             // let newPara=document.createElement('p');
//             // newPara.textContent=`${data?.main?.temp.toFixed(2)} *C`;
//             // document.body.appendChild(newPara);

//             renderWeatherInfo(data);//functn to display on webpage
//     }
//     catch(e){
//         console.log("error 404");
//     }
   
// }
// fetchWeatherDetails();
// //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
// async function fetchWeatherDetailsAccordingLatApt(){

//     try{
//         let lat=1.209;
//         let lon=2.192;
//         let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?${lat}${lon}&appid=${API_KEY}&units=metric`);
//         let data= await response.json();
//         console.log("data=-> ",data );
//     }
//     catch(err){
//         console,log("ye error hai -> ", err);
//     }
    
// }
// fetchWeatherDetailsAccordingLatApt();

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const errorImgHandler= document.querySelector(".error-container-hai");
//.............initially vairables need..............?

let API_KEY='74b3bdc3a986b712c56b0ef8e07da107';
let CurrTab=userTab;
CurrTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(clickedTab){
    errorImgHandler.classList.remove("active");
    if(clickedTab != CurrTab){
    if(clickedTab != CurrTab){
        CurrTab.classList.remove("current-tab");
        CurrTab=clickedTab;
        clickedTab.classList.add("current-tab");
        // console.log("yha pahuch gya");
    }
     if(!searchForm.classList.contains("active")) {
        //kya search form wala container is invisible, if yes then make it visible
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
        // console.log("yha pahuch gya 222222222222222");
    }
    else{
         //main pehle search wale tab pr tha, ab your weather tab visible karna h 
         searchForm.classList.remove("active");
         userInfoContainer.classList.remove("active");
         //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
         //for coordinates, if we haved saved them there.
         getfromSessionStorage();
        //  console.log("yha pahuch gya nahsifsifh");
    }}
    
}

userTab.addEventListener("click", ()=>{
    switchTab(userTab);
});

searchTab.addEventListener("click", ()=>{
    switchTab(searchTab);
});

// console.log("hisfhiasf");


//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    console.log("latitude->",lat);
    console.log("longitude->",lon);
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}


function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
        alert("Not Found Grant Your Location");
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
// console.log(grantAccessButton);
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    errorImgHandler.classList.remove("active");
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

    try {
        if (response.ok) {
            const data = await response.json();
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
          } else {
            // Handle the case when the API request is not successful.
            // You can access the response status and message like this:
            const status = response.status; // e.g., 404, 500, etc.
            const statusText = response.statusText; // e.g., "Not Found", "Internal Server Error", etc.
            
            // You can handle the error here, e.g., show an error message to the user.
            console.error(`API request failed with status ${status}: ${statusText}`);
            errorImgHandler.classList.add("active");
            loadingScreen.classList.remove("active");
            // loadingScreen.classList.remove("active");
            // let errorImg=document.createElement('img');
            // errorImg.src="./assets/error404.jpeg";
            // const errorContainer = document.getElementById(".error-container");

            // // Append the image to the container
            // errorContainer.appendChild(errorImg);
          }
        //   By checking the response.ok property, you can handle success and error cases accordingly. If the request is unsuccessful,
        //  you can log an error message, display an error to the user, or take any other appropriate action.   
          
          
    }
    catch(err) {
        //hW
    }
}