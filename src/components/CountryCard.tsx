import Country from "../shared/types/country"

type CountryCardProps = {
    country: Country,
    showPopulation : boolean,
    guess?: Function
}

const CountryOption = ({country, showPopulation, guess} : CountryCardProps) => {

    let handleClickHigher
    let handleClickLower

    if (guess) {
    handleClickHigher = () => guess("higher")
    handleClickLower = () => guess("lower")
    }
    
    return (
        <div>
            <p>{country?.name.common}</p>

            {showPopulation? 
            <p> {country?.population.toLocaleString()} </p> 
            : //or 
            <div>
                <button onClick={handleClickHigher}> Higher </button>
                <button onClick={handleClickLower}> Lower </button>
            </div>}
        </div>

    )

}

export default CountryOption