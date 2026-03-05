const subclass = {};
const kaszt = {};
const charcter = {};
const player = {};

let Cc, Pc, Nc;
let cindex = 0;
let dataStore;


fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/stat.json")
 .then(response => response.json())
  .then(data => {
      dataStore = data;
      console.log("Classes loaded:", dataStore.Classes);
      if (Cc) Cc.textContent = dataStore.Classes[cindex];  

document.addEventListener("DOMContentLoaded", () => {
    Cc = document.querySelector("#CurrentClass");
    Pc = document.querySelector("#PreviousClass");
    Nc = document.querySelector("#NextClass");

    console.log("Pc:", Pc, "Nc:", Nc, "Cc:", Cc); 

    const startSP = document.getElementById("startSP");
    startSP.addEventListener("input", () => {
        let spValue = Number(startSP.value);
        if (subclass.startSP !== undefined) spValue = subclass.startSP;

        const filteredRows = dataStore.Stats.filter(row => Number(row.SP) === spValue);
        console.log(filteredRows);
    });

    Pc.addEventListener("click", () => {
        if (!dataStore) { console.log("Prev clicked but dataStore not ready"); return; }
        cindex = cindex === 0 ? dataStore.Classes.length - 1 : cindex - 1;
        Cc.textContent = dataStore.Classes[cindex];
        console.log("Prev clicked, cindex =", cindex);
    });

    Nc.addEventListener("click", () => {
        if (!dataStore) { console.log("Next clicked but dataStore not ready"); return; }
        cindex = cindex === dataStore.Classes.length - 1 ? 0 : cindex + 1;
        Cc.textContent = dataStore.Classes[cindex];
        console.log("Next clicked, cindex =", cindex); });
    });
});











