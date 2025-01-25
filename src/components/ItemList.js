import { CDN_URL } from '../utils/constant'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {
    // console.log(itemList)
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        // console.log(item)
        dispatch(addItem(item));
        // console.log(item)
    }
    
  return (
    <div>
        <div>{
            items.map((item)=>{
               
                return <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex">
                    
                    <div className='w-9/12'>
                    <div className="py-2">
                    <span className="font-bold">{item?.card?.info?.name} </span>
                    <span className="font-bold">- ₹{item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100} </span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description} </p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <div className='absolute'>
                        <button className="p-2 mx-5 bg-black text-white shadow-lg rounded-lg" onClick={()=>handleAddItem(item)}>Add+</button>
                        </div>
                    <img src={CDN_URL+item.card.info.imageId} className='w-full'/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default ItemList