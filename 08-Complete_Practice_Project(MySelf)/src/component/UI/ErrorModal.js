import React from 'react';
import './ErrorModal.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className='backdrop' onClick={props.modalOff} />
      <Card className='modal'>
        <header className='header'>
          <h2>유효하지 않은 입력</h2>
        </header>
        <div className='content'>
          <p>{props.emptyError || props.ageError}</p>
        </div>
        <footer onClick={props.modalOff} className={'actions'}>
          <Button>확인</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
