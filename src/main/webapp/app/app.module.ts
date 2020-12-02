import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ArgoTestSharedModule } from 'app/shared/shared.module';
import { ArgoTestCoreModule } from 'app/core/core.module';
import { ArgoTestAppRoutingModule } from './app-routing.module';
import { ArgoTestHomeModule } from './home/home.module';
import { ArgoTestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ArgoTestSharedModule,
    ArgoTestCoreModule,
    ArgoTestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ArgoTestEntityModule,
    ArgoTestAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ArgoTestAppModule {}
