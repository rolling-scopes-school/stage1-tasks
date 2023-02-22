function zero_first_format(value)
  {
      if (value < 10)
      {
          value='0'+value;
      }
      return value;
  }

  /* функция получения текущей даты и времени */
  function showTime()
  {
      var current_datetime = new Date();
      var hours = zero_first_format(current_datetime.getHours());
      var minutes = zero_first_format(current_datetime.getMinutes());
      var seconds = zero_first_format(current_datetime.getSeconds());

      return hours+":"+minutes+":"+seconds;
  }

  document.getElementById('time_for_now').innerHTML = showTime();


  let today = new Date(),                                                               
  yesterday = new Date(),                                                        
  roomLastMessageDate = new Date(dateTime);                                                   

yesterday.setDate(today.getDate() -1);

if (dateTime) {
  if (getFormattedDate(today === roomLastMessageDate)) {                                                                
      return 'Сегодня'                                                                                
  } else if (getFormattedDate(yesterday === roomLastMessageDate)) {                                                     
      return 'Вчера'                                                                                  
  } else {                                                                                            
      return roomLastMessageDate;                                                                     
  }
}
  