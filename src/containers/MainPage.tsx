import { useState, useEffect } from "react"
import CountryOption from "../components/CountryOption"
import Country from "../shared/types/country"


const MainPage = () => {

    
    const [countries, setCountries] = useState<Array<Country>>([])
    const [countriesQuestionPool, setCountriesQuestionPool] = useState<Array<Country>>([])
    const [option1Country, setOption1Country] = useState<Country | null>(null)
    const [option2Country, setOption2Country] = useState<Country | null>(null)
    const [revealOption2CountryPopulation, setRevealCountry2Population] = useState<boolean>(false)
    const [userScore, setUserScore] = useState<number>(0)


    useEffect(() => {
        fetchCountries()
    }, [])

    const fetchCountries = function(){
        fetch("/data/countries.json")
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
    const getRandomCountryAndRemoveFromCountries = (countries: Array<Country>) => {
        const indexSelector = Math.floor(Math.random() * countries.length)
        //splice will return an ARRAY of removed items hence why we have to access the index to get the one country we want
        const selectedCountry = countries.splice(indexSelector, 1)[0]
        return(selectedCountry)
    }


    //function that takes in a string "higher" or "lower" then compares it to the other country to see if it's higher or lower
    const guessHigherOrLower = (option : string) => {
        setRevealCountry2Population(true)
        console.log("Option was", option)
        if (option2Country?.population == undefined || option1Country?.population == undefined){
            return
        }
        if ( (option2Country?.population > option1Country?.population && option === "higher") || (option2Country.population < option1Country.population && option === "lower") ) {
            let newScore = userScore + 1
            setUserScore(newScore)
            console.log("Correct!")
        }
    }


    return (
        <>
            <h1>Time to play higher or lower!</h1>

            <button onClick={startGame}>Start Game!</button>

            { option1Country? <CountryOption country={option1Country} showPopulation={true}/>: null} 
            { option2Country? <CountryOption country={option2Country} showPopulation={revealOption2CountryPopulation} guess={guessHigherOrLower} />: null}
        </>
    )

}

export default MainPage