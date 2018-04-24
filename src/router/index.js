import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Silde from '../components/sider';
import Header from '../components/header';
import action from '../store/action';
// 路由页面
import Login from '../pages/login'
import Main from '../pages/main';
import Unkown from '../pages/unkown';


const mapStateToProps = state => ({
    menus: state.menus,
    auth: state.auth
})

const mapDispatchToProps = dispatch => {
    return {
        setOpenKeys() {
            dispatch(action.SET_OPENKEYS())
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
        this.props.setOpenKeys();
    }
    render() {
        if(!this.props.auth) {
            return (
                <Router>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to='/login' />}/>
                            <Route path='/login' component={Login}/>
                        </Switch>
                </Router>
            )
        }
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
                                        <Route exact path='/' render={() => <Redirect to='/main'/>}/>
                                        <Route exact path='/main' component={Main}/>
                                        <Route exact path='/setting/action/test' render={() => (
                                            <div>
                                                123123
                                            </div>
                                        )} />
                                        <Route path='/404' component={Unkown}/>
                                        <Route render={() => <Redirect to='/404'/>}/>
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