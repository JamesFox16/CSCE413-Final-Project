export default class DailyEntriesRail {
    stationId: number;
    stationName: string;
    date: Date;
    dayType: string;
    rides: number;

    constructor(e: any) {
        this.stationId = e.stationId;
        this.stationName = e.stationName;
        this.date = e.date;
        this.dayType = e.dayType;
        this.rides = e.rides;
    }
}
