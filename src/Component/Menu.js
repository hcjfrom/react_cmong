import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/Home" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about?detail=true" activeStyle={activeStyle}>About Foo</NavLink></li>
            </ul>
            <hr/>
            <div>1111</div>
        </div>
    );
};

export default Menu;