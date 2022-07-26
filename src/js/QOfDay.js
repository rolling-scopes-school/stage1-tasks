import json from '../assets/data.json'

export default class QOfDay {

    constructor() {
        QOfDay.setNewQ()
        document.querySelector('button.change-quote').onclick = () => QOfDay.setNewQ()
    }

    static setNewQ() {
        let rnd = Math.round(Math.random() * 99)
        console.log(json)
        console.log(json[rnd])
        document.querySelector('.quote').textContent = json[rnd]["text"]
        document.querySelector('.author').textContent = json[rnd]["author"]
    }
}