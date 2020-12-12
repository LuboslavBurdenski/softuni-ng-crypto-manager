import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { appInterceptorProvider } from './interceptors/app.interceptor';
import { loaderInterceptorProvider } from './interceptors/loader.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { balanceInterceptorProvider } from './interceptors/balance.interceptor';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavigationComponent,
    LoaderComponent,
  ],
  exports:[NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  providers: [appInterceptorProvider, loaderInterceptorProvider, balanceInterceptorProvider]
})
export class CoreModule { }
