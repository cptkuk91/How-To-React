import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균 값 계산 중");
  if (numbers.length === 0) {
    return 0;
  } else {
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  }
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    // 선언한 값을 list에 concat해 합쳐준다.
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
          <b>평균 값: </b>{avg}
      </div>
    </div>
  );
};

export default Average;
