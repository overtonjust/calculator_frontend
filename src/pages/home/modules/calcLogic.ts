const API = import.meta.env.VITE_API;

const validateOperands = (
    event: React.MouseEvent<HTMLButtonElement>,
    display: string,
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) => {

    if(display.length === 0) return;

    const numsRegex = /[0-9]/g;
    const lastChar = display[display.length -1];



    if(!lastChar.match(numsRegex)) {
        setDisplay(prev => {
            const tempArr = prev.split(''); 
            const target = event.target as HTMLButtonElement
            tempArr[tempArr.length - 1] = target.value

            return tempArr.join('')
        })
    } else {
        updateDisplay(event, setDisplay);
    }
};

const updateDisplay =  (
    event: React.MouseEvent<HTMLButtonElement>, 
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) => {
    const target = event.target as HTMLButtonElement
    setDisplay(prev => prev + target.value)
};


const clearDisplay = (
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) => {
    setDisplay('')
};

const handleBackSpace = (
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) => {
    setDisplay(prev => prev.slice(0, -1))
};

const calculateDisplay = async (
    display: string,
    setDisplay: React.Dispatch<React.SetStateAction<string>>,
    calcEditId: number,
    setCalcEditId: React.Dispatch<React.SetStateAction<number>>
) => {
    try {
        await eval(display)
        const calculation = `${display}=${eval(display)}`;
        setDisplay(prev => `${eval(prev)}`)  
        if(calcEditId > 0) {
            fetch(`${API}/history/${calcEditId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({calculation: calculation})
            })
            setCalcEditId(-1)
        } else {
            fetch(`${API}/history/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({calculation: calculation})
            });
        }
    } catch (error) {
        setDisplay(prev => `${prev}\nFormat Error`)
    }
}



export { updateDisplay, clearDisplay, validateOperands, handleBackSpace, calculateDisplay }