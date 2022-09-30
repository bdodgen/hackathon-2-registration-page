export class Modal {
    constructor(name, date, description, image_url) {
        this.name = name
        this.date = date
        this.description = description
        this.image_url = image_url

        const modalSelect = document.querySelector('.modal')

        modalSelect.innerHTML = `
            <div class="modal__content" >
            <span class="modal__close">&times;</span>
            <form>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname">

                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname">

                <label for="email">Email adress:</label>
                <input type="text" id="email" name="email">

                <label for="pnum">Phone number:</label>
                <input type="text" id="pnum" name="pnum">

                <label for="age">I'm old enough to participate</label>
                <input type="checkbox" id="age" name="age">

                <button class="modal__register">Register</button>
            </form>
        </div>
        `
        const newDiv = document.querySelector('.modal__content');
        newDiv.innerHTML += `
           <div class = "cards_modal">
           <title>${name}<title>
           <span>${date}</span>
           <p>${description}</p>
           <img src="${image_url}" alt"">
           </div>
        `
        modalSelect.style.display = "block"
        const closeSelect = document.querySelector('.modal__close')
        modalSelect.style.display = "block"

        closeSelect.addEventListener('click', () => {
            modalSelect.style.display = "none"
        })
        modalSelect.addEventListener('click', (event) => {
            if (event.target == modalSelect) {
                modalSelect.style.display = "none"
            }
        })
    }


    sendForm = async () => {
        let fname = document.getElementByID('fname').value
        let lname = document.getElementByID('lname').value
        let email = document.getElementByID('email').value
        let pnum = document.getElementByID('pnum').value
        let age = document.getElementByID('age').value

        const url = 'https://test-api.codingbootcamp.cz/api/cfb0622e/events/EVENT_ID/registrations'
        const formDataToPass = {
            "fname": `${fname}`,
            "lname": `${lname}`,
            "email": `${email}`,
            "pnum": `${pnum}`,
            "age": `${age}`
        }
        const myResponse = await fetch(url, {
            "method": "POST",
            "body": JSON.stringify(formDataToPass),
            "headers": {
                'Content-Type': 'application/json'
            }
        })
        const myUsableResponse = await myResponse.json()
        console.log(myUsableResponse)
    }
}