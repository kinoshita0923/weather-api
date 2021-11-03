import './css/Icon.css';

const Icon = (props) => {
    return (
        <div className={"weather-icon"}>
            <img src={props.icon} alt={"weather icon"} />
        </div>
    )
};

export default Icon;