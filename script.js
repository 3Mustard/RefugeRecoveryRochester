//create content divs
let content = document.getElementById("content");
let logoTextHeader = document.createElement("h3");
logoTextHeader.id = "textHeader";
let meetingTimesHeader = document.createElement("h1");
meetingTimesHeader.id = "meetingsHead";
let meetingTimes = document.createElement("div");
meetingTimes.id = "meetings";

//create footer
let bottomDiv = document.getElementById("bottom");
let footer = document.createElement("div");
footer.id = "footer";
let email = document.createElement("p");
email.id = "email";
email.textContent = "refugerecoveryrochester@gmail.com";
let learnMoreLink = document.createElement("a");
learnMoreLink.id = "learnMoreLink";
learnMoreLink.textContent = "https://refugerecovery.org/";
learnMoreLink.href = "https://refugerecovery.org/";

let homeButton = document.getElementById("homeButton");
homeButton.addEventListener('click', ()=> home());

let aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener('click', ()=> aboutUs());

function home(){
  window.scrollTo(0,0);
  setActive('homeButton');
  clearContent();
  meetingTimesHeader.textContent = "Refuge Recovery Rochester";
  logoTextHeader.textContent = "A Buddhist Inspired Path To Recovery From Addiction";

  meetingTimes.setAttribute('style', 'white-space: pre;');
  meetingTimes.textContent = "Monday 8:00pm at the South Wedge Mission\r\n";
  meetingTimes.textContent += "125 Caroline Street\r\n";
  meetingTimes.textContent += "\r\n";
  meetingTimes.textContent += "Wednesday 7:00pm at the Rochester Zen Center\r\n";
  meetingTimes.textContent += "7 Arnold Park\r\n";
  meetingTimes.textContent += "\r\n";
  meetingTimes.textContent += "Friday 12:00pm at The Rochester Zen Center\r\n";
  meetingTimes.textContent += "7 Arnold Park\r\n";
  meetingTimes.textContent += "\r\n";
  meetingTimes.textContent += "Saturday 5:00pm at ROCovery Fitness\r\n";
  meetingTimes.textContent += "1035 Dewey Avenue";

  content.appendChild(meetingTimesHeader);
  content.appendChild(logoTextHeader);
  content.appendChild(meetingTimes);
}

//clears everything in the content div
function clearContent(){
  document.getElementById("content").innerHTML='';
}

function setActive(id){
  
  let active;
  let topnav = document.getElementById('myTopnav');
  
  if(topnav.className !== 'topnav responsive'){

  
    if(document.getElementsByClassName('active') !== null){
    
      active = document.getElementsByClassName('active')[0];
      active.className= "";
    
    }
  
    document.getElementById(id).className ="active";
  }
  
  
}

function aboutUs(){
  window.scrollTo(0,0);
  setActive('aboutButton');
  clearContent();
  let br = document.createElement("br");
  let aboutText = document.createTextNode("Refuge Recovery is a non-theistic, Buddhist inspired approach to recovery from addictions of all kinds. Our weekly peer-led meetings include guided meditations, readings from the book Refuge Recovery, and group sharing/discussion.");
  content.appendChild(aboutText);
  content.appendChild(br);
  br = document.createElement("br");
  content.appendChild(br);
  
  aboutText = document.createTextNode( "We are a community of people dedicated to the practices of mindfulness, compassion, forgivness, and generosity, using meditation and kindness to heal the pain and suffering that addiction has caused in our lives and in the lives of those around us.");
  content.appendChild(aboutText);
  br = document.createElement("br");
  content.appendChild(br);
  br = document.createElement("br");
  content.appendChild(br);
  
  aboutText = document.createTextNode("Open to people of all backgrounds and respectful of all recovery paths, these meetings are appropriate for anyone in, or interested in, recovery from any forms of addictive behavior.");
  content.appendChild(aboutText);
  br = document.createElement("br");
  content.appendChild(br);
  br = document.createElement("br");
  content.appendChild(br);
  
  
  aboutText = document.createTextNode("No prior meditation experience necessary.");
  content.appendChild(aboutText);
  
}
window.onscroll = function() {sticky()};



// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky() {
  // Get the header
var header = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  let children = x.childNodes;
  for(let i = 2; i < children.length; i ++){
    children[i].className = "";
  }
  
  if (x.className === "topnav") {
    x.className += " responsive";
    x.classname += " sticky";
  } else {
    x.className = "topnav";
  }
}

bottomDiv.appendChild(footer);
footer.appendChild(email);
footer.appendChild(learnMoreLink);