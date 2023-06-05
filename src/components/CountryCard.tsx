import styled from "styled-components"
import Country from "../shared/types/country"

type CountryCardProps = {
    country: Country,
    showPopulation : boolean,
    guess?: Function
}

const CountryCardDiv= styled.div<{country: Country}>`
    /* background-image:url(${(props) => props.country.flags.png});
    background-size: auto;
    height: 200px;
    width: 300px;
    background-repeat: no-repeat;
    background-position: center; */
    background-color: #5492ff;
    border: 2px solid black;
    border-radius: 30px;
    &>p {
        /* color: red; */
        
    }
    &>img{
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        height: 200px;
        width: 300px;
    }
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
            <img src={country.flags.png}/> 

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