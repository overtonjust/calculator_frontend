// Dependencies
import { useState, } from 'react';
import './Calculator.scss';

// Components
import { FaBackspace } from 'react-icons/fa';

// Modules
import { 
    clearDisplay, 
    updateDisplay, 
    validateOperands, 
    handleBackSpace,
    calculateDisplay 
} from '../modules/calcLogic';

const Calculator = () => {
    const [display, setDisplay] = useState<string>('');

    return (
        <article className='calc'>
            <section data-testid='calcScreen' className={`${display.endsWith('Error') && 'error'} calc__screen`}>{display}</section>
            <section className='calc__row'>
                <button onClick={() => clearDisplay(setDisplay)} className='calc__option-btn clear'>AC</button>
                {/* <button className='calc__option-btn'>()</button> */}
                {/* <button className='calc__option-btn'>%</button> */}
                <button value={"/"} onClick={(e) => validateOperands(e, display, setDisplay)} className='calc__option-btn'>/</button>
            </section>
            <section className='calc__row'>
                <button value={7} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>7</button>
                <button value={8} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>8</button>
                <button value={9} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>9</button>
                <button value={"*"} onClick={(e) => validateOperands(e, display, setDisplay)} className='calc__option-btn'>*</button>
            </section>
            <section className='calc__row'>
                <button value={4} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>4</button>
                <button value={5} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>5</button>
                <button value={6} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>6</button>
                <button value={"-"} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__option-btn'>-</button>
            </section>
            <section className='calc__row'>
                <button value={1} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>1</button>
                <button value={2} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>2</button>
                <button value={3} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>3</button>
                <button value={"+"} onClick={(e) => validateOperands(e, display, setDisplay)} className='calc__option-btn'>+</button>
            </section>
            <section className='calc__row'>
                <button value={0} onClick={(e) => updateDisplay(e, setDisplay)} className='calc__btn'>0</button>
                <button value={"."} onClick={(e) => validateOperands(e, display, setDisplay)} className='calc__btn'>.</button>
                <button value={"del"} data-testid='backSpace' onClick={() => handleBackSpace(setDisplay)} className='calc__btn'><FaBackspace/></button>
                <button data-testid='equals' className='calc__option-btn' onClick={() => calculateDisplay(display, setDisplay)} >=</button>
            </section>
        </article>
    );
};

export default Calculator;