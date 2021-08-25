import { Component } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  results: any;
  continent: string = "";

  constructor(private covidapiService: CovidService, private router: Router) {
    this.covidapiService.getCountriesAll().subscribe((res) => {
      this.results = res;
    })
  }

  showContinent(type: string) {
    this.covidapiService.getCountriesAll().subscribe((res) => {
      this.results = res;
    })
    this.continent = type;
  }

  showCountryDetail(iso3: string) {
    console.log(iso3);
    let navigationExtras: NavigationExtras = {
      state: {
        country: iso3
      }
    }
    this.router.navigate(['/countrydetail'], navigationExtras);
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/celebrate.wav";
    audio.load();
    audio.play();
  }
}
