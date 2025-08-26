const element = document.querySelector('.rec') //rectangle
const button = document.querySelector('.button')
const frame = document.querySelector('.frame')
const clrbutton = document.getElementById("clrbutton")
const musicbutton = document.getElementById("musicbutton")
const music = document.getElementById('music')
let started = false;
let isDown = true; //bool to check
button.addEventListener('click', () => { //function
    //gets current top position
    let currentTop = parseInt(window.getComputedStyle(element).top);
    if (isDown == false){ //checks bool
    element.style.top = (currentTop + 180) + 'px'; //moves down
    isDown = true;
    } else {
        element.style.top = (currentTop - 180) + 'px'; //moves up
        isDown = false;
    }
});
clrbutton.addEventListener("click", () => {
    frame.classList.toggle("dark");
})

musicbutton.addEventListener("click", () => {
    
    if (!started) {
        music.volume = 0.35;
        music.play().then(() => {
          console.log("Music started");
          started = true;
          musicbutton.classList.add("active");
        }).catch(err => {
          console.error("Playback error:", err);
        });
      } else {
        music.muted = !music.muted;
        musicbutton.classList.toggle("active");
      }
})

function updateHour(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('hour').textContent = hours+':'+min;
}

setInterval(updateHour,1000)
updateHour();