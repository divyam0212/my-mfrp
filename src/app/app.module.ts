import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MFRPService } from './components/services/mfrp.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccoComponent } from './components/acco/acco.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SearchCheckComponent } from './components/search-check/search-check.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AccordionComponent,
    AccoComponent,
    SearchCheckComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [MFRPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Ng2SearchPipeModule,