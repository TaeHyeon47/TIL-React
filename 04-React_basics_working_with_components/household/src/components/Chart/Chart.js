import React from 'react';
import ChartBar from './CartBar';
import './Chart.css';

const Chart = (props) => {
  // value는 실제값, maxValue는 최대값, label은 1월 등의 월값(label은 유니크값으로 key값으로도 활용할 수 있다.)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
