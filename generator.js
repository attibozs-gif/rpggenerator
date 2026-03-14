const alkaszt = {}; const kaszt = {}; const karakter = {}; const lemez=document.querySelector(".kasztzene"); 
const jatekos = {}; alkaszt.limit={};

music();

let attributespan;

function update () {Object.assign
                (jatekos, alkaszt, kaszt, karakter, {
                atk: (karakter.atk || 0) + (kaszt.atk || 0) + (alkaszt.atk || 0),
                def: (karakter.def || 0) + (kaszt.def || 0) + (alkaszt.def || 0),
                HP: (karakter.HP || 0) + (kaszt.HP || 0) + (alkaszt.HP || 0),
                regen: (karakter.regen || 0) + (kaszt.regen || 0) + (alkaszt.regen || 0),
                Fizikum: (karakter.Fizikum || 0) + (kaszt.Fizikum || 0) + (alkaszt.Fizikum || 0),
                Állóképesség: (karakter.Állóképesség || 0) + (kaszt.Állóképesség || 0) + (alkaszt.Állóképesség || 0),
                Ügyesség: (karakter.Ügyesség || 0) + (kaszt.Ügyesség || 0) + (alkaszt.Ügyesség || 0),
                Gyorsasság: (karakter.Gyorsasság || 0) + (kaszt.Gyorsasság || 0) + (alkaszt.Gyorsasság || 0),
                Intelligencia: (karakter.Intelligencia || 0) + (kaszt.Intelligencia || 0) + (alkaszt.Intelligencia || 0),
                Tehetség: (karakter.Tehetség || 0) + (kaszt.Tehetség || 0) + (alkaszt.Tehetség || 0),
                Felismerés: (karakter.Felismerés || 0) + (kaszt.Felismerés || 0) + (alkaszt.Felismerés || 0),
                Inspiráció: (karakter.Inspiráció || 0) + (kaszt.Inspiráció || 0) + (alkaszt.Inspiráció || 0),
                Critdmg: (karakter.Critdmg || 0) + (kaszt.Critdmg || 0) + (alkaszt.Critdmg || 0)
              }) 
                
                attributespan = {"Fizikum": cont.querySelector(".fizikum"), "Állóképesség": cont.querySelector(".allokepesseg"),
                       "Ügyesség": cont.querySelector (".ugyesseg"), "Gyorsasság": cont.querySelector(".gyorsassag"),
                       "Intelligencia": cont.querySelector (".intelligencia"), "Tehetség":cont.querySelector(".tehetseg"),
                       "Felismerés": cont.querySelector (".felismeres"), "Inspiráció": cont.querySelector(".inspiracio")}
                   
                const kasztnev = cont.querySelector(".kasztnev"); const alkasztnev = cont.querySelector (".alkasztnev");
                const currSP = cont.querySelectorAll(".currSP"); const currAP =cont.querySelector (".currAP");
                const atk2 = cont.querySelector(".atk"); const def2 = cont.querySelector(".def"); const hp2 =cont.querySelector(".health")
                const agi=cont.querySelector(".agilitas"); const fres=cont.querySelector(".physres")
                const mres=cont.querySelector(".menres"); const sres=cont.querySelector(".spires"); mres.textContent=jatekos.Mell
                const regen=cont.querySelector(".regen"); const critdmg=cont.querySelector(".critdmg");
                const armorpen=cont.querySelector(".pen");
                kasztnev.textContent = jatekos.name; alkasztnev.textContent = jatekos.subname
                currAP.textContent=jatekos.currAP;
                atk2.textContent=jatekos.Atk; def2.textContent=jatekos.Def; hp2.textContent=jatekos.HP;
                regen.textContent=jatekos.regen; critdmg.textContent=jatekos.Critdmg; armorpen.textContent=jatekos.armorpen
                agi.textContent=jatekos.Agi; fres.textContent=jatekos.Fell;
                mres.textContent=jatekos.Mell; sres.textContent=jatekos.Sell;
                currSP.forEach(span=> {span.textContent=jatekos.currSP}); 
                 Attributemax();
                for (const key in attributespan) {attributespan[key].innerHTML=`<span style="color: rgb(230, 241, 75); font-weight: bold"> ${jatekos[key]}</span> / ${alkaszt.limit[key] || 50}`}; 
              const petclass=cont.querySelector(".petclass"); if (kaszt.name==="Szörnypásztor") {petclass.style.display="flex"; petclass.style.flexDirection="column"} 
              else (petclass.style.display="none");
              

            };
let cindex=0;
document.addEventListener("DOMContentLoaded", () => {const startSP = document.getElementById("startSP");
startSP.addEventListener("input", () => {alkaszt.startSP = Number(startSP.value)
const filteredRows = dataStore.Stats.filter (row =>Number(row.SP) === alkaszt.startSP);alkaszt.currSP=alkaszt.startSP; 
alkaszt.startAP=alkaszt.startSP; alkaszt.currAP=alkaszt.startAP; update();
console.log(filteredRows)}); statsearch(); attribute(); });

