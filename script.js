const world =document.querySelector ("#world")
const gn=document.querySelector ("#gn")
const infok =document.querySelector ("#Info")
const material =document.querySelector ("#Alapanyagok")
const kasztok =document.querySelector ("#kasztok")
const menu2 =document.querySelector ("#men2")
const menu3 =document.querySelector ("#men3")
const kasz =document.querySelector ("#kasz")
const allinfo=document.querySelectorAll ("#Info > div")
const mat =document.querySelector("#mat")
const g2=document.querySelector ("#Generator")
const nw=document.querySelector ("#new")
const cont=document.querySelector ("#content")


allinfo.forEach(div=> {div.style.display="none"});
menu2.style.display="none"
menu3.style.display="none"
g2.style.display="none"

let lines;
fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/content.txt")
.then(res => res.text())
.then(text => {
lines = text.split('\n');
let parsedLines = [];  let currentId = null; let currentContent = "";
lines.forEach(line => {if (line.includes(':')) {if (currentId) parsedLines.push({ id: currentId, content: currentContent.trim() });
const parts = line.split(':');
currentId = parts[0].trim();currentContent = parts.slice(1).join(':').trim();} else {
currentContent += '\n' + line;}});
if (currentId) parsedLines.push({ id: currentId, content: currentContent.trim() });
parsedLines.forEach(obj => {const p = document.getElementById(obj.id);
if (p) p.innerHTML = obj.content.replace(/\n\n/g, "<br>");});})
.catch(err => console.error('hiba:', err));

world.addEventListener("click", ()=> {if (menu2.style.display==="none") {menu2.style.display="block"} else {menu2.style.display="none"}});
gn.addEventListener("click", () => {if (menu3.style.display==="none") {menu3.style.display="block"} else {menu3.style.display="none"}});
mat.addEventListener("click", () =>{let exist=cont.querySelector("#AlapanyagokCopy");if (exist) {exist.remove()} else {const matcopy=material.cloneNode(true); matcopy.id="AlapanyagokCopy"; cont.appendChild(matcopy); matcopy.style.display="block"}})
nw.addEventListener("click", () => {if (g2.style.display==="none") {g2.style.display="block"} else {g2.style.display="none"}});

console.log(mat);      
console.log(material); 
console.log(cont);
console.log("cont:", cont);