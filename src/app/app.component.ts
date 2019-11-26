import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatIconRegistry]
})
export class AppComponent {
  title = 'Tinker Tuesday Angular Fun with Matt and Sam';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'barcode',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/B_433.1_Barcode.svg'));
    iconRegistry.addSvgIcon(
        'biometrics',
         sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/biometrics.svg'));
  }


}
