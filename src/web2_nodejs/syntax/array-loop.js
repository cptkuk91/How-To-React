var number = [1, 400, 12, 34, 5, 767];
var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    {/* 현재 값에 배열을 계속해서 더해나간다. */}
    console.log(number[i]);
    i = i + 1;
}

console.log(`total : ${total}`);