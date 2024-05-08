import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  isPasswordHidden = true;
  buttonClicks = 0;

  constructor() {}

  ngOnInit() {}

  togglePassword(event: Event) {
    this.isPasswordHidden === true ? this.isPasswordHidden = false : this.isPasswordHidden = true;
    this.buttonClicks++;
  }

  getPasswordBackgroundColour() {
    return this.buttonClicks < 5 ? 'white' : '#6699CC';
  }

}
