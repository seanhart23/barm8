import './slide-menu.css';
import React from 'react';

function Slide(props) { 

        return (
        <div id={ props.id }>
            <div className='slide'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='left'>
                            <h3 className='left-title'>{ props.leftTitle }</h3>
                            <br />
                            <div className='left-text'>{ props.leftText }</div>
                            <a href={ props.url }><button className='btn btn-primary left-button'>{ props.leftButton }</button></a>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='slide-image-container'>
                            <img src={ props.image } />
                        </div>
                    </div>
                </div>
            </div>   
        </div>      
        )
    }


export default Slide;