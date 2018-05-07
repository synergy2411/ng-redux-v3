import * as companyActions from '../action/company.action';
import { Company } from '../models/company.model';
import { InitialState } from '@ngrx/store/src/models';
import { AppState } from '../models/app-state';

//export const initialState ;

export function CompanyReducer(state = [], action : companyActions.Action){
    switch(action.type){
        case (companyActions.LOAD_COMPANIES_SUCCESS) : {
            console.log(action.payload);
            return action.payload;
        }
        case (companyActions.LOAD_COMPANIES) : {
            console.log("Loading Company in Reducer.");
            return {companyName  :"New Company", contactNumber : 45656};
        }
        default : 
            console.log("DEFAULT");
            return state;
    }
}