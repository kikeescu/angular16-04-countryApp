import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoading = false;


  constructor( private countryService: CountriesService ) {}

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
