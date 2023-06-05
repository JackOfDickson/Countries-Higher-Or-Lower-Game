import styled from "styled-components"
import Country from "../shared/types/country"

type CountryCardProps = {
    country: Country,
    showPopulation : boolean,
    guess?: Function
}

const CountryCardDiv= styled.div<{country: Country}> `
    background-image:url(${(props) => props.country.flags.png});
    background-size: auto;
    height: 200px;
    width: 300px;
    background-repeat: no-repeat;
    background-position: center;
    `

const CountryOption = ({country, showPopulation, guess} : CountryCardProps) => {

    let handleClickHigher
    let handleClickLower

    if (guess) {
    handleClickHigher = () => guess("higher")
    handleClickLower = () => guess("lower")
    }
    
    return (
        <CountryCardDiv country={country}>
            <p>{country?.name.common}</p>

            {showPopulation? 
            <p> {country?.population.toLocaleString()} </p> 
            : //or 
            <div>
                <button onClick={handleClickHigher}> Higher </button>
                <button onClick={handleClickLower}> Lower </button>
            </div>}
        </CountryCardDiv>

    )

}

export default CountryOption