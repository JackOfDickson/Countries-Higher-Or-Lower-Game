import { useState, useEffect } from "react"
import CountryOption from "../components/CountryOption"


const MainPage = () => {

    const [countries, setCountries] = useState([])
    const [countriesQuestionPool, setCountriesQuestionPool] = useState([])
    const [option1Country, setOption1Country] = useState(null)
    const [option2Country, setOption2Country] = useState(null)
    const [revealOption2CountryPopulation, setRevealCountry2Population] = useState(false)
    const [userScore, setUserScore] = useState(0)


    useEffect(() => {
        fetchCountries()
    }, [])

    const fetchCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    //function startGame which begins the game and generates two countries to be in option 1 and option 2
    const startGame = () => {
        const copyOfCountries = countries

        const generatedCountry1 = getRandomCountryAndRemoveFromCountries(copyOfCountries)
        const generatedCountry2 = getRandomCountryAndRemoveFromCountries(copyOfCountries)

        setOption1Country(generatedCountry1)
        setOption2Country(generatedCountry2)
        setCountriesQuestionPool(copyOfCountries)


    }

    //function that returns a random country from the array and removes it from the array
    const getRandomCountryAndRemoveFromCountries = (countries) => {
        const indexSelector = Math.floor(Math.random() * countries.length)
        //splice will return an ARRAY of removed items hence why we have to access the index to get the one country we want
        const selectedCountry = countries.splice(indexSelector, 1)[0]
        return(selectedCountry)
    }


    //function that takes in a string "higher" or "lower" then compares it to the other country to see if it's higher or lower
    const guessHigherOrLower = (option) => {
        setRevealCountry2Population(true)
        if ( (option2Country.population > option1Country.population && option === "higher") || (option2Country.population < option1Country.population && option === "higher") ) {
            let newScore = userScore + 1
            setUserScore(newScore)
        }
    }


    console.log(option1Country)

    return (
        <>
            <h1>Time to play higher or lower!</h1>

            <button onClick={startGame}>Start Game!</button>

            { option1Country? <CountryOption country={option1Country} showPopulation={true}/>: null} 
            { option2Country? <CountryOption country={option2Country} showPopulation={revealOption2CountryPopulation}/>: null}
        </>
    )

}

export default MainPage