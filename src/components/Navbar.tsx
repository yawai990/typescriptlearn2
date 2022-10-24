import React from 'react';
import {BsCart2} from 'react-icons/bs';
import { ItemStructure } from './interface';

type Props = {
  showCart: React.Dispatch<React.SetStateAction<boolean>>,
  cartItems:ItemStructure[]
}

const Navbar:React.FC<Props> = ({showCart,cartItems}:Props) => {
  return (
    <nav className='bg-white drop-shadow p-2 grid grid-cols-12 flex justify-center items-center'>

      <div className='col-span-4'>
        <h6>Shop Name</h6>
      </div>

      <div className='border rounded-md overflow-hidden col-start-6 col-end-9 flex justify-center items-center'>
          <input type="text" className='flex-1 outline-none border-none bg-transparent p-1' />
          <button className='bg-blue-600 p-1 text-white'>Search</button>
      </div>

      <div className='col-start--12 col-end-12 flex justify-end items-center'>
        <div className='relative w-8 h-8 flex justify-center items-center'>

          <button onClick={()=>showCart(prev=>!prev)}>
          <p className='text-xl'><BsCart2 /></p>
          <div className='absolute -top-2 -right-3 w-6 h-6 bg-white drop-shadow flex justify-center items-center rounded-full'>
            <span>{cartItems.length}</span>
          </div>
          </button>

        </div>
      </div>

    </nav>
  )
}

export default Navbar