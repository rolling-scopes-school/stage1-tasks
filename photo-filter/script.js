const btnFullScreen = document.getElementById("btnFull");
const inputBlur = document.getElementById("blur-input");
const outputBlur = document.getElementById("blur-output");
const inputInvert = document.getElementById("invert-input");
const outputInvert = document.getElementById("invert-output");
const inputSeria = document.getElementById("seria-input");
const outputSeria = document.getElementById("seria-output");
const inputSaturate = document.getElementById("saturate-input");
const outputSaturate = document.getElementById("saturate-output");
const inputRotate = document.getElementById("rotate-input");
const outputRotate = document.getElementById("rotate-output");
const btnReset = document.getElementById("btn-reset");
const inputs = document.querySelectorAll(".filters input");
const file = document.getElementById("input");
const save = document.querySelector(".btn-save");
const image = document.getElementById("photo");
const ph = document.getElementById("ph");

const ctx = image.getContext("2d");
const picture = document.getElementById("ph");
ctx.drawImage(picture, 0, 0, 1200, 750);

//save image not style
save.addEventListener("click", () => {
  let str = image.style.cssText;
  str = str.replace("--upload:C:úkepathđ.jpgundefined", "");

  for (let i = 0; i < 10; i++) {
    str = str.replace("--", "");
    str = str.replace(" ", "");
  }
  let arr = str.split(";");

  

  

  // arr.forEach((element) => {
  //   const arrFilter = element.split(":");
    
  //   ctx.filter = '';
  //   ctx.drawImage(ph, 0, 0);


  //   if (arrFilter[0] === "hue") {
  //     ctx.filter = `hue-rotate(${arrFilter[1]})`;
  //   ctx.drawImage(ph, 0, 0);

  //   } else {
  //     ctx.filter = `${arrFilter[0]}(${arrFilter[1]})`;
  //   ctx.drawImage(ph, 0, 0);

  //   }
  // });

  let stringFilter;

  arr.forEach((element) => {
    const arrFilter = element.split(":");
    if (arrFilter[0] === "hue") {
      stringFilter += ` hue-rotate(${arrFilter[1]}) `;
    } else {
      stringFilter += ` ${arrFilter[0]}(${arrFilter[1]}) `;
    }
  });

  for (let i = 0; i < 10; i++) {
    stringFilter = stringFilter.replace("undefined", "");
    stringFilter = stringFilter.replace("(undefined)", "");
    stringFilter = stringFilter.replace("()", "");

  }

  console.log(stringFilter);
  ctx.filter = stringFilter;
  ctx.drawImage(ph, 0, 0, 1200, 750);



  const dataURL = image.toDataURL();
  const picture = document.createElement("img");
  picture.src = dataURL;
  image.style = "";
  ctx.drawImage(ph, 0, 0, 1200, 750);


  const a = document.createElement("a");
  a.href = picture.src;
  a.download = "image.png";
  a.click();
});

// load image
file.addEventListener("change", previewFile);

function previewFile() {
  ctx.filter = "";
  removeStyle()
    
  ctx.drawImage(picture, 0, 0, 1200, 750);
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  const suffix = this.dataset.sizing;
  reader.onload = function () {
    const blob = reader.result;
    const picture = document.createElement("img");
    picture.src = blob;
    const easy = document.createElement("img");
    picture.onload = function () {
      ctx.filter = "";
    
      ctx.drawImage(picture, 0, 0, 1200, 750);
      ctx.clearRect(0, 0, image.width, image.height);
  ctx.filter = "";

      ctx.drawImage(picture, 0, 0, 1200, 750);
      ph.src = picture.src;
    };
  };

  if (file) {
    ctx.filter = "";
    
    ctx.drawImage(picture, 0, 0, 1200, 750);
    reader.readAsDataURL(file);
    preview.style = image.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
    ctx.filter = "";
    
    ctx.drawImage(picture, 0, 0, 1200, 750);
  } else {
    const picture = document.getElementById("ph");
  ctx.filter = "";
    
    ctx.drawImage(picture, 0, 0, 1200, 750);
  }
}

//style for image
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

function handleUpdate() {
  const suffix = this.dataset.sizing;
  image.style.setProperty(`--${this.name}`, this.value + suffix);
}

//fullscreen
btnFullScreen.addEventListener("click", () => {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.fullscreenEnabled) {
      document.exitFullscreen();
    }
  }
});

// input style image
outputBlur.innerHTML = inputBlur.value;

inputBlur.oninput = function () {
  outputBlur.innerHTML = this.value;
};

outputInvert.innerHTML = inputInvert.value;

inputInvert.oninput = function () {
  outputInvert.innerHTML = this.value;
};

outputSeria.innerHTML = inputSeria.value;

inputSeria.oninput = function () {
  outputSeria.innerHTML = this.value;
};

outputSaturate.innerHTML = inputSaturate.value;

inputSaturate.oninput = function () {
  outputSaturate.innerHTML = this.value;
};

outputRotate.innerHTML = inputRotate.value;

inputRotate.oninput = function () {
  outputRotate.innerHTML = this.value;
};

btnReset.addEventListener("click", () => {
  
  removeStyle()
  ctx.drawImage(picture, 0, 0, 1200, 750);
});

function removeStyle() {
  inputRotate.value = 0;
  outputRotate.innerHTML = 0;
  inputSaturate.value = 100;
  outputSaturate.innerHTML = 100;
  inputSeria.value = 0;
  outputSeria.innerHTML = 0;
  inputInvert.value = 0;
  outputInvert.innerHTML = 0;
  inputBlur.value = 0;
  outputBlur.innerHTML = 0;
  image.style = "";
  ctx.filter = "";
}

//next picture 
const btnNext = document.getElementById("next-pctr");

let images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

let timeOfDay = '';
let dateNow = new Date(Date.now());
let dateHour = dateNow.getHours();
if (dateHour >= 6 && dateHour < 12) {
    timeOfDay = 'morning';
} else if (dateHour >= 12 && dateHour < 18) {
    timeOfDay = 'day'
} else if (dateHour >= 18 && dateHour < 24) {
    timeOfDay = 'evening'
} else if (dateHour >= 0 && dateHour < 6) {
    timeOfDay = 'night'
}
let base = `./assets/images/${timeOfDay}/`;

function nextImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
      picture.src = src;
      ctx.drawImage(img, 0, 0, 1200, 750)
  };
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  nextImage(imageSrc);
  console.log(imageSrc);
  i++;
  btnNext.disabled = true;
  setTimeout(function () { btnNext.disabled = false }, 300);
}

btnNext.addEventListener('click', getImage);