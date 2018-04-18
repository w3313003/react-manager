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
                    <MenuItem key={sub.id} >
                        {sub.title}
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
                        openKeys={this.props.openKey}
                        selectedKeys={this.props.selectKey}
                        onSelect={item => {
                            this.props.history.push(item.key)
                        }}
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

var arr = 'abcdaabc';

var info = arr
    .split('')
    .reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
console.log(info);

const a = true, b = false;
function t() {
   return a || b, 23;
}
console.log(t());