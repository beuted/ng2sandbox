import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { AutorouteComponent } from './autoroute.component';
import { AutorouteDetailComponent } from './autoroute-detail/autoroute-detail.component';
import { AutorouteListComponent } from './autoroute-list/autoroute-list.component';
import { AutorouteService } from './autoroute.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AutorouteComponent, AutorouteDetailComponent, AutorouteListComponent],
  providers: [AutorouteService]
})
export class AutorouteModule { }
