
var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDate);



$('[data-hour-id').each(function(index) {
  console.log(index + ": " + $(this).attr("id"));
  if (moment().hour() === parseInt($(this).attr("id"))) {
    $(this).parent().addClass('present');
  } else if (moment().hour() > parseInt($(this).attr("id"))) {
    $(this).parent().addClass('past');
  } else if (moment().hour() < parseInt($(this).attr("id"))) {
    $(this).parent().addClass('future');
  }
})


