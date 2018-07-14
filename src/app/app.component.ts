import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private fs = require('fs');
  collection = [];
  constructor() {
    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(`item ${i}`);
    // }
    // this.fs.readFile('/app/main/main.component.html', function (err, data) { html = data.toString(); });

  }
}
