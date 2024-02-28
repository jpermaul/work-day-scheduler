
var now = dayjs().format('MMMM D YYYY, h:mmA');
var time = dayjs().format('HH');
var timeBlocks = document.querySelectorAll('.row');
var inputField = document.querySelectorAll('.description')

//current time displayed
$('#currentDay').text(now);

for (let i = 0; i < timeBlocks.length; i++) {
//div id is the hour, substring subtracts everything before 5.
  if (timeBlocks[i].id.substring(5) == time) {
//If var time is less than time in div id, then id "future" is added to div, and so on.
    timeBlocks[i].classList.add('present')
  }
  else if (timeBlocks[i].id.substring(5) > time) {
    timeBlocks[i].classList.add('future')
  }
  else { timeBlocks[i].classList.add('past') }
}
//looping through timeblocks, retrieving and displaying local stored items
for (let i = 0; i < timeBlocks.length; i++) {
  let eventsCache = localStorage.getItem(timeBlocks[i].id)
  if (eventsCache) {
    inputField[i].value = eventsCache;
  }
}
//click event for button, saves input to local storage
$('.saveBtn').on('click', function () {
  localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.col-8').val())
  console.log($(this).parent().attr('id'))
})






