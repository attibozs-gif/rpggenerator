const subclass = {}; const kaszt = {}; const charcter = {}; const player = {}; 

fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/stat.json")
.then (response => response.json())
.then (data => {document.addEventListener("DOMContentLoaded", () => {const startSP = document.getElementById("startSP");
startSP.addEventListener("input", () => {const spValue=Number(startSP.value); const filteredRows = data.Stats.filter (row =>row.SP === spValue); spValue===subclass.startSP;
console.log(filteredRows)}) });})


