cont.addEventListener("click", (event) => {if (!dataStore) return;
if (event.target.id !=="PreviousClass" && event.target.id !== "NextClass") {return};
if (event.target.id === "PreviousClass") { cindex = cindex === 0 ? dataStore.Classes.length - 1 : cindex - 1;alkaszt.currAP=alkaszt.startAP} 
if (event.target.id === "NextClass") {cindex = cindex === dataStore.Classes.length - 1 ? 0 : cindex + 1; alkaszt.currAP=alkaszt.startAP}
const span = event.target.parentElement.querySelector("#CurrentClass"); span.textContent = dataStore.Classes[cindex]; kaszt.name = dataStore.Classes[cindex];
const span2 = cont.querySelector("#CurrentSubclass"); span2.array = dataStore.Subclasses[kaszt.name]; const code=span2.array [0]; 
span2.index=0; span2.textContent=dataStore.Subclassname[code]
alkaszt.subname=dataStore.Subclassname [code]; alkaszt.code=code;
const petclass=cont.querySelector(".petclass"); if (kaszt.name==="Szörnypásztor") {petclass.style.display="flex"; petclass.style.flexDirection="column"}
console.log("kaszt.name =", kaszt.name); for (const attr of window.dataStore.Attributes) {alkaszt[attr] = 1; }; statsearch(); attribute(); 

if (!lemez.paused) 
{fadeout(lemez,1000,()=> {lemez.src="./Music/" + String(kaszt.name) + ".mp3"; lemez.play()})} else {lemez.src="./Music/" + String(kaszt.name) + ".mp3"; lemez.play()}})
function fadeout(lemez, duration = 1000, callback) {if (!lemez) return;
const stepdur=50; const steps =duration / stepdur; const voldur = lemez.volume/steps; 
const volInterval = setInterval(() => {lemez.volume = Math.max(0, lemez.volume-voldur); if (lemez.volume <=0) {clearInterval(volInterval); 
lemez.pause(); lemez.currentTime = 0; lemez.volume=1; if (callback) callback();}}, stepdur)}  

const ambiancelist = ["ambiance-1.mp3","ambiance-2.mp3", "ambiance-3.mp3", "ambiance-4.mp3", "ambiance-5.mp3", "ambiance-6.mp3", "ambiance-7.mp3", 
  "ambiance-8.mp3", "ambiance-9.mp3", "ambiance-10.mp3", "ambiance-11.mp3"];
function music () {
if (lemez.paused) {setTimeout(()=>{const songrandom = ambiancelist[Math.floor(Math.random()*ambiancelist.length)]; lemez.src= "./Music/" + songrandom; lemez.play()}, 5000)};
lemez.addEventListener('ended', () => {const songrandom = ambiancelist[Math.floor(Math.random()*ambiancelist.length)]; lemez.src="./Music/"+songrandom; 
lemez.play()})}

cont.addEventListener("click", (event) => {if (!dataStore) return; if (event.target.id !== "PreviousSubclass" && event.target.id !=="NextSubclass") {return}; 
const span2 = event.target.parentElement.querySelector("#CurrentSubclass"); 
if (!span2.array) {span2.array=dataStore.Subclasses[kaszt.name]; span2.index=0};
if (event.target.id === "PreviousSubclass") {span2.index = span2.index===0 ? span2.array.length-1:span2.index -1}; 
if (event.target.id === "NextSubclass") {span2.index=span2.index===span2.array.length -1 ? 0:span2.index +1}; 
const code =span2.array [span2.index]; span2.textContent=dataStore.Subclassname[code]; alkaszt.subname=dataStore.Subclassname[code]; alkaszt.code = code; statsearch();

})

