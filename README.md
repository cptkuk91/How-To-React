# 생활코딩! Node를 공부해봅시다~

입문자의 눈 높이에 맞췄다고..하셨지만..

### `생활코딩! Node.js 프로그래밍`

⭐️ P137 예제 23-2 readdir.js 파일 생성 후 파일 목록을 읽어오는 코드 작성

testFolder 경로를 './data' 에서 './../data' 수정 후 작동 
var testFolder = './../data';
var fs = require('fs');

fs.readdir(testFolder, function (err, filelist){
   console.log(filelist);
});
