import './css/Time.css';

const Time = (props) => {
    return (
        <div className={"public-time"}>
            発表日時：{props.publicTime}
        </div>
    );
};

export default Time;