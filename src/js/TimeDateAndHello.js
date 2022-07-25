export default class TimeDateAndHello {

    constructor(){
        this.showTime()
    }

    showTime() {
        const timeNode = document.querySelector('.time');
        const dateNode = document.querySelector('.date');
        const date = new Date();
        timeNode.textContent = date.toLocaleTimeString();
        dateNode.textContent = date.toLocaleDateString(
            'en-En', 
            {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'}
        );

        let getTimeOfDayArrowFun = () => TimeDateAndHello.getTimeOfDay()
        document.querySelector(".greeting").textContent = `Good ${getTimeOfDayArrowFun()}`

        setTimeout(() => this.showTime(), 1000)
    }
    
    static getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 6) return "night"
        if (hour >= 6 && hour < 12) return "morning"
        if (hour >= 12 && hour < 18) return "afternoon"
        return "evening"
    }
}