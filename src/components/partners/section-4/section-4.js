import './section-4.css';
import React from 'react';
import TallCard from '../../general/tall-card/tall-card.js';



export class PSection4 extends React.Component {

    render() {
        return (
            <div className='container'>
                <div id='partner-section-4'>
                    <h2>Customizable solutions built for you</h2>
                    <br />
                    <div class='row'>
                        <div class='col-lg-4'>
                            <TallCard 
                                title = "Pay-as-You-Go"
                                subtitle = "A complete point of sale for smaller concepts"
                                colorText = "1-2 POS terminals"
                                style = {{background: "#ffb700" }}
                                text = {
                                    <div>
                                        <p>Online ordering & delivery</p>
                                        <p>Pay as you go</p>
                                        <p>$0 upfront cost</p>
                                    </div> }
                                cta = "Shop Now"
                            />
                        </div>
                        <div class='col-lg-4'>
                            <TallCard 
                                title = "Growth"
                                subtitle = "The #1 point of sale for growing restaurants"
                                colorText = "1 - 15 Locations"
                                style = {{background: "#e3f0fb" }}
                                text = {
                                    <div>
                                        <p>Online ordering & delivery</p>
                                        <p>Integrated marketing tools</p>
                                        <p>Custom hardware setup</p>
                                    </div> }
                                cta = "Get a Quote"
                            />
                        </div>
                        <div class='col-lg-4'>
                            <TallCard 
                                title = "Enterprise"
                                subtitle = "Cloud-based point of sale for established restaurants"
                                colorText = "16 - 1,000+ Locations"
                                style = {{background: "#dd55d2" }}
                                text = {
                                    <div>
                                        <p>Reliable and secure platform</p>
                                        <p>100+ API partners</p>
                                        <p>Unified data platform</p>
                                    </div> }
                                cta = "Contact Sales"
                            />
                        </div>
                    </div>
                </div>    
            </div>      
        )
    }
}

export default PSection4;