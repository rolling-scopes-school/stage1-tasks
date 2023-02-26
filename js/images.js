function setBg() {  
    let timeOfDay = getTimeOfDay();
    let bgNum = num.padStart(2, '0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Kate-Shepel/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
        body.style.backgroundImage = ("${img.src}");
    }
}; 
    img.onload = () => {      
      document.body.style.backgroundImage = ("${img.src}");
    }; 
setBg();
    
    function getSlideNext() {
        randomNum++;
        setBg();
    }

    function getSlidePrev() {
        randomNum--;
        setBg();
    
    }
    getSlideNext.addEventListener('click', getSlideNext);
    getSlideNext.addEventListener('click', getSlideNext);



    var i=0;
        var image=document.getElementById("image");
        // Добавте свои картинки через запятую
        var imgs=new Array('img1.jpg','img2.jpg');
        function imgsrc() {
            i++;i%=imgs.length;
            image.src = imgs[i];
        }
