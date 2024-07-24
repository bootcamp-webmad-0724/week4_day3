import { useState } from "react"
import drinksData from "../../data/drinksData"

const DrinksList = () => {

    const [drinks, setDrinks] = useState(drinksData)

    return (
        <div className="DrinksList">
            {
                drinks.map((eachDrink, idx) => {
                    return (
                        <h1 key={idx}>{eachDrink}</h1>
                    )
                })
            }
        </div>
    )
}

export default DrinksList