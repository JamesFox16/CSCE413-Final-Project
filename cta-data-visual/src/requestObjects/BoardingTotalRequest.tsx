export default interface BoardingTotalRequest {
    rideId: number;
    serviceDate: Date;
    dayType: string;
    busTotal: number;
    railTotal: number;
    totalRides: number;
}