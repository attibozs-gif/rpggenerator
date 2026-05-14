const alkaszt = {}; const kaszt = {}; const karakter = {}; const lemez=document.querySelector(".kasztzene"); 
const jatekos = {}; alkaszt.limit={}; let tempname; const Pet ={};

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
                Critdmg: (karakter.Critdmg || 0) + (kaszt.Critdmg || 0) + (alkaszt.Critdmg || 0),
                Agi: (karakter.Agi || 0) + (kaszt.Agi || 0) + (alkaszt.Agi || 0),
                Fell :(karakter.Fell || 0) + (kaszt.Fell || 0) + (alkaszt.Fell || 0),
                Mell: (karakter.Mell || 0) + (kaszt.Mell || 0) + (alkaszt.Mell || 0),
                Sell: (karakter.Sell || 0) + (kaszt.Sell || 0) + (alkaszt.Sell || 0),
                Ero: (karakter.Ero || 0) + (kaszt.Ero || 0) + (alkaszt.Ero || 0),
                Spdseg: (karakter.Spdseg || 0) + (kaszt.Spdseg || 0) + (alkaszt.Spdseg || 0),
                Dmg: (karakter.Dmg || 0) + (kaszt.Dmg || 0) + (alkaszt.Dmg || 0),
                Dodgeseg:(karakter.Dodgeseg || 0) + (kaszt.Dodgeseg || 0) + (alkaszt.Dodgeseg || 0) 
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
                const armorpen=cont.querySelector(".pen"); const ero=cont.querySelector(".Ero"); const seg1=cont.querySelector(".spdseg");
                const seg2=cont.querySelector(".dodgeseg"); const dam=cont.querySelector(".damage");
                
                const petNAME=cont.querySelector(".petname"); const petATK=cont.querySelector(".petatk"); const petDEF=cont.querySelector(".petdef");
                const petHP=cont.querySelector(".petHP"); const petREGEN=cont.querySelector(".petregen"); const petDMG=cont.querySelector(".petdmg");
                const petARMOR=cont.querySelector(".petarmor"); const petGEAR=cont.querySelector(".petGV"); const petPEN=cont.querySelector(".petpen");  

                kasztnev.textContent = jatekos.name; alkasztnev.textContent = jatekos.subname
                currAP.textContent=jatekos.currAP;
                atk2.textContent=jatekos.Atk; def2.textContent=jatekos.Def; hp2.textContent=jatekos.HP;
                regen.textContent=jatekos.regen; critdmg.textContent=jatekos.Critdmg; armorpen.textContent=jatekos.armorpen
                agi.textContent=jatekos.Agi; fres.textContent=jatekos.Fell;
                mres.textContent=jatekos.Mell; sres.textContent=jatekos.Sell; ero.textContent=jatekos.Ero; seg1.textContent=jatekos.Spdseg;
                seg2.textContent=jatekos.Dodgeseg; dam.textContent=jatekos.Dmg;
                
                petNAME.textContent=Pet.Name; petATK.textContent=Pet.Atk; petDEF.textContent=Pet.Def; petHP.textContent=Pet.HP; petGEAR.textContent=Pet.Gear;
                petARMOR.textContent=Pet.Armor; petREGEN.textContent=Pet.Regen; petDMG.textContent=Pet.Dmg; petPEN.textContent=Pet.Pen; 
                
                currSP.forEach(span=> {span.textContent=jatekos.currSP}); 
                 Attributemax();
                for (const key in attributespan) {alkaszt[key+"Teszt"]=Math.floor(alkaszt[key]/10);{attributespan[key].innerHTML=`<span style="color: rgb(230, 241, 75); font-weight: bold"> ${jatekos[key]}</span> / ${alkaszt.limit[key] || 100} 
                <span> / Teszt: </span> ${alkaszt[key+"Teszt"]}`}}; 
    
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
console.log("kaszt.name =", kaszt.name); for (const attr of window.dataStore.Attributes) {alkaszt[attr] = 1; }; statsearch(); aindex=0; attribute(); skillslotdelete(); 

if (!lemez.paused) 
{fadeout(lemez,1000,()=> {lemez.src="./Music/" + String(kaszt.name) + ".mp3"; lemez.play()})} else {lemez.src="./Music/" + String(kaszt.name) + ".mp3"; lemez.play()}})
function fadeout(lemez, duration = 1000, callback) {if (!lemez) return;
const stepdur=50; const steps =duration / stepdur; const voldur = lemez.volume/steps; 
const volInterval = setInterval(() => {lemez.volume = Math.max(0, lemez.volume-voldur); if (lemez.volume <=0) {clearInterval(volInterval); 
lemez.pause(); lemez.currentTime = 0; lemez.volume=1; if (callback) callback();}}, stepdur)}  

