import { Injectable } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Effect, Actions} from '@ngrx/effects';
import * as companyActions from '../action/company.action';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyEffects{
    constructor(
        private companyService : CompanyService,
        private actions$ : Actions
        
    ){console.log("EFFECTS")}

    @Effect() loadingCompanies = this.actions$.ofType(companyActions.LOAD_COMPANIES)
            .switchMap(()=>this.companyService.loadCompanies()
                .map((data)=>{
                    console.log(data); 
                    return (new companyActions.LoadCompaniesSuccessAction(data));
                })
            )
               // .map((companies)=>(new companyActions.LoadCompaniesSuccessAction(companies)))
                //.subscribe((data)=>console.log(data));

}