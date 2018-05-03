import React, { Component } from 'react';
export default class extends Component {
    state = {
        name: 123
    }
    componentDidMount() {
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <div className='loadingContainer' onClick={() => {
                this.setState({
                    name: 467
                })
            }}>
                <div>
                    {this.state.name}
                </div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <svg id="textPathDemo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="960" viewBox="0 0 581 120">
                    <path stroke="#FF4444" d="M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1" fill="none" stroke-width="1" stroke-dasharray="5 5" id="text-path1"></path>
                    <text>
                        <textPath xlinkHref="#text-path1" class="text-content" textLength="160" startOffset="160">
                            SVG 文字路径动画123
                        </textPath>
                    </text>
                </svg>
            </div >
        )
    }
}