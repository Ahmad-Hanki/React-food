import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  deletItem: (id) => {},
});
//........................................................................................................................................................................

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items]; /////

    if (existingIndex > -1) {
      // if it false it will return -1

      const updatedItem = {
        ...state.items[existingIndex],
        quantity: state.items[existingIndex].quantity + 1,
      };
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };


  } else if (action.type === "REMOVE_ITEM") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingIndex , 1)
    }
    else {
        const updatedItem = {...existingCartItem , quantity : existingCartItem.quantity -1};
        updatedItems[existingIndex] = updatedItem;
    }
    return {...state , items: updatedItems}
  }
}

export function CartContextProvider({ children }) {
  const [cart , dispashCartAction] = useReducer(cartReducer, { items: [] });

  function addItemHandler (item) {
    dispashCartAction({
        type : 'ADD_ITEM',
        item : item,
    })
  }

  function removeItemHandler (id) {
    dispashCartAction({
        type : 'REMOVE_ITEM',
        id : id,
    })
  }

  const cartContextValue = {
    items : cart.items,
    addItem : addItemHandler ,
    deletItem : removeItemHandler
  }


  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}

export default CartContext;
