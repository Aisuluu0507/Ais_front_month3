//phone checker

// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneSpan = document.querySelector('#phone_result')
//
// const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/
// phoneButton.addEventListener('click',() =>{
//     if(regExp.test(phoneInput.value)){
//         phoneSpan.innerHTML = 'OK'
//         phoneSpan.style.color = 'green'
//     } else{
//         phoneSpan.innerHTML = ' NOT OK'
//         phoneSpan.style.color = 'red'
//     }
// })

//TAB SLIDER

const cakesBlock =document.querySelector('.cakes')

const cakes =[
    {
        name: ' Шоколадный',
        recipe: '../Мука 300гр, какао-порошок 2ст ложки, сливочное масло 200гр, яйца 5шт, сахар 150гр, разрыхлитель 1ч.л',
        price:1500,
        photo:'../images/шоколадный торт.jpg'
    },
    {
        name:'Тирамису',
        recipe:'яйца 6шт, слив.сыр Маскарпоне 500г, сахар 150г, печенье Савоярди 250гр, кофе экспрессо 300мл, какао-порошок 1-2ст.л',
        price:700,
        photo:'../images/тирамису.jpg'
    },
    {
        name:'Молочная девочка',
        recipe: 'Сгущенное молоко 600гр, яйцо 3шт, мука 240гр, разрыхлитель 15гр, творожный сыр 500гр, сливки 33-38% 150гр, сахарная пудра 150гр',
        price:1600,
        photo:'../images/молочная девочка.jpg'
    },
    {
        name:'Сникерс',
        recipe: 'сливочное масло 200гр, сахар 400гр, яйцо 3шт, куфир 400мл, мука 350гр, какао-порошок 30гр, разрыхлитель 10гр, ванильный сахар 15гр',
        price:2250,
        photo:'../images/красный бархат.jpg'
    },
]

cakes.forEach((cake) => {
    const cakeBlock = document.createElement('div')
    cakeBlock.setAttribute('class','cakeCard')
    cakeBlock.innerHTML =`
    <img src="${cake.photo ? cake.photo:defaultUserPhoto}" alt="img">
    <h1>Name:${cake.name}</h1>
    <span>Recipe:${cake.recipe}</span>
    <p>Price:${cake.price}</p>
    `
    cakesBlock.append(cakeBlock)

})

///converter



const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const kztInput = document.querySelector('#kzt')

const converter = (element, targetElement, element2, type) => {
    element.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const changes = JSON.parse(request.response)
            switch (type) {
                case 'som':
                    targetElement.value = (element.value / changes.usd).toFixed(2);
                    element2.value = (element.value / changes.kzt).toFixed(2);
                    break;
                case "usd":
                    targetElement.value = (element.value * changes.usd).toFixed(2);
                    element2.value = (element.value * changes.kztUsd).toFixed(2);
                    break;
                case "kzt":
                    targetElement.value = (element.value * changes.usdKzt).toFixed(2);
                    element2.value = (element.value * changes.kzt).toFixed(2);
                    break;
                default:
                    break;
            }
            element.value === "" ? targetElement.value = "" : null
            element.value === "" ? element2.value = "" : null
        }
    })
}



converter(somInput, usdInput, kztInput, 'som')
converter(usdInput, somInput, kztInput, 'usd')
converter(kztInput, usdInput, somInput, 'kzt')

////card switcher
const cards = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

const card = document.getElementById('card');
let count = 1;

function switch_card(cardNumber) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
        .then(response => response.json())
        .then(data => {
            cards.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
}

switch_card(count)

btnNext.onclick = ()  => {
    count++
    if (count > 200) {
    count = 1;
    }
    switch_card(count)
}

btnPrev.onclick = ()  => {
    count--
    if (count < 1)  {
    count = 200;
    }
    switch_card(count)
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((data)=> console.log(data))



