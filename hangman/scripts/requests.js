const getPuzzle = async (wordCount) => {
    //return because get puzzle expects a promise to come back
    //fetch automatically creates a promise
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error ("Unable to get puzzle")
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return country = data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error ("Unable to fetch data ")
    }
}

const getLocation = async () => {
    const response = await  fetch('https://ipinfo.io/json?token=898811f65c121f')

    if (response.status === 200) {
        const data = await response.json()
        return data 
    } else {
        throw new Error("Unable to fetch data")
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country



}
    

// new Promise ((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

 

//     countryRequest.addEventListener('readystatechange',function(e){
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
            
        
//         } else if (e.target.readyState === 4) {
//             reject("Unable to fetch data")
//         }
        
//     })

//     countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
//     countryRequest.send()
// })