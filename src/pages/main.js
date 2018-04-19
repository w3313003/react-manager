import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div >
                <form action='http://localhost:8080/img' method="post" id="foo" >
                    <input type="text" name="username" />
                    <input type="password" name="password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}