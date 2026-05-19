import { Component, inject, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { EconomicIndicatorItemStore } from '../../../application/economic-indicator-item.store';
import { EconomicIndicatorSummary } from '../../components/economic-indicator-summary/economic-indicator-summary';

/**
 * @summary Home view for the World Bank Economic Monitoring Platform.
 * @author Sebastian Uriel
 */
@Component({
  selector: 'app-home',
  imports: [
    MatCard,
    MatCardContent,
    MatGridList,
    MatGridTile,
    EconomicIndicatorSummary
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  readonly store = inject(EconomicIndicatorItemStore);

  ngOnInit(): void {
    this.store.loadItems();
  }
}
