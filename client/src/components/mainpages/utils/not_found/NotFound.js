import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

function NotFound() {

    return (
        <section className="page_404">
            <h1 className="title">404 Error Page</h1>
            <p className="zoom-area"> Can't solve your request! </p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link to="/" className="more-link">Back to homepage</Link>
            </div>
        </section>
    )
}

export default NotFound