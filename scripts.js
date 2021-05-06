let countdown;
var audio = new Audio('destro.mp3')
var three = new Audio("3.ogg")
var two= new Audio("2.ogg")
var one= new Audio("1.ogg")
const timerDisplay = document.querySelector('.display__time-left')
const stoperDisplay = document.querySelector('.display__time-total')
const buttons = document.querySelectorAll('[data-time]')
/*countdown timer*/
function timer(seconds) {
    clearInterval(countdown)
/*set current time, and selected time*/
    const now = Date.now()
    const then = now + seconds*1000
/*run once at start*/
    displayTimeLeft(seconds)
    
    countdown = setInterval(() =>{
    const secondsLeft = Math.round((then - Date.now())/1000)
/*countdown for music effects*/
    if(secondsLeft == 3)
    three.play()
    else if(secondsLeft == 2)
    two.play()
    else if(secondsLeft == 1)
    one.play()
    else if(secondsLeft ==0)
    audio.play()
/*stop interval*/
    else if(secondsLeft <0) {
        clearInterval(countdown)
        return
    }

    displayTimeLeft(secondsLeft)
    }, 1000)}

   /*function for display*/
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainderSeconds = seconds % 60
        const display = `${minutes < 60 ? "0" : '' }${minutes}:${remainderSeconds < 10 ? "0" : '' }${remainderSeconds}`;   
        document.title = display
        timerDisplay.textContent = display
    }

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds)
}
buttons.forEach(button => button.addEventListener('click', startTimer))


/*stoper*/ 
var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;


      
function toggleTime(){
if(!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
} else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;

  } else {
    startTimer();
  }
}




function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  stoperDisplay.innerHTML = hours + ':' + minutes + ':' + seconds /* + ':' + milliseconds */;
}





/*workout list*/
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".training");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const weight = this.querySelector("[name=weight]").value;
  const reps = this.querySelector("[name=reps]").value;
  const item = {
    text,
    weight,
    reps,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
  window.location.reload();
}

function populateList(workouts = [], workoutsList) {
  workoutsList.innerHTML = workouts
    .map((workout, i) => {
      return `

      <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        workout.done ? "checked" : ""
      }/>

<label for="item${i}">${workout.text} ${workout.weight}kg x${workout.reps}</label
</li>
`;
    })
    .join("");
}


function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);


/*changes array of objects into array of strings */
var finalArray = items.flatMap(obj => Array.from(
  { length: +obj.reps }, 
  () => `${obj.text} ${obj.weight}`
))


/*display current workout*/

count = 0
function aktualneCwiczenie(){
if (finalArray.length > 0) {
    document.getElementById("current_workout").innerHTML =
    finalArray[count];
    count++;
    if (count == finalArray.length) count = 0}
  else{
    return "Dodaj Ćwiczenie"
  }
}


