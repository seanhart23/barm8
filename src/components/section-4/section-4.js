import './section-4.css';
import Phone from '../phone/phone.js'

function Section4() { 
    return (
        <div id='section-4'>
            <div class='container'>
                <div class='row'>
                    <div class='col-7'>
                        <div class='left'>
                            <h1>Don't know what's on tonight? We've got you covered.</h1>
                            <h4>From live music to sports, and everything in between, we've got the details on all the upcoming and unique events at the venues near you. Get amongst it with BarM8!</h4>
                        </div>                       
                    </div>
                    <div class='col-5'>
                        {/* <Phone src='./image4.png' id='image4'/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4;