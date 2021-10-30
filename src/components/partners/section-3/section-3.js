import './section-3.css';
import React from 'react';



export class PSection3 extends React.Component {

    render() {
        return (
            <div id='partner-section-3'>
                <div className='container'>
                    <div class='content-container'>
                        <h2>A single restaurant platform that works better together</h2>
                        <div class='row'>
                            <div class='col-lg-6'>
                                <h4>Better for Guests</h4>
                                <p>Delight your guests and increase spending by your regulars up to 30%.</p>
                            </div>
                            <div class='col-lg-6'>
                                <h4>Better for Operations</h4>
                                <p>Simply run all orders through one point of sale and access 24/7 support.</p>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-lg-6'>
                                <h4>Better for Employees</h4>
                                <p>Help your team turn tables faster and run payroll in 30 minutes or less.</p>
                            </div>
                            <div class='col-lg-6'>
                                <h4>Better for Business</h4>
                                <p>Grow online sales and reduce third-party commissions by up to 80%.</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>      
        )
    }
}

export default PSection3;