import React, { Component } from 'react'
import Button from '../../NavButton/NavButton'

class communicationsHome extends Component {
    render () {
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <h1 className="title">Lazy Loading</h1>
                        <h2 className="subtitle">
                            A simple app to demonstrate how lazy loading routes in React works.
                        </h2>
                        <section className="bottom">
                            <Button name="Go to Applicant Page" link="/maps" />
                            <Button name="Go to the other one" link="/blog" />
                        </section>
                    </div>
                </section>

            </div>
        )
    }
}

export default communicationsHome
