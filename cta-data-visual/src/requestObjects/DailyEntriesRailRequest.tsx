export default interface DailyEntriesRailRequest {
    stationId: number;
    stationName: string;
    date: Date;
    dayType: string;
    rides: number;
}