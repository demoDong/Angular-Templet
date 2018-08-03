import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'do-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public option: any;
  constructor() { }
  ngOnInit() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push('类目' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    this.option = {
      title: {
        text: '柱状图动画延迟',
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      toolbox: {
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {
      },
      series: [{
        label: {
          normal: {
            show: false,
          },
        },
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        },
      }, {
        label: {
          normal: {
            show: false,
          },
        },
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        },
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      },
    };
  }

}
