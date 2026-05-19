import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EconomicObservatoryResource } from '../resources/economic-observatory.resource';

/**
 * @summary Provides API operations for economic observatories.
 * @author Sebastian Uriel
 */
@Injectable({
  providedIn: 'root'
})
export class EconomicObservatoryApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000/economic-observatories';

  /**
   * @summary Gets all economic observatories from the fake API.
   */
  getAll(): Observable<EconomicObservatoryResource[]> {
    return this.http.get<EconomicObservatoryResource[]>(this.baseUrl);
  }
}
