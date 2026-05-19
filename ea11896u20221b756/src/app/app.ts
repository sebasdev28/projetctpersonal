import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Toolbar } from './shared/presentation/components/toolbar/toolbar';

/**
 * @summary Root component for the World Bank Economic Monitoring Platform.
 * @author Sebastian Uriel
 */

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ea11896u20221b756');
}
