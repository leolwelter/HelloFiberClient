import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorLabel: string;
  username: string;
  password: string;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  handleError(err): void {
    console.error(err);
    if (err.status && err.status === 401) {
      this.errorLabel = 'Your username or password was incorrect.';
    } else {
      this.errorLabel = 'Something went wrong. Try again in a moment.';
    }
  }

  attemptLogin(): void {
    // TODO sanitize input
    const token = new Date().getHours().toString() + new Date().getMinutes().toString();
    this.userService.login(this.username, this.password, token).subscribe(
      _ => {
        alert('redirecting you to OneCause now...');
        // TODO use a guard implementing CanActivate to route this
        window.location.href = 'https://onecause.com';
      },
      err => {
        this.handleError(err);
      }
    );
  }
}
