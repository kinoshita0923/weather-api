import {ChangePrefecture, Day} from "./index";
import './css/Input.css';

const Input = (props) => {
    return (
        <div className={"info-box"}>
            <div className={"box"}>
                <ChangePrefecture handleCity={props.handleCity} ></ChangePrefecture>
                <Day handleDay={props.handleDay} ></Day>
            </div>
        </div>
    );
};

export default Input;