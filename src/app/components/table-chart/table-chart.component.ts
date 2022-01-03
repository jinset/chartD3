import { Component, OnInit } from '@angular/core';
import { IChart } from 'src/app/model/data.model';
import { ChartService } from '../../chart.service';

@Component({
	selector: 'app-table-chart',
	templateUrl: './table-chart.component.html',
	styleUrls: ['./table-chart.component.scss']
})
export class TableChartComponent implements OnInit {

  valueChar: IChart | undefined;

	constructor(private chartService:ChartService) {
	}

	ngOnInit(): void {
    this.chartService.getChart().subscribe(chart => {
      this.valueChar = chart;
    })
	}

}
