import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEconomicIndicator } from './new-economic-indicator';

describe('NewEconomicIndicator', () => {
  let component: NewEconomicIndicator;
  let fixture: ComponentFixture<NewEconomicIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEconomicIndicator],
    }).compileComponents();

    fixture = TestBed.createComponent(NewEconomicIndicator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
