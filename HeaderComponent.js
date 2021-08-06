import React, { Component } from 'react'
import Navbar from './Navbar'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>                    
                    <Navbar />
                </header>
            </div>
        )
    }
}

export default HeaderComponent
