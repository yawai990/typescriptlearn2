import React,{useEffect, useState} from 'react';
import { Navbar,Cart,Main } from './components';
import { ItemStructure } from './components/interface';
import {useSelector,useDispatch} from 'react-redux';

interface RootState {
  items:{
    items:ItemStructure[],
    cartItems:ItemStructure[]
  }
}

const App:React.FC  = () => {
  const [cart,showCart] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {items,cartItems}= useSelector((state:RootState)=>state.items);


  return (
    <div className='relative'>

      <div>
      <Navbar showCart={showCart} cartItems={cartItems} />
      <Main items={items} />
      </div>
    {
      cart && <Cart cart={cart} showCart={showCart} cartItems={cartItems} />
    }
    
    </div>
  );
}

export default App;
