import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Buttons from '../UI/Buttons'
import CartContext from '../store/CartContext'

import UserProgressContext from '../store/UserProgressContext'
function Header() {
    const {items} = useContext(CartContext);
    const {showCart} = useContext(UserProgressContext)
    const totalItems = items.reduce((total , currItem) => {
        return total + currItem.quantity;
    }, 0);

    function handleShowCart() {
        showCart();
    }
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt='logo'/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Buttons onClick = {handleShowCart} textOnly={true}>
                items : ({totalItems}) 
            </Buttons>
        </nav>
    </header>
  )
}

export default Header