const ambiancelist = ["ambiance-1.mp3","ambiance-2.mp3", "ambiance-3.mp3", "ambiance-4.mp3", "ambiance-5.mp3", "ambiance-6.mp3", "ambiance-7.mp3", 
  "ambiance-8.mp3", "ambiance-9.mp3", "ambiance-10.mp3", "ambiance-11.mp3", "ambiance-12.mp3", "ambiance-13.mp3", "ambiance-14.mp3", "ambiance-15.mp3", "ambiance-16.mp3",
"ambiance-17.mp3", "ambiance-18.mp3", "ambiance-19.mp3", "ambiance-20.mp3"];
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
currAtt.textContent=dataStore.Attributes[aindex];}
cont.addEventListener("click", (event) => 
{if (event.target.id === "PreviousAttribute") {aindex= (aindex-1+dataStore.Attributes.length)%dataStore.Attributes.length};
if (event.target.id === "NextAttribute") {aindex=(aindex+1+dataStore.Attributes.length)%dataStore.Attributes.length}; 
currAtt.textContent=dataStore.Attributes[aindex]; console.log("aindex =", aindex);
console.log("attribute =", dataStore.Attributes[aindex]);});

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
kaszt.HP=Math.floor(alkaszt.Állóképesség/10); alkaszt.regen=Math.min(30, Math.floor(2+(jatekos.HP/25)+(jatekos.Állóképesség/5)));
alkaszt.Dmg= (alkaszt.Dmg || 1 ), alkaszt.Crit=Math.round(alkaszt.Dmg+((alkaszt.Dmg/100)*alkaszt.Ügyesség+(3*alkaszt.Ügyesség/(alkaszt.Ügyesség+alkaszt.Dmg))))
alkaszt.Critdmg=alkaszt.Crit/alkaszt.Dmg; alkaszt.armorpen=Math.floor(jatekos.Fizikum/2);
alkaszt.Spdseg=Math.floor(alkaszt.Gyorsasság/5); alkaszt.Ero=Math.floor(alkaszt.Tehetség/4); 

update()}, 2000); 

let attmax;
function Attributemax () {if (!dataStore) return;
attmax=dataStore.Attributemax[alkaszt.code];             
for (const key in attributespan) {alkaszt.limit[key]=attmax.hasOwnProperty(key) ? attmax[key]:50; 
       if (jatekos[key]>=alkaszt.limit[key]) {const attdiff = jatekos[key]-alkaszt.limit[key]; jatekos[key]=alkaszt.limit[key]; if (attdiff>0) {jatekos.currAP+=attdiff};}}};


cont.addEventListener("click", (event) => {const statsheet=document.querySelector(".stats");
    if (event.target.id==="characterpage") {statsheet.classList.toggle("hidden")}});

cont.addEventListener("click", (event) => {const petsheet2=document.querySelector(".petstats"); 
  if (event.target.id==="Petbutton") {petsheet2.classList.toggle("hidden")}});

cont.addEventListener("click", (event) => {const gearsheet=document.querySelector(".Equipment");
  if (event.target.id==="Equipmentbutton") {gearsheet.classList.toggle("hidden"); const skillsheet=document.querySelector(".Skills"); skillsheet.classList.toggle("hidden");
    const stepper=document.querySelector(".stepper"); stepper.classList.toggle("hidden")};
  });

cont.addEventListener("click", (event) => {const skillsheet=document.querySelector(".Skills");
    if (event.target.id==="Skillsbutton") {skillsheet.classList.toggle("hidden"); const spacer=document.querySelector(".spacer"); spacer.classList.toggle("hidden"); 
      const stepper=document.querySelector(".stepper"); stepper.classList.toggle("hidden");}})

fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/skills.json")
.then (response => response.json())
.then (data => {window.dataStore2=data;});

fetch ("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/equipment.json")
.then (response => response.json())
.then (data=>{window.dataStore3=data;});

