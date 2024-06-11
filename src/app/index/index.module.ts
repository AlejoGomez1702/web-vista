import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurCategoryComponent } from './components/our-category/our-category.component';
import { YoutubeSectionComponent } from './components/youtube-section/youtube-section.component';
import { OurPortfolioComponent } from './components/our-portfolio/our-portfolio.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { OurFeaturedTeamComponent } from './components/our-featured-team/our-featured-team.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { TestimonialAndPaymentsComponent } from './components/testimonial-and-payments/testimonial-and-payments.component';
import { ServicesPayComponent } from './components/services-pay/services-pay.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { AditionalServicesComponent } from './components/aditional-services/aditional-services.component';
import { OfferYourPropertyComponent } from './components/offer-your-property/offer-your-property.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopToolbarComponent } from './components/header/top-toolbar/top-toolbar.component';
import { OldHeaderComponent } from './components/header/old-header/old-header.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PreloaderComponent,
    HeaderComponent,
    BannerComponent,
    AboutUsComponent,
    OurCategoryComponent,
    YoutubeSectionComponent,
    OurPortfolioComponent,
    OurHistoryComponent,
    OurTeamComponent,
    OurFeaturedTeamComponent,
    OurBlogComponent,
    TestimonialAndPaymentsComponent,
    ServicesPayComponent,
    WorkWithUsComponent,
    AditionalServicesComponent,
    OfferYourPropertyComponent,
    FooterComponent,
    TopToolbarComponent,
    OldHeaderComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
