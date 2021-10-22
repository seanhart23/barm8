import './footer.css';
import React from 'react';

export class Footer extends React.Component {


    render() {
        return (
            <div id='footer'>
                <div class='brand'>Bar M8</div>
                <h1 class='download-tag'>Download Bar M8 free today</h1>
                <div class='container'>
                    <div class='store-wrapper store-wrapper-footer'>
                                <img src='appstore.svg' class='store-button-footer'></img>

                                <img src='googleplay.svg' class='store-button-footer'></img>
                          
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;