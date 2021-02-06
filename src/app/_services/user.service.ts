import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string, token: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/login', {username, password, token});
  }
}
