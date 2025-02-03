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

const calculateDisplay = (
    display: string,
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) => {
    try {
        eval(display)
        setDisplay(prev => `${eval(prev)}`)   
    } catch (error) {
        setDisplay(prev => `${prev}\nFormat Error`)
    }
}

/* const calculateWithoutEval = (
    display: string,
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) =>  {
    const nums: { [key: number]: string } = {};
    const operands: { [key: number]: string } = {};
    const elements = display.split('');
    const numsRegex = /[0-9]/g;
    let result = '';
    let currNum = elements[0];
    let key = 1;
    if(!currNum.match(numsRegex)) {
        setDisplay('Format error')
    };
    for(let idx = 1; idx < elements.length; ++idx) {
        const digit = elements[idx];
        if(!digit.match(numsRegex)) {
            nums[key] = currNum;
            operands[key] = digit;
            currNum = ''
            key++
        } else {
            currNum += digit;
        }
    };
}
*/


export { updateDisplay, clearDisplay, validateOperands, handleBackSpace, calculateDisplay }