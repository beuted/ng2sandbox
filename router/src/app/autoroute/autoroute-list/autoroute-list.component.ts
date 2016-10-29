import { Component, OnInit } from '@angular/core';
import { Subject  }          from 'rxjs/Subject';
import { AutorouteService }  from '../autoroute.service'

@Component({
  selector: 'app-autoroute-list',
  template: `
<h3>Filter on the autoroute description:</h3>
<input #term (keyup)="search(term.value)"/>

<ul>
  <li *ngFor="let autoroute of autoroutes">
    <a [routerLink]="['../autoroute-detail/', autoroute.id]" routerLinkActive="active">
      <b>id:</b> {{autoroute.id}}, <b>name:</b> {{autoroute.name}}, <b>description:</b> {{autoroute.description}}
    </a>
  </li>
</ul>
  `,
  styles: []
})
export class AutorouteListComponent implements OnInit {

  public autoroutes = [];

  constructor(private autorouteService: AutorouteService) {
    this.autoroutes = this.autorouteService.getAll();
  }

  search(term: string) {
    if (term === undefined || term === null || term === "")
      this.autoroutes = this.autorouteService.getAll();

    this.autoroutes = this.autorouteService.getAll().filter(a => a.description.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }

  ngOnInit() {
  }

}
