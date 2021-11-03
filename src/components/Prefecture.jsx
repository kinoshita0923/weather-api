import './css/Prefecture.css';

const Prefecture = (props) => {
    let Day;
    if (props.day === '0')
        Day = "今日";
    else if (props.day === '1')
        Day = "明日";
    else
        Day = "明後日";
    return (
        <div className={"place"}>
            {props.prefecture}({props.city}) {Day}の天気
        </div>
    );
};

export default Prefecture;