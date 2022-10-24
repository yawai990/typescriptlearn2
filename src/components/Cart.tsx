import React,{useState,useEffect} from 'react';
import { ItemStructure } from './interface';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import {removefromcart,increaseQty,decreaseQty} from '../actions';

interface Props {
  cart:boolean,
  showCart:React.Dispatch<React.SetStateAction<boolean>>,
  cartItems:ItemStructure[]
}
 

const Cart:React.FC<Props> = ({cart,showCart,cartItems}:Props) => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();


  return (
    <div className='w-screen min-h-screen  bg-black/[0.5] flex justify-end items-start fixed top-0'
    >

      <div className='w-1/5 min-h-screen bg-white p-4'>

       <div className='flex mb-2'>
        <h5 className='flex-1 font-semibold'>Your Cart</h5>

        <button onClick={()=>showCart(prev=>!prev)} 
        className='w-6 h-6 flex justify-center items-center bg-white drop-shadow rounded-full text-lg hover:bg-red-500'>
          x</button>
       </div>
        
      <div>
       {
        cartItems.length > 0 ? cartItems?.map((cartItem,ind)=>(
          <div key={ind} className='w-full flex p-1'>

            <div className="image">
              <img src={cartItem.image} alt="" className='w-20 h-20 object-contain' />
            </div>

            <div className='flex-1'>

              <p className='font-semibold'>
                $ {(cartItem.price * cartItem.amount).toFixed(2)}
                </p>

            <div className="m-auto btn-group flex justify-center items-center">
                            <button 
                            onClick={()=>dispatch(decreaseQty(cartItem.id))}
                            className='border text-lg p-1 px-3 rounded-md hover:bg-red-500 hover:text-white' 
                            disabled={cartItem.amount === 0 && true} >
                              -</button>

                            <p className='flex-1 text-center'>{cartItem.amount}</p>
                            
                            <button 
                            onClick={()=>dispatch(increaseQty(cartItem.id))}
                            className='border text-lg p-1 px-3 rounded-md hover:bg-green-500 hover:text-white'>
                              +</button>
              </div>
             <button
             onClick={()=>dispatch(removefromcart(cartItem.id))}             
             className='py-1 text-white hover:bg-red-800 capitalize text-sm mt-2 w-full rounded-full bg-red-600 flex justify-center items-center'>remove item</button>
            </div>
          </div>
        )):<p className='font-semibold'>Your Cart is empty</p>
       }
      </div>

      <div className='w-full border-t border-grey-800 flex pt-2 mt-2'>
        <p className='flex-1 font-semibold'>Total Amount</p>
        <p>$ 0</p>
      </div>
      </div>

      
    </div>
  )
}

export default Cart