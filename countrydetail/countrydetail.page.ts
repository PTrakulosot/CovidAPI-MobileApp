import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.page.html',
  styleUrls: ['./countrydetail.page.scss'],
})
export class CountrydetailPage implements OnInit {

  countryInfo: any;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private covidapiService: CovidService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let iso3 = this.router.getCurrentNavigation().extras.state.country;
        this.covidapiService.getCountryDetail(iso3).subscribe(result => {
          this.countryInfo = result;
          console.log(result);
        })
      }
    })
  }

  ngOnInit() {
  }

}
