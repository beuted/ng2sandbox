import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject  }          from 'rxjs/Subject';
import { WikipediaService }  from './wikipedia-service.service'

@Component({
  selector: 'app-wikipedia-module',
  templateUrl: './wikipedia-module.component.html',
  styleUrls: ['./wikipedia-module.component.css']
})
export class WikipediaModuleComponent implements OnInit {
  public items: Observable<string[]>;

  private searchTermStream = new Subject<string>();

  constructor(private wikipediaService: WikipediaService) {
      this.items = this.searchTermStream
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap((term: string) => this.wikipediaService.search(term));
  }

  ngOnInit() {
  }

  search(term: string) { this.searchTermStream.next(term); }

}
