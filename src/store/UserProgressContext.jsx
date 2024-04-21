import { createContext, useState } from "react";

import React from 'react'

const UserProgressContext = createContext({
    progress : '',// cart , checkout
    showCart: () => {} ,
    hideCart : () => {},
    showCheckOut : () => {},
    hideCheckOut: () => {}
 })

export default UserProgressContext

export function UserProgressContextProvider ({children}) {

    const [userProgress , setUserProgress] = useState('');

    function showCart () {
        setUserProgress('cart')
    }
 
    function hideCart () {
        setUserProgress('')
    }
    function showCheckOut () {
        setUserProgress('checkout')
    }
 
    function hideCheckOut () {
        setUserProgress('')
    }

    const userProgressValue = {
        showCart,
        hideCart,
        showCheckOut,
        hideCheckOut,
        progress : userProgress
    }
    return <UserProgressContext.Provider value={userProgressValue}>
        {children}
    </UserProgressContext.Provider>
}