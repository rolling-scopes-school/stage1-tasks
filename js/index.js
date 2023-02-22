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



  









  