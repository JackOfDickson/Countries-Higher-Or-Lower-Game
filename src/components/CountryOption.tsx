import Country from "../shared/types/country"

type CountryOptionProps = {
    country: Country,
    showPopulation : boolean,
    guess?: Function
}

const CountryOption = ({country, showPopulation, guess} : CountryOptionProps) => {

    let handleClickHigher
    let handleClickLower

    if (guess) {
    handleClickHigher = () => guess("higher")
    handleClickLower = () => guess("lower")
    }
    
    return (
        <>
            <p>{country?.name.common}</p>

            {showPopulation? 
            <p> {country?.population} </p> 
            : //or 
            <div>
                <button onClick={handleClickHigher}> Higher </button>
                <button onClick={handleClickLower}> Lower </button>
            </div>}
        </>

    )

}

export default CountryOption