var containerEl = document.querySelector(".container")

var hourArr = ["9:00AM", 
              "10:00AM", 
              "11:00AM", 
              "12:00PM", 
              "1:00PM", 
              "2:00PM", 
              "3:00PM", 
              "4:00PM", 
              "5:00PM"];

console.log(hourArr);

// current date
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentDate);

// 