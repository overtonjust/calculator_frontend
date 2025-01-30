const validateOperands = (
    event: React.MouseEvent<HTMLButtonElement>,
    display: string,
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) => {

    if(display.length === 0) return;

    const nums = /[0-9]/g;
    const lastChar = display[display.length -1];

    if(!lastChar.match(nums) && lastChar !== '.') {
        setDisplay(prev => {
            const tempArr = prev.split(''); 
            const target = event.target as HTMLButtonElement
            tempArr[tempArr.length - 1] = target.value

            return tempArr.join('')
        })
    } else {
        updateDisplay(event, setDisplay);
    }
}

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


export { updateDisplay, clearDisplay, validateOperands}