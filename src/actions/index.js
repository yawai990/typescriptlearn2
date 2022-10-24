import * as api from '../api';

export const getItems =()=>async(dispatch)=>{
    const data = await api.getItems();

    console.log(data)
}