import { type } from 'os';
import * as api from '../api';
import { ItemStructure } from '../components/interface';

export const getItems =()=>async(dispatch:any)=>{
    const data = await api.getItems();

    console.log(data)
};

export const addtocart =(item: ItemStructure[])=>async(dispatch:any)=>{
    dispatch({type:'ADD_TO_CART',payload:{...item[0],amount:1}});
};

export const increaseQty =(id:Number | any)=>async(dispatch:any)=>{

       dispatch({type:'INCREASE_ITEM',payload:id})
  };

export const decreaseQty =(id:Number | any)=>async(dispatch:any)=>{

       dispatch({type:'DECREASE_ITEM',payload:id})
  };

export const removefromcart = (id:Number | undefined)=>async(dispatch:any)=>{
    dispatch({type:'REMOVE_ITEM',payload:id})
}