function statsearch () {if (!dataStore) return; 
const lower = dataStore.Stats.filter (row =>(row.SP<=alkaszt.startSP)); const upper = dataStore.Stats.filter (row =>(row.SP>=alkaszt.startSP));
const nearlower = lower [lower.length -1]; const nearupper = upper [0]; 
let curratk, currdef, currhp; 
if (nearupper.SP===nearlower.SP) {curratk=nearlower[alkaszt.code].Atk; currdef=nearlower[alkaszt.code].Def; currhp=nearlower[alkaszt.code].HP} else {
curratk = nearlower[alkaszt.code].Atk + ((nearupper[alkaszt.code].Atk-nearlower[alkaszt.code].Atk)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
currdef = nearlower [alkaszt.code].Def + ((nearupper[alkaszt.code].Def-nearlower[alkaszt.code].Def)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
currhp = nearlower[alkaszt.code].HP + ((nearupper[alkaszt.code].HP-nearlower[alkaszt.code].HP)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP)} 
alkaszt.Atk=Math.floor(curratk); alkaszt.Def=Math.floor(currdef); alkaszt.HP=Math.floor(currhp); update()};

let aindex=0; 
let currAtt;
function  attribute() {if (!dataStore) return;
currAtt=cont.querySelector("#CurrentAttribute");
currAtt.textContent=dataStore.Attributes[aindex];
cont.addEventListener("click", (event) => 
{if (event.target.id === "PreviousAttribute") {aindex= (aindex-1+dataStore.Attributes.length)%dataStore.Attributes.length};
if (event.target.id === "NextAttribute") {aindex=(aindex+1+dataStore.Attributes.length)%dataStore.Attributes.length}; 
currAtt.textContent=dataStore.Attributes[aindex]})};

cont.addEventListener("click", (event)=> {const key=currAtt.textContent; if (!key) return;
if (event.target.id==="dec1") {const delta=-1; if (alkaszt[key]>1) {alkaszt[key]= Math.max(1,alkaszt[key]+delta); alkaszt.currAP=Math.min(alkaszt.startAP, alkaszt.currAP-delta)}; 
                                 attributespan[key].textContent=alkaszt[key];};
if (event.target.id==="dec5") {if (alkaszt[key]>5) {const delta=-5; alkaszt[key]= Math.max(1,alkaszt[key]+delta); alkaszt.currAP=Math.min(alkaszt.startAP, alkaszt.currAP-delta)} 
                                else {const delta=1-alkaszt[key]; alkaszt[key]=Math.max(1,alkaszt[key]+delta); alkaszt.currAP=Math.min(alkaszt.startAP, alkaszt.currAP-delta); 
                                attributespan[key].textContent=alkaszt[key];}};
if (event.target.id==="inc1") {const delta=1; if (delta>0 && alkaszt.currAP>=delta && alkaszt[key]+delta <= alkaszt.limit[key]) {alkaszt[key]+=delta; alkaszt.currAP-=delta;
                                attributespan[key].textContent=alkaszt[key];}};
if (event.target.id==="inc5") {const delta= Math.min(5, (alkaszt.limit[key]-alkaszt[key]), alkaszt.currAP); if (delta>0 && alkaszt.currAP>=delta && alkaszt[key]+delta <= alkaszt.limit[key]) {alkaszt[key]+=delta; alkaszt.currAP-=delta;
                                attributespan[key].textContent=alkaszt[key];}}; update()})
cont.addEventListener("input", (event)=> {if (event.target.id==="CustomAttribute") {const key=currAtt.textContent; if (!key) return;
const inputvalue=Number(event.target.value); const limit=alkaszt[key]+alkaszt.currAP; const newvalue=Math.max(1,Math.min(limit,inputvalue,alkaszt.limit[key])); const delta=newvalue-alkaszt[key]; 
alkaszt[key]=newvalue; alkaszt.currAP-=delta; attributespan[key].textContent=alkaszt[key]; update()};})

setInterval(()=> {const key=currAtt.textContent; if (!key) return; 
alkaszt.Agi=Math.floor((alkaszt.Ügyesség+alkaszt.Gyorsasság)/2); alkaszt.Fell=Math.floor((alkaszt.Fizikum+alkaszt.Állóképesség)/2); 
alkaszt.Mell=Math.floor((alkaszt.Intelligencia+alkaszt.Tehetség)/2); alkaszt.Sell=Math.floor((alkaszt.Felismerés+alkaszt.Inspiráció)/2);
kaszt.HP=Math.floor(alkaszt.Állóképesség/10); alkaszt.regen=Math.min(25, Math.floor(2+(jatekos.HP/25)+(jatekos.Állóképesség/5)));
alkaszt.Critdmg=alkaszt.Ügyesség+100; alkaszt.armorpen=Math.floor(jatekos.Fizikum/2); 

update()}, 2000); 

let attmax;
function Attributemax () {if (!dataStore) return;
attmax=dataStore.Attributemax[alkaszt.code];             
for (const key in attributespan) {alkaszt.limit[key]=attmax.hasOwnProperty(key) ? attmax[key]:50; 
       if (jatekos[key]>=alkaszt.limit[key]) {const attdiff = jatekos[key]-alkaszt.limit[key]; jatekos[key]=alkaszt.limit[key]; if (attdiff>0) {jatekos.currAP+=attdiff};}}};


 cont.addEventListener("click", (event) => {const statsheet=document.querySelector(".stats");
    if (event.target.id==="characterpage") {statsheet.classList.toggle("hidden")}});

cont.addEventListener("click", (event) => {const skillsheet=document.querySelector(".Skills");
    if (event.target.id==="Skillsbutton") {skillsheet.classList.toggle("hidden"); const spacer=document.querySelector(".spacer"); spacer.classList.toggle("hidden"); 
      const stepper=document.querySelector(".stepper"); stepper.classList.toggle("hidden") }})

fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/skills.json")
.then (response => response.json())
.then (data => {window.dataStore2=data;});


cont.addEventListener("click", (event) => {if (event.target.dataset.tab) {skillsupdate()}}); 
  function skillsupdate (event) {
  const type=event.target.dataset.tab; 
   dataStore2.Skills
  .filter (skill => skill.skilltype===type) 
  .forEach(skill => {
    const grid1=cont.querySelector(".grid1"); const template=cont.querySelector(".skilltype.hidden");
    const clone=template.cloneNode(true); clone.classList.remove("hidden"); 
    clone.querySelector(".skilltitle").textContent=skill.skilltitle;
    clone.querySelector(".image").src=skill.skillimage;
    grid1.appendChild(clone) }) }; 

  





  

