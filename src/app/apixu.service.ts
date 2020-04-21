import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getCoronaCaseByCountry(country) :Observable<any>{
    return this.http.get(
      //`https://api.covid19api.com/dayone/country/${country}/status/confirmed`
      `https://api.covid19api.com/total/dayone/country/${country}`
    );
  }
}
