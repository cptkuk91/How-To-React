var args = process.argv;
console.log(args[2]);

console.log('A');
console.log('B');

if(args[2] == 1){
    console.log('C1');
} else{
    console.log('C2');
}
// 반대로 if 값에 false 를 줄 경우 else 를 실행하게 됩니다.

console.log('D');