import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import Tab from './tabs'

@connect(
    state => ({
        menus: state.menus
    }),
    null
)
@withRouter
class Header extends React.Component {
    render() {
        return (
            <div className='headerWrap'>
                <div className='breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Tab />
            </div>
        )
    }
}

export default Header