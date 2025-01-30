import { useState } from 'react';
import { FaBackspace } from 'react-icons/fa';

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const updateDisplay: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const target = event.target as HTMLButtonElement
        setDisplay(prev => prev + target.value)
    }

    const clearDisplay = () => {
        setDisplay('')
    }
    return (
        <article className='calc'>
            <section data-testid='calcScreen' className='calc__screen'>{display}</section>
            <section className='calc__row'>
                <button onClick={clearDisplay} className='calc__option-btn'>AC</button>
                <button className='calc__option-btn'>()</button>
                <button className='calc__option-btn'>%</button>
                <button value={"÷"} className='calc__option-btn'>÷</button>
            </section>
            <section className='calc__row'>
                <button value={7} onClick={updateDisplay} className='calc__btn'>7</button>
                <button value={8} onClick={updateDisplay} className='calc__btn'>8</button>
                <button value={9} onClick={updateDisplay} className='calc__btn'>9</button>
                <button value={"x"} onClick={updateDisplay} className='calc__option-btn'>x</button>
            </section>
            <section className='calc__row'>
                <button value={4} onClick={updateDisplay} className='calc__btn'>4</button>
                <button value={5} onClick={updateDisplay} className='calc__btn'>5</button>
                <button value={6} onClick={updateDisplay} className='calc__btn'>6</button>
                <button value={"-"} onClick={updateDisplay} className='calc__option-btn'>-</button>
            </section>
            <section className='calc__row'>
                <button value={1} onClick={updateDisplay} className='calc__btn'>1</button>
                <button value={2} onClick={updateDisplay} className='calc__btn'>2</button>
                <button value={3} onClick={updateDisplay} className='calc__btn'>3</button>
                <button value={"+"} onClick={updateDisplay} className='calc__option-btn'>+</button>
            </section>
            <section className='calc__row'>
                <button value={0} onClick={updateDisplay} className='calc__btn'>0</button>
                <button value={"."} onClick={updateDisplay} className='calc__btn'>.</button>
                <button value={"del"} className='calc__btn'><FaBackspace/></button>
                <button className='calc__option-btn'>=</button>
            </section>
        </article>
    );
};

export default Calculator;