import './phone.css';

function Phone(props) { 
    return (
        <div>
            <div class='iphone'>
                <div class='notch'></div>
                <div class='phone-cover' id={ props.id }>
                    <img src={ props.src } class={ props.class } />
                </div>
                <div class='frame'></div>
            </div>
        </div>
    )
}

export default Phone;