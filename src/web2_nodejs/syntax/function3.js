function sum(first, second){
    console.log('A');
    return first + second;
    console.log('B');
    {/* return은 함수의 종료를 뜻합니다. 따라서 return 이후의 명령어는 생략됩니다. */}
}

console.log(sum(2,4));