
let API_key="a8e71c9932b20c4ceb0aed183e6a83bb";

getDataApi =(city)=>{
    const URL="https://api.openweathermap.org/data/2.5/weather";
    const Full_URL=`${URL}?q=${city}&appid=${API_key}&units=metric`;
    // console.log(Full_URL);
    const weatherPromise = fetch(Full_URL);
    return weatherPromise.then((response)=>{
        return response.json();
    })

}
// console.log(getDataApi("Delhi"));
searchCity =() =>{
    const city = document.getElementById("city-input").value;
    getDataApi(city).then((response)=>{
        console.log(response);
        showWeatherData(response);
    }).catch((error)=>{
        console.log(error);
    })
}
showWeatherData=(Data)=>{
    document.getElementById("weather-city").innerText=Data.name;
    document.getElementById("weather-type").innerText=Data.weather[0].main;
    document.getElementById("temp").innerText=Data.main.temp;
    // getImage(Data.weather[0].main);
    // console.log(Data.weather[0].main=='Smoke')
    let css=`https://source.unsplash.com/1920x1920/?weather-${Data.weather[0].main}`;
    document.getElementById("body").style.backgroundImage= `url(${css})`;
}
// getImage= (imagedata)=>{
// //     // let imagehtml= `<img src="https://source.unsplash.com/720x440/?weather-${imagedata}" alt="weather image" id ="Weather-image"></img>`;
// //     // document.getElementById("weather-image").src = `"https://source.unsplash.com/720x440/?weather-${imagedata}"`;
// //     let css=`https://source.unsplash.com/720x440/?weather-${imagedata}`
// //     document.getElementById("weather-image").style.backgroundImage= `url(${css})`;
// //     // document.getElementById("weather-image").src = `"https://source.unsplash.com/720x440/?weather-${imagedata}"`;
// }