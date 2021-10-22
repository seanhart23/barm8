import './phone.css';

function Phone(props) { 
    return (
        <div class='center'>
            <div class='iphone-mobile'>
                <div class='notch-mobile'></div>
                <div class='phone-cover' id={ props.id }>
                    <img src={ props.src } class={ props.class } />
                </div>
                <div class='frame-mobile'></div>
            </div>
        </div>
    )
}

export default Phone;