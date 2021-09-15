import {Document} from "mongoose"


export interface IBUSS extends Document{
    _id:string,
    bussName:string,
    bussSeats:number,
    bussBookingDates:string[] | any,
    createdAt?:string,
    updatedAt?:string
}


