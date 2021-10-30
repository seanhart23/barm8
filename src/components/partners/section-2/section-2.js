import './section-2.css';
import React from 'react';
import SlideMenu from '../../general/slide-menu/slide-menu.js';



export class PSection2 extends React.Component {

    render() {
        return (
            <div className='container'>
                <div id='partner-section-2'>
                    <h2>Point of sale was just the beginning</h2>
                    <br />
                    <SlideMenu />
                </div>    
            </div>      
        )
    }
}

export default PSection2;