import React, { useCallback, useState, useMemo } from 'react'

const getAverage = (numbers) => {
    console.log("평균 값 계산 중..");
    if(numbers.length === 0){
        return 0;
    } else {
        let sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length;
    }
}

const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback((e) => {
        const inputList = list.concat(parseInt(number));
        setList(inputList);
        setNumber('');
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button value={list} onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값: </b>{avg}
            </div>
        </div>
    )
}

export default Average;
