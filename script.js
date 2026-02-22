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
const Triskol=document.querySelector ("#Triskol")
const Virtus=document.querySelector ("#Virtusok")
const mat1=document.querySelector ("#Mat1")
const matcont=document.querySelector("#matcont")
const aa1=document.querySelector("#aa1")
const aa2=document.querySelector("#aa2")
const Tri2=document.querySelector("#Triskol2")
const vir2=document.querySelector ("#vir")
const szom=document.querySelector ("#szom")
const phren=document.querySelector ("#phren")
const pne=document.querySelector ("#pne")


menu2.style.display="none"
menu3.style.display="none"
g2.style.display="none"
matcont.style.display="none"
allinfo.forEach(div=> {div.style.display="none"});
Tri2.style.display="block"


let lines;
fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/content.txt")
.then(res => res.text()).then(text => {
text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
let lines = text.split('\n'); let parsedLines = []; let currentId = null; let currentContent = "";
lines.forEach(line => {const trimmed = line.trim();const colonIndex = line.indexOf(':');
if (colonIndex > 0) { if (currentId !== null) {parsedLines.push({ id: currentId, content: currentContent });}
currentId = line.slice(0, colonIndex).trim();currentContent = line.slice(colonIndex + 1); } else 
{currentContent += "\n" + line;}}); if (currentId !== null) {parsedLines.push({ id: currentId, content: currentContent });}
parsedLines.forEach(obj => {const p = document.getElementById(obj.id);if (p) {p.textContent = obj.content; }});})
.catch(err => console.error('hiba:', err));

world.addEventListener("click", ()=> {if (menu2.style.display==="none") {menu2.style.display="block"} else {menu2.style.display="none"}});

gn.addEventListener("click", () => {if (menu3.style.display==="none") {menu3.style.display="block"} else {menu3.style.display="none"}});

mat.addEventListener("click", () => {let exist=cont.querySelector("#AlapanyagokCopy");if (exist) {exist.remove()} 
else {const matcopy=material.cloneNode(false); 
const alapheader=material.querySelector (".alapheader"); matcopy.appendChild(alapheader.cloneNode(true)); 
const Triskolflex=Triskol.querySelector(".flexTriskol"); Triskolflex.style.display="flex"; Triskolflex.style.alignItems="flex-start";
matcopy.appendChild(Tri2.cloneNode(true)); matcopy.appendChild(Triskolflex.cloneNode(true)); 
const Virtusflex=Virtusok.querySelector(".virtusflex"); Virtusflex.style.display="flex"; Virtusflex.style.alignItems="flex-start";
matcopy.appendChild(vir2.cloneNode(true)); matcopy.appendChild(Virtusflex.cloneNode(true));
matcopy.id="AlapanyagokCopy"; cont.appendChild(matcopy); matcopy.style.display="block"}})

mat1.addEventListener("click", () => {let exist=cont.querySelector("#AlapanyagokCopy");if (exist) {exist.remove()}; 
const matcopy = Triskolcontent.cloneNode(false); const flexsomatium=Triskolcontent.querySelector(".flexsomatium"); 
const Triskolflex=Triskol.querySelector(".flexTriskol"); Triskolflex.style.display="flex"; 
Triskolflex.style.alignItems="flex-start"; matcopy.appendChild(Tri2.cloneNode(true)); matcopy.appendChild(Triskolflex.cloneNode(true));
matcopy.appendChild(szom.cloneNode(true)); matcopy.appendChild(flexsomatium.cloneNode(true)); 
const flexphrenium=Triskolcontent.querySelector(".flexphrenium"); matcopy.appendChild(phren.cloneNode(true)); 
matcopy.appendChild(flexphrenium.cloneNode(true));
const flexpneum=Triskolcontent.querySelector(".flexpneum"); matcopy.appendChild(pne.cloneNode(true)); 
matcopy.appendChild(flexpneum.cloneNode(true));    
matcopy.id="AlapanyagokCopy"; cont.appendChild(matcopy); matcopy.style.display="block"})

nw.addEventListener("click", () => {if (g2.style.display==="none") {g2.style.display="block"} else {g2.style.display="none"}});

mat.addEventListener("click", () => {if (matcont.style.display==="none") {matcont.style.display="block"} else {matcont.style.display="none"}});

document.querySelectorAll("#Triskol img, #Triskol h2, #Triskol p").forEach(el => {
    console.log(el.tagName, getComputedStyle(el).display);
});