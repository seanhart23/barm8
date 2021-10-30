import './slide-menu.css';
import React from 'react';
import Slide from './slide.js';

export class SlideMenu extends React.Component {

    render(props) {
        return (
            <div>
                <div id='slide-menu'>
                    <ul className="nav">
                        <li className="nav-item">
                            <button className="nav-link active" id="option1">Point of Sale</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option2">Contactless Ordering</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option3">Handhelds</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option4">Online Ordering & Delivery</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option5">Marketing</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option6">Payroll & Team Management</button>
                        </li>
                    </ul>
                </div>    
                <div id='slide-content'>
                    <Slide 
                        id         = "slide1"
                        leftTitle  = "Run your entire restaurant on Toast"
                        leftText   = "Manage all on-prem and off-prem order sources in one system."
                        leftButton = "Get a Demo"
                        url        = "/"
                        image      = "./slide-1.png"
                        className  = "show"
                    />
                    <Slide 
                        id         = "slide2"
                        leftTitle  = "This is slide 2"
                        leftText   = "Manage all on-prem and off-prem order sources in one system."
                        leftButton = "Get a Demo"
                        url        = "/"
                        image      = "./slide-1.png"
                    />
                    <Slide 
                        id         = "slide3"
                        leftTitle  = "This is slide 3"
                        leftText   = "Manage all on-prem and off-prem order sources in one system."
                        leftButton = "Get a Demo"
                        url        = "/"
                        image      = "./slide-1.png"
                    />
                    <Slide 
                        id         = "slide4"
                        leftTitle  = "This is slide 4"
                        leftText   = "Manage all on-prem and off-prem order sources in one system."
                        leftButton = "Get a Demo"
                        url        = "/"
                        image      = "./slide-1.png"
                    />
                    <Slide 
                        id         = "slide5"
                        leftTitle  = "This is slide 5"
                        leftText   = "Manage all on-prem and off-prem order sources in one system."
                        leftButton = "Get a Demo"
                        url        = "/"
                        image      = "./slide-1.png"
                    />
                    <Slide 
                        id         = "slide6"
                        leftTitle  = "This is slide 6"
                        leftText   = "Manage all on-prem and off-prem order sources in one system."
                        leftButton = "Get a Demo"
                        url        = "/"
                        image      = "./slide-1.png"
                    />
                </div>  
            </div>    
        )
    }
}

export default SlideMenu;