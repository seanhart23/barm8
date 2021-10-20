import './section-1.css';
import Phone from '../phone/phone.js'

function Section1() { 
    return (
        <div id='section-1'>
            <div class='container'>
                <div class='row'>
                    <div class='col-7'>
                        <div class='left'>
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
                    <div class='col-5'>
                        <Phone src='./image1.png' id='image1'/>
                    </div>
                </div>
            </div>
        </div>
                       
    )
}

export default Section1;