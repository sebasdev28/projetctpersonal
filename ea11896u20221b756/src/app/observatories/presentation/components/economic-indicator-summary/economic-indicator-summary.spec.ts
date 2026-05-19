import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicIndicatorSummary } from './economic-indicator-summary';

describe('EconomicIndicatorSummary', () => {
  let component: EconomicIndicatorSummary;
  let fixture: ComponentFixture<EconomicIndicatorSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomicIndicatorSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicIndicatorSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
