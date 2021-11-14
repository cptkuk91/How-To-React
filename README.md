# 생활코딩! Node를 공부해봅시다~

입문자의 눈 높이에 맞췄다고..하셨지만..

### `생활코딩! Node.js 프로그래밍`

#

## ⭐️ P137 예제 23-2 readdir.js 파일 생성 후 파일 목록을 읽어오는 코드 작성
testFolder 경로를 './data' 에서 './../data' 수정 후 작동 

#

### `동기(synchronous) 와 비동기(asynchronous)`
동기(synchronous) : 하나의 작업이 끝날 때까지 기다렸다가 다음 작업을 처리하는 방식을 동기 처리 방식이라고 합니다.
비동기(asynchronous) : 동시에 여러 가지 일을 처리하는 방식을 비동기 처리 방식이라고 합니다.
*비동기 처리 방식으로 동작하면 효율적이지만 매우 복잡하다는 단점을 가지고 있습니다.
## ⭐️ P162 참고



### pm2에 대해서 알아보자.
설치 : npm i pm2 -g 
실행 : pm2 start main.js
감시 : pm2 monit
목록 확인 : pm2 list

#

## Add How to Use React Tech

### PropTypes 종류
* array: 배열
* arrayOf: 특정 PropTypes로 이루어진 배열을 뜻합니다. ex) arrayOf(PropTypes.number)는 숫자로만 이루어진 배열입니다.
* bool: true, false
* func: 함수
* number: 숫자
* object: 객체
* string: 문자열
* 기타 등등 추후 https://velog.io/@cptkuk91 업데이트 예정

### defaultProps와 propTypes는 꼭 사용해야 할까?
필수 사항은 아닙니다. 하지만 큰 규모의 프로젝트를 진행 할 경우 다른 개발자들과의 협업을 위해 권장합니다. 해당 컴포넌트에서 어떤 props가 필요한지 쉽게 알 수 있습니다.

### 이벤트 사용 주의 사항
* onclick은 반드시 onClick으로 작성, onkeyup은 반드시 onKeyUp으로 작성합니다.
