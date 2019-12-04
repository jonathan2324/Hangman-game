class Hangman {
    constructor (letters, remainingGuesses) {
        this.letters = letters.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = "Playing"

    } 
    get puzzle () {
        let word = ''
        this.letters.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' '){
                word += letter
            } else{
                word += "*"
            }
            
        })
        
        return word

    }
    makeGuess(guess) {
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.letters.includes(guess)
    
        if (this.status !== "Playing") {
            return
         }
    
        if (isUnique){
            this.guessedLetters.push(guess)
        } 
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses -= 1
        }
    
        this.gameStatus()

    }
    gameStatus() {

        const finished = this.letters.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')


        if (this.remainingGuesses === 0){
            this.status = "Failed"
        } else if (finished){
            this.status = "Finished"
        } else {
            this.status = "Playing"
        }
     }

     get statusMessage () {

        if (this.status === "Playing") {
            return  `Guesses left: ${this.remainingGuesses}`
         }  else if (this.status === "Failed") {
             return `Nice try! The word was "${this.letters.join('')}"`
         } else {
             return `Great work! You guessed the word`
         }
     
     
     }

}










   
