import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearItem } from '../utils/CartSlice'




const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items)
    // console.log(cartItems)
    const dispatch=useDispatch();
    const handleCartClear=()=>{
      dispatch(clearItem());
    }
  return (
    <div className='text-center p-4 m-4'>
    <h1 className=' text-2xl font-bold'>Cart</h1>
    <div className='w-6/12 m-auto '>
      <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleCartClear}> Clear cart</button>
    {cartItems.length===0&&<h1 className='bg-gray-100 font-bold w-auto'>Your Cart is Empty, please add an item into cart</h1>}
     <ItemList items={cartItems}/>
    </div>
    </div>
  )
}

export default Cart