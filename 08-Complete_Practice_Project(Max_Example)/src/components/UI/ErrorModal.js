import React from 'react';
// ReactDOM 외에 다른 이름으로 해도 된다. react-dom은 브라우저와만 사용되는 디펜전시다
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        {/* Button 컴포넌트에 onClick={props.onClick}이 없으면 onClick은 동작하지 않음. */}
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  // The createPortal method takes two arguments.
  // The first one is your React node that should be rendered. Important it wants JSX,
  // onClick={props.onConfirm}, Since we look for props.onConfirm inside of the Backdrop

  // The second argument of createPortal is a pointer to that container
  // in the real DOM where this elements should be rendered in. (index.html에 지정함.)
  //

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
