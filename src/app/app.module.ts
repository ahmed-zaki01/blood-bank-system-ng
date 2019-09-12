import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DonorDonationComponent } from './donor-donation/donor-donation.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { CampsComponent } from './camps/camps.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DonorDonationComponent,
    SendRequestComponent,
    ViewRequestsComponent,
    CampsComponent,
    LoginComponent,
    SearchComponent,
    SignUpComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
