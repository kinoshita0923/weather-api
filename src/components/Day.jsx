const Day = (props) => {
    return (
        <select name="select" onChange={(e) => props.handleDay(e.target.value)} className={"form-day"} multiple size={25}>
            <option value={0} selected>今日</option>
            <option value={1}>明日</option>
            <option value={2}>明後日</option>
        </select>
    );
};

export default Day;