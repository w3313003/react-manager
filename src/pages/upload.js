import React from 'react';
import { Upload, Button, Icon } from 'antd';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Upload name='files' action='http://localhost:8080/img' onChange={(info) => {
                    console.log(info);
                }}>
                    <Button>
                        <Icon type="upload" />
                        点击上传
                    </Button>
                </Upload>
            </div>
        )
    }
}