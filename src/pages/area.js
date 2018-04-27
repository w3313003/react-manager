import React, { Component } from 'react';
import { Cascader, Modal, Button, Divider, Tree } from 'antd';
import data from '../util/area'
import { connect } from 'react-redux';
import axios from '../axios/index';
@connect(
    state => ({
        menus: state.menus
    }),
    null
)
export default class extends Component {
    state = {
        ModalShow: false
    }
    getData() {
        axios.get('/').then(res => {

        });
    }
    componentDidMount() {

    }
    render() {
        function renderTreeNode(tree) {
            return tree.map(node => {
                if(node.child.length > 0) {
                    return (
                        <Tree.TreeNode title={node.title} key={node.id} dataRef={node}>
                            {renderTreeNode(node.child)}
                        </Tree.TreeNode>
                    );
                };
                return <Tree.TreeNode title={node.title} key={node.id} dataRef={node}/>; 
            });

        }
        return (
            <div>
                {this.state.name}
                <Cascader 
                    options={data} 
                    showSearch={true} 
                    changeOnSelect  
                    placeholder='请选择地区' 
                    onChange={(value, selectedOptions) => {
                        console.log(value);
                        console.log(selectedOptions);
                    }} style={{width: '300px'}}
                />
                <Divider />
                <Button type='primary' onClick={() => {
                    this.setState({
                        ModalShow: true
                    });
                }}>
                    Open
                </Button>
                <Tree
                    checkable
                    showLine
                >
                    {renderTreeNode(this.props.menus)}
                </Tree>
                <Modal 
                    title='test'
                    visible={this.state.ModalShow}
                    onCancel={e => {
                        console.log(e);
                        this.setState({
                            ModalShow: false
                        })
                    }}
                >
                    <p>
                        test
                    </p>
                </Modal>
            </div>
        )
    }
}