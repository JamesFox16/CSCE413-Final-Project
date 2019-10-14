export default class MonthlyEntriesRail {
  stationId;
  stationName;
  monthBegin;
  averageWeeklyRiders;
  averageSaturdayRiders;
  averageSundayHolidayRiders;
  monthTotal;

  constructor(e) {
    this.stationId = e.stationId;
    this.stationName = e.stationName;
    this.monthBegin = e.monthBegin;
    this.averageWeeklyRiders = e.averageWeeklyRiders;
    this.averageSaturdayRiders = e.averageSaturdayRiders;
    this.averageSundayHolidayRiders = e.averageSundayHolidayRiders;
    this.monthTotal = e.monthTotal;
  }
}
