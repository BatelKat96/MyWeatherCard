import { LightningElement, track } from 'lwc';
import { cities } from 'c/data';
export default class CitiesSelector extends LightningElement {
    @track searchedCity = ''
    showDropdown = false
    selectedCity = ''
    selectedIdx = -1
    _filteredCities

    updateCity() {
        const event = new CustomEvent('choosencity', {
            detail: this.selectedCity
        })
        this.dispatchEvent(event);
    }

    get filteredCities() {
        this._filteredCities = cities.filter(city => city.name.toLowerCase().includes(this.searchedCity.toLowerCase()))
        return this._filteredCities
    }

    handleChange(event) {
        this.searchedCity = event.target.value
        this.selectedIdx = -1
        this.openDropdown()
    }

    selectCity(event) {
        this.searchedCity = event.target.textContent
        this.closeDropdown()
        this.selectedCity = event.target.textContent
        this.updateCity()
    }

    openDropdown() {
        this.showDropdown = true;
    }

    closeDropdown() {
        this.showDropdown = false
        this.selectedIdx = -1
    }

    handleKeyPress(event) {
        const key = event.key

        if (!this.searchedCity && key === 'Backspace') this.selectedIdx = -1

        const liElements = this.template.querySelectorAll('li')
        if (key === 'Enter') {
            this.selectedCity = this._filteredCities[this.selectedIdx].name
            this.searchedCity = this._filteredCities[this.selectedIdx].name
            this.closeDropdown()
            this.updateCity()

        } else if (key === 'ArrowDown' || key === 'ArrowUp') {
            if (this.selectedIdx >= 0) {
                const prevSelectedLi = this.template.querySelector(`[data-id="${this._filteredCities[this.selectedIdx].id}"]`)
                prevSelectedLi.classList.remove('selected-li')
            }
            if (key === 'ArrowDown') {
                this.selectedIdx++
                if (this.selectedIdx === liElements.length) this.selectedIdx--
            } else if (key === 'ArrowUp') {
                this.selectedIdx--
                if (this.selectedIdx === -1) this.selectedIdx = 0
            }

            const selectedLi = this.template.querySelector(`[data-id="${this._filteredCities[this.selectedIdx].id}"]`)
            selectedLi.classList.add('selected-li')
        }
    }
}