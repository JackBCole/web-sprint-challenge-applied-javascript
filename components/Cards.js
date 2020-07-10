// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles)
    const articles = document.querySelector('.cards-container')
    response.data.articles.bootstrap.forEach(article => {
        articles.appendChild(createCard(article))
    })
    response.data.articles.javascript.forEach(article => {
        articles.appendChild(createCard(article))
    })
    response.data.articles.technology.forEach(article => {
        articles.appendChild(createCard(article))
    })
    response.data.articles.jquery.forEach(article => {
        articles.appendChild(createCard(article))
    })
    response.data.articles.node.forEach(article => {
        articles.appendChild(createCard(article))
    })
})
.catch('error', error =>{
    console.log(error)
})

function createCard(articles){
const card = document.createElement('div')
const headline = document.createElement('div')
const author =document.createElement('div')
const imgContainer = document.createElement('div')
const img = document.createElement('img')
const authorName = document.createElement('span')


card.appendChild(headline)
card.appendChild(author)
author.appendChild(imgContainer)
imgContainer.appendChild(img)
author.appendChild(authorName)

card.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
img.classList.add('img-container')

headline.textContent = articles.headline

card.addEventListener('click', function(){
    console.log(headline.textContent)
    })

authorName.textContent =  articles.authorName
img.setAttribute('src', articles.authorPhoto)

return card
}

