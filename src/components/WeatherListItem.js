import React, {Component} from 'react';

class WeatherListItem extends  Component {
    render() {
        const { day } = this.props;
        const date = new Date(day.dt * 1000);
        console.log("WeatherListItem::::this", this.props)
        return (
            <div className="weather-list-item" onClick={this.onClick}>
                <h1>
                    {date.getMonth() + 1}/ {date.getDate()}
                </h1>
                <h2>
                    {day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F
                </h2>

            </div>
        );
    }

    constructor(props) {
        super(props);

        this.onClick = this.onClick().bind(this);
    }

    onClick() {
        const { onDayClicked, index } = this.props

        onDayClicked(index);
    }
}

export default WeatherListItem;
