import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Recommendations</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Statistics</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
