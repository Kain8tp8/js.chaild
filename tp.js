const addBtn = document.querySelector('#add')
const elements = document.querySelector('#element')
const log = document.querySelector('#name')
const namber = document.querySelector('#namber')

addBtn.onclick = () => {

    let card = document.createElement('div')
    card.classList.add('card')

    let header = document.createElement('div')
    header.classList.add('card-header')

    let body = document.createElement('div')
    body.classList.add('card-body')

    let footer = document.createElement('div')
    footer.classList.add('card-footer')

    let remove = document.createElement('button')
    remove.classList.add('btn', 'btn-danger', 'btn-sm')

    header.innerText = log.value
    body.innerText = namber.value
    remove.innerText = "delat"

    remove.onclick = () => {
        elements.removeChild(card)
    }

    footer.appendChild(remove)

    card.appendChild(header)
    card.appendChild(body)
    card.appendChild(footer)

    elements.appendChild(card)

}















