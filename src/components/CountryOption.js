const CountryOption = ({country, showPopulation}) => {



    
    return (
        <>
            <p>{country.name.common}</p>

            {showPopulation? 
            <p> country.population </p> 
            : //or 
            <div>
                <button> Higher </button>
                <button> Lower </button>
            </div>}
        </>

    )

}

export default CountryOption