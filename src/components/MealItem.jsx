import React from 'react'
import formating from '../util/formating'
import Buttons from '../UI/Buttons'
import { useContext } from 'react'
import CartContext from '../store/CartContext'
function MealItem({meal}) {
    const {addItem} = useContext(CartContext);

    function addHandler () {
        addItem(meal);
    }
  return (
    <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
            <div>
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>{formating.format(meal.price)}</p>
                <p className='meal-item-description'>{meal.descriptiopn}</p>
            </div>
            <p className='meal-item-action'>
                <Buttons onClick = {addHandler}>
                    +Add to cart
                </Buttons >
            </p>
        </article>
    </li>
  )
}

export default MealItem