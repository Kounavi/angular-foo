import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})

export class UsernameComponent implements OnInit {

  username='';

  constructor() {
    /*setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);*/
  }

  ngOnInit() {}

  resetUsername(event: Event) {
      this.username = '';
  }

}
