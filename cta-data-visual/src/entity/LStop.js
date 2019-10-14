export default class LStop {
  stopId;
  directionId;
  stopName;
  stationName;
  stationDescriptive;
  mapId;
  ada;
  red;
  blue;
  g;
  brn;
  p;
  pexp;
  y;
  pnk;
  o;
  location;
  zipCodes;
  historicalWards;
  communityAreas;
  censusTracts;
  wards;

  constructor(e) {
    this.stopId = e.stopId;
    this.directionId = e.directionId;
    this.stopName = e.stopName;
    this.stationName = e.stationname;
    this.stationDescriptive = e.stationDescriptive;
    this.mapId = e.mapId;
    this.ada = e.ada;
    this.red = e.red;
    this.blue = e.blue;
    this.g = e.g;
    this.brn = e.brn;
    this.p = e.p;
    this.pexp = e.pexp;
    this.y = e.y;
    this.pnk = e.pnk;
    this.o = e.o;
    this.location = e.location;
    this.zipCodes = e.zipCodes;
    this.historicalWards = e.historicalWards;
    this.communityAreas = e.communityAreas;
    this.censusTracts = e.censusTracts;
    this.wards = e.wards;
  }
}
