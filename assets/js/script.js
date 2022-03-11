var hourEl = document.querySelector('.hour');
var containerEl = document.querySelector('.container');

var tasks = [];

// current date
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentDate);
// append current date to page
$("#currentDay").append(currentDate);

var hourArr = [
  {
    momentHour: 9,
    hourText: "9:00AM"
  },
  {
    momentHour: 10,
    hourText: "10:00AM"
  },
  {
    momentHour: 11,
    hourText: "11:00AM"
  },
  {
    momentHour: 12,
    hourText: "12:00PM"
  },
  {
    momentHour: 13,
    hourText: "1:00PM"
  },
  {
    momentHour: 14,
    hourText: "2:00PM"
  },
  {
    momentHour: 15,
    hourText: "3:00PM"
  },
  {
    momentHour: 16,
    hourText: "4:00PM"
  },
  {
    momentHour: 17,
    hourText: "5:00PM"
  }
];

var showSchedule = function () {
  // use for loop to append 9 timeblocks
  for (var i = 0; i < 9; i++) {
  
  // create div container for timeblock
  var timeBlockEl = document.createElement("div")
  timeBlockEl.classList = "row justify-content-center";
  timeBlockEl.setAttribute("id", "timeblock");
  // append to container
  containerEl.appendChild(timeBlockEl);
  
  // create div element for hour
  var hourEl = document.createElement("div")
  hourEl.classList = "col hour";
  hourEl.setAttribute("id", "hour");
  hourEl.textContent = hourArr[i].hourText;

  // textarea element for task
  var descriptionEl = document.createElement("textarea")
  descriptionEl.classList = "col-12 col-md-9 description";
  descriptionEl.setAttribute("id", "task");

  // save button element
  var saveBtnEl = document.createElement("div")
  saveBtnEl.classList = "col saveBtn";
  saveBtnEl.innerHTML = "<i class='fa fa-save'></i>";

  // append each element above to timeBlockEl
  timeBlockEl.appendChild(hourEl);
  timeBlockEl.appendChild(descriptionEl);
  timeBlockEl.appendChild(saveBtnEl);
  }
};

// check current hour
var currentHour = moment().hour();
console.log(currentHour);

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

showSchedule();