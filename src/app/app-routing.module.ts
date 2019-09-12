import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonorDonationComponent } from './donor-donation/donor-donation.component';
import { CampsComponent } from './camps/camps.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'register', component: DonorDonationComponent},
  {path: 'camps', component: CampsComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'request-blood', component: SendRequestComponent},
  {path: 'view-requests', component: ViewRequestsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
