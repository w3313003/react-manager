import action from '../action';


export function setMenus(menus) {
    return (dispatch, getState) => {
        // console.log(menus)
        // function S2N(arr) {
        //     arr.forEach(v => {
        //         if (v.child && v.child.length > 0) {
        //             S2N(v.child)
        //         };
        //         v.id = String(v.id);
        //     });
        //     return arr
        // };
        dispatch(action.SET_CURRENT_MENUS(menus));
    }
}