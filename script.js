let content = document.getElementById("content");
let logoTextHeader = document.createElement("h3");
logoTextHeader.id = "textHeader";
let meetingTimesHeader = document.createElement("h1");
meetingTimesHeader.id = "meetingsHead";
let meetingTimes = document.createElement("div");
meetingTimes.id = "meetings";
let footer = document.createElement("div");
footer.id = "footer";
let email = document.createElement("p");
email.id = "email";

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

email.textContent = "refugerecoveryrochester@gmail.com";

content.appendChild(meetingTimesHeader);
content.appendChild(logoTextHeader);
content.appendChild(meetingTimes);
content.appendChild(footer);
footer.appendChild(email);