import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Silde from '../components/sider';
import Header from '../components/header';

// 路由页面
import Login from '../pages/login'
import Main from '../pages/main';
import Unkown from '../pages/unkown';


const mapStateToProps = state => ({
    menus: state.menus,
    auth: state.auth
})

// const mapDispatchToProps = dispatch => {
//     return {
//         setMenus(arr) {
//             dispatch(action.SET_CURRENT_MENUS(arr))
//         }
//     }
// }
@connect(
    mapStateToProps,
    null
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
        // function S2N(arr) {
        //     arr.forEach(v => {
        //         if (v.child && v.child.length > 0) {
        //             S2N(v.child)
        //         };
        //         v.id = String(v.id);
        //     });
        //     return arr
        // };
        // this.props.setMenus(S2N(menus));
    }
    // componentWillReceiveProps = nextProps => {
    //     this.setState({
    //         menuOpenId: nextProps.menus[0].id
    //     });
    // }
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