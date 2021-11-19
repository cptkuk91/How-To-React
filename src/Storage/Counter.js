import React, { Component } from 'react'

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick = {() => {
                        // this.setState를 통해 state에 새로운 값을 넣을 수 있다.
                        // this.setState(prevState => {
                        //     return{
                        //         number: prevState.number + 1
                        //     };
                        // });
                        // 위와 아래는 결국 같다.
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log("방금 setState가 호출됐습니다.");
                            });
                            console.log(this.state);
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
