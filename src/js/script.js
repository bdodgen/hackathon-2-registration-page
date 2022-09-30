
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

    allEventData.forEach((event, index) => {
        const card = new Card(event, index);
        card.appendSelfToParent(cardsContainer);
        const buttonSelect = document.querySelector(`.card${index}`)
        buttonSelect.addEventListener('click', () => {
            const newModal = new Modal(card.eventData.name, card.eventData.date, card.eventData.description, card.eventData.img_url, card.eventData.id)
        });

        //card.eventData.name, card.eventData.date, card.eventData.description, card.eventData.img_url, card.eventData.id
    })
}
initPage();

const featuredCard = document.querySelector('.card');
featuredCard.classList.add('featured-card');


    //Aidan's stuff below here
    // const buttonSelect = document.querySelector('.card__event-button')
    // buttonSelect.addEventListener('click', () => {
    //     const newModal = new Modal()
    // })
