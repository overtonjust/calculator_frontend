// Dependencies
import { useState, useEffect, useContext } from 'react';
import './CalcHistory.scss';

// Components
import { CiSquareRemove } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

// Context
import { CalcContext } from '../context/CalcContext';

// Modules
import { removeCalculation } from '../modules/calcLogic';


const CalcHistory = () => {

    const { calcEditId, setCalcEditId } = useContext(CalcContext);

    interface calculation {
        id: number,
        calculation: string
    }

    interface historyItem {
        time_recorded: string,
        calculations: calculation[]
    }
    const[calcHistory, setCalcHistory] = useState<Array<historyItem>>([{time_recorded: '', calculations: [{id: -1, calculation: ''}]}]);
    const API = import.meta.env.VITE_API;

    useEffect(() => {
        fetch(`${API}/history`)
            .then(res => res.json())
            .then(res => setCalcHistory(res))
        },[calcHistory]);
        
    return (
        <section className="calc-history">
            <article className='calc-history__view'>
                {calcHistory.map((historyItem, idx) => {
                    const displayDate = new Date(historyItem.time_recorded)
                    .toLocaleDateString('en-us', 
                        { 
                        month: 'long',
                        day: 'numeric'
                    });

                    const today = new Date()
                    .toLocaleDateString('en-us',
                        {
                            month: 'long',
                            day: 'numeric'
                        }
                    );

                    return (
                        <section key={idx}>
                            <h4 className='calc-history__date'>{displayDate == today ? 'Today' : displayDate}</h4>
                            {historyItem.calculations.map(calc => {
                                return (
                                    <div key={calc.id} className='calc-history__line-item'>
                                        <p  
                                            className='calc-history__calc'
                                        >
                                            {calc.calculation} 
                                        </p>
                                        <span
                                            className='calc-history__icons' 
                                        >
                                            {calcEditId === calc.id ?
                                                <CiSquareCheck 
                                                className='calc-history__edit'
                                                onClick={() => setCalcEditId(-1)}
                                                />
                                            :
                                                <FaRegEdit 
                                                className='calc-history__edit'
                                                onClick={() => setCalcEditId(calc.id)}
                                                />
                                            }
                                            <CiSquareRemove 
                                                className='calc-history__remove'
                                                onClick={() => removeCalculation(calc.id, setCalcEditId)}
                                                />
                                        </span>
                                    </div>
                                )
                            })}
                        </section>
                    )
                })}
            </article>
        </section>
    );
};

export default CalcHistory;