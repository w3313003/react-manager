import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Button } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { withRouter } from 'react-router-dom'
@connect(
    state => ({
        menus: state.menus,
        openKey: state.openKey,
        selectKey: state.selectKey
    }),
    null
)
@withRouter
class Silde extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    /**
    * 递归渲染子菜单
    * @param {any} menus.child 
    * @returns 
    */
    renderSubMenus(arr) {
        return arr.map((sub, index) => {
            if (typeof sub.child !== undefined && sub.child.length > 0) {
                return (
                    <Menu.SubMenu key={sub.id} title={sub.title}>
                        {this.renderSubMenus(sub.child)}
                    </Menu.SubMenu>
                )
            } else {
                return (
                    <MenuItem key={sub.id}>
                        <div onClick={() => {
                            this.props.history.push(sub.path)
                        }}>
                            {sub.title}
                        </div>
                    </MenuItem>
                )
            }
        })
    }
    render() {
        return (
            <div className='leftWrap' style={{ width: 180, position: 'fixed' }}>
                <Button type='primary' style={{ marginBottom: 16 }} onClick={this.toggleCollapsed} >
                    切换
                </Button>
                <div style={{ height: '100%', width: '196px', overflow: 'scroll' }}>
                    <Menu
                        mode="inline"
                        inlineCollapsed={this.state.collapsed}
                        defaultOpenKeys={this.props.openKey}
                        defaultSelectedKeys={this.props.selectKey}
                    >
                        {this.props.menus.map((menu, index) => (
                            <Menu.SubMenu key={menu.id} title={<span>{menu.title}</span>}>
                                {this.renderSubMenus(menu.child)}
                            </Menu.SubMenu>
                        ))}
                    </Menu>
                </div>
            </div>
        )
    }
}

export default Silde;