import React, { Component } from 'react'

class ScrollBox extends Component {
    scrollToBottom = () => {
        const{scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    // scrollTop: 세로 스크롤바 위치 (0~350)
    // scrollHeight: 스크롤이 있는 박스 안의 div 높이 (650)
    // clientHeight: 스크롤이 있는 박스의 높이 (300)
    render() {
        const style = {
            border: '1px solid black',
            height: '900px',
            width: '900px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '1400px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box = ref}}>
                <div style={innerStyle}/>
            </div>
        )
    }
}

export default ScrollBox;