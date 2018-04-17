import types from '../action/type';

let pathArr = window.location.hash.replace(/#/,'').split(/\b(?=\/)/g),
    selectKey = pathArr.length === 1 ? pathArr : pathArr.splice(pathArr.length - 1, 1);
const _initState = {
    menus: [],
    openKey: pathArr,
    selectKey
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