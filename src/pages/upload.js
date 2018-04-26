import React from 'react';
import { Upload, message, Button, Icon, Slider } from 'antd';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Upload name='files' action='http://localhost:8080/img' onChange={(info) => {
                    console.log(info);
                }}>
                    <Button>
                        <Icon type="upload" />
                        Click to Upload
                    </Button>
                </Upload>
                <Slider vertical/>
            </div>
        )
    }
}