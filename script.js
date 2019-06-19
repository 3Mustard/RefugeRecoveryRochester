//create header
let topDiv = document.getElementById("top");
let homeContent = document.createElement("BUTTON");
homeContent.id = "homeContent";
homeContent.textContent = "Home";
homeContent.addEventListener('click', ()=> home());
let aboutText = document.createElement("BUTTON");
aboutText.id = "about";
aboutText.textContent = "About";
aboutText.addEventListener('click', ()=> aboutUs());
let fourTruth = document.createElement("BUTTON");
fourTruth.id = "four";
fourTruth.textContent = "The Four Noble Truths";
let eightPath = document.createElement("BUTTON");
eightPath.id = "eight";
eightPath.textContent = "The Eightfold Path";
let learnMore = document.createElement("a");
learnMore.id = "learnMore";
learnMore.textContent = "Learn more";
learnMore.href = "https://refugerecovery.org/";

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

function home(){
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

function aboutUs(){
  clearContent();
  let aboutText = document.createElement("p");
  aboutText.id = "aboutText";
  aboutText.setAttribute('style', 'white-space: pre;');
  aboutText.textContent = "Refuge Recovery is a non-theistic, Buddhist-inspired\r\n";
  aboutText.textContent += "approach to recovery from addictions of all kinds.\r\n";
  aboutText.textContent += "\r\n";
  aboutText.textContent += "We are a community of people dedicated to the practices of\r\n";
  aboutText.textContent += "mindfulness, compassion, forgivness, and generosity,\r\n";
  aboutText.textContent += "using meditation and kindness to heal the pain and suffering\r\n";
  aboutText.textContent += "that addiction has caused in our lives and in the lives of those around us.\r\n";
  aboutText.textContent += "\r\n";
  aboutText.textContent += "Our weekly peer-led meetings include guided meditations,\r\n";
  aboutText.textContent += "readings from the book Refuge Recovery, and group sharing/discussion.\r\n";
  aboutText.textContent += "\r\n";
  aboutText.textContent += "Open to people of all backgrounds and respectful of all recovery paths,\r\n";
  aboutText.textContent += "these meetings are appropriate for anyone in, or interested in,\r\n";
  aboutText.textContent += "recovery from any forms of addictive behavior.\r\n";
  aboutText.textContent += "No prior meditation experience necessary.\r\n";
  
  content.appendChild(aboutText);
}

function fourNobleTruths(){
  clearContent();
  let fourTruthText = document.createElement("p");
  fourTruthText.id = "fourTruthText";
  fourTruthText.setAttribute('style', 'white-space: pre;');
  fourTruthText.textContent = "\r\n";
}

topDiv.appendChild(homeContent);
topDiv.appendChild(aboutText);
//topDiv.appendChild(fourTruth);
//topDiv.appendChild(eightPath);
topDiv.appendChild(learnMore);
bottomDiv.appendChild(footer);
footer.appendChild(email);
footer.appendChild(learnMoreLink);