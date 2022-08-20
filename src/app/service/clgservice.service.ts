import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClgserviceService {

  APIUrl =  environment.APIUrl;

  constructor(private _http: HttpClient) { }

  checkResult(rollno: string, password: string){
    const url = "api/Students/CheckResult?rollno=";
     
    return this._http.get(`${this.APIUrl}${url}${rollno}&password=${password}`);
    
  }
}
