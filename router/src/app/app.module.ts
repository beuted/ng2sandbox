import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AutorouteModule } from './autoroute/autoroute.module'

import { AppComponent } from './app.component';
import { YoloComponent } from './yolo/yolo.component';
import { LoyoComponent } from './loyo/loyo.component';
import { AutorouteComponent } from './autoroute/autoroute.component'
import { AutorouteListComponent } from './autoroute/autoroute-list/autoroute-list.component'
import { AutorouteDetailComponent } from './autoroute/autoroute-detail/autoroute-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    YoloComponent,
    LoyoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AutorouteModule,    
    RouterModule.forRoot([
      { path: '', redirectTo: 'yolo', pathMatch: 'full' },
      { path: 'yolo', component: YoloComponent },
      { path: 'loyo', component: LoyoComponent },
      { path: 'autoroute', component: AutorouteComponent, /*loadChildren: 'autoroute/autoroute.module#AutorouteModule'*/
        children: [
          { path: '', redirectTo: 'autoroutes', pathMatch: 'full' },
          { path: 'autoroutes',  component: AutorouteListComponent },
          { path: 'autoroute-detail/:id', component: AutorouteDetailComponent },
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
