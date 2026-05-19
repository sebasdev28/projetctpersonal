import { Component, input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { EconomicIndicatorItemResource } from '../../../infrastructure/resources/economic-indicator-item.resource';

/**
 * @summary Displays a summary card for an economic indicator item.
 * @author Sebastian Uriel
 */
@Component({
  selector: 'app-economic-indicator-summary',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './economic-indicator-summary.html',
  styleUrl: './economic-indicator-summary.css'
})
export class EconomicIndicatorSummary {
  item = input.required<EconomicIndicatorItemResource>();
}
