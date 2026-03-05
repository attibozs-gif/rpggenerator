const subclass = {}; const kaszt = {}; const charcter = {}; const player = {}; 
const Cc = document.querySelector ("#CurrentClass"); const Pc = document.getElementById ("PreviousClass"); const Nc =document.getElementById ("NextClass")

let dataStore;
fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/stat.json")
.then (response => response.json())
.then (data => {dataStore=data}); document.addEventListener("DOMContentLoaded", () => {const startSP = document.getElementById("startSP");
startSP.addEventListener("input", () => {let spValue=Number(startSP.value); if (subclass.startSP !== undefined) {spValue=subclass.startSP} 
const filteredRows = dataStore.Stats.filter (row =>Number(row.SP) === spValue); 
console.log(filteredRows)}) });
let cindex=0; Pc.addEventListener("click", () => {if (cindex===0) {cindex=12} else {cindex--}})  
Nc.addEventListener("click", () => {if (cindex===12) {cindex=0} else {cindex++}; Cc.textContent=dataStore.Classes[cindex];})
console.log(cindex); 




















