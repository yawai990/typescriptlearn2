import React,{useState} from 'react';
import {ItemStructure} from './interface';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store'
import {addtocart} from '../actions';

interface Props{
    items:ItemStructure[],
    cartItems:ItemStructure[],
}

const ItemCard:React.FC<Props> = ({items,cartItems}:Props) => {   
    const [err,setErr] = useState<Number | undefined>();
    const useAppDispatch: () => AppDispatch = useDispatch;
    const dispatch = useAppDispatch();

    const additemtocart = (id:Number | undefined)=>{
        //check the id in already in cart
        const filter = cartItems.filter(item=>item.id === id);
        if(filter.length > 0){
            setErr(id)
        }else{
            const filter = items.filter(item=>item.id === id);
            dispatch(addtocart(filter))
        }
    };
      
    return (
   <div className="card-container p-2 mt-3 grid grid-cols-12 gap-2">
    {
        items?.map((item,ind)=> (
                <div className="bg-white rounded-md drop-shadow-lg xs:col-span-12 sm:col-span-6 md:col-span-3 pb-3" key={ind}>

                    <div>
                        <img src={item.image} alt="" className='w-full h-52 object-contain' />
                    </div>

                    <div className="w-3/5 m-auto my-2 font-semibold">
                    <p>{item.title}</p>
                    </div>

                    <div className="w-3/5 m-auto my-2 text-blue-500 font-semibold">
                    <p>${item.price}</p>
                    </div>

                        <div className="w-3/5 m-auto btn-group flex justify-center items-center">
                            <button className='border text-lg p-1 px-3 rounded-md hover:bg-red-500 hover:text-white'>-</button>
                            <p className='flex-1 text-center'>1</p>
                            <button className='border text-lg p-1 px-3 rounded-md hover:bg-green-500 hover:text-white'>+</button>
                        </div>

                        <div className='w-3/5 m-auto mt-3'>
                            <button onClick={()=>additemtocart(item.id)}
                            className='w-full py-2 bg-blue-500 rounded-md hover:bg-blue-600 hover:drop-shadow-lg text-white'
                            >Add To Card</button>

                            {
                                item.id === err && <p style={{fontSize:'10px'}} className='text-red-700 mt-2'>This items already in the cart</p>
                            }
                        </div>
                    
                </div>
            )
        )
    }
   </div>
  )
}

export default ItemCard