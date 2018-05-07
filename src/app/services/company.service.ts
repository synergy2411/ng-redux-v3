import { Injectable } from '@angular/core';
import { Company } from '../models/company.model'; 
@Injectable()
export class CompanyService {
  companyData : Company [] = [{companyName :"XYZ", contactNumber : 1234}]
  constructor() { }
  loadCompanies(){
    return this.companyData;
  }
}
