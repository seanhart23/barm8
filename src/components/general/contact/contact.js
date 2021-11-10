import './contact.css';
import React from 'react';



export class Contact extends React.Component {

    
    render() {
        return (
            <div id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>Schedule Your Free Demo</h2>
                            <p className='subtitle'>We’ll reach out within 24 hours to schedule your demo.</p>
                            <form class="" method="post" id='contact-form' action="https://formspree.io/f/mrgrngqz" enctype="multipart/form-data">
                                <div className='form-group'>
                                    <input type="text" name="name" className="form-control" placeholder="First and Last Name"/>
                                </div>
                                <div className='form-group'>
                                    <input type="email" name="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className='form-group'>
                                    <input type="phone" name="phone" className="form-control" placeholder="Phone Number"/>
                                </div>
                                <div className='form-group'>
                                    <input type="text" name="businessName" className="form-control" placeholder="Business Name"/>
                                </div>
                                <h3>Which best describes you?</h3>
                                <div className='form-group-inline'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" for="inlineRadio1">I'm interested</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" for="inlineRadio2">I'm already a customer</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                        <label className="form-check-label" for="inlineRadio3">I'm a guest</label>
                                    </div>
                                </div>
                                <button className='btn' type='submit'>Get a Demo</button>
                            </form>
                            <div class='disc'>
                                By requesting a demo, you agree to receive automated text messages from Toast. We’ll handle your info according to our <a className='privact'>privacy statement</a>.
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='image'>
                                <img src='./contact.png' />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>      
        )
    }
}

export default Contact;