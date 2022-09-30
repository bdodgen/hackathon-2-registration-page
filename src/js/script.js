import { Modal } from './Modal.js'

const buttonSelect = document.querySelector('button')
buttonSelect.addEventListener('click', () => {
    const newModal = new Modal()
})



const LoadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/36a9d4de/events')
    const data = await response.json();

    console.log(data)
}

LoadData()