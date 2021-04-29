const daysOfWeek = [
    /*0*/"Sunday",
    /*1*/"Monday",
    /*2*/"Tuesday",
    /*3*/"Wednesday",
    /*4*/"Thursday",
    /*5*/"Friday",
    /*6*/"Saturday"
];
const weatherDesc = {
    sunny: ["some sun", "some_sun.png"],
    cloudy: ["some clouds", "some_clouds.png"],
    rainy: ["some rain", "some_rain.png"]
}

document.getElementById("currentCity").innerHTML = "San Jose";

var cookie = document.getElementById("cookieAlert");
var today = daysOfWeek[todaysDay()];
if (today == "Thursday"){
    var day3 = "Saturday"
    var day4 = "Sunday"
}else if (today == "Friday"){
    var day3 = "Sunday";
    var day4 = "Monday";
}else if (today == "Saturday"){
    var day3 = "Monday";
    var day4 = "Tuesday";
}else if (today == "Sunday"){
    day3 = "Tuesday";
    day4 = "Wednesday";
}else {
    day3 = daysOfWeek[todaysDay() + 2];
    day4 = daysOfWeek[todaysDay() + 3];
}

var cityWeather = {
    sanJose: [
        /*0*/[weatherDesc.rainy, 85, 64],
        /*1*/[weatherDesc.sunny, 80, 66], 
        /*2*/[weatherDesc.cloudy, 69, 60],
        /*3*/[weatherDesc.sunny, 78, 69],
        /*4*/"San Jose"
    ],
    burbank: [
        /*0*/[weatherDesc.sunny, 94, 65],
        /*1*/[weatherDesc.sunny, 92, 60],
        /*2*/[weatherDesc.cloudy, 78, 55],
        /*3*/[weatherDesc.cloudy, 72, 55],
        /*4*/"Burbank"
    ],
    chicago: [
        /*0*/[weatherDesc.cloudy, 59, 47],
        /*1*/[weatherDesc.sunny, 52, 43],
        /*2*/[weatherDesc.cloudy, 79, 60],
        /*3*/[weatherDesc.cloudy, 78, 58],
        /*4*/"Chicago"
    ],
    dallas: [
        /*0*/[weatherDesc.rainy, 73, 63],
        /*1*/[weatherDesc.rainy, 68, 63],
        /*2*/[weatherDesc.rainy, 72, 65],
        /*3*/[weatherDesc.rainy, 83, 69],
        /*4*/"Dallas"
    ]
}

function cookieMonster(){
    cookie.style.visibility = "hidden"
}

function initialize() {
    document.getElementById("currentCity").innerHTML = cityWeather.sanJose[4];
    document.getElementById("day3Name").innerHTML = day3;
    document.getElementById("day4Name").innerHTML = day4;
}

function todaysDay() {
    let date = new Date();
    let day = date.getDay();
    return day;
}

// function weatherCardChango() {
//     document.getElementById("todayImg").src = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 

//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 

//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 

//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
//     document.getElementById().innerHTML = 
// }



initialize()