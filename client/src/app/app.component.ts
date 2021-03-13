import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dating app';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      (res) => (this.users = res),
      (error) => console.log(error)
    );
  }
}
