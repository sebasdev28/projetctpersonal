/**
 * @summary Represents an economic indicator item registered for an observatory.
 * @author Sebastian Uriel
 */
export class EconomicIndicatorItem {
  constructor(
    public id: number,
    public observatoryId: number,
    public regionCode: string,
    public countryCode: string,
    public countryName: string,
    public indicatorId: string,
    public indicatorName: string,
    public indicatorValue: number,
    public reportYear: string,
    public registeredAt: string
  ) {}
}
