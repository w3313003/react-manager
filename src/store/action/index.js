import types from './type';

export default {
    [types.SET_CURRENT_MENUS]: payload => ({
        type: types.SET_CURRENT_MENUS,
        payload
    }),
    [types.SET_AUTH]: payload => ({
        type: types.SET_AUTH,
        payload
    }),
    [types.SET_OPENKEYS]: payload => ({
        type: types.SET_OPENKEYS,
        payload
    })
};

