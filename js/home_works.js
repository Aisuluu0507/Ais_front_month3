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
const block1 = document.querySelector(".parent_block");
const block2 = document.querySelector(".child_block");
let num = 0;

function animation() {
    if (num < 440) {
        num ++;
        block2.style.left = num + "px";
        setTimeout(animation, 100);
    }
}

animation();

//////////////////////////THE END

