import {Icon, Prefecture, Time, Detail, Description} from './index';
import './css/Forecast.css';
import React from "react";

const Forecast = (props) => {
    return (
        <div className={"forecast"}>
            <div className={"forecast-box"}>
                <div className={"box"}>
                    <Prefecture prefecture={props.prefecture} city={props.city} day={props.day}></Prefecture>
                    <Icon icon={props.icon}></Icon>
                    <Detail weather={props.weather}></Detail>
                </div>
                <Time publicTime={props.time}></Time>
            </div>
            <Description description={props.description}></Description>
        </div>
    );
}

export default Forecast;