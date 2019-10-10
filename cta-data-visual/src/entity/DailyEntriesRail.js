export default class DailyEntriesRail {
    stationId;
    stationName;
    date;
    dayType;
    rides;

    constructor(e) {
        this.stationId = e.stationId;
        this.stationName = e.stationName;
        this.date = e.date;
        this.dayType = e.dayType;
        this.rides = e.rides;
    }
}
