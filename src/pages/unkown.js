import React from 'react';


const Wrapper = React.createContext({
    name: 123,
    age: 21
})
console.log(Wrapper)

class Unkown extends React.Component {
    render() {
        return (
            <div>
                404页面
            </div>
        )
    }
}

function Child() {
    return (
        <div>123</div>
    )
}

export default Unkown