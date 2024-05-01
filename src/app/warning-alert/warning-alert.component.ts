import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})

export class WarningAlertComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No new server was created!';
  serverName='FooServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server has been created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
