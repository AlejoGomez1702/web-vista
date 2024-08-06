import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { YoutubeSectionComponent } from './components/youtube-section/youtube-section.component';
import { OurPortfolioComponent } from './components/our-portfolio/our-portfolio.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { ServicesPayComponent } from './components/services-pay/services-pay.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { OfferYourPropertyComponent } from './components/offer-your-property/offer-your-property.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopToolbarComponent } from './components/header/top-toolbar/top-toolbar.component';
import { HamburguerMenuComponent } from './components/header/hamburguer-menu/hamburguer-menu.component';
import { HeaderDesktopComponent } from './components/header/header-desktop/header-desktop.component';
import { QuickOptionsComponent } from './components/quick-options/quick-options.component';
import { OurWorldComponent } from './components/our-world/our-world.component';
import { AdditionalProductsComponent } from './components/additional-products/additional-products.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PreloaderComponent,
    HeaderComponent,
    BannerComponent,
    AboutUsComponent,
    YoutubeSectionComponent,
    OurPortfolioComponent,
    OurTeamComponent,
    OurBlogComponent,
    ServicesPayComponent,
    WorkWithUsComponent,
    OfferYourPropertyComponent,
    FooterComponent,
    TopToolbarComponent,
    HamburguerMenuComponent,
    HeaderDesktopComponent,
    QuickOptionsComponent,
    OurWorldComponent,
    AdditionalProductsComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
