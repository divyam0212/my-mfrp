import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AccoComponent } from './components/acco/acco.component';
import { SearchCheckComponent } from './components/search-check/search-check.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {path:"search",component:SearchComponent},
  {path:"acco",component:SearchCheckComponent},
  {path:"accoA",component:AccoComponent},
  {path:"preview/:checkId",component:PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