let type;
cont.addEventListener("click", (event) => {if (event.target.dataset.tab) {skillsupdate(event)}}); 
  function skillsupdate (event) {
  const skillrow=cont.querySelector(".skillrow"); const template=cont.querySelector(".skilltype.hidden");
  type=event.target.dataset.tab;
  skillrow.querySelectorAll(".skilltype:not(.hidden)").forEach(el => el.remove());
  const prevTable = skillrow.querySelector(".skilltable:not(.hidden)");if (prevTable) prevTable.remove();
    const prevP = skillrow.querySelector(".skilldescription"); if(prevP) prevP.remove();
  dataStore2.Skills
  .filter (skill => skill.skilltype===type) 
  .forEach(skill => {
    const clone=template.cloneNode(true);
    clone.classList.remove("hidden")
    clone.querySelector(".skilltitle").textContent=skill.skilltitle;
    clone.dataset.skillcode=skill.skillcode
    clone.querySelector(".image").src=skill.skillimage;
    skillrow.appendChild(clone); }) 
     }; 

cont.addEventListener("click", (event) => {const buttonpress=event.target.closest(".skillrankplus", ".skillrankminus"); if (buttonpress) return;
  const imagepress=event.target.closest(".skillimage"); if (!imagepress) return; skillupdate2(event); skillsloter()})

function skillupdate2(event) {
    const skillrow = cont.querySelector(".skillrow"); const card = event.target.closest(".skilltype");
    const pfill = cont.querySelector(".wrapper"); const pfill2 = pfill.querySelector(".skilldescription");
    const template = pfill.querySelector(`.skilltable.hidden[data-tab="${type}"]`);
    const clone2 = template.cloneNode(true); const cloneP = pfill2.cloneNode(true);
    const prevtable = skillrow.querySelector(".skilltable:not(.hidden)");
    const prevP = skillrow.querySelector(".skilldescription");
    if (prevtable) prevtable.remove();
    if (prevP) prevP.remove();
    const type2 = card.querySelector(".skilltitle").textContent; const skillcontent = dataStore2[type2];
    cloneP.textContent = skillcontent.header; 
    const body = clone2.querySelector(".tablebody"); const row = body.querySelector(".skillrank");
    skillcontent.levels.forEach(level => {
        const rows = row.cloneNode(true);
        rows.dataset.rank = level.Szint; let tablecolumn;
        tablecolumn=rows.querySelector(".skillevel"); if (tablecolumn) {tablecolumn.textContent = level.Szint};
        tablecolumn=rows.querySelector(".rate"); if (tablecolumn) {tablecolumn.textContent=level["Váltási Ráta"]};
        tablecolumn=rows.querySelector(".quality"); if(tablecolumn){tablecolumn.textContent = level.Minőség};
        tablecolumn=rows.querySelector(".quantity"); if (tablecolumn) {tablecolumn.textContent = level.Mennyiség};
        tablecolumn=rows.querySelector(".categories"); if(tablecolumn) {tablecolumn.textContent = level.Kategória};
        tablecolumn=rows.querySelector(".success"); if (tablecolumn) {tablecolumn.textContent = level["Abszolút Siker"]};
        tablecolumn=rows.querySelector(".time"); if (tablecolumn) {tablecolumn.textContent = level.Idő};
        tablecolumn=rows.querySelector(".cummulative"); if (tablecolumn) {tablecolumn.textContent=level.Kummulatív}
        tablecolumn=rows.querySelector(".ncummulative"); if (tablecolumn) {tablecolumn.textContent=level["Nem Kummulatív"]};
        tablecolumn=rows.querySelector(".bonus"); if (tablecolumn){tablecolumn.textContent = Object.entries(level.Bónusz)
            .map(([key, val]) => `${key}:${val}`).join(",")};
        body.appendChild(rows); 
    }); row.remove(); 
    skillrow.appendChild(cloneP); skillrow.appendChild(clone2); clone2.classList.remove("hidden");}
    
    
let currlimit
function skillsloter () {console.log("skillslotter futott"); if (!dataStore) return; 
const grid1=cont.querySelector(".grid1"); 
if (grid1.querySelectorAll(".generated").length>0) return; const skillimit=dataStore.Skillslot[kaszt.name]; 
const filtered=skillimit.filter (limit =>(limit.SP<=alkaszt.startSP)); const lastindex=filtered.length-1; currlimit=filtered[lastindex].Skillslot;  
const rect=cont.querySelector(".grid2.template"); const filter2=document.createElement("div"); filter2.classList.add("rectangle"); 
for (let i=0; i<currlimit; i++) {const newrect=rect.cloneNode(true); newrect.classList.add("generated"); newrect.classList.add("empty") 
newrect.classList.remove("hidden-e"); filter2.appendChild(newrect);} grid1.appendChild(filter2) }

