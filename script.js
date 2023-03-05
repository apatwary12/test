var today = document.getElementById('currentDay')
today.textContent =dayjs().format('MM/DD/YYYY')
var saveBtns = document.querySelectorAll('.saveBtn')

saveBtns.forEach(function(btn){
  btn.addEventListener('click', function(event){
    // console.log(event.target)
    var hour = this.parentElement.getAttribute('id') 
    console.log(hour)
    console.log(this.previousElementSibling.value)
    localStorage.setItem(hour, this.previousElementSibling.value)
  })
})
var hours = ['hour-9', 'hour-10','hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17']
hours.forEach(function(hour){
  var text = localStorage.getItem(hour)
  var hourEl = document.getElementById(hour).children[1]
  hourEl.value = text

var time = hour.split('-')[1]
  console.log(time)
  var currentTime = dayjs().hour()
  console.log(currentTime)
  if(time < currentTime){
    hourEl.classList.add('past')
  } else if (time == currentTime){
    hourEl.classList.add('present')
  } else {
    hourEl.classList.add('future')
  }
})


