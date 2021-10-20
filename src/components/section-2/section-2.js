import './section-2.css';
import Phone from '../phone/phone.js'

function Section2() { 
    return (
           <div id='section-2'>
            <div class='container'>
                <div class='row'>
                    <div class='col-7'>
                        <div class='left'>
                            <h1>Check the vibe <em>before</em> you arrive.</h1>
                            <h4>Our curated venue profiles will help you find the perfect venue for any occasion. Like what you see? Make a booking, get directions there or keep scrolling for their upcoming offers and events.</h4>
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
                        <Phone src='./image2.png' id='image2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;