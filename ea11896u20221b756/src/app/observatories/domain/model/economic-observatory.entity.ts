/**
 * @summary Represents an economic observatory managed by region.
 * @author Sebastian Uriel
 */
export class EconomicObservatory {
  constructor(
    public id: number,
    public name: string,
    public regionCode: string
  ) {}
}
