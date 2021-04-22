window.addEventListener("load",()=>{
  let long;
  let lat;
let t=document.querySelector("#degree");
let d=document.querySelector(".descrip");
let i=document.querySelector("#icon");
let l=document.querySelector(".place");
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      lat=position.coords.latitude;
      long=position.coords.longitude;
      const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d72bbb5d0a92fbc327339dea5872ff34`;
      fetch(api)
      .then(response => response.text())
   .then(data => {console.log(data);
     var obj=JSON.parse(data);
     console.log(obj.main.temp);
t.innerHTML=(obj.main.temp)-273.15;
d.innerHTML=(obj.weather[0].main);
var x=obj.weather[0].icon;
var y=obj.name+","+obj.sys.country;
l.innerHTML=y;
i.src=`https://openweathermap.org/img/wn/${x}@2x.png`;
       });




});


  }
});
