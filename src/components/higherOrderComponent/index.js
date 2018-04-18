import React from 'react';

export function FormHOC(Comp) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                password: ''
            }
        }
        handleChange = (key, value) => {
            this.setState({
                [key]: value
            })
        }
        render() {
            return <Comp handleChange={this.handleChange} {...this.state} />
        }
    }
}