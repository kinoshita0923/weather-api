import './css/Detail.css';

const Detail = (props) => {
    return (
        <div className={"detail"}>
            {props.weather}
        </div>
    );
};

export default Detail;