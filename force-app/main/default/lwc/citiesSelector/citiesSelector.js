import { LightningElement, track } from 'lwc';
const cities = ['New York', 'Los Angeles', 'Chicago', 'San Francisco'];
export default class CitiesSelector extends LightningElement {
    @track selectedCity = ''
    showDropdown = false;
    city = ''

    get filteredCities() {
        return cities.filter(city => city.toLowerCase().includes(this.selectedCity.toLowerCase()));
    }

    handleChange(event) {
        this.selectedCity = event.target.value
        this.showDropdown = true;

    }

    selectCity(event) {
        this.selectedCity = event.target.textContent;
        this.showDropdown = false;
        this.city = event.target.textContent
    }

    changeDropdown() {
        this.showDropdown = true;
    }

}