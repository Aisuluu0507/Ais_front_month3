//////////////////////////DZ1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const EMAIL_REGEXP =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

gmailButton.addEventListener('click',()=>{
    if(EMAIL_REGEXP.test(gmailInput.value)){
        gmailSpan.innerHTML ='OK'
        gmailSpan.style.color ='green'
    }else{
        gmailSpan.innerHTML ='ERROR'
        gmailSpan.style.color ='red'
    }
})


//////////////////////////DZ2
const moveChaildBlock  = document.querySelector('.child_block')
let numX =0
let numY =0
const animation = () => {
    if (numX <448 && numY <= 0) {
        numX++
        moveChaildBlock .style.left = `${numX}px`
        setTimeout(animation, 100)
    }else if (numX >=448 && numY < 448) {
        numY++
        moveChaildBlock .style.top = `${numY}px`
        setTimeout(animation, 100)
    }else if (numX > 0 && numY >= 448) {   ////////////////////ПРОДОЛЖЕНИЕ
        numX--
        moveChaildBlock .style.left =`${numX}px`
        setTimeout(animation,100)
    }else if (numX >= 0 && numY > 0) {
        numY--
        moveChaildBlock .style.top =`${numY}px`
        setTimeout(animation,100)
    }
}
animation()
////////////////////////////////////THE END

//////////////////////////СЕКУНДАМЕР 
let secondsS = document.getElementById('secondsS')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

let time = 0

function sec() {
  time++;
  secondsS.textContent = `${time.toString().padStart(1, '0')}`
}

start.addEventListener('click', () => {
  interval = setInterval(sec, 10)
  start.disabled = true
  stop.disabled = false
  reset.disabled = false
})

stop.addEventListener('click', () => {
  clearInterval(interval)
  start.disabled = false
  stop.disabled = true
});
reset.addEventListener('click', () => {
    clearInterval(interval)
    time = 0
    secondsS.textContent = '0';
    start.disabled = false
    stop.disabled = true
    reset.disabled = true
})
//////////////////////////////////////THE END