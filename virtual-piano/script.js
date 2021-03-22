const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');



function playAudio() {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
  }

piano.addEventListener('click', (event) => {
    console.log(event);
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        console.log(note);
        const src = `assets/audio/${note}.mp3`;
        console.log(src);      
        playAudio(src);
    }   
});

//-------------keyBord------

window.addEventListener('keydown', function(e){      
    const audio = document.querySelector(`audio[data-code='${e.code}']`); 
    const key = document.querySelector(`.piano-key[data-code='${e.code}']`); 

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active'); 
});

window.addEventListener('keyup', function(e){      
    const key = document.querySelector(`.active`); 
    key.classList.remove('active'); 
});

//----------mouse---------


piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        console.log(note);
        const src = `assets/audio/${note}.mp3`;
        console.log(src);      
        playAudio(src);
    }   
});



const startMove = (event)=>{
    event.target.classList.add('active');
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        console.log(note);
        const src = `assets/audio/${note}.mp3`;
        console.log(src);      
        playAudio(src);
    }   
    
}

const stopMove =(event)=>{
    event.target.classList.remove('active');
}

const startEction = (event)=>{
    if(event.target.classList.contains("piano-key")){
        event.target.classList.add('active');
    }

    pianoКeys.forEach((elem)=>{
        elem.addEventListener('mouseover',startMove);
        elem.addEventListener('mouseout',stopMove);
    })
}

const stoptEction = ()=>{
    pianoКeys.forEach((elem)=>{
        elem.classList.remove('active');
        elem.removeEventListener('mouseover',startMove);
        elem.removeEventListener('mouseout',stopMove);
    })
}

  
piano.addEventListener('mousedown', startEction);
piano.addEventListener('mouseup', stoptEction);

const btnLetter = document.querySelector('.btn-letters');


function changeLetter(){
    
    let x = document.querySelectorAll('::before')
    for (let elem of x){
        console.log(elem);
        elem.style.content = 'attr(data-letter)';
    }
};

btnLetter.addEventListener('click',changeLetter );
console.log(pianoКeys);








