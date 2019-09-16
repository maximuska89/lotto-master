import React from 'react';

const LottoNumbers = (props) => {
    const onGenerateHandler = () => {
        const numbers = new Array(6).fill(null);
        for (let i = 0; i < numbers.length; i++) {
            let nextNumber = null;
            while (numbers.includes(nextNumber)) {
                nextNumber = Math.ceil(Math.random() * 45 + 1);
            }
            numbers[i] = +nextNumber;
        }
        props.setNumbers(numbers);
    };
    return (
        <>
            <button onClick={onGenerateHandler}>Generate</button>
            <div>
                <span>A nyerőszámok: </span>
                {props.lottoNumbers.sort((a, b) => a - b).map(n => <span> {n}</span>)}
            </div>

        </>
    )
};

export default LottoNumbers;