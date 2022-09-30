export class Card {
  constructor(eventData, isFeatured) {
    this.eventData = eventData
    this.cardDiv = null
    this.isFeatured = isFeatured ?? false
    if (isFeatured === true) {
      this.buttonText = 'REGISTER'
    } else {
      this.buttonText = 'MORE'
    }
    this.prepareOwnElement();
  }

  prepareOwnElement = () => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("cards-container__card")
    cardDiv.classList.add("card")
    cardDiv.innerHTML = `
      <img src="${this.eventData.image_url}" alt="image of ${this.eventData.name}">
      <h2 class="card__event-name">${this.eventData.name}</h2>
      <h3 class="card__event-date">${this.eventData.date}</>
      <p class="card__event-description">${this.eventData.description}</p>
      <button class="card__event-button">${this.buttonText}</button>
    `
    // const textRatingElement = element.querySelector(".rating__value")
    // const stars = element.querySelectorAll(".rating__star")

    this.cardDiv = cardDiv
  }

  appendSelfToParent = (selector) => {
    const parent = selector;
    parent.appendChild(this.cardDiv)
  }
}