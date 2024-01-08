import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button className={`btn ${props.className ? 'equals-to-btn' : ''}`} name={props.name} onClick={props.onClick}>{props.btnText}</button>
  )
}

export default Button;