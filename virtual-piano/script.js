const x = document.querySelector('.piano');
const sharp = document.querySelector('.keys-sharp');
const notes = document.querySelector('.btn-notes');
const latters = document.querySelector('.btn-letters');
const pianoChildren = x.children;
const sharpChildren = sharp.children;
const listArray = Array.from(pianoChildren);
const listSharp = Array.from(sharpChildren);
const startSound = (event) => {
  event.target.classList.add("piano-key-active");
  let dataNote = event.target.getAttribute('data-note'); 
  playAudio('assets/audio/' + dataNote + '.mp3');
}
const stopSound = (event) => {
  event.target.classList.remove("piano-key-active");
}
const startCorrespondOver = (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.add("piano-key-active");
  }
  listArray.forEach((elem) => {
    elem.addEventListener("mouseover", startSound)
    elem.addEventListener("mouseout", stopSound)
  });
}
const stopCorrespondOver = () => {
  listArray.forEach((elem) => {
    elem.classList.remove("piano-key-active");
    elem.removeEventListener("mouseover", startSound)
    elem.removeEventListener("mouseout", stopSound)
  });
}
x.addEventListener("mousedown", startCorrespondOver, false);
window.addEventListener("mouseup", stopCorrespondOver);

document.getElementById('screen').addEventListener('click', (event) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

document.querySelector('.btn-notes').addEventListener('click', e => {
  latters.classList.remove('btn-active');
  notes.classList.add('btn-active');
  listArray.forEach((item) => {
    item.classList.remove('piano-key-letter');
  });
  listSharp.forEach((item) => {
    item.classList.remove('piano-key-letter');
  });

})
document.querySelector('.btn-letters').addEventListener('click', e => {
  latters.classList.add('btn-active');
  notes.classList.remove('btn-active');
  listArray.forEach((item) => {
    item.classList.add('piano-key-letter');
  });
  listSharp.forEach((item) => {
    item.classList.add('piano-key-letter');
  });
})

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

x.addEventListener('mousedown', e => {
  let dataNote = e.target.getAttribute('data-note'); 
  playAudio('assets/audio/' + dataNote + '.mp3');
  listArray.forEach((item) => {
    item.classList.remove('piano-key-active');
  });
  e.target.classList.add('piano-key-active'); 
});

x.addEventListener('mouseup', e => {
  e.target.classList.remove('piano-key-active');
});

sharp.addEventListener('mousedown', e =>{
  let sharpNote = e.target.getAttribute('data-note');
  playAudio('assets/audio/' + sharpNote + '.mp3');
});
let niddle;
window.addEventListener('keyup', e => {
  listArray.forEach((item) => {
    item.classList.remove('piano-key-active');
    });
});
window.addEventListener('keydown', e => {
  if (event.repeat){
    return;
  }
  switch (event.code){
    case ('KeyD'):
    niddle = document.querySelector(`div[data-note=c]`);
      playAudio('assets/audio/c.mp3');
      listArray.forEach((item) => {
      item.classList.remove('piano-key-active');
      });
      niddle.classList.add('piano-key-active'); 
      break;
    case ('KeyF'):
     niddle = document.querySelector(`div[data-note=d]`);
      playAudio('assets/audio/d.mp3');
      listArray.forEach((item) => {
      item.classList.remove('piano-key-active');
      });
      niddle.classList.add('piano-key-active'); 
      break;
    case ('KeyG'):
      niddle = document.querySelector(`div[data-note=e]`);
      playAudio('assets/audio/e.mp3');
      listArray.forEach((item) => {
      item.classList.remove('piano-key-active');
      });
      niddle.classList.add('piano-key-active'); 
      break;
    case ('KeyH'):
      niddle = document.querySelector(`div[data-note=f]`);
      playAudio('assets/audio/f.mp3');
      listArray.forEach((item) => {
      item.classList.remove('piano-key-active');
      });
      niddle.classList.add('piano-key-active');
      break;
    case ('KeyJ'):
      niddle = document.querySelector(`div[data-note=g]`);
      playAudio('assets/audio/g.mp3');
      listArray.forEach((item) => {
      item.classList.remove('piano-key-active');
      });
      niddle.classList.add('piano-key-active');
      break;
    case ('KeyK'):
      niddle = document.querySelector(`div[data-note=a]`);
      playAudio('assets/audio/a.mp3');
      listArray.forEach((item) => {
      item.classList.remove('piano-key-active');
      });
      niddle.classList.add('piano-key-active');
      break;
    case ('KeyL'):
      niddle = document.querySelector(`div[data-note=b]`);
      playAudio('assets/audio/b.mp3');
      listArray.forEach((item) => {
      item.classList.remove('piano-key-active');
      });
      niddle.classList.add('piano-key-active');
      break; 
    case ('KeyR'):
      playAudio('assets/audio/c♯.mp3');
      break;
    case ('KeyT'):
      playAudio('assets/audio/d♯.mp3');
      break;
    case ('KeyU'):
      playAudio('assets/audio/f♯.mp3');
      break;   
    case ('KeyI'):
      playAudio('assets/audio/g♯.mp3');
      break;   
    case ('KeyO'):
      playAudio('assets/audio/a♯.mp3');
      break;                            
  }
    });
    



