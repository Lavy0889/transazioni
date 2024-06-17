import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransazioniListComponent } from './components/transazioni-list/transazioni-list.component';
import { TransazioneDetailiComponent } from './components/transazione-detail/transazione-detaili.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniListComponent,
    TransazioneDetailiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
