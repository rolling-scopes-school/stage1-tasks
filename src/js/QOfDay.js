import jsonru from '../assets/data.json'
import jsonen from '../assets/dataen.json'
import getLang from './dataSaver'

export default class QOfDay {

    constructor() {
        QOfDay.setNewQ()
        document.querySelector('button.change-quote').onclick = () => QOfDay.setNewQ()
    }

    static setNewQ() {
        let rnd = Math.round(Math.random() * 99)
        let curJson = getLang() == 'en' ? jsonen : jsonru
        document.querySelector('.quote').textContent = curJson[rnd]["text"]
        document.querySelector('.author').textContent = curJson[rnd]["author"]
    }
}