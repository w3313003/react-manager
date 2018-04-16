import types from './type';

export default {
    [types.SET_CURRENT_MENUS]: payload => ({
        type: types.SET_CURRENT_MENUS,
        payload
    })
}