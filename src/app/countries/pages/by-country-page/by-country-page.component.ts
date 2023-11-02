import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading = false;
  public initialValue = '';

  constructor( private countryService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string){

    console.log('Desde ByCountryPage');
    console.log( { term } );

    this.isLoading = true;

    this.countryService.searchCountry( term )
            .subscribe( countries => {
              this.countries = countries;
              this.isLoading = false;
            });

   }

}
