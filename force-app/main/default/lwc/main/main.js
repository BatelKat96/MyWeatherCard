import { LightningElement, track } from 'lwc';

export default class Main extends LightningElement {

    @track choosenCity

    handleChoosenCity(ev) {
        this.choosenCity = ev.detail
    }

}