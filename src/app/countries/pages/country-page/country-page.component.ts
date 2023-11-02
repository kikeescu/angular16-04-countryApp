import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;
  public isLoading = false;

  constructor(
      private activatedRoute: ActivatedRoute,
      private countriesService: CountriesService,
      private router: Router
  ) {}

  //==============================================================
  // ngOnInit(): void {
  //   this.activatedRoute.params
  //           .subscribe( ({id} : Params) => {
  //             this.countriesService.searchCountryByAlphaCode(id)
  //                     .subscribe( country => {
  //                       console.log( country );
  //                     });
  //           });
  // }

  //=========================================================
  // ngOnInit(): void {
  //   this.activatedRoute.params
  //           .subscribe( ({id} : Params) => {
  //             this.searchCountry(id);
  //           });
  // }
  // searchCountry( code: string ){
  //   this.countriesService.searchCountryByAlphaCode(code)
  //   .subscribe( country => {
  //     console.log( country );
  //   });
  // }

  ngOnInit(): void {

    this.isLoading = true;

    this.activatedRoute.params
            .pipe(
              switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id) )
            )
            .subscribe( country => {

              if( !country ){
                return this.router.navigateByUrl('');
              }

              this.isLoading = false;

              //console.log('Tenemos un pais');
              return this.country = country;

            });
  }


}
