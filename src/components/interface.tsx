export interface ItemStructure {
        id?:Number,
        title?:String,
        price?:Number | any,
        // in typescript image can not be primitive type,if type String will have error
        image?:any,
        description?:String,
        category?:String,
        amount?:Number | any,
        rating?:{
            rate: number;
            count: number;
        };
        }
