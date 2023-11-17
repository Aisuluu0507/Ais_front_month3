////madal
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

