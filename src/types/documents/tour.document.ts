import {Document} from "mongoose"


export interface ITOUR extends Document{
    _id:string,
    tourDestinations:string[],
    tourParticipants:number,
    tourBookingDate:string | any,
    tourBookingPerson:string,
    busId:any
    createdAt?:string,
    updatedAt?:string
}


