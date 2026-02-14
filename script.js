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

let lines
fetch("./content.txt")
.then(res =>res.text())
.then(text => {lines = text.split('\n')
lines.forEach(line=> {const parts =line.split(':'); const id=parts[0].trim(); const content=parts.slice(1).join(':').trim(); 
const p=document.getElementById(id); if (p) {p.innerHTML = content}})})
.catch(err => console.error ('hiba:', err))





world.addEventListener("click", ()=> {if (menu2.style.display==="none") {menu2.style.display="block"} else {menu2.style.display="none"}});
gen.addEventListener("click", () => {if (menu3.style.display==="none") {menu3.style.display="block"} else {menu3.style.display="none"}});
mat.addEventListener("click", () =>{let exist=mat.querySelector("#AlapanyagokCopy");if (exist) {exist.remove()} else {const matcopy=material.cloneNode(true); matcopy.id="AlapanyagokCopy"; mat.appendChild(matcopy); matcopy.style.display="block"}})

