
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


export { updateDisplay, clearDisplay}