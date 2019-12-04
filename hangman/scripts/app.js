//http- hypertext transfer protocol
//request-what do we want to do
//response- what was actually done

const puzzleEl = document.querySelector('#hangman')
const guessesEl =  document.querySelector('#guesses')
let game1 





window.addEventListener('keypress', (e) => {
    
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl. textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })


}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game1 = new Hangman(puzzle, 5)
    render()

}

document.querySelector("#reset").addEventListener("click", function(e){
    startGame()
})

startGame()

// getPuzzle("2").then((puzzle)=>{
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCountry("MX").then((country) => { 
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })


//promise chaining 
// getLocation().then((data) => {
//     return getCountry(data.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch ((err) => {console.log(err)})

//fetch returns promise
// fetch('http://puzzle.mead.io/puzzle', {}).then((response)=> {
//     if (response.status === 200) {
//        return response.json()
//     } else {
//         throw new Error('unable to fetch puzzle')
//     }
// }).then((data) => {
//     //gets access to parsed json data 
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })

