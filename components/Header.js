// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const theHeader = document.querySelector('.header-container')
// theHeader.classList.add('.header')
function Header() {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const lambdaTimes = document.createElement('lambda-times')
    const temperature = document.createElement('span')

    header.classList.add('header')
    date.classList.add('.date')
    lambdaTimes.classList.add('h1')
    temperature.classList.add('.temp')

    lambdaTimes.textContent = 'Lambda Times'
    date.textContent ='MARCH 28, 2020'
    temperature.textContent = '98 degrees'

    theHeader.appendChild(header)
    header.appendChild(date)
    header.appendChild(lambdaTimes)
    header.appendChild(temperature)

    return header
}

console.log(Header())