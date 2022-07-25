import '../css/owfont-regular.css'
import '../css/style.css'

import TimeDateAndHello from './TimeDateAndHello'
import BackgroundChanger from './BackgroundChanger'
import Weather from './Weather'

new TimeDateAndHello()
new BackgroundChanger()
new Weather('en')

document.querySelector('button.change-quote').onclick = () => location.reload(true)