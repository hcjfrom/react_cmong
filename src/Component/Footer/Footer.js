import React, { Component } from 'react';

class Footer extends Component {
    
    render(){
        return (
            <div className="footImg">
                <img src={require("../../images/common/footer.jpg")} alt="" />
            </div>
        );
    }
}

export default Footer;