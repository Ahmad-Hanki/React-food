import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../store/CartContext'
import formating from '../util/formating';
import Buttons from '../UI/Buttons';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';

function Cart() {
    const {items , addItem , deletItem} = useContext(CartContext);
    const cartTotal = items.reduce ((total , item) => {
        return total + (item.quantity * item.price)
    }, 0) 
    const {progress , hideCart , showCheckOut} = useContext(UserProgressContext);


  return (
    <Modal onClose={progress === 'cart' ? () => {hideCart()} : null} open = {progress==='cart'} className='cart'>
        <h2>Your Cart</h2>
        <ul>
            {items.map(item => {
                return (
                    <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onIncrese={()=>{addItem(item)}} onDecrese={() => {deletItem(item.id)}}/>  
                )
            })}
        </ul>
        <p className='cart-total'>Total :{formating.format(cartTotal)} </p>
        <p className='modal-actions'>
            <Buttons onClick = {hideCart} textOnly >Close</Buttons>
           {items.length>0 &&  <Buttons  onClick = {() => showCheckOut()}>Go To CheckOut</Buttons>}
        </p>
    </Modal>
  )
}

export default Cart