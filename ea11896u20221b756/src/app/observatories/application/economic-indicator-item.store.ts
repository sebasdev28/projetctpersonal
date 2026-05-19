import { inject, Injectable, signal } from '@angular/core';
import { EconomicIndicatorItemResource } from '../infrastructure/resources/economic-indicator-item.resource';
import { EconomicIndicatorItemApiService } from '../infrastructure/services/economic-indicator-item-api.service';

/**
 * @summary Manages state for economic indicator items.
 * @author Sebastian Uriel
 */
@Injectable({
  providedIn: 'root'
})
export class EconomicIndicatorItemStore {
  private readonly economicIndicatorItemApi = inject(EconomicIndicatorItemApiService);

  readonly items = signal<EconomicIndicatorItemResource[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  /**
   * @summary Loads all economic indicator items from the fake API.
   */
  loadItems(): void {
    this.loading.set(true);
    this.error.set(null);

    this.economicIndicatorItemApi.getAll().subscribe({
      next: items => {
        this.items.set(items);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load economic indicator items');
        this.loading.set(false);
      }
    });
  }

  /**
   * @summary Creates an economic indicator item and updates the current state.
   * @param item Economic indicator item to create.
   */
  createItem(item: EconomicIndicatorItemResource): void {
    this.loading.set(true);
    this.error.set(null);

    this.economicIndicatorItemApi.create(item).subscribe({
      next: createdItem => {
        this.items.update(currentItems => [...currentItems, createdItem]);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not create economic indicator item');
        this.loading.set(false);
      }
    });
  }
}
