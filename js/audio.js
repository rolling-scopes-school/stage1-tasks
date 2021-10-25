export {playAudio}
import {playList} from './playList.js'
let playListContainer = document.querySelector('.play-list')
for(let i = 0; i < playList.length; i++) {
  const li = document.createElement('li')
  li.style.listStyle = 'none'
    playListContainer.append(li)
    li.innerHTML = `      <div class="player-controls">
    <button class="play-prev player-icon"></button>
    <button class="play player-icon play-song"></button>
    <button class="play-next player-icon"></button>
  </div>`}
  let button = document.querySelectorAll('.play-song')
  let prev = document.querySelectorAll('.play-prev')
let next = document.querySelectorAll('.play-next')
console.log(button)
let s

for (let i = 0; i < button.length; i++) {
  let pre = i-1
  let nex = i+1
  let audio = new Audio()
  button[i].onclick = () => {
    audio.src = playList[i].src
    playPause(i, audio)
  }
  prev[i].onclick = () => {
    // song = playList[pre].src
    audio.src = playList[pre].src
     previous(pre, audio)
    }
  next[i].onclick = () => {
    // song = playList[nex].src
    audio.src = playList[nex].src
    tnext(nex, audio)
  }
}
let isPlay = false

function playPause(n, audio) {
  //audio.src = playList[n].src
  for (let i = 0; i < button.length; i++) {
    if (i != n) {
      button[i].classList.remove('pause')
      button[i].classList.add('play')
      audio.pause()
    }
  }
  isPlay = !isPlay
    toggle(n)
    console.log(isPlay)
    plPs(n, audio)
    s = n
}
function plPs(n, audio) {
  if (isPlay == false) {
    audio.pause()
    console.log('pause')
  }
  else {
    audio.play()
    console.log('yeah')
    console.log('play')
  }
}
function toggle(n) {
   button[n].classList.toggle('play')
   button[n].classList.toggle('pause')
}
function previous(n, audio) {
  console.log(isPlay)
  isPlay = !isPlay
   playPause(n, audio)
}
function tnext(n, audio) {
  console.log(isPlay)
  isPlay = !isPlay
  playPause(n, audio)
}
function playAudio() {

}
playAudio()

// export {playAudio}
// import {playList} from './playList.js'
// let playListContainer = document.querySelector('.play-list')
// const audio = new Audio();
// let isPlay = 1
// let c
// let n
// let vidLine = document.querySelector('.vid-line')
// let stop

// for(let i = 0; i < playList.length; i++) {
//   const li = document.createElement('li')
//   li.style.listStyle = 'none'
//     playListContainer.append(li)
//     li.innerHTML = `      <div class="player-controls">
//     <button class="play-prev player-icon"></button>
//     <button class="play player-icon play-song"></button>
//     <button class="play-next player-icon"></button>
//   </div>`}
//   let button = document.querySelectorAll('.play-song')
//   let prev = document.querySelectorAll('.play-prev')
// let next = document.querySelectorAll('.play-next')
//     function toggleBtn(b) {
//       b.classList.toggle('pause');
//       b.classList.toggle('play');
//     }
//     let track
// function playAudio() {
//    for (let i = 0; i < button.length; i++) {
//     console.log(playList)
//     audio.currentTime = 0
//         button[i].onclick = function() {
//           c = audio.currentTime
//           audio.src = playList[i].src
//           if (button[i].classList.value.includes('play')) {
//             setTimeout(function() {
//               button.forEach(b => {
//                b.classList.remove('pause')
//              b.classList.add('play')
//               })
//               if (c !== undefined && n == i) {
//                 audio.currentTime = c
//               }
//               n = i
//               audio.play()
              
//                audio.onended = function() {
//                  console.log(1)
//                 button[i].classList.remove('pause')
//                 button[i].classList.add('play')
//                 button[i + 1].classList.remove('play')
//                 button[i + 1].classList.add('pause')
//                 audio.src = playList[i + 1].src
//                 audio.play()

//                }
//                let duration = audio.duration
//                let step = Math.round(100/duration)
//                let q = Math.round(100/step)
//        console.log(step)
//        let stepP = vidLine.value
//        console.log(+vidLine.value + step)
//        for (let i = 0; i < q; i++) {
//         setTimeout(() => {
//           vidLine.value = +vidLine.value + step
//           }, 1000)
//        }
              
             
//               button[i].classList.remove('play')
//               button[i].classList.add('pause')
//             }, 50)
//             console.log(button[i].classList.value)
//           }
//           if (button[i].classList.value.includes('pause')) {
//             stop = 1
//             console.log(c)
//             setTimeout(function() {
//               audio.pause()
//              button[i].classList.remove('pause')
//              button[i].classList.add('play')
//             }, 50)
           
