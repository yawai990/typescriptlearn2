import React from 'react';
import { ItemStructure } from './interface';
import ItemCard from './itemCard';

interface Props {
  items:ItemStructure[],
  cartItems:ItemStructure[],
}

const Main:React.FC<Props> = ({items,cartItems}) => {
  return (
    <div>
      <ItemCard items={items} cartItems={cartItems} />
    </div>
  )
}

export default Main