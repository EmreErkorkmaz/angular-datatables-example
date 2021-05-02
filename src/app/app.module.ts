import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './ui/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { EditComponent } from './pages/edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | any = null;

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
