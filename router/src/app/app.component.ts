import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>
  {{title}}
</h1>

<nav>
  <a [routerLink]="['/yolo']" routerLinkActive="active">Yolo</a>
  <a [routerLink]="['/loyo']" routerLinkActive="active">Loyo</a>
  <a [routerLink]="['/autoroute']" routerLinkActive="active">Autoroute</a>
</nav>

<div style="color: green; margin-top: 1rem;">Outlet:</div>
<div style="border: 2px solid green; padding: 1rem;">
  <router-outlet></router-outlet>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Router example';
}
