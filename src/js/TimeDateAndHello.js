export default class TimeDateAndHello {

    constructor(){
        this.isLoaded = false
        this.showTime()
        window.addEventListener('load', this.getLocalStorage)
        window.addEventListener('beforeunload', this.setLocalStorage)
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

        let getTimeOfDay = () => {
            const hour = new Date().getHours();
            if (hour >= 0 && hour < 6) return "night"
            if (hour >= 6 && hour < 12) return "morning"
            if (hour >= 12 && hour < 18) return "afternoon"
            return "evening"
        }
        document.querySelector(".greeting").textContent = `Good ${getTimeOfDay()}`

        setTimeout(() => this.showTime(), 1000)
    }

    setLocalStorage() {
        if (this.isLoaded) {
            window.localStorage.setItem('userName', document.querySelector("input.name").value)
        }
    }

    getLocalStorage() {
        if(window.localStorage.getItem('userName') != undefined) {
            document.querySelector("input.name").value = window.localStorage.getItem('userName')
            this.isLoaded = true
        }
    }
    
}