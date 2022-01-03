import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TableChartComponent } from './components/table-chart/table-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    TableChartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
