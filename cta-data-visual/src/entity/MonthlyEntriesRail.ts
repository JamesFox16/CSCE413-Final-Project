export default class MonthlyEntriesRail {
    stationId: number;
    stationName: string;
    monthBegin: Date;
    averageWeeklyRiders: number;
    averageSaturdayRiders: number;
    averageSundayHolidayRiders: number;
    monthTotal: number;

    constructor(e: any) {
        this.stationId = e.stationId;
        this.stationName = e.stationName;
        this.monthBegin = e.monthBegin;
        this.averageWeeklyRiders = e.averageWeeklyRiders;
        this.averageSaturdayRiders = e.averageSaturdayRiders;
        this.averageSundayHolidayRiders = e.averageSundayHolidayRiders;
        this.monthTotal = e.monthTotal;
    }
}
