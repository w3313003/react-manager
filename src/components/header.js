import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';

@connect(
    state => ({
        menus: state.menus
    }),
    null
)
@withRouter
class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className='headerWrap'>
                <div className='breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        )
    }
}

export default Header