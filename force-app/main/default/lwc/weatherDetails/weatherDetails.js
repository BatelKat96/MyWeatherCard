import { LightningElement, track, wire } from 'lwc';
import getAPI from "@salesforce/apex/GetWeatherAPI.getAPI"

export default class WeatherDetails extends LightningElement {

    @track weather
    apiKey

    @wire(getAPI)
    wiredAPI({ error, data }) {
        if (data) {
            this.apiKey = data
            this.getWeather()
        } else if (error) {
            this.weather = 'Can\'t get weather try to refresh'
        }
    }

    async getWeather() {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=London&aqi=yes`);
            const data = await response.json();
            const { current, location } = data
            const weatherInfo = {
                city: location.name,
                country: location.country,
                time: current.last_updated,
                temp: current.temp_c,
                imgUrl: current.condition.icon,
                desc: current.condition.text,
            }
            this.weather = weatherInfo
        } catch (err) {
            this.weather = 'Can\'t get weather try to refresh'
        }
    }

}