import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * @summary Displays a page not found message for unsupported routes.
 * @author Sebastian Uriel
 */
@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink, MatButton, MatCard, MatCardContent],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {
  private readonly router = inject(Router);

  readonly invalidPath = this.router.url;
}
