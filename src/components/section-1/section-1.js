import './section-1.css';
import Phone from '../phone/phone.js'
import React from 'react';

export class Section1 extends React.Component {

    render() {
        return (
        <div id='section-1'>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-7'>
                        <div class='left' id='left'>
                            <h1>...we're for good times.</h1>
                            <h4>BarM8 makes discovering new bars, and all the great stuff they have going on, easy. Free with no subscription, it's the smart way to socialise in Sydney.</h4>
                        </div>
                        <div class='button-group'>
                            <div class='row'>
                                <button class='download'>Download Free Today</button>
                                <div class='store-wrapper'>
                                    <div class='row'>
                                        <div class='col-6'>
                                            <img src='appstore.svg' class='store-button'></img>
                                        </div>
                                        <div class='col-6'>
                                            <img src='googleplay.svg' class='store-button'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-6'>
                                
                            </div>
                        </div>                            
                    </div>
                    <div class='col-lg-5'>
                        <Phone src='./image1.png' id='image1'/>
                    </div>
                </div>
            </div>

            <div class="styles__SideNav-kd2kl4-1 gOrZUu">
                <a class="styles__ScrollLink-kd2kl4-0 jwpVBP bullet1 active"></a>
                <a class="styles__ScrollLink-kd2kl4-0 jwpVBP bullet2"></a>
                <a class="styles__ScrollLink-kd2kl4-0 jwpVBP bullet3"></a>
                <a class="styles__ScrollLink-kd2kl4-0 jwpVBP bullet4"></a>
            </div>

            <div class='half-phone-box'>
                <div class='frame'>
                    <div class='notch'></div>
                    <div class='iphone'>
                        <div id="comparison">
                            <figure>
                                <div id="divisor"></div>
                                <div id="divisor1"></div>
                                <div id="divisor2"></div>
                            </figure>
                        </div>
                    </div>
                </div>
                
            </div>

            </div>
                       
    )
}
}

export default Section1;