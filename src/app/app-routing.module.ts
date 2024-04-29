import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { RentComponent } from './rent/rent.component';
import { EndRentComponent } from './end-rent/end-rent.component';

const routes: Routes = [
  { path: '', redirectTo: '/bikes', pathMatch: 'full' },
  { path: 'bikes', component: BikesComponent },
  { path: 'rent', component: RentComponent },
  { path: 'rent/:id', component: RentComponent }, // Új útvonal az id alapján
  { path: 'end-rent', component: EndRentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
