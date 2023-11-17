//phone checker

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/
phoneButton.addEventListener('click',() =>{
    if(regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    } else{
        phoneSpan.innerHTML = ' NOT OK'
        phoneSpan.style.color = 'red'
    }
})

//TAB SLIDER
const tabsContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

let currentTab = 0;
const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabsContent = (i = 0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent();
    currentTab = (currentTab + 1) % tabs.length
    showTabsContent(currentTab)
};


hideTabContent()
showTabsContent()
setInterval(switchTab, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                currentTab = i
                showTabsContent(currentTab)
            }
        })
    }
}