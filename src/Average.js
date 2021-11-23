import React, { useState, useRef, useCallback, useMemo } from 'react'

const getAverage = (numbers) => {
    console.log("평균 값 계산 중..");
    if(numbers.length === 0){
        return 0;
    } else {
        let sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length
    };
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback((e) => {
        // concat을 통해 list에 넣어주자.
        let inputList = list.concat(parseInt(number));
        setList(inputList);
        setNumber('');
        inputEl.current.focus();
    }, [list, number]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((number, index) =>(
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <div>
                <b>평균 값: </b>{avg}
            </div>
        </div>
    )
}

export default Average
