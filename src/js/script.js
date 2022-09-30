
import { Card } from "./Card";
import { Modal } from './Modal.js'

// Bri's stuff below here: making all the cards
const eventApiUrl = "https://test-api.codingbootcamp.cz/api/cfb0622e/events";
const createRegistrationApiUrl = "https://test-api.codingbootcamp.cz/api/cfb0622e/events/EVENT_ID/registrations";

const getApiData = async () => {
    const dataFromApi = await fetch(eventApiUrl);
    const data = await dataFromApi.json();

    return data;
};
// loop that will give you an element from the array and create new car for each item in that array.

const initPage = async () => {
    const allEventData = await getApiData();
    const cardsContainer = document.querySelector('.cards-container');

    allEventData.forEach(event => {
        const card = new Card(event);
        card.appendSelfToParent(cardsContainer);
    });
}
initPage();

const featuredCard = document.querySelector('.card');
featuredCard.classList.add('featured-card');


//Aidan's stuff below here
const buttonSelect = document.querySelector('.button')
buttonSelect.addEventListener('click', () => {
    const newModal = new Modal()
})
