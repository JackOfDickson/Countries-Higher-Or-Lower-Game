const CountryOption = ({country, showPopulation, guess}) => {

    const handleClickHigher = () => guess("higher")
    const handleClickLower = () => guess("lower")

    
    return (
        <>
            <p>{country.name.common}</p>

            {showPopulation? 
            <p> {country.population} </p> 
            : //or 
            <div>
                <button onClick={handleClickHigher}> Higher </button>
                <button onClick={handleClickLower}> Lower </button>
            </div>}
        </>

    )

}

export default CountryOption