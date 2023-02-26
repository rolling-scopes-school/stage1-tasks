function zero_first_format(value)
  {
      if (value < 10)
      {
          value='0'+value;
      }
      return value;
  }
  function showTime()
  {
      var current_datetime = new Date();
      var hours = zero_first_format(current_datetime.getHours());
      var minutes = zero_first_format(current_datetime.getMinutes());
      var seconds = zero_first_format(current_datetime.getSeconds());

      return hours+":"+minutes+":"+seconds;
  }

  document.getElementById('time_for_now').innerHTML = showTime();


  function showDate() {
    var monthNames = [ "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                   "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
    var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];                       
    var today = new Date();
    var dd   = today.getDate();
    var mm   = monthNames[today.getMonth()]; 
    var yyyy = today.getFullYear();
    var day  = days[today.getDay()];
    today = 'Date is :' + dd + '-' + mm + '-' + yyyy;
    document.write(today +"<br>");
    document.write('Day is : ' + day );

    return day + ', ' + mm + '  ' + dd + ',' + yyyy;
  }

  document.getElementById('date_for_today').innerHTML = showDate();
  

  //music audio//

  var playMusic = document.getElementById('playMusic');
  var audio = document.getElementById('audio');
  playMusic.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playMusic.classList.remove('pause');
    } else {
      audio.pause();
      playMusic.classList.add('pause');
    }
  });

  var next = document.getElementById('next')
  var prev = document.getElementById('prev')
  next.addEventListener('click', function() {
    for(let i = 0; i < playList.length; i++) {
      if(i === playList.length - 1) {
        currentSong = playList[0];
    }
  }
  })

  prev.addEventListener('click', function() {
    for(let i = 0; i < playList.length; i++) {
      // здесь ваш код
    }
  })

  var next = document.getElementById('next');
/* var prev = document.getElementById('prev') */
  var prev = document.getElementById('prev');
/* next.addEventListener('click', function() { */
  next.addEventListener('click', function() {
  
/* for(let i = 0; i < playList.length; i++) { */
  for(let i = 0; i < playList.length; i++) {
/* here to write the code */
  if(playList[i].id === currentSong.id) {
    if(i === playList.length - 1) {
      currentSong = playList[0];
    } else {
      currentSong = playList[i + 1];
    }
    break;
  }
/* } */
}
/* }) */
})