import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading = false;

  public regions: Region[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  public selectedRegion?: Region;


  constructor( private countryService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  searchByregion( region: Region){

    this.selectedRegion = region;

    //console.log('Desde ByCapitalPage');
    //console.log( { region } );

    this.isLoading = true;

    this.countryService.searchRegion( region )
            .subscribe( countries => {
              this.countries = countries;
              this.isLoading = false;
            });

   }

}
