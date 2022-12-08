let enterButton = document.getElementById('Enter');
let music1a = document.getElementById('firstAudioA');
let img1a = document.getElementById('firstA');
let boolean1 = true;
let music2a = document.getElementById('secondAudioA');
let img2a = document.getElementById('secondA');
let boolean2 = true;
let music3a = document.getElementById('thirdAudioA');
let img3a = document.getElementById('thirdA');
let boolean3 = true;
let music4a = document.getElementById('fourthAudioA');
let img4a = document.getElementById('fourthA');
let boolean4 = true;
let music5a = document.getElementById('fifthAudioA');
let img5a = document.getElementById('fifthA');
let boolean5 = true;
let music6a = document.getElementById('sixthAudioA');
let img6a = document.getElementById('sixthA');
let boolean6 = true;
let start = false;

enterButton.onclick = function() {
  start = true;
  let count = 0;
  document.getElementById("Start").style.display="none";
  document.getElementById("Enter").style.display="none";
  document.getElementById("firstA").style.display="block";
  document.getElementById("secondA").style.display="block";
  document.getElementById("thirdA").style.display="block";
  document.getElementById("fourthA").style.display="block";
  document.getElementById("fifthA").style.display="block";
  document.getElementById("sixthA").style.display="block";
  img1a.onmouseover = function() {
    if (boolean1 == true)
    {
      music1a.play();
      document.getElementById('firstA').src = "images/HighlightCouch.png";
      document.getElementById('firstA').style.cursor = "clicker";
    }
  }
  img1a.onmouseout = function() {
    if (boolean1==true)
    {
      music1a.pause();
      document.getElementById('firstA').src = "images/EmptyCouch.png";
      document.getElementById('firstA').style.cursor = "pointer";
    }
  }
  img1a.onclick = function() {
    music1a.pause();
    document.getElementById('firstA').src = "images/CatCouch.png";
    boolean1 = false;
    count+=1;
  }

  img2a.onmouseover = function() {
    if (boolean2 == true)
    {
      music2a.play();
      document.getElementById('secondA').src = "images/SleepyBed.png";
      document.getElementById('secondA').style.cursor = "clicker";
    }
  }
  img2a.onmouseout = function() {
    if (boolean2==true)
    {
      music2a.pause();
      document.getElementById('secondA').src = "images/EmptyBed.png";
      document.getElementById('secondA').style.cursor = "pointer";
    }
  }
  img2a.onclick = function() {
    music2a.pause();
    document.getElementById('secondA').src = "images/CatBed.png";
    boolean2 = false;
    count+=1;
  }

  img3a.onmouseover = function() {
    if (boolean3 == true)
    {
      music3a.play();
      document.getElementById('thirdA').src = "images/HeartFood.png";
      document.getElementById('thirdA').style.cursor = "clicker";
    }
  }
  img3a.onmouseout = function() {
    if (boolean3==true)
    {
      music3a.pause();
      document.getElementById('thirdA').src = "images/EmptyFood.png";
      document.getElementById('thirdA').style.cursor = "pointer";
    }
  }
  img3a.onclick = function() {
    music3a.pause();
    document.getElementById('thirdA').src = "images/CatFood.png";
    boolean3 = false;
    count+=1;
  }

  img4a.onmouseover = function() {
    if (boolean4 == true)
    {
      music4a.play();
      document.getElementById('fourthA').src = "images/DarkLaundry.png";
      document.getElementById('fourthA').style.cursor = "clicker";
    }
  }
  img4a.onmouseout = function() {
    if (boolean4==true)
    {
      music4a.pause();
      document.getElementById('fourthA').src = "images/EmptyLaundry.png";
      document.getElementById('fourthA').style.cursor = "pointer";
    }
  }
  img4a.onclick = function() {
    music4a.pause();
    document.getElementById('fourthA').src = "images/CatLaundry.png";
    boolean4 = false;
    count+=1;
  }

  img5a.onmouseover = function() {
    if (boolean5 == true)
    {
      music5a.play();
      document.getElementById('fifthA').src = "images/FireFireplace.png";
      document.getElementById('fifthA').style.cursor = "clicker";
    }
  }
  img5a.onmouseout = function() {
    if (boolean5==true)
    {
      music5a.pause();
      document.getElementById('fifthA').src = "images/EmptyFireplace.png";
      document.getElementById('fifthA').style.cursor = "pointer";
    }
  }
  img5a.onclick = function() {
    music5a.pause();
    document.getElementById('fifthA').src = "images/CatFireplace.png";
    boolean5 = false;
    count+=1;
  }

  img6a.onmouseover = function() {
    if (boolean6 == true)
    {
      music6a.play();
      document.getElementById('sixthA').src = "images/WaterSink.png";
      document.getElementById('sixthA').style.cursor = "clicker";
    }
  }
  img6a.onmouseout = function() {
    if (boolean6==true)
    {
      music6a.pause();
      document.getElementById('sixthA').src = "images/EmptySink.png";
      document.getElementById('sixthA').style.cursor = "pointer";
    }
  }
  img6a.onclick = function() {
    music6a.pause();
    document.getElementById('sixthA').src = "images/CatSink.png";
    boolean6 = false;
    count+=1;
  }
}

if (start == false){
  document.getElementById("firstA").style.display="none";
  document.getElementById("secondA").style.display="none";
  document.getElementById("thirdA").style.display="none";
  document.getElementById("fourthA").style.display="none";
  document.getElementById("fifthA").style.display="none";
  document.getElementById("sixthA").style.display="none";
}

if (count == 9){
  document.getElementById("firstA").style.display="none";
  document.getElementById("secondA").style.display="none";
  document.getElementById("thirdA").style.display="none";
}




// img1a.addEventListener("click", function(){
//   music1a.pause();
//   document.getElementById('firstA').src = "images/CatCouch.png";
// }

// function changeImage()
// {
//   music1a.pause();
//   document.getElementById('firstA').src = "images/CatCouch.png";
//   document.getElementById('firstAudioA').src = "sounds/DirectOtis";
//   music1a = document.getElementById('firstAudioA');
//   for (i = 0; i<1; i++)
//   {
//     music1a.play();
//   }
// }
