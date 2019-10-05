export default interface MonthlyEntriesRailRequest {
    stationId: number;
    stationName: string;
    monthBegin: Date;
    averageWeeklyRiders: number;
    averageSaturdayRiders: number;
    averageSundayHolidayRiders: number;
    monthTotal: number;
}
