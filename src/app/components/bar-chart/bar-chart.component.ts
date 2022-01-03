import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BarChartData, IChart } from '../../model/data.model';
import { ChartService } from 'src/app/chart.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @ViewChild('barChart') chartContainer: ElementRef | any;
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  data = BarChartData;

  constructor(private chartService:ChartService) {
  }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private getData(data: IChart) {
    this.chartService.setChart(data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")")
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.date))
      .padding(0.2)

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 300000])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g").call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.date))
      .attr("y", (d: any) => y(d.value))
      .attr("cursor", 'pointer')
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.value))
      .attr("fill", "#d04a35")
      .on('click', (pointer: any, data: any) => {
        this.getData(data);
      });
  }


}
