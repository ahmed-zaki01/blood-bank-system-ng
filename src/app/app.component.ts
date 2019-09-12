import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blood-bank-system';

  ngOnInit() {
    $(document).ready(function() {
      alert('I am Called From jQuery');
    });
  }
}
