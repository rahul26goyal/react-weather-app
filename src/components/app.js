import React from 'react';
import ZipForm from './ZipForm.js';
import {get} from 'axios';
import WeatherList from "./WeatherList";

class App extends React.Component {
    render(){
        const { dates } = this.state;
        return <div className="app">
          <ZipForm onSubmit={this.onFormSubmit}/>
          < WeatherList
             days={dates}
             onDayClicked={this.onDayClicked}
          />
        </div>
    }

    onFormSubmit(zipcode) {
        console.log("on form submit....")
        this.setState({ zipcode: zipcode });
        get(`http://localhost:3000/weather/${zipcode}`).then(
            ({data}) => {
              console.log("data=====", data);
                const { city, list: dates } = data;

                this.setState({ zipcode, city, dates, selectedDate: null });
            }
        )
        /*this.checkNum(zipcode).then(
            (msg, code) => {
              console.log("success:::", msg, code);
            },
            (err_msg) => {
              console.log("error::::",err_msg, this);
            }
        )*/
        console.log("continue........")
    }


    checkNum(n1){
      console.log("check sum called....");
      var isAnyNegative = function() {
        return n1 < 0 ;
      }
       return new Promise((resolve, reject) => {
        if (isAnyNegative()) {
          reject("number can not be smaller...");
        }
        resolve("all good", n1);
      })
    }

    constructor(props) {
        super(props);

        this.state = {
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onDayClicked = this.onDayClicked.bind(this);
    }

    onDayClicked(dayIndex) {
        this.setState({selectedDate : dayIndex})
    }
}

export default App;
