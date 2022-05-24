import React from 'react';
import './Card.css';

// A card component could now do one main thing.
// It could return a div or any other kind of container HTML element
// we get these predefined styles for the card automatically.

// you can't use your custom components as wrappers around other kind of content.
// doesn't work just like that. But of course it does work for built-in HTML elements,

// props.children 없이 감싸는 요소로 사용하면 화면이 나오지 않는다.
// when I accept props But now, as I mentioned we'll not work with some attributes
// but instead we will use one special prop which is built into React, which every component receives,
// even if you're never setting it explicitly.
// And that's a prop which value I wanna output between the opening and closing tag of this div,
// inside of the card component function.
// It's the props.children. Children is a reserved name.
// We don't set a children prop on ExpenseItem.js`s Card
// I'm setting a class named prop and actually at the moment, this won't do anything.
// But I'm not setting a children prop.

// The value of this special children prop will always be the content between the opening and closing tags
// of your custom component.
// between the opening and closing tags of your custom component.
// This content between the opening and closing card tag. That is what will be available on props children inside of that card.

////////////////////////////////////////////////////////////////////////////////
///// Card와 같은 커스텀 wrappers 사용하여 중복되는 CSS 값을 없앨 수 있다!!!!!!!!!!!  //////
function Card(props) {
  // Card 컴포넌트를 wrappers 용도로 사용하는 곳에서 Card에 className을 넣으면 혼동되어 오류가 발생한다.
  // 따라서 아래의 문장을 넣어서 여러 클래스가 적용될 수 있도록 해야한다.
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
