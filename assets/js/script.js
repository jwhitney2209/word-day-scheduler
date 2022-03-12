
var hourEl = $('.hour');
var containerEl = $('.container');
var taskEl = $('#task');
var saveBtnEl = $(".saveBtn");

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

  // use for loop to append 9 timeblocks
  for (var i = 0; i < 9; i++) {
    $(".container").html("<div id='timeblock'>");
    $("#timeblock")
      .addClass("row justify-content-center")
      .attr("data-hour-id", hourArr[i].dataId)
      .html(
        "<div id='hour'></div>"
      + "<textarea id='taskText'></textarea>"
      + "<div id='saveBtn'><i class='fa fa-save'></i>");
    $("#hour").addClass("col hour").text(hourArr[i].hourText);
    $("#taskText").attr("class", function(){
      if (hourArr[i].hourId < currentHour) {
        return "past col-12 col-md-9 description";
      } else if (hourArr[i].hourId === currentHour) {
        return "present col-12 col-md-9 description";
      } else if (hourArr[i].hourId > currentHour) {
        return "future col-12 col-md-9 description";
      }
    });
    $("#saveBtn").addClass("col saveBtn").html("<i class='fa fa-save'></i>");
  }
};

var currentHour = moment().hour();

showSchedule();

