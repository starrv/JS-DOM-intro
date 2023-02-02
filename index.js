const someDiv=document.createElement("div");
const mainHeading=document.createElement("h1");
mainHeading.textContent="Hello World!!";
mainHeading.style.fontWeight=900;
mainHeading.style.fontSize="72px";
someDiv.append(mainHeading);
document.body.append(someDiv);