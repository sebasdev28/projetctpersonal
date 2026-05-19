import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';

/**
 * @summary Toolbar component with application branding, navigation and language switching buttons.
 * @author Sebastian Uriel
 */
@Component({
  selector: 'app-toolbar',
  imports: [RouterLink, MatToolbar, MatButton, MatIconButton],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {
  logoUrl = 'https://img.logo.dev/worldbank.org';
}
