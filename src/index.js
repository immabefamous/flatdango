// Your code here
let posterImg = document.getElementById('poster')
let titleName = document.getElementById('title')
let filmlist = document.getElementById('films')
let runTime = document.getElementById('runtime')
let showTime = document.getElementById('showtime')
let availableTickets = document.getElementById('ticket-num');
let filmInfo = document.getElementById('film-info')
let button = document.getElementById('buy-ticket')

const runCode = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
    res.forEach((element) => {
        let item = document.createElement('button')
        item.innerHTML = element.title
        item.addEventListener('click', () => {
        // add posters
        posterImg.setAttribute('src', element.poster)
        posterImg.setAttribute('alt', element.title)
        // adding movie title
        titleName.innerHTML = element.title
        filmInfo.innerHTML = element.description
        runTime.innerHTML = element.runtime + 'min'
        availableTickets.innerHTML = element.capacity - element.tickets_sold
        showTime.innerHTML = element.showtime
        //add movie titles to list

        button.addEventListener('click', () => {
            availableTickets= --availableTickets
        })
        filmlist.appendChild(item)
    })
    
    })
    
}
runCode();