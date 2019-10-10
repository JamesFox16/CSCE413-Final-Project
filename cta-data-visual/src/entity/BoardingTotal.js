export default class BoardingTotal {
    rideId;
    serviceDate;
    dayType;
    busTotal;
    railTotal;
    totalRides;

    constructor(e) {
        this.rideId = e.rideId;
        this.serviceDate = e.serviceDate;
        this.dayType = e.dayType;
        this.busTotal = e.busTotal;
        this.railTotal = e.railTotal;
        this.totalRides = e.totalRides;
    }
}
