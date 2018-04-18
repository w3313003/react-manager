import types from '../action/type';

let pathArr = window.location.hash.replace(/#/,'').split(/\b(?=\/)/g),
    selectKey = pathArr.length === 1 ? pathArr : pathArr.splice(pathArr.length - 1, 1);

let path = window.location.hash.replace(/#/,'');
const _initState = {
    menus: JSON.parse(sessionStorage.getItem('menus')) || [],
    auth: JSON.parse(sessionStorage.getItem('auth')) || false,
    openKey: pathArr,
    selectKey
};

export default (state = _initState, action) => {
    const { payload, type } = action;
    switch(type) {
        case types.SET_CURRENT_MENUS:
            return {...state, menus: payload};
        case types.SET_AUTH:
            return {...state, auth: payload};
        case types.SET_OPENKEYS:
            state.menus.forEach(parent => {

            })
            return;
        default:
            return state;
    }
}

function getDeepPathId(menus, path) {
    
}
