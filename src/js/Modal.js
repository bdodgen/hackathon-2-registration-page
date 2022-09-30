export class Modal {
    constructor(name, date, description, image_url) {
        this.name = name
        this.date = date
        this.description = description
        this.image_url = image_url

        const modalSelect = document.querySelector('.modal')
        modalSelect.style.display = "block"
        
        const newDiv = document.querySelector('.modal__content');
        newDiv.innerHTML += `
           <div class = "cards_modal">
           <title>${name}<title>
           <span>${date}</span>
           <p>${description}</p>
           <img src="${image_url}" alt"">
           </div>
        `
    }

    eventRegister() {
        // const modalSelect = document.querySelector('.modal')
        const closeSelect = document.querySelector('.modal__close')[0]
        closeSelect.addEventListener('click', () => {
            modalSelect.style.display = "none"
        })
        window.addEventListener('click', () => {
            modalSelect.style.display = "none"
        })
    }
    
}

