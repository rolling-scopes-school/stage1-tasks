document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const piano = document.querySelector('.piano');
  const pianoКeys = document.querySelectorAll('.piano-key');
  const elem = document.documentElement;
  const btn = document.querySelectorAll('.btn');

  const data = [
    {
      key: 'KeyD',
      sound: 'c'
    },
    {
      key: 'KeyF',
      sound: 'd'
    },
    {
      key: 'KeyG',
      sound: 'e'
    },
    {
      key: 'KeyH',
      sound: 'f'
    },
    {
      key: 'KeyJ',
      sound: 'g'
    },
    {
      key: 'KeyK',
      sound: 'a'
    },
    {
      key: 'KeyL',
      sound: 'b'
    },
    {
      key: 'KeyR',
      sound: 'c♯'
    },
    {
      key: 'KeyT',
      sound: 'd♯'
    },
    {
      key: 'KeyU',
      sound: 'f♯'
    },
    {
      key: 'KeyI',
      sound: 'g♯'
    },
    {
      key: 'KeyO',
      sound: 'a♯'
    },
  ];

  function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  function disable_piano() {
    pianoКeys.forEach((el) => {
      if (el.classList.contains('piano-key-active')) {
        el.classList.remove('piano-key-active');
      }
    });
  }

  window.addEventListener('keydown', (event) => {
    data.forEach((item, i, array) => {
      if (event.code == data[i].key) {
        const key = document.querySelector(`div[data-key="${event.code}"]`);
        key.classList.add('piano-key-active');
        if (event.repeat == false) {
          playAudio(`assets/audio/${data[i].sound}.mp3`);
        }
      }
    });
  });
  window.addEventListener('keyup', (event) => {
    data.forEach((item, i, array) => {
      if (event.code == data[i].key) {
        const key = document.querySelector(`div[data-key="${event.code}"]`);
        key.classList.remove('piano-key-active');
      }
    });
  });
  piano.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
      event.target.classList.add('piano-key-active');
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
    }
  })

  piano.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('piano-key')) {
      disable_piano();
    }
  })

  piano.addEventListener('mouseover', (event) => {
    if (event.which == 1) {
      if (event.target.classList.contains('piano-key')) {
        event.target.classList.add('piano-key-active');
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
      }
    }
  })
  piano.addEventListener('mouseout', (event) => {
    if (event.which == 1) {
      if (event.target.classList.contains('piano-key')) {
        disable_piano();
      }
    }
  })


  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('fullscreen')) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  })

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-letters')) {
      btn.forEach((el) => {
        if (el.classList.contains('btn-active')) {
          el.classList.remove('btn-active');
        }
      });
      event.target.classList.add('btn-active');
      /*pianoКeys.classList.remove('piano-key');
      pianoКeys.classList.add('piano-key-letter');*/
    }
    if (event.target.classList.contains('btn-notes')) {
      btn.forEach((el) => {
        if (el.classList.contains('btn-active')) {
          el.classList.remove('btn-active');
        }
      });
      event.target.classList.add('btn-active');
       /*изменить надпись над пианино*/
    }
  })

})