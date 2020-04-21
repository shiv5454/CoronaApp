import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  public countrySearchForm: FormGroup;
  public coronaCases: any;
  resFlag:boolean;
  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {
    this.resFlag=false;
  }

  ngOnInit() {
    this.countrySearchForm = this.formBuilder.group({
      country: [""]
    });
  }

  getCoronaListByCountries(countrySearchForm) {
    this.apixuService.getCoronaCaseByCountry(countrySearchForm.country).subscribe(data => {
      this.coronaCases = data.sort((a,b)=>{
        return a.Date==b.Date?0:a.Date>b.Date?-1:1;
      });
      console.log(this.coronaCases);
      this.resFlag=true;
    });
  }
}
