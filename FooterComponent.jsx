import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved @ BHAGATH</span>
                </footer>
            </div>
            </div>
        )
    }
}

export default FooterComponent
