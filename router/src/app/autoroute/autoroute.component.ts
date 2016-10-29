import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoroute',
  template: `
You're in the autoroute section, hf!
<nav>
  <a [routerLink]="['./autoroutes']" routerLinkActive="active">Autoroutes</a>
  <a [routerLink]="['./autoroute-detail', 0]" routerLinkActive="active">Details of the autoroute #1</a>
</nav>
<div style="color: blue; margin-top: 1rem;">Outlet:</div>
<div style="border: 2px solid blue; padding: 1rem;">
  <router-outlet></router-outlet>
</div>
`,
  styles: []
})
export class AutorouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