cont.addEventListener("click", (event) => {const buttonplus=event.target.closest(".skillrankplus"); const buttonmin=event.target.closest(".skillrankminus")
if (!buttonplus && !buttonmin) return; const skillEx=event.target.closest(".skilltype"); if (!skillEx) return;
if (buttonplus) {console.log("skillplus futott"); skillplus(skillEx)} else if (buttonmin) {skillminus(skillEx);skilldisappend(skillEx);} });

function skillplus (skillEx) {const code=skillEx.dataset.skillcode;if (!kaszt.Skills) {kaszt.Skills={}}; if(!(code in kaszt.Skills)) {kaszt.Skills[code]=[]};
if (kaszt.Skills[code].length===0) {kaszt.Skills[code].push(0)}
let lastind=kaszt.Skills[code].length-1; let lastinst=kaszt.Skills[code][lastind];
const grid1=cont.querySelector(".grid1"); const fulltangle= grid1.querySelectorAll(".full");
const current=lastinst || 0; if (fulltangle.length>=currlimit && current===0) return; const skillcost=current+1; 
if ((alkaszt.currSP-skillcost)>=0) {kaszt.Skills[code][lastind]+=1; updatespan(skillEx); alkaszt.currSP-=skillcost}
if (kaszt.Skills[code][lastind]===10) {kaszt.Skills[code].push(0)}; if (fulltangle.length<currlimit && kaszt.Skills[code][lastind]===1) 
{skillappend(skillEx, lastind)}update()};

function skillminus (skillEx) {const code=skillEx.dataset.skillcode; if (!kaszt.Skills) {kaszt.Skills={}}; 
let lastind=kaszt.Skills[code].length-1; let lastinst=kaszt.Skills[code][lastind];
const current=lastinst || 0; if (current===0) return; alkaszt.currSP=Math.max(0, alkaszt.currSP+current); kaszt.Skills[code][lastind]-=1; updatespan(skillEx); alkaszt.currSP=Math.min(alkaszt.currSP, alkaszt.startSP); 
if (kaszt.Skills[code][lastind]===0) {skilldisappend(skillEx)} };

function skillappend (skillEx) {const grid1=cont.querySelector(".grid1"); const code=skillEx.dataset.skillcode; const fulltangle= grid1.querySelectorAll(".full"); 
const emptangle=grid1.querySelectorAll(".generated.empty"); let lastind=kaszt.Skills[code].length-1  
if(fulltangle.length>=currlimit) return; if (!emptangle.length) return; if (kaszt.Skills[code][lastind] ===1) {
console.log("image element found:", skillEx.querySelector(".image")); console.log(emptangle);
const image=skillEx.querySelector(".image").cloneNode(false); 
image.style.width="70px"; image.style.height="70px"; const icon=emptangle[0]; icon.appendChild(image); icon.classList.remove("empty"); icon.classList.add("full"); 
icon.dataset.skillcode=code; icon.dataset.instance=lastind; 
let skillspan=icon.querySelector("span"); if (!skillspan) {skillspan=document.createElement("span"); icon.appendChild(skillspan)} skillspan.textContent=kaszt.Skills[code][lastind]}}

function skilldisappend (skillEx) {const grid1=cont.querySelector(".grid1"); const code=skillEx.dataset.skillcode; const fulltangle= grid1.querySelectorAll(".full");
let lastind=kaszt.Skills[code].length-1; if (!fulltangle.length) return; if (kaszt.Skills[code][lastind] === 0) {
let icon=null; fulltangle.forEach(el => {if (el.dataset.skillcode===code && Number(el.dataset.instance)===lastind) {icon=el};}); if (!icon) return; 
const img=icon.querySelector(".image"); if (img) icon.removeChild(img); let skillspan=icon.querySelector("span"); if(skillspan) icon.removeChild(skillspan); 
icon.classList.remove("full"); icon.classList.add("empty"); delete icon.dataset.skillcode; delete icon.dataset.instance; }} 

function updatespan(skillEx) {const grid1=cont.querySelector(".grid1"); const code=skillEx.dataset.skillcode; const fulltangle= grid1.querySelectorAll(".full");
let lastind=kaszt.Skills[code].length-1;
fulltangle.forEach(el => {if (el.dataset.skillcode===code && Number(el.dataset.instance)===lastind) {let skillspan=el.querySelector("span"); if(skillspan) 
skillspan.textContent=kaszt.Skills[code][lastind]}})}

function skillslotdelete() {
const filter2 = cont.querySelectorAll(".rectangle");
if (!filter2) return;
filter2.forEach(r=>{if(r) r.remove();}); alkaszt.currSP=alkaszt.startSP }

  
