var hourEl = document.querySelector('.hour');
var containerEl = document.querySelector('.container');
var taskEl = document.querySelector('#task');
var saveBtnEl = document.querySelector(".saveBtn");

var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDate);


var hourArr = [
  {
    dataId: 1,
    hourId: 9,
    hourText: "9:00AM"
  },
  {
    dataId: 2,
    hourId: 10,
    hourText: "10:00AM"
  },
  {
    dataId: 3,
    hourId: 11,
    hourText: "11:00AM"
  },
  {
    dataId: 4,
    hourId: 12,
    hourText: "12:00PM"
  },
  {
    dataId: 5,
    hourId: 13,
    hourText: "1:00PM"
  },
  {
    dataId: 6,
    hourId: 14,
    hourText: "2:00PM"
  },
  {
    dataId: 7,
    hourId: 15,
    hourText: "3:00PM"
  },
  {
    dataId: 8,
    hourId: 16,
    hourText: "4:00PM"
  },
  {
    dataId: 9,
    hourId: 17,
    hourText: "5:00PM"
  }
];


var showSchedule = function () {
  for (var i = 0; i < 9; i++) {
    
    // create div container for timeblock
    var timeBlockEl = document.createElement("div")
    timeBlockEl.classList = "row justify-content-center";
    timeBlockEl.setAttribute("id", "timeblock");
    
    // create div element for hour
    var hourEl = document.createElement("div")
    hourEl.classList = "col hour";
    hourEl.setAttribute("id", "hour");
    hourEl.textContent = hourArr[i].hourText;

    // textarea element for task
    var descriptionEl = document.createElement("textarea")
    descriptionEl.classList = "col-12 col-md-9 description";
    if (hourArr[i].hourId < currentHour) {
      descriptionEl.setAttribute("class", "past col-12 col-md-9 description");
    } else if (hourArr[i].hourId === currentHour) {
      descriptionEl.setAttribute("class", "present col-12 col-md-9 description");
    } else if (hourArr[i].hourId > currentHour) {
      descriptionEl.setAttribute("class", "future col-12 col-md-9 description");
    };
    descriptionEl.setAttribute("id", "task");
    descriptionEl.setAttribute("data-hour-id", hourArr[i].dataId)

    // save button element
    var saveBtnEl = document.createElement("div")
    saveBtnEl.classList = "col saveBtn";
    saveBtnEl.setAttribute("id", "save");
    saveBtnEl.innerHTML = "<i class='fa fa-save'></i>";
    

    // append each element above to timeBlockEl
    timeBlockEl.appendChild(hourEl);
    timeBlockEl.appendChild(descriptionEl);
    timeBlockEl.appendChild(saveBtnEl);

  }
};

var currentHour = moment().hour();

showSchedule();
