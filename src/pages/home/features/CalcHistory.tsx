// Dependencies
import { useState, useEffect } from 'react';
import './CalcHistory.scss';

const CalcHistory = () => {
    interface historyItem {
        time_recorded: string,
        calculations: string[]
    }
    const[calcHistory, setCalcHistory] = useState<Array<historyItem>>([{time_recorded: '', calculations: ['']}]);
    const API = import.meta.env.VITE_API;

    useEffect(() => {
        fetch(`${API}/history`)
            .then(res => res.json())
            .then(res => setCalcHistory(res))
        },[calcHistory]);
        
    return (
        <section className="calc-history">
            <article className='calc-history__item'>
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
                            <h4>{displayDate == today ? 'Today' : displayDate}</h4>
                            {historyItem.calculations.map((calc,idx) => {
                                return (
                                    <p key={idx}>{calc}</p>
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