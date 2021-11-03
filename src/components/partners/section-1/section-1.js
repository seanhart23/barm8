import './section-1.css';
import React from 'react';

export class PSection1 extends React.Component {

    render() {
        return (
            <div id='partners-section-1'>
                <div className='container'>
                    <div className='clip'></div>

                    <div className='row' id='main-section'>
                        <div className='col-lg-6'>
                            <div className='left-content'>
                                <h1>Become a Bar M8 partner</h1>
                                <h5>Reach more customers with your brand. Sign up today, for a sales boost of up to 30%.</h5>
                                <button className='btn btn-primary'>Create Account</button>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='right-clip'>
                            <div className='clip2'>
                                <iframe 
                                    src={"https://player.vimeo.com/video/341514802?h=12d8780e12&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"}
                                    width="100%" 
                                    height="100%" 
                                    top="0"
                                    frameborder="0" 
                                    allow="autoplay; 
                                    fullscreen; picture-in-picture" 
                                    allowfullscreen="" 
                                    title="partner-video-teaser" 
                                    data-ready="true" 
                                ></iframe>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>               
        )
    }
}

export default PSection1;