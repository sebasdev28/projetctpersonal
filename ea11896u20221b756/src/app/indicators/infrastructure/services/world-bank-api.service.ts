import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { WorldBankIndicatorRecordResource } from '../resources/world-bank-indicator-record.resource';

/**
 * @summary Provides API operations to retrieve economic indicator data from World Bank API.
 * @author Sebastian Uriel
 */
@Injectable({
  providedIn: 'root'
})
export class WorldBankApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.worldbank.org/v2/country';

  /**
   * @summary Gets the first available economic indicator record with non-null value.
   * @param countryCode The ISO 2 country code used by World Bank API.
   * @param indicatorId The economic indicator identifier.
   */
  getFirstAvailableIndicatorRecord(
    countryCode: string,
    indicatorId: string
  ): Observable<WorldBankIndicatorRecordResource | null> {
    const url = `${this.baseUrl}/${countryCode}/indicator/${indicatorId}?format=json`;

    return this.http.get<unknown[]>(url).pipe(
      map(response => {
        const records = response[1] as WorldBankIndicatorRecordResource[] | undefined;

        if (!records || records.length === 0) {
          return null;
        }

        return records.find(record => record.value !== null) ?? null;
      })
    );
  }
}
