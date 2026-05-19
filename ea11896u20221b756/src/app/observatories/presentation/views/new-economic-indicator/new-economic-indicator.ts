import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EconomicObservatoryApiService } from '../../../infrastructure/services/economic-observatory-api.service';
import { EconomicIndicatorItemStore } from '../../../application/economic-indicator-item.store';
import { WorldBankApiService } from '../../../../indicators/infrastructure/services/world-bank-api.service';

/**
 * @summary View for registering a new economic indicator item.
 * @author Sebastian Uriel
 */
@Component({
  selector: 'app-new-economic-indicator',
  imports: [
    FormsModule,
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatButton,
    MatSnackBarModule
  ],
  templateUrl: './new-economic-indicator.html',
  styleUrl: './new-economic-indicator.css'
})
export class NewEconomicIndicator {
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly observatoryApi = inject(EconomicObservatoryApiService);
  private readonly itemStore = inject(EconomicIndicatorItemStore);
  private readonly worldBankApi = inject(WorldBankApiService);

  selectedRegionCode = '';
  selectedCountryCode = '';
  selectedIndicatorId = '';

  readonly regionCodes = ['LAC', 'EAS', 'ECS', 'MEA', 'NAC', 'SAS'];

  readonly countries = [
    { code: 'PE', name: 'Peru' },
    { code: 'BR', name: 'Brazil' },
    { code: 'US', name: 'United States' }
  ];

  readonly economicIndicators = [
    { id: 'NY.GDP.MKTP.CD', name: 'GDP (current US$)' },
    { id: 'FP.CPI.TOTL.ZG', name: 'Inflation, consumer prices (annual %)' },
    { id: 'SP.POP.TOTL', name: 'Population, total' }
  ];

  create(): void {
    if (!this.selectedRegionCode || !this.selectedCountryCode || !this.selectedIndicatorId) {
      this.snackBar.open('Complete all fields', 'Close', { duration: 3000 });
      return;
    }

    this.observatoryApi.getAll().subscribe(observatories => {
      const selectedObservatory = observatories.find(
        observatory => observatory.regionCode === this.selectedRegionCode
      );

      if (!selectedObservatory) {
        this.snackBar.open('Observatory not found for selected region', 'Close', { duration: 3000 });
        return;
      }

      this.worldBankApi.getFirstAvailableIndicatorRecord(
        this.selectedCountryCode,
        this.selectedIndicatorId
      ).subscribe(record => {
        if (!record) {
          this.snackBar.open('No available indicator value found', 'Close', { duration: 3000 });
          return;
        }

        this.itemStore.createItem({
          observatoryId: selectedObservatory.id,
          regionCode: this.selectedRegionCode,
          countryCode: record.countryiso3code,
          countryName: record.country.value,
          indicatorId: record.indicator.id,
          indicatorName: record.indicator.value,
          indicatorValue: record.value ?? 0,
          reportYear: record.date,
          registeredAt: new Date().toISOString()
        });

        this.snackBar.open('Economic indicator registered', 'Close', { duration: 3000 });
        this.router.navigate(['/home']);
      });
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}
