import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '.././store/action';
import menus from '../util/index';
import Silde from '../components/sider';
import Header from '../components/header';

// 路由页面
import Main from '../pages/main';
import Unkown from '../pages/unkown';

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
                if (v.child && v.child.length > 0) {
                    S2N(v.child)
                };
                v.id = String(v.id);
            });
            return arr
        };
        this.props.setMenus(S2N(menus));
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            menuOpenId: nextProps.menus[0].id
        });
    }
    render() {
        return (
            <Router>
                <div className='wrap'>
                    <Silde />
                    <div className='rightWrap'>
                        <Header /> 
                        <div className='main'>
                            <div className="innerWrap">
                                <div className="inner2Wrap">
                                    <Switch>
                                        <Route exact path='/main' component={Main}/>
                                        <Route component={Unkown}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}