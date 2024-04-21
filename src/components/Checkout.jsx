import React, {useContext, useState} from 'react'
import Modal from '../UI/Modal'
import CartContext from '../store/CartContext'
import Input from '../UI/Input';
import Buttons from '../UI/Buttons';
import UserProgressContext from '../store/UserProgressContext';
import formating from '../util/formating';
function Checkout() {
    const {items} = useContext(CartContext);
    const {hideCheckOut, progress} = useContext(UserProgressContext)
    const totalAmount = items.reduce((total , item) => {
        return total + (item.quantity * item.price);
    },0);

    function handleSubmit (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const costumerData = Object.fromEntries(formData.entries()); ///// very important //////
        
    }
  return (
    <Modal onClose={() => {hideCart()}} open = {progress==='checkout'} >
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {formating.format(totalAmount)}</p>
            <Input label='Full Name' type ='text' id='fullName'/>
            <Input label='E-Mail Adress' type ='email' id='email'/>
            <Input label='Streat' type ='text' id='streat'/>
            <div className='control-row'>
            <Input label='Postal Code' type ='text' id='code'/>
            <Input label='City' type ='text' id='city'/>
            </div>
            <p className='modal-actions'>
                <Buttons type='button' textOnly onClick={()=> {hideCheckOut()}}>Close</Buttons>
                <Buttons type='submit'>Submit Order</Buttons>
            </p>
        </form>
    </Modal>
  )
}

export default Checkout