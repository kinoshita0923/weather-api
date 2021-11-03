import axios from 'axios';
import {useEffect, useState} from "react";
import {Forecast, Input, Button} from './index';
import './css/Weather.css';

const Weather = () => {
    const [icon, setIcon] = useState('');
    const [prefecture, setPrefecture] = useState('');
    const [city, setCity] = useState('');
    const [time, setTime] = useState('');
    const [weather, setWeather] = useState('');
    const [day, setDay] = useState('0');
    const [area, setArea] = useState('360010');
    const [button, setButton] = useState(true);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get("https://weather.tsukumijima.net/api/forecast?city=" + area).then(res => {
            setIcon(res.data.forecasts[day].image.url);
            setPrefecture(res.data.location.prefecture);
            setCity(res.data.location.city);
            setTime(res.data.publicTimeFormatted);
            setWeather(res.data.forecasts[day].detail.weather);
            setDescription(res.data.description.text);
        }).catch(error => {
            console.log(error);
        });
    }, [day,area, button]);

    const handleDay = (day) => {
        console.log(day);
        setDay(day);
        console.log(day);
    }

    const handleCity = (area) => {
        setArea(area);
    }

    const handleButton = (button) => {
        setButton(prevState => !prevState);
    }

    return (
        <div className={"weather-box"}>
            <Forecast
                icon={icon}
                prefecture={prefecture}
                city={city}
                time={time}
                weather={weather}
                day={day}
                description={description}
            ></Forecast>
            <Input handleDay={handleDay} handleCity={handleCity} handleButton={handleButton} ></Input>
            <Button handleButton={handleButton}></Button>
        </div>
    );
}

export default Weather;