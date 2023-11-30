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
    {
        name: 'Медовик',
        recipe: '../Мука 300гр, какао-порошок 2ст ложки, сливочное масло 200гр, яйца 5шт, сахар 150гр, разрыхлитель 1ч.л',
        price:1100,
        photo:'../images/Медовик.jpg'
    },
    {
        name:'Нежный',
        recipe:'яйца 6шт, слив.сыр Маскарпоне 500г, сахар 150г, печенье Савоярди 250гр, кофе экспрессо 300мл, какао-порошок 1-2ст.л',
        price:700,
        photo:'../images/,,,,,.jpg'
    },
    {
        name:'Клубничный',
        recipe: 'Сгущенное молоко 600гр, яйцо 3шт, мука 240гр, разрыхлитель 15гр, творожный сыр 500гр, сливки 33-38% 150гр, сахарная пудра 150гр',
        price:1600,
        photo:'../images/клубничный.jpg'
    },
    {
        name:'Черничный',
        recipe: 'сливочное масло 200гр, сахар 400гр, яйцо 3шт, куфир 400мл, мука 350гр, какао-порошок 30гр, разрыхлитель 10гр, ванильный сахар 15гр',
        price:2250,
        photo:'../images/черничный.jpg'
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
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()
            switch (type) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2);
                    element2.value = (element.value / data.kzt).toFixed(2);
                    break;
                case "usd":
                    targetElement.value = (element.value * data.usd).toFixed(2);
                    element2.value = (element.value * data.kztUsd).toFixed(2);
                    break;
                case "kzt":
                    targetElement.value = (element.value * data.usdKzt).toFixed(2);
                    element2.value = (element.value * data.kzt).toFixed(2);
                    break;
                default:
                    break;
            }
            element.value === "" ? targetElement.value = "" : null
            element.value === "" ? element2.value = "" : null
        }
        catch {
            alert('Извините ошибка сервера')
        }
    }
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

async function switchCard(cardNumber) {
    try {
        const response = await  fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
        const data = await response.json()
        cards.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    }catch{
        alert("Ошибка сервера")
    }

}

switchCard(count)

btnNext.onclick = ()  => {
    count++
    if (count > 200) {
        count = 1;
    }
    switchCard(count)
}

btnPrev.onclick = ()  => {
    count--
    if (count < 1)  {
        count = 200;
    }
    switchCard(count)
}

 async function postAPI(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }catch {
        alert('Ошибка сервера')
    }
 }


//search weather

const citySearchInput = document.querySelector('.cityName'),
    city = document.querySelector('.city'),
    temp = document.querySelector('.temp')

const WEATHER_API ='http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
citySearchInput.oninput= async (event)=> {
    const response = await fetch(`${WEATHER_API}?q=${event.target.value}&appid=${API_KEY}`)
    const data = await response.json()

    city.innerHTML = data?.name ? data?.name : 'Город не найден...'
    temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
}