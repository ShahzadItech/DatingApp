import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Dating APP';
// tslint:disable-next-line:ban-types
  public users: any;

  constructor(private http: HttpClient) {
  }

// tslint:disable-next-line:typedef
  ngOnInit() {
    this.getUser();
  }

  public getUser(): void {
    this.http.get('https://localhost:5001/api/users').subscribe(
      response => {
        this.users = response;
      }, error => {
        console.log(error);
      });
  }


}
