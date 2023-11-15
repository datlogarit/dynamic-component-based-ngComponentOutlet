import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdBannerComponent } from './base/ad-banner.component';
import { HeroJobAdComponent } from './base/hero-job-ad.component';
import { HeroProfileComponent } from './base/hero-profile.component';
@NgModule({
  declarations: [
    AppComponent, AdBannerComponent, HeroJobAdComponent, HeroProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
