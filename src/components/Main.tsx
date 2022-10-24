import React from 'react';
import { ItemStructure } from './interface';
import ItemCard from './itemCard';

interface Props {
  items:ItemStructure[]
}

const Main:React.FC<Props> = ({items}) => {
  return (
    <div>
      <ItemCard items={items} />
    </div>
  )
}

export default Main