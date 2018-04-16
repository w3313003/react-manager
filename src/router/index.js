import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '.././store/action';
import { Menu, Icon, Button } from 'antd';

import menus from '../util/index';
import MenuItem from 'antd/lib/menu/MenuItem';


const mapStateToProps = state => ({
    menus: state.menus
})

const mapDispatchToProps = dispatch => {
    return {
        setMenus(arr) {
            dispatch(action.SET_CURRENT_MENUS(arr))
        }
    }
}
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    componentWillMount() {
        function S2N(arr) {
            arr.forEach(v => {
                if(v.child && v.child.length > 0) {
                    S2N(v.child)
                };
                v.id = String(v.id);
            });
            return arr
        };
        this.props.setMenus(S2N(menus));
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    // 递归渲染菜单子项
    renderMenus(arr) {
        return arr.map((sub, index) => {
            if (typeof sub.child !== undefined && sub.child.length > 0) {
                 return (
                    <Menu.SubMenu key={sub.id} title={sub.title}>
                        {this.renderMenus(sub.child)}
                    </Menu.SubMenu>
                )
            } else {
                return (
                    <MenuItem key={sub.id}>
                         <Link to={sub.path}>{sub.title}</Link>
                    </MenuItem>
                )
            }
        })
    }
    render() {
        const defaultShow = Array.isArray(this.props.menus) && this.props.menus.length >= 1 ? this.props.menus[0].id : null;
        return (
            <Router>
                <div>
                    <div style={{ width: 180 }}>
                        <Button type='primary' style={{ marginBottom: 16 }} onClick={this.toggleCollapsed} >
                            切换
                        </Button>
                        <Menu
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                            defaultSelectedKeys={['20']}
                            defaultOpenKeys={['defaultShow']}
                        >
                            {this.props.menus.map((menus, index) => (
                                <Menu.SubMenu key={menus.id} title={<span>{menus.title}</span>}>
                                    {this.renderMenus(menus.child)}
                                </Menu.SubMenu>
                            ))}
                        </Menu>
                    </div>
                </div>
            </Router>
        )
    }
}