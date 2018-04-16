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
            collapsed: false,
            menuOpenId: ''
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

    componentWillReceiveProps = nextProps => {
        this.setState({
            menuOpenId: nextProps.menus[0].id
        });
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
                         <Link to={sub.path}>{sub.title}</Link>
                    </MenuItem>
                )
            }
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <div className='leftWrap' style={{ width: 180 }}>
                        <Button type='primary' style={{ marginBottom: 16 }} onClick={this.toggleCollapsed} >
                            切换
                        </Button>
                        <Menu
                            mode="inline"
                            inlineCollapsed={this.state.collapsed}
                            defaultSelectedKeys={['20']}
                            defaultOpenKeys={['sb']}
                        >
                            {this.props.menus.map((menu, index) => (
                                <Menu.SubMenu key={index === 0 ? 'sb' : menu.id} title={<span>{menu.title}</span>}>
                                    {this.renderSubMenus(menu.child)}
                                </Menu.SubMenu>
                            ))}
                        </Menu>
                    </div>
                    <div className='rightWrap'>
                            123
                    </div>
                </div>
            </Router>
        )
    }
}