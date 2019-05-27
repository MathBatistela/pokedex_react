import React, { Component } from 'react'
import { Button } from "react-bootstrap"

export class MyButton extends Component {
    render() {
        return (
            <div>
                <Button>{this.props.children}</Button>
            </div>
        )
    }
}

export default MyButton
