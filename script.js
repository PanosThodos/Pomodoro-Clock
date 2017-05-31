$(document).ready(function(){
  var buzzer = new Audio("http://soundbible.com/grab.php?id=787&type=mp3");
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  
  $("#reset").hide();
  
  $("#start").click(function(){
    var c = setInterval(timer, 1000);
    count*=60;
    //Session Timer Starts
    function timer(){
      $("#timeType").show();
      //hide vars
      $("#start, #minus5Clock, #add5Clock, #add5Break, #minus5Break, #title1, #title2, #breakNum").hide();
      $("#timeType").html("Session Time : ");
      count -= 1;
      if(count === 0){
        buzzer.play();
        clearInterval(c);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
        breakTime *= 60;
      }
      if(count%60>=10){
         $("#num").html(Math.floor(count/60)+":"+count%60);
      }
      else{
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
      }
      
      //BreakTimer Starts
      function breakTimer(){
        $("#timeType").html("Break Time : ");
        $("#breakNum").show();
        $("#timeType").show();
        breakTime -= 1;
        if(breakTime===0){
          clearInterval(startBreak);
          $("#reset").show();
          $("#breakNum, #timeType").hide();
        }
        if(breakTime%60>=10){
         $("#breakNum").html(Math.floor(breakTime/60)+":"+Math.floor(breakTime%60));
        }
        else{
          $("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+Math.floor(breakTime%60));
        }
      }
    }
    
  });
  
  $("#reset").click(function(){
    count = 5;
    breakTime = 5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5Clock, #add5Clock, #add5Break, #minus5Break, #title1, #title2, #breakNum, #num").show();
    $("#reset, #timeType").hide();
  });
  
  $("#minus5Clock").click(function(){
    if(count > 1){
      count-=1;
      $("#num").html(count);
    }
  });
  $("#add5Clock").click(function(){
      count+=1;
      $("#num").html(count);
    });
  $("#minus5Break").click(function(){
    if(breakTime > 1){
      breakTime -= 1;
      $("#breakNum").html(breakTime);
    }
  });
  $("#add5Break").click(function(){
      breakTime += 1;
      $("#breakNum").html(breakTime);
    });
});