import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading = false;


  constructor( private countryService: CountriesService ) {}

  searchByregion( term: string){

    console.log('Desde ByCapitalPage');
    console.log( { term } );

    this.isLoading = true;

    this.countryService.searchRegion( term )
            .subscribe( countries => {
              this.countries = countries;
              this.isLoading = false;
            });

   }

}
