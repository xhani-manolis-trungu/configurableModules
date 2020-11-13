import { Component, OnInit } from '@angular/core';

import { AppConfigService } from './app-config/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public items = [];
  title = 'App Component';

  constructor(public contentful: AppConfigService) {

  }

  ngOnInit() {
    this.contentful.getEntries('article')
    .then(items => {
      this.items = [...items];
    })
    .catch(err => {
      console.log(err);
      this.items.push(err.message);
    });
  }
}
