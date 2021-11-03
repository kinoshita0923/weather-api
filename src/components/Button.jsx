import React from 'react';
import './css/Button.css';

const Button = (props) => {
    return (
        <React.Fragment>
            <button onClick={props.handleButton} className={"reload-btn"}>
                <i className="fas fa-sync-alt"></i>
            </button>
            <span>更新</span>
        </React.Fragment>
    );
}

export default Button;