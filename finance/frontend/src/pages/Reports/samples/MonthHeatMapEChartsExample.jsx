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
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 1000)
    ]);
  }
  return data;
}

const option = {
  tooltip: {
    position: 'top'
  },
  visualMap: [
    {
      min: 0,
      max: 1000,
      calculable: true,
      seriesIndex: [0],
      orient: 'horizontal',
    },
  ],
  calendar: [
    {
      orient: 'vertical',
      yearLabel: {
        margin: 0
      },
      dayLabel: {
        firstDay: 1,
        nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      monthLabel: {
        nameMap: 'cn',
        margin: 20
      },
      cellSize: 40,
      top: 0,
      left: 0,
      range: '2017-04'
    }
  ],
  series: [
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 0,
      data: getVirtualData('2017')
    }
  ]
};

//  MAIN FUNCTION
//-------------------------------------------------------//

const MonthHeatMapEChartsExample = () => {
  
  return <ReactEcharts option={option}/>
}


//  EXPORTS 
//-------------------------------------------------------//

export default MonthHeatMapEChartsExample