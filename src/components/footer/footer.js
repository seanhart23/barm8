import './footer.css';
import React from 'react';

export class Footer extends React.Component {


    render() {
        return (
            <div id='footer'>
                <div className='brand'>Bar M8</div>
                <h1 className='download-tag'>Download Bar M8 free today</h1>
                <div className='container'>
                    <div className='store-wrapper store-wrapper-footer'>
                        <img src='appstore.svg' className='store-button-footer'></img>
                        <img src='googleplay.svg' className='store-button-footer'></img>
                    </div>
                    <br />
                    <div className='disc-link-wrapper'>
                        <ul>
                            <li className='disc-link'>
                                <a href='https://barm8.com.au/contact' target='_blank'>Contact</a> 
                            </li>
                            <li className='divider'>
                                |
                            </li>
                            <li className='disc-link'>
                                <a href='https://barm8.com.au/terms' target='_blank'>Terms of Service</a>
                            </li>
                            <li className='divider'>
                                |
                            </li>
                            <li className='disc-link'>
                                <a href='https://barm8.com.au/privacy' target='_blank'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;