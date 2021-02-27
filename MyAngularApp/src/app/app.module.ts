import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { DemoService } from './services/demo.service';
import { MyAppComponent } from './my-app/my-app.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DemoService,
   // {provide: HTTP_INTERCEPTORS,useClass: DemoInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
