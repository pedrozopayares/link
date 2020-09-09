import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignoutComponent } from './pages/signout/signout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddressComponent } from './address/address.component'

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SignoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'address', component: AddressComponent },
  { path: '**', component:  SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