//           }
//         }
//         console.log(next[i])
//         next[i].onclick = function() {
//           if (i + 1 < playList.length) {
//             setTimeout( function() {
//             button.forEach(b => {
//               b.classList.remove('pause')
//             b.classList.add('play')
//              })
//             button[i+1].classList.remove('play')
//             button[i+1].classList.add('pause')
//             audio.src = playList[i + 1].src
//             audio.play()
//           }, 50)
//           }
          

//         }
//         prev[i].onclick = function() {
//           if (i - 1  >= 0) {
//                         setTimeout( function() {
//             button.forEach(b => {
//               b.classList.remove('pause')
//             b.classList.add('play')
//              })
//             button[i-1].classList.remove('play')
//             button[i-1].classList.add('pause')
//             audio.src = playList[i-1].src
//             audio.play()
//           }, 50)
//           }

//         }
//       }

// }
// playAudio()

      
  // for (let i = 0; i < button.length; i++) {
  //   audio.currentTime = 0
  //       button[i].onclick = function() {
  //         if (isPlay % 2 != 0 ) {
  //           audio.src = playList[i].src
  //           console.log(audio)
  //           if (c != undefined) {
  //             audio.currentTime = c
  //           }
  //           if (track != audio.src) {
  //              audio.currentTime = 0
  //           }
  //           toggleBtn(button[i])
  //           // setTimeout(function() {
  //           //   toggleBtn(button[i])
  //           // }, audio.duration*1000)
  //         audio.play()
  //         isPlay++
  //         console.log(isPlay)
  //       }
        
  //       else {
  //           audio.pause()
  //           track = audio.src
  //           console.log(audio)
  //           c = audio.currentTime
  //           toggleBtn(button[i])
  //           isPlay++
  //           console.log(isPlay)
  //       }
  //     }
  //  }


  // for (let i = 0; i < button.length; i++) {
  //  button[i].addEventListener('click', () => {
  //   audio.src = playList[i].src
  //   c = audio.currentTime
  //   console.log(c)
  //   if (c != undefined) {
  //     audio.currentTime = c
  //   }
  //    isPlay++
  //    console.log(i)
  //    if (isPlay%2!==0) {
  //     button.forEach(b => {
  //       toggleBtn(button[i])
  //      })
  //      toggleBtn(button[i])
  //        audio.play()
  //    }
  //    else {
  //     toggleBtn(button[i])
  //      audio.pause()
  //    }
  //  })
  // }

// let isPlay = false
// let button = document.querySelectorAll('.play-song')
// console.log(button)
// let playNum 
// const li = document.createElement('li')
// for(let i = 0; i < playList.length; i++) {
//     playListContainer.append(li)
//     li.innerHTML = `      <div class="player-controls">
//     <button class="play-prev player-icon"></button>
//     <button class="play player-icon play-song"></button>
//     <button class="play-next player-icon"></button>
//   </div>`}
//   let prev = document.querySelectorAll('.play-prev')
// let next = document.querySelectorAll('.play-next')
// button = document.querySelectorAll('.play-song')
// console.log(button)
//   function playAudio() {
//     for (let i = 0; i < button.length; i++) {
//           button[i].onclick = function() {
//               if (!isPlay) {
//                 console.log(playList[i].src)
//             audio.src = `${playList[i].src}`
//               audio.play()
//               isPlay = true
//               button[i].classList.remove('play')
//               button[i].classList.add('pause')
//               }
//               else {
//                 audio.src = `${playList[i].src}`
//                 button.forEach(b => {
//                     b.classList.remove('pause')
//                     b.classList.add('play')
//                 })
//                 audio.pause()
//                 isPlay = false
//                 button[i].classList.remove('pause')
//                 button[i].classList.add('play')
//               }
//           }
//           next[i].onclick = function() {
//             button.forEach(b => {
//                 b.classList.remove('pause')
//                 b.classList.add('play')
//             })
//             audio.pause()
//             audio.src = `${playList[i + 1].src}`
//             audio.play()
//             button[i + 1].classList.remove('play')
//             button[i + 1].classList.add('pause')
//           }
//           prev[i].onclick = function() {
//               console.log(34359597)
//             button.forEach(b => {
//                 b.classList.remove('pause')
//                 b.classList.add('play')
//             })
//             audio.pause()
//             audio.src = `${playList[i - 1].src}`
//             audio.play()
//             button[i - 1].classList.remove('play')
//             button[i - 1].classList.add('pause')
//           }

//     }}
//     audio.onended = function() {
//         button[i].classList.add('play')
//         button[i].classList.remove('pause')
        
//       }

