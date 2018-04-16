import types from '../action/type';
const _initState = {
    menus: []
};

export default (state = _initState, action) => {
    const { payload, type } = action;
    switch(type) {
        case types.SET_CURRENT_MENUS:
            return {...state, menus: payload};
        default:
            return state;
    }
}