import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  //* 차트 만들기 과정 설명
  // We need to calculate by how much this specific chart bar instance should be filled.
  // For this we can add a variable, which we could name bar fill height but the name is up to you.
  // And initially I'll set this to 0% as a text because this will be assigned as a CSS style in a second.
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    //* 아래 코드 설명
    // This will basically give us the percentage between zero and 100 by which this bar should be filled.
    // And we also wanna convert this to a string with the percentage sign at the end
    // so I will add plus percentage here, like this. (강제 형변환을 활용하여 String으로 변경!!)
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        {/* 
         //* dynamic style 설명
         'style={}'은 default HTML attribute이다.
         'style prop' and 'style attribute' works a little bit differently when building a react application.
         you don't generate a dynamic string where you set something like "style={'height: 10%'}"
         but instead style and that's the special thing once an object({}).
         the dynamic value is a JavaScript object which has also created with curly braces.
         //? style에 {}을 넣으면 style은 자바스크립트 object를 value로서 원하게 된다. 이 obect에서 CSS 프로퍼티를 사용할 수 있다.
         //! 주의사항 : 'background-color'와 같이 -붙은 CSS 속성을 사용할 경우 반드시 ''을 붙이거나 backgroundColor와 같이 케멀케이스를 적용해야한다.
        */}

        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
