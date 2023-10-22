import { LightningElement, track, wire, api } from 'lwc';
import getAPI from "@salesforce/apex/GetWeatherAPI.getAPI"

export default class WeatherDetails extends LightningElement {

    @track weather
    apiKey
    @track city
    _city
    error
    @track msg = 'Pick a city'


    @api get choosencity() {

        return this._city;
    }

    set choosencity(val) {
        this._city = val
        this.city = val
        this.getWeather()
    }


    @wire(getAPI)
    wiredAPI({ error, data }) {
        if (data) {
            this.apiKey = data
        } else if (error) {
            this.weather = 'Can\'t get weather try to refresh'
        }
    }

    async getWeather() {
        if (!this.city) return
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=yes`);
            const data = await response.json();
            const { current, location } = data
            const weatherInfo = {
                city: location.name,
                country: location.country,
                time: Date.now(),
                temp: current.temp_c,
                imgUrl: current.condition.icon,
                desc: current.condition.text,
            }
            this.weather = weatherInfo
        } catch (err) {
            this.msg = 'Can\'t get weather try to refresh'

        }
    }


}