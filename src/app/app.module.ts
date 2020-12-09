import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule  } from "@angular/forms";
import { MaterialModule } from './material/material.module';
import { ExcelService } from '../app/history/excel.service';
import { HttpClientModule } from '@angular/common/http';
import { PositionRoutingModule } from './position/position-routing.module';
import { PositionModule } from './position/position.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    PositionRoutingModule,
    PositionModule,
    SharedModule,
    ChartsModule,
    ReactiveFormsModule,
    UserModule
  ],
  
  exports: [AppRoutingModule, SharedModule, ChartsModule],
  providers: [ExcelService],
  bootstrap: [AppComponent],

})
export class AppModule { }
