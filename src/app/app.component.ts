import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import { Company } from './models/company.model';
import * as companyActions from './action/company.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  companies$ : Observable<any>;

  showCompanies(){
    this.store.dispatch(new companyActions.LoadCompaniesSuccessAction({companyName :"XYZ", contactNumber: 1222}));
    this.companies$.subscribe((company)=>console.log(company));
  }

  ngOnInit(){this.getCompanies();}

  getCompanies(){
    console.log("Get Companies")
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  constructor(private store : Store<AppState>){
    console.log("Constructor Called")
    this.companies$ = this.store.select(state => {
      console.log(state);
      return state;
    });
      console.log(this.companies$);
      this.companies$.subscribe((data)=>console.log(data))
  }
}
