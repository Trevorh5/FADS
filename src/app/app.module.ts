import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    ProductsComponent,
    UserProfileComponent,
    LogoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'logout', component: LogoutComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
