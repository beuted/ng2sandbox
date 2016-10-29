import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikipediaModuleComponent } from './wikipedia-module.component';
import { WikipediaService } from './wikipedia-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [WikipediaService],
  declarations: [WikipediaModuleComponent]
})
export class WikipediaModuleModule { }
