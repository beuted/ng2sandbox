import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { WikipediaModuleModule } from './wikipedia-module/wikipedia-module.module'
import { WikipediaModuleComponent } from './wikipedia-module/wikipedia-module.component'

import 'rxjs/Rx';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    WikipediaModuleModule
  ],
  providers: [WikipediaModuleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
