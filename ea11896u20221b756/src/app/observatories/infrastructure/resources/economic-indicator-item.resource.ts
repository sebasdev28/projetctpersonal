export interface EconomicIndicatorItemResource {
  id?: number;
  observatoryId: number;
  regionCode: string;
  countryCode: string;
  countryName: string;
  indicatorId: string;
  indicatorName: string;
  indicatorValue: number;
  reportYear: string;
  registeredAt: string;
}
