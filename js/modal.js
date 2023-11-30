const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal_close')
const triggerModal = document.querySelector('#btn-get')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

setTimeout(openModal, 10000)

triggerModal.onclick =()=>openModal()
modalCloseButton.onclick =()=>closeModal()
modal.onclick = (event) => {
   if(event.target === modal) {
    closeModal()
   }
}

const scrollHandler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollHandler);
    }
}

window.addEventListener('scroll', scrollHandler);

//////////////////////////////////////THE END

///post data

const  formElement =  document.querySelector('form')

const postData = async (url,data )=>{
    const response = await fetch(url,{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:data
    })
    return response
}
const bindPostData = (form)=>{
    form.onsubmit= (event) =>{
        event.preventDefault()
        const formData = new FormData(form)
        const obj ={}
        formData.forEach((item,index)=>{
            obj[index] = item
        })
        const json =JSON.stringify(obj)
        postData('server.php', json)
    }
}
bindPostData()

// const formElement = document.querySelector('form')
// const postData = (form) =>{
//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
//         const  request = new XMLHttpRequest()
//         request.open('POST', 'server.php')
//         request.setRequestHeader('Content-type','application/json')
//
//         const  formData = new  FormData(form)
//         const obj ={}
//         formData.forEach((item,index)=>{
//             obj[index] = item
//         })
//        const  json = JSON.stringify(obj)
//         request.send(json)
//
//     })
// }

