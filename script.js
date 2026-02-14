const world =document.querySelector ("#world")
const gen =document.querySelector ("#gen")
const infok =document.querySelector ("#Info")
const material =document.querySelector ("#Alapanyagok")
const kasztok =document.querySelector ("#kasztok")
const menu2 =document.querySelector ("#men2")
const menu3 =document.querySelector ("#men3")
const kasz =document.querySelector ("#kasz")
const allinfo=document.querySelectorAll ("#Info > div")
const mat =document.querySelector("#mat")

allinfo.forEach(div=> {div.style.display="none"});
menu2.style.display="none"
menu3.style.display="none"

let lines;
fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/content.txt")
  .then(res => res.text())
  .then(text => {
    lines = text.split('\n');
   let parsedLines = [];
let currentId = null;
let currentContent = "";
lines.forEach(line => {
  if (line.includes(':')) {
    if (currentId) parsedLines.push({ id: currentId, content: currentContent.trim() });
    const parts = line.split(':');
    currentId = parts[0].trim();
    currentContent = parts.slice(1).join(':').trim();} 
    else {currentContent += '\n' + line;}});if (currentId) parsedLines.push({ id: currentId, content: currentContent.trim() }); })
  .catch(err => console.error('hiba:', err));

world.addEventListener("click", ()=> {if (menu2.style.display==="none") {menu2.style.display="block"} else {menu2.style.display="none"}});
gen.addEventListener("click", () => {if (menu3.style.display==="none") {menu3.style.display="block"} else {menu3.style.display="none"}});
mat.addEventListener("click", () =>{let exist=mat.querySelector("#AlapanyagokCopy");if (exist) {exist.remove()} else {const matcopy=material.cloneNode(true); matcopy.id="AlapanyagokCopy"; mat.appendChild(matcopy); matcopy.style.display="block"}})




