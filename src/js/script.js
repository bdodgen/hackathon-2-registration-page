import { Modal } from './Modal'

const buttonSelect = document.querySelector('button')
buttonSelect.addEventListener('click', () => {
    const newModal = new Modal("PRAGUE MARATHON", "2022-05-08", "The Prague Marathon enjoys one of the most beautiful courses in the world. The race winds through the historic city centre, over bridges and along the Vltava River. The race is on Sunday, but the build up starts on Saturday with a weekend of activities, including relay and corporate team marathons.", "http://www.progetto.cz/wp-content/uploads/2018/03/20-prague-half-marathon-2.jpg")
})



const LoadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/36a9d4de/events')
    const data = await response.json();

    console.log(data)
}



LoadData()