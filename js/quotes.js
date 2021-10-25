export {getQuotes}

let r
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
function random() {
    return Math.round(0 + Math.random() * (2 - 0))
}

async function getQuotes() {  
    
    let rand = random()

    while (rand == r) {
        rand = random()
    }

    r = rand
    
   console.log(r, rand)
    const quotes = 'data.json'
    const res = await fetch(quotes)
    const data = await res.json()
    console.log(data[rand])
    quote.innerHTML = data[rand].text;
    author.innerHTML = data[rand].author;
  }
  document.querySelector('.change-quote').addEventListener('click', () => {
    getQuotes()
})
  getQuotes()