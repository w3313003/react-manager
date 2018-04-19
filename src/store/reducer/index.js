import types from '../action/type';

// let pathArr = window.location.hash.replace(/#/, '').split(/\b(?=\/)/g),
//     selectKey = pathArr.length === 1 ? pathArr : pathArr.splice(pathArr.length - 1, 1);

let path = window.location.hash.replace(/#/, '');

// 获取当前路径匹配对象Id
let result = '';
function getDeepPathId(menus, path) {
    if (!menus || !menus.length) return;
    let stack = [],
        item = null;
    for (var i = 0, len = menus.length; i < len; i++) {
        stack.push(menus[i]);
    };
    while (stack.length) {
        item = stack.shift();
        if (item.path === path) {
            result = item.id
        }
        if (item.child && item.child.length) {
            stack = stack.concat(item.child);
        }
    };
    return result;
}
// 收集直系父级对象
function SearchId(menus, id) {
    let arr = [];
    function t(menus, id) {
        if (!menus || !menus.length) return;
        if (menus.some(v => v.id === id)) return;
        let stack = [],
            item = null;
        for (var i = 0, len = menus.length; i < len; i++) {
            stack.push(menus[i]);
        };
        while (stack.length) {
            item = stack.shift();
            if (item.id === id) {
                arr.push(item.parent_id);
                if (item.parent_id !== 0) {
                    t(menus, item.parent_id);
                }
            }
            if (item.child && item.child.length) {
                stack = stack.concat(item.child);
            }
        };
    }
    t(menus, id);
    return arr.map(v => String(v));
};
const _initState = {
    menus: JSON.parse(sessionStorage.getItem('menus')) || [],
    auth: JSON.parse(sessionStorage.getItem('auth')) || false,
    openKey: [],
    selectKey: []
};



export default (state = _initState, action) => {
    const { payload, type } = action;
    switch (type) {
        case types.SET_CURRENT_MENUS:
            return { ...state, menus: payload };
        case types.SET_AUTH:
            return { ...state, auth: payload };
        case types.SET_OPENKEYS:
            return {...state,selectKey: [`${getDeepPathId(state.menus, path)}`] ,openKey: SearchId(state.menus, getDeepPathId(state.menus, path))};
        default:
            return state;
    }
}
