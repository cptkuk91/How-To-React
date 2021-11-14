import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        // state의 초기값 설정하기
        this.state = {
            number: 0,
        };
    }
    render() {
        const {number} = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return(
            <div>
                <h1>{number}</h1>
                <button
                    onClick = {() => {
                        // this.setState를 통해 state에 새로운 값을 넣을 수 있다.
                        this.setState({number: number +1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
