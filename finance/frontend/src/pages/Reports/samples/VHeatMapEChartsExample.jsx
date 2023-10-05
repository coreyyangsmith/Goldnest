//  IMPORTS
//-------------------------------------------------------//


// React Import
import React from 'react'

// ECharts
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts/core';

//  UTILITY
//-------------------------------------------------------//
function getVirtualData(year) {
  // TODO Generate virtual data (Faker?)
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    ]);
  }
  return data;
}

const option = {
  tooltip: {
    position: 'top',
    formatter: function (p) {
      const format = echarts.time.format(p.data[0], '{yyyy}-{MM}-{dd}', false);
      return format + ': ' + p.data[1];
    }
  },
  visualMap: {
    min: 0,
    max: 1500,
    calculable: true,
    orient: 'vertical',
    top: 'center'
  },
  calendar: [
    {
      cellSize: [20, 'auto'],
      orient: 'vertical',
      range: '2023',
      dayLabel: {
        margin: 5
      }
    }
  ],
  series: [
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 0,
      data: getVirtualData('2023')
    }
  ]
};

//  MAIN FUNCTION
//-------------------------------------------------------//

const VHeatMapEChartsExample = () => {
  
  return <ReactEcharts option={option}/>
}


//  EXPORTS 
//-------------------------------------------------------//

export default VHeatMapEChartsExample