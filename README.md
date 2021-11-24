# 리액트를 다루는 기술.. 공부중..

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

### Key
key값이 중복된다면 렌더링 과정에서 오류가 발생할 수 있습니다. key값을 설정 안해도 작동은 하지만 key값을 활용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있기 때문에 key값 사용을 권장합니다.

### 배열 (메소드)
Map, Filter 등 다양한 배열 내장 함수를 사용하여 새로운 배열을 만든 후 사용해야 합니다. 따라서 추가적인 공부가 계속해서 필요합니다.

