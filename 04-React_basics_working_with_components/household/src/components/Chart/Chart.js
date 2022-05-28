import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // we transform a data point object to just the number.
  const totalMaximum = Math.max(...dataPointValues); // dataPointValues가 Array이기 때문에 ...으로 pull out해야한다.

  // value는 실제값, maxValue는 최대값, label은 1월 등의 월값(label은 유니크값으로 key값으로도 활용할 수 있다.)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
