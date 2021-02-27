import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpClient:HttpClient) { }
  data:any;
  sendMail()
  {
    return this.httpClient.get('http://localhost:8080/user');
  }

  // uploadFile(file)
  // {
  //    this.httpClient.post('http://localhost:8080/upload',file);
  // }
  uploadFile()
  {
     this.httpClient.post('http://localhost:8080/upload',"neha");
  }

  //fetch json data
  fetchJson()
  {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
