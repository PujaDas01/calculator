import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';

const deleteIcon = <span className='deleteButton'>x</span>;
let operators = ['+', '-', '/', '*', '.'];

const App = () => {
  const [number, setNumber] = useState('');
  const [finalResult, setFinalResult] = useState('');

  const handleClick = (e) => {
    let currentValue = e.target.name;
    let isOperatorPresent =  operators.includes(currentValue) && operators.includes(number[number.length-1]);
    if (isOperatorPresent) {
      let newNumber = number.slice(0, number.length-1);
      newNumber = newNumber + currentValue;
      setNumber(newNumber);
    } else {
      let newValue = number.concat(currentValue);
      setNumber(newValue);
    }
  }

  const handleClear = () => {
    setNumber('');
    setFinalResult('');
  }

  const handleCut = () => {
    const numbers = number.length > 0 ? number.slice(0, - 1) : number;
    setNumber(numbers);
  }

  const handleResult = (value) => {
    if(!isNaN(value)) {
      return;
    }
    console.log('value', value, typeof value);
    const operators = value?.replace(/[0-9.]/g, "");
    console.log('operators', operators);
    let numbers = value.split(/[+\-/*]/);
    console.log('numbers', numbers);


    let result = Number(numbers[0]);
    for(let i = 1; i < numbers.length; i++) {
      let currentOperator = operators[i-1];
      console.log('currentOperator', currentOperator);
      if(!currentOperator) {
        currentOperator = operators[operators.length-1];
      }
      switch(currentOperator) {
        case '+':
          console.log('currentResultPlus', result);
          result = result + Number(numbers[i]);
          break;
        case '-':
          console.log('currentResultMinus', result);
          result = result - Number(numbers[i]);
          break;
        case '*':
          console.log('currentResultMinus', result);
          result = result * Number(numbers[i]);
          break;
        case '/':
          console.log('currentResultMinus', result);
          result = result / Number(numbers[i]);
          break;
        default: 
          break;
      }
    }
    if(result.toString().split('.').length === 2) {
      result = result.toFixed(2);
    }
    setFinalResult(result.toString());
    console.log('result', result);
  }

  return (
    <div className='calculator-container'>
      <div className='calculator-content'>
        <div className='result-container'>
          <input className='value' readOnly value={number.split('').map((n) => {
            if(operators.includes(n) && n !== '.') {
              return " " + n + " ";
            } return n;
          }).join('')} />
          <input className='result' readOnly value={finalResult} />
        </div>
        <div className='keypad-container'>
          <div className='btn-container'>
            <Button
              btnText='C'
              onClick={handleClear}
            />
            <Button
              btnText='7'
              name='7'
              onClick={handleClick}
            />
            <Button
              btnText='4'
              name='4'
              onClick={handleClick}
            />
            <Button
              btnText='1'
              name='1'
              onClick={handleClick}
            />
            <Button
              btnText='.'
              name='.'
              onClick={handleClick}
            />
          </div>
          <div className='btn-container'>
            <Button
              btnText='MC'
              onClick={handleClear}
            />
            <Button
              btnText='8'
              name='8'
              onClick={handleClick}
            />
            <Button
              btnText='5'
              name='5'
              onClick={handleClick}
            />
            <Button
              btnText='2'
              name='2'
              onClick={handleClick}
            />
            <Button
              btnText='0'
              name='0'
              onClick={handleClick}
            />
          </div>
          <div className='btn-container'>
            <Button
              btnText='/'
              name='/'
              onClick={handleClick}
            />
            <Button
              btnText='9'
              name='9'
              onClick={handleClick}
            />
            <Button
              btnText='6'
              name='6'
              onClick={handleClick}
            />
            <Button
              btnText='3'
              name='3'
              onClick={handleClick}
            />
            <Button
              btnText={deleteIcon}
              name='x'
              onClick={handleCut}
            />
          </div>
          <div className='btn-container last-column'>
            <Button
              btnText='*'
              name='*'
              onClick={handleClick}
            />
            <Button
              btnText='-'
              name='-'
              onClick={handleClick}
            />
            <Button
              btnText='+'
              name='+'
              onClick={handleClick}
            />
            <Button
              className
              btnText='='
              onClick={() => handleResult(number)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;