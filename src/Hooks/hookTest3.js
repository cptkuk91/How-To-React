// 객체 다루기
const array = [
    {id: 1, value: true},
    {id: 2, value: true},
    {id: 3, value: false}
];

let nextArray = array.concat({id: 4});
console.log(nextArray);

nextArray.filter(item => item.id !== 2); // 객체 id가 2인 친구 제거하기
console.log(nextArray);
nextArray.map(item => (item.id === 1 ? {...item, value: false} : item));
// id 값이 1인 친구는 value를 false로 바꾸고, 나머지는 내비둬라.
console.log(nextArray);