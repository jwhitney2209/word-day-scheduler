var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDate);

$('[data-hour-id').each(function(index) {
  // console.log(index + ": " + $(this).attr("id"));
  if (moment().hour() === parseInt($(this).attr("id"))) {
    $(this).addClass('present');
  } else if (moment().hour() > parseInt($(this).attr("id"))) {
    $(this).addClass('past');
  } else if (moment().hour() < parseInt($(this).attr("id"))) {
    $(this).addClass('future');
  }
})

$('.saveBtn').click(function () {
  // console.log($(this).prev().val());
  var text = $(this).prev().val();
  var time = $(this).prev().attr('id');

  localStorage.setItem(time, text)
})

var loadTasks = function () {
  $('#9').text(localStorage.getItem('9'));
  $('#10').text(localStorage.getItem('10'));
  $('#11').text(localStorage.getItem('11'));
  $('#12').text(localStorage.getItem('12'));
  $('#13').text(localStorage.getItem('13'));
  $('#14').text(localStorage.getItem('14'));
  $('#15').text(localStorage.getItem('15'));
  $('#16').text(localStorage.getItem('16'));
  $('#17').text(localStorage.getItem('17'));
};

loadTasks();
