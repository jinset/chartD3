import { Injectable } from '@angular/core';
import { IChart } from './model/data.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  $chartChanged = new Subject<IChart>();

  constructor() { }

  setChart(chart: IChart){
    this.$chartChanged.next(chart)
  }

  getChart(): Subject<IChart> {
    return this.$chartChanged;
  }

}
