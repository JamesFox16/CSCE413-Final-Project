export default class BoardingTotal {
    rideId: number;
    serviceDate: Date;
    dayType: string;
    busTotal: number;
    railTotal: number;
    totalRides: number;

    constructor(e: any) {
        this.rideId = e.rideId;
        this.serviceDate = e.serviceDate;
        this.dayType = e.dayType;
        this.busTotal = e.busTotal;
        this.railTotal = e.railTotal;
        this.totalRides = e.totalRides;
    }
}
