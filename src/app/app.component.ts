import { Component } from '@angular/core';
import { HTTPService } from "./Http-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = "";
  verbs = [
    { value: 'get', viewValue: 'Get' },
    { value: 'post', viewValue: 'Post' },
    { value: 'put', viewValue: 'Put' },
    { value: 'delete', viewValue: 'delete' }
  ];

  jsonresponse = '';
  constructor(private service: HTTPService) {

  }
  urlCall() {
    console.log('urlCall');
    this.service.apiCall(this.url).then((res) => {
      console.log(res);
      this.jsonresponse = JSON.stringify(res);
    })
  }
}
