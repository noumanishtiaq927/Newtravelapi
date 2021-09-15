import { bussSchema } from "../models/bus.model";
import { tourSchema } from "../models/tour.model"
import { ITOUR } from "../types/documents/tour.document"



export class TourRepository{
    constructor(){}
   
    // saving the tour into the database
    async saveTour(addTour:any , allottedBusses:any){
        addTour['busId'] = <any> allottedBusses;
        for (var i=0; i < allottedBusses.length; i++){
            console.log({allottedBusses})
            var buss = await bussSchema.findById(<any> allottedBusses[i]);
            buss?.bussBookingDates.push(new Date(addTour.tourBookingDate))
            await buss?.save()
        }
    return  (await new tourSchema(addTour).save()).populate('busId')
    }
}