import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EconomicIndicatorItemResource } from '../resources/economic-indicator-item.resource';

/**
 * @summary Provides API operations for economic indicator items.
 * @author Sebastian Uriel
 */
@Injectable({
  providedIn: 'root'
})
export class EconomicIndicatorItemApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000/economic-indicator-items';

  /**
   * @summary Gets all registered economic indicator items.
   */
  getAll(): Observable<EconomicIndicatorItemResource[]> {
    return this.http.get<EconomicIndicatorItemResource[]>(this.baseUrl);
  }

  /**
   * @summary Creates a new economic indicator item.
   */
  create(item: EconomicIndicatorItemResource): Observable<EconomicIndicatorItemResource> {
    return this.http.post<EconomicIndicatorItemResource>(this.baseUrl, item);
  }
}
