//* Active state
var state_indicate = document.getElementById('active-state')
var state_indicate_color = document.getElementById('active-state-color')
var state_indicate_icon = document.getElementById('active-state-icon')
let state = 'off'
//https://www.w3schools.com/icons/fontawesome_icons_webapp.asp
if(!state.match(/off|inactive|close|delete|down/gi))
{
  state_indicate_icon.innerHTML = `<i class="	fa fa-check-circle-o"></i>&nbsp;`
  state_indicate.innerHTML = "OPEN"
  state_indicate_color.style.color = "rgb(0,255,0)"
}
else
{
  state_indicate_icon.innerHTML = `<i class="fa fa-ban"></i>&nbsp;`
  state_indicate.innerHTML = "CLOSE"
  state_indicate_color.style.color = "red"
}
//* header size fix
if(screen.width <= 500){
  document.getElementById('header_img_0').style.height = "38px"
  document.getElementById('header_img_0').style.width = "78px"

  document.getElementById('header_img_1').style.height = "30px"
  document.getElementById('header_img_1').style.width = "120px"

  document.getElementById('header_txt_0').style.fontSize = "25px"

  document.getElementById('h1_topic').style.fontSize = "34px"
}

//* battery level reading
var chargeAnimate = 0
setInterval(() => {
  
var battery_bar = document.getElementsByClassName('notify_bar')[0]
var cpu_bar = document.getElementsByClassName('notify_bar')[1]
var ram_bar = document.getElementsByClassName('notify_bar')[2]

navigator.getBattery().then((battery) => {

  var batterylevel = battery.level * 100;
  var batterylevelstate = 4
  var batterylow = ""

  batterylevel = Math.ceil(batterylevel) // 56.99999999 = 56 / ammo loku deyak

  var ischarge = ""
  if(battery.charging == true)
  {
    if(chargeAnimate == 0)
    {
      batterylevelstate = 0
    }else{
    if(chargeAnimate == 1)
    {
      batterylevelstate = 1
    }else{
    if(chargeAnimate == 2)
    {
      batterylevelstate = 2
    }else{
    if(chargeAnimate == 3)
    {
      batterylevelstate = 3
    }else{
    if(chargeAnimate == 4)
    {
      batterylevelstate = 4
      chargeAnimate = 0
    }}}}}

    chargeAnimate += 1

    if(batterylevel == 100){
      batterylow = "&nbsp; Fully charged <i class='fa fa-check'></i>"
    }
    if(batterylevel >= 80){
      battery_bar.style.color = "rgb(0, 255, 0)"
    }else{
    if(batterylevel >= 65){
      battery_bar.style.color = "rgb(50, 255, 250)"
    }else{
    if(batterylevel >= 50){
      battery_bar.style.color = "rgb(255, 46, 245)"
    }else{
    if(batterylevel >= 20){
      battery_bar.style.color = "rgb(248, 232, 1)"
    }else{
    if(batterylevel >= 10){
      battery_bar.style.color = "rgb(255, 153, 0)"
    }else{
    if(batterylevel >= 0){
      battery_bar.style.color = "rgb(255, 0, 0)"
      batterylow = " Battery low <i class='fa fa-exclamation-triangle'></i>"
    }}}}}}
    //ischarge = "<i class='fa fa-plug'></i>&nbsp;&nbsp;"
    batterylevel = "<i class='fa fa-bolt' style='font-size:14px'></i>&nbsp;&nbsp;" + batterylevel

  }
  else
  {
    if(batterylevel == 100){
      batterylow = "&nbsp; Full <i class='fa fa-check'></i>"
    }
    if(batterylevel >= 80){
      batterylevelstate = 4
      battery_bar.style.color = "rgb(0, 255, 0)"
    }else{
    if(batterylevel >= 65){
      batterylevelstate = 3
      battery_bar.style.color = "rgb(50, 255, 250)"
    }else{
    if(batterylevel >= 50){
      batterylevelstate = 3
      battery_bar.style.color = "rgb(255, 46, 245)"
    }else{
    if(batterylevel >= 20){
      batterylevelstate = 2
      battery_bar.style.color = "rgb(248, 232, 1)"
    }else{
    if(batterylevel >= 10){
      batterylevelstate = 1
      battery_bar.style.color = "rgb(255, 153, 0)"
    }else{
    if(batterylevel >= 0){
      batterylevelstate = 0
      battery_bar.style.color = "rgb(255, 0, 0)"
      batterylow = " Battery low <i class='fa fa-exclamation-triangle'></i>"
    }}}}}}
    batterylevel = "&nbsp;" + batterylevel
  }
  //console.log(battery.charging)

  battery_bar.innerHTML = `${ischarge}<i class="fa fa-battery-${batterylevelstate}"></i>&nbsp;${batterylevel}% ${batterylow}`
  //console.log("BATTERY READING: "+batterylevel);
});

},1000)


document.getElementById("dakma__").style.display = "block"

// * time
setInterval(() => {
  let date = new Date()
  let clockH = document.getElementById('timeH')
  let clockM = document.getElementById('timeM')
  let clockS = document.getElementById('timeS')
  let clockF = document.getElementById('timeF')
  var s_space = ""
  var t_format = "&nbsp;&nbsp; AM"
  var GETHOURS = date.getHours()
  if(date.getSeconds() <= 9){s_space = " : 0"}else{s_space = " : "}
  if(date.getHours() >= 13){GETHOURS = GETHOURS - 12; t_format = "&nbsp;&nbsp; PM"}else{t_format = "&nbsp;&nbsp; AM"}
  if(GETHOURS <= 9){GETHOURS = `0${GETHOURS}`}
  clockH.innerHTML = GETHOURS
  clockM.innerHTML = " : " + date.getMinutes()
  clockS.innerHTML = s_space + date.getSeconds()+" "
  clockF.innerHTML = t_format
}, 1000)

//* glowing logo
function glows(){
  document.getElementById('xcjimg').src = "./media/xcodejet_gif_dark.gif"

  setTimeout(() => {
    document.getElementById('xcjimg').src = "./media/xcodejet-001.png"
  },12730)
}

// * on scroll fixed header
window.onscroll = function() {myFunction()};

var header = document.getElementById("headpage");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// * popup annoucements
var modal = document.getElementById("product-xcodejet");
var btn = document.getElementById("products");
var span = document.getElementsByClassName("close")[0];
// * display
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// * Get the modal 

var modal_a = document.getElementById("about-xcodejet");
var btn_ = document.getElementById("about");
var span_a = document.getElementsByClassName("aclose")[1];
// * display
btn_.onclick = function() {
  modal_a.style.display = "block";
}
span_a.onclick = function() {
  modal_a.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_a) {
    modal_a.style.display = "none";
  }
}

var modal_ = document.getElementById("social-xcodejet");
var btn_ = document.getElementById("social");
var span_ = document.getElementsByClassName("aclose")[0];
// * display
btn_.onclick = function() {
  modal_.style.display = "block";
}
span_.onclick = function() {
  modal_.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_) {
    modal_.style.display = "none";
  }
}

// * play
var plays = false
function anthem() {
  var anthems = document.getElementById('anthem')

  if(plays){
    anthems.pause()
    plays = false
    document.getElementById('national_anthem').innerHTML = "<i class='fa fa-play-circle-o'></i> Resume"
  }else{
    anthems.play()
    plays = true
    document.getElementById('national_anthem').innerHTML = "<i class='fa fa-pause-circle-o'></i> Pause"
  }
}