// playAudio()











  
// function playAudio() {
//     audio.src = playList[playNum].src
//     //audio.currentTime = 0;
//     if (isPlay == false) {
//         //toggleBtn()
//         audio.play()
//     }
//     if (isPlay == true) {
//         //toggleBtn()
//         audio.pause()
//     }
//   }
  
//   playAudio()

//   function toggleBtn() {
//     button[playNum].classList.toggle('pause');
//   }

//  const li = document.createElement('li')
// for(let i = 0; i < playList.length; i++) {
//     playListContainer.append(li)
//     li.innerHTML = `      <div class="player-controls">
//     <button class="play-prev player-icon"></button>
//     <button class="play player-icon play-song"></button>
//     <button class="play-next player-icon"></button>
//   </div>`}

//   for (let i = 0; i < button.length; i++) {
//       button[i].addEventListener('click', () => {
//           playNum = i
//           playAudio()
//           isPlay = !isPlay
//       })
//   }





//   let playNum
//   const audio = new Audio();
//   let isPlay = false
//   function playA() {
//     audio.play();
//     isPlay = true
//   }
//   function pauseA() {
//     audio.pause()
//     isPlay = false
//   }
//   function toggleBtn() {
//     button[playNum].classList.toggle('pause');
//     button[playNum].classList.toggle('play')
//   }
// function playAudio() {
//     let list = button[playNum].classList
//     // if (list.value.includes('play')) {
//     //     toggleBtn()
//     //     playA()
//     // }
//   audio.src = playList[playNum].src

// //   if (button[playNum].classList.includes('play')) {
// //      isPlay = false
// //   }
//   if (isPlay == false || list.value.includes('play')) {
//     toggleBtn()
//     playA()

//   }
//   if (isPlay == true) {
//     toggleBtn()
//       pauseA()

//   }
// }

// const li = document.createElement('li')
// for(let i = 0; i < playList.length; i++) {
//     playListContainer.append(li)
//     li.innerHTML = `      <div class="player-controls">
//     <button class="play-prev player-icon"></button>
//     <button class="play player-icon play-song"></button>
//     <button class="play-next player-icon"></button>
//   </div>`
//   }


//   let button = document.querySelectorAll('.play-song')
// console.log(button)
// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener('click', () => {
//         playNum = i
//          playAudio()
//   })
// }
  

// const audio = document.querySelectorAll('audio');
//         const playBtn = document.querySelectorAll('.play');
//         console.log(audio.duration)

//         function controlAudio() {
//         for (let i = 0; i < audio.length; i++) {
//             function playAudio() {
//                 audio[i].play();
//               }
              
//               function pauseAudio() {
//                 audio[i].pause();
//               }

//               function stopAudio() {
//                   audio[i].stop()
//               }
      
//               let times = 1
              
//               if (audio[i].currentTime == 0) {
//                 audio[i].classList.remove('pause')
//                   audio[i].classList.add('play')
//               }
//               playBtn[i].addEventListener('click', () => {
//                   if (times % 2 != 0) {
//                       audio.forEach(a => {
//                           () => a.stop()
//                       })
//                       playAudio()
//                       playBtn[i].classList.remove('play')
//                       playBtn[i].classList.add('pause')
//                       times++
//                   }
//                   else {
//                       playBtn[i].classList.remove('pause')
//                       playBtn[i].classList.add('play')
//                       pauseAudio()
//                       times++
//                   }
//               });
      
//               audio[i].onended = function() {
//                   playBtn[i].classList.remove('pause')
//                   playBtn[i].classList.add('play')
//               };
      
//               function controlAudio() {
//                   playAudio()
//                   pauseAudio()
//               }
      
//               controlAudio()
//         }}
//         controlAudio()
        

// let songs = document.querySelectorAll('.song')
// let playList = document.querySelector('.play-list')
// let controls = document.querySelector('.player-controls')


// const audio = document.querySelector('audio');
//         const playBtn = document.querySelector('.play');
//         console.log(audio.duration)
//         function playAudio() {
//           audio.play();
//         }
        
//         function pauseAudio() {
//           audio.pause();
//         }

//         let times = 1
        
//         playBtn.addEventListener('click', () => {
//             if (times % 2 != 0) {
//                 playAudio()
//                 playBtn.classList.remove('play')
//                 playBtn.classList.add('pause')
//                 times++
//             }
//             else {
//                 playBtn.classList.remove('pause')
//                 playBtn.classList.add('play')
//                 pauseAudio()
//                 times++
//             }
//         });

//         audio.onended = function() {
//             playBtn.classList.remove('pause')
//             playBtn.classList.add('play')
//         };

//         function controlAudio() {
//             playAudio()
//             pauseAudio()
//         }

//         controlAudio()

// let songs = document.querySelectorAll('.song')
// let playList = document.querySelector('.play-list')
// let controls = document.querySelector('.player-controls')

