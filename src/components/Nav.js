import '../index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class nav extends Component {
    static propTypes = {

    }

    navStyle={
        color:'white',
        textDecoration:'none'
    }

    render() {
        return (
            <nav>
                <Link to='/' style={this.navStyle}>
                <h3>LOGO</h3>
                </Link>
                <ul className='nav-links'>
                    <Link to='/about' style={this.navStyle}>
                    <li >About</li>
                    </Link>
                    <Link to='/shop' style={this.navStyle}>
                    <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default nav
