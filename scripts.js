let countdown;
var audio = new Audio('destro.mp3')
var three = new Audio("3.ogg")
var two= new Audio("2.ogg")
var one= new Audio("1.ogg")
const timerDisplay = document.querySelector('.display__time-left')
const stoperDisplay = document.querySelector('.display__time-total')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    clearInterval(countdown)

    const now = Date.now()
    const then = now + seconds*1000
    displayTimeLeft(seconds)
    
    countdown = setInterval(() =>{
    const secondsLeft = Math.round((then - Date.now())/1000)
    if(secondsLeft == 3)
    three.play()
    else if(secondsLeft == 2)
    two.play()
    else if(secondsLeft == 1)
    one.play()
    else if(secondsLeft ==0)
    audio.play()
    else if(secondsLeft <0) {
        clearInterval(countdown)
        return
    }
    displayTimeLeft(secondsLeft)
    }, 1000)}

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
/*       function resetTimer(){
        clearInterval(tInterval);
        savedTime = 0;
        difference = 0;
        paused = 0;
        running = 0;
      
      
      } */



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



var lista_cwiczen = ["martwy ciąg, 40kg, powtórzeń 7","martwy ciąg, 40kg, powtórzeń 7","martwy ciąg, 40kg, powtórzeń 7",
 "klatka, 16kg x2, powtórzeń 12","klatka, 16kg x2, powtórzeń 12","klatka, 16kg x2, powtórzeń 12",
  "Rowsy, 16kg, powtórzeń 8","Rowsy, 16kg, powtórzeń 8","Rowsy, 16kg, powtórzeń 8",
"barki, 11kg, powtórzeń 10", "barki, 11kg, powtórzeń 10", "barki, 11kg, powtórzeń 10", "barki, 11kg, powtórzeń 10",
"bic, 11kg, powtórzen 12", "bic, 11kg, powtórzen 12", "bic, 11kg, powtórzen 12",
"plank, 60s", "plank, 60s", "plank, 60s"
]
count = 0

function aktualneCwiczenie(){
    document.getElementById("current_workout").innerHTML =
    lista_cwiczen[count];
    count++;
    if (count == lista_cwiczen.length) count = 0
}


