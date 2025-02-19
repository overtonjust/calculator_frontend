import { createContext, useState, ReactNode } from 'react';

interface CalcContextProps {
    calcEditId: number;
    setCalcEditId: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: CalcContextProps = {
    calcEditId: -1,
    setCalcEditId: () => {}
}

const CalcContext = createContext<CalcContextProps>(defaultValue);
const CalcProvider = ({ children }: {children: ReactNode }) => {
    const [calcEditId, setCalcEditId] = useState<number>(-1);

    return (
        <CalcContext.Provider value={{ calcEditId, setCalcEditId}}>
            {children}
        </CalcContext.Provider>
    )
}


export { CalcContext, CalcProvider } 