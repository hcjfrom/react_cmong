import React, { Component } from 'react';
import InfoConts from './InfoConts.js'
import UtileHead from './UtileHead.js'
import Footer from '../Footer/Footer.js'

class MainPage extends Component {
    render() {
        return (
            <div>
                <UtileHead />
                <InfoConts />
                <Footer />
            </div>
        );
    }
}

export default MainPage;