import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CompanyReducer } from './reducer/company.reducer';
import { CompanyService } from './services/company.service';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './effect/company.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({CompanyReducer}),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
