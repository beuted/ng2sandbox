import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorouteService } from '../autoroute.service';

@Component({
  selector: 'app-autoroute-detail',
  template: `
    <p>
      Here some details about the autoroute of id {{autoroute.id}} name "{{autoroute.name}}" and desc: {{autoroute.description}}
    </p>
  `,
  styles: []
})
export class AutorouteDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private autorouteService: AutorouteService
  ) {
  }

  private autoroute: any; //Autoroute;

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.autoroute = this.autorouteService.get(id);
    });
  }

}
