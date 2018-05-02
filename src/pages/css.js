import React, { Component } from 'react';
import * as Sort from '../util/sort';
export default class extends Component {
    state = {
        name: 123
    }
    componentDidMount() {
        var arr =[12, 20, 30, 21, 15, 33, 26, 19, 40, 25]
        var warr = [3, 5, 6, 1]
        const { InsertSort, SelectSort, BubbleSort, QuickSort, MergeSort } = Sort;
        let randomArr = [];
        for(let i = 99; i > 0; i --) {
            randomArr.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
        };
        console.log(randomArr)
        console.log(MergeSort(arr));
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
            </div>
        )
    }
}