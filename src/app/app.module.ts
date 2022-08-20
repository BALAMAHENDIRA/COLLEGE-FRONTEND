import { ClgserviceService } from './service/clgservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo/demo.component';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { MarksComponent } from './marks/marks.component';

const appRoutes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'result', component: ResultComponent},
  {path: 'marks', component: MarksComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    ResultComponent,
    MarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule
  ],
  providers: [ClgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
