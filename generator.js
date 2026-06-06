const alkaszt = {}; const kaszt = {}; const karakter = {}; const lemez=document.querySelector(".kasztzene"); 
const jatekos = {}; alkaszt.limit={}; let tempname; const Pet ={}; jatekos.Skills={}; karakter.Skills={}, alkaszt.Skills={}, kaszt.Skills={},
kaszt.Nyelv={}; kaszt.Kapcsolat={}; alkaszt.Kapcsolat={}; alkaszt.Nyelv={}; jatekos.Nyelv={}; jatekos.Kapcsolat={}; kaszt.Selection={};
Equipment={}; const instance={player:{}, enemy:{}}; const active={playerEntry:null, enemyEntry2:null};
karakter.Nyelv={"Mei":0, "Venta":0, "Malco":0, "Mergla":0, "Prosant":0};
karakter.Kapcsolat={"Kahal":0, "Edubra":0, "Ekkalri":0, "Siphal":0, "Shatra":0, "Gestri":0};
let cindex=0; let oindex=0; 

fetch("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/skills.json")
.then (response => response.json())
.then (data => {window.dataStore2=data;});

fetch ("https://raw.githubusercontent.com/attibozs-gif/rpggenerator/refs/heads/main/equipment.json")
.then (response => response.json())
.then (data=>{window.dataStore3=data;});


music();

let attributespan;

function update () {
                jatekos.name=kaszt.name; jatekos.subname=alkaszt.subname; 
                jatekos.currSP=Math.min(alkaszt.startSP, ((alkaszt.currSP || 0) + (kaszt.currSP || 0) + (karakter.currSP || 0))); jatekos.currAP=alkaszt.currAP;
                jatekos.Atk= (karakter.Atk || 0) + (kaszt.Atk || 0) + (alkaszt.Atk || 0);
                jatekos.Def= (karakter.Def || 0) + (kaszt.Def || 0) + (alkaszt.Def || 0);
                jatekos.HP= (karakter.HP || 0) + (kaszt.HP || 0) + (alkaszt.HP || 0);
                jatekos.regen= (karakter.regen || 0) + (kaszt.regen || 0) + (alkaszt.regen || 0);
                jatekos.Fizikum= (karakter.Fizikum || 0) + (kaszt.Fizikum || 0) + (alkaszt.Fizikum || 0);
                jatekos.Állóképesség= (karakter.Állóképesség || 0) + (kaszt.Állóképesség || 0) + (alkaszt.Állóképesség || 0);
                jatekos.Ügyesség= (karakter.Ügyesség || 0) + (kaszt.Ügyesség || 0) + (alkaszt.Ügyesség || 0);
                jatekos.Gyorsaság= (karakter.Gyorsaság || 0) + (kaszt.Gyorsaság || 0) + (alkaszt.Gyorsaság || 0);
                jatekos.Intelligencia= (karakter.Intelligencia || 0) + (kaszt.Intelligencia || 0) + (alkaszt.Intelligencia || 0);
                jatekos.Tehetség= (karakter.Tehetség || 0) + (kaszt.Tehetség || 0) + (alkaszt.Tehetség || 0);
                jatekos.Felismerés= (karakter.Felismerés || 0) + (kaszt.Felismerés || 0) + (alkaszt.Felismerés || 0);
                jatekos.Inspiráció= (karakter.Inspiráció || 0) + (kaszt.Inspiráció || 0) + (alkaszt.Inspiráció || 0);

                alkaszt.Agi=Math.floor((alkaszt.Ügyesség+alkaszt.Gyorsaság)/2); alkaszt.Fell=Math.floor((alkaszt.Fizikum+alkaszt.Állóképesség)/2); 
                alkaszt.Mell=Math.floor((alkaszt.Intelligencia+alkaszt.Tehetség)/2); alkaszt.Sell=Math.floor((alkaszt.Felismerés+alkaszt.Inspiráció)/2);
                kaszt.HP=Math.floor(alkaszt.Állóképesség/10); alkaszt.regen=Math.min(30, Math.floor(2+(jatekos.HP/25)+(jatekos.Állóképesség/5)));
                alkaszt.Dmg= (alkaszt.Dmg || 1 ), jatekos.Crit=Math.round(jatekos.Dmg+((jatekos.Dmg/100)*jatekos.Ügyesség+(3*jatekos.Ügyesség/(jatekos.Ügyesség+jatekos.Dmg))))
                alkaszt.Critdmg=jatekos.Crit/jatekos.Dmg; alkaszt.armorpen=Math.floor(jatekos.Fizikum/2);
                alkaszt.Spdseg=Math.floor(alkaszt.Gyorsaság/5); alkaszt.Ero=Math.floor(alkaszt.Tehetség/4); 

                jatekos.Critdmg= (karakter.Critdmg || 0) + (kaszt.Critdmg || 0) + (alkaszt.Critdmg || 0);
                jatekos.Becs=(karakter.Becs || 0) + (alkaszt.Becs || 0) + (kaszt.Becs || 0); 
                jatekos.Agi= (karakter.Agi || 0) + (kaszt.Agi || 0) + (alkaszt.Agi || 0);
                jatekos.Fell=(karakter.Fell || 0) + (kaszt.Fell || 0) + (alkaszt.Fell || 0);
                jatekos.Mell= (karakter.Mell || 0) + (kaszt.Mell || 0) + (alkaszt.Mell || 0);
                jatekos.Sell= (karakter.Sell || 0) + (kaszt.Sell || 0) + (alkaszt.Sell || 0);
                jatekos.Ero=(karakter.Ero || 0) + (kaszt.Ero || 0) + (alkaszt.Ero || 0);
                jatekos.Spdseg= (karakter.Spdseg || 0) + (kaszt.Spdseg || 0) + (alkaszt.Spdseg || 0);
                jatekos.Dmg= Math.max((karakter.Dmg || 0) + (kaszt.Dmg || 0) + (alkaszt.Dmg || 0)-1,1)
                jatekos.Dodgeseg=(karakter.Dodgeseg || 0) + (kaszt.Dodgeseg || 0) + (alkaszt.Dodgeseg || 0);
                jatekos.armorpen=(karakter.armorpen || 0) + (kaszt.armorpen || 0) + (alkaszt.armorpen || 0);
                jatekos.Armor=(karakter.Armor || 0) + (kaszt.Armor || 0) + (alkaszt.Armor || 0);

                attributespan = {"Fizikum": cont.querySelector(".fizikum"), "Állóképesség": cont.querySelector(".allokepesseg"),
                "Ügyesség": cont.querySelector (".ugyesseg"), "Gyorsaság": cont.querySelector(".gyorsassag"),
                "Intelligencia": cont.querySelector (".intelligencia"), "Tehetség":cont.querySelector(".tehetseg"),
                "Felismerés": cont.querySelector (".felismeres"), "Inspiráció": cont.querySelector(".inspiracio")} 

                for (const key in attributespan) {alkaszt[key+"Teszt"]=Math.floor(jatekos[key]/10);
                {attributespan[key].innerHTML=`<span style="color: rgb(230, 241, 75); font-weight: bold"> ${jatekos[key]}</span> / ${alkaszt.limit[key] || 100} 
                <span> / Teszt: </span> ${alkaszt[key+"Teszt"]}`}}; 

                jatekos.FizikumTeszt=(karakter.FizikumTeszt || 0) + (kaszt.FizikumTeszt || 0) + (alkaszt.FizikumTeszt || 0);
                jatekos.ÁllóképességTeszt=(karakter.ÁllóképességTeszt || 0) + (kaszt.ÁllóképességTeszt || 0) + (alkaszt.ÁllóképességTeszt || 0);
                jatekos.ÜgyességTeszt=(karakter.ÜgyességTeszt || 0) + (kaszt.ÜgyességTeszt || 0) + (alkaszt.ÜgyességTeszt || 0);
                jatekos.GyorsasságTeszt=(karakter.GyorsasságTeszt || 0) + (kaszt.GyorsasságTeszt || 0) + (alkaszt.GyorsasságTeszt || 0);
                jatekos.IntelligenciaTeszt=(karakter.IntelligenciaTeszt || 0) + (kaszt.IntelligenciaTeszt || 0) + (alkaszt.IntelligenciaTeszt || 0);
                jatekos.TehetségTeszt=(karakter.TehetségTeszt|| 0) + (kaszt.TehetségTeszt || 0) + (alkaszt.TehetségTeszt || 0);
                jatekos.FelismerésTeszt=(karakter.FelismerésTeszt || 0) + (kaszt.FelismerésTeszt || 0) + (alkaszt.FelismerésTeszt || 0);
                jatekos.InspirációTeszt=(karakter.InspirációTeszt || 0) + (kaszt.InspirációTeszt || 0) + (alkaszt.InspirációTeszt || 0);
                jatekos.Armor=(karakter.Armor || 0) + (alkaszt.Armor || 0) + (kaszt.Armor || 0);            
                jatekos.Nyelv.Mergla = (alkaszt.Nyelv.Mergla || 0) + (kaszt.Nyelv.Mergla || 0) + (karakter.Nyelv.Mergla || 0);
                jatekos.Nyelv.Mei = (alkaszt.Nyelv.Mei || 0) + (kaszt.Nyelv.Mei || 0) + (karakter.Nyelv.Mei || 0);
                jatekos.Nyelv.Venta = (alkaszt.Nyelv.Venta || 0) + (kaszt.Nyelv.Venta || 0) + (karakter.Nyelv.Venta || 0);
                jatekos.Nyelv.Malco = (alkaszt.Nyelv.Malco || 0) + (kaszt.Nyelv.Malco || 0) + (karakter.Nyelv.Malco || 0);
                jatekos.Nyelv.Prosant = (alkaszt.Nyelv.Prosant || 0) + (kaszt.Nyelv.Prosant || 0) + (karakter.Nyelv.Prosant || 0);
                jatekos.Kapcsolat.Kahal = (alkaszt.Kapcsolat.Kahal || 0) + (kaszt.Kapcsolat.Kahal || 0) + (karakter.Kapcsolat.Kahal || 0);
                jatekos.Kapcsolat.Edubra = (alkaszt.Kapcsolat.Edubra || 0) + (kaszt.Kapcsolat.Edubra || 0) + (karakter.Kapcsolat.Edubra || 0);
                jatekos.Kapcsolat.Ekkalri = (alkaszt.Kapcsolat.Ekkalri || 0) + (kaszt.Kapcsolat.Ekkalri || 0) + (karakter.Kapcsolat.Ekkalri || 0);
                jatekos.Kapcsolat.Shatra = (alkaszt.Kapcsolat.Shatra || 0) + (kaszt.Kapcsolat.Shatra || 0) + (karakter.Kapcsolat.Shatra || 0);
                jatekos.Kapcsolat.Siphal = (alkaszt.Kapcsolat.Siphal || 0) + (kaszt.Kapcsolat.Siphal || 0) + (karakter.Kapcsolat.Siphal || 0);
                jatekos.Kapcsolat.Gestri = (alkaszt.Kapcsolat.Gestri || 0) + (kaszt.Kapcsolat.Gestri || 0) + (karakter.Kapcsolat.Gestri || 0);
                
                Object.assign(jatekos.Skills, alkaszt.Skills, kaszt.Skills, karakter.Skills);
                 for (const key in jatekos.Skills) {jatekos.Skills[key]=(kaszt.Skills[key] || 0) + (alkaszt.Skills[key] || 0) + (karakter.Skills[key] || 0)};
                                                              
                const kasztnev = cont.querySelector(".kasztnev"); const alkasztnev = cont.querySelector (".alkasztnev");
                const currSP = cont.querySelectorAll(".currSP"); const currAP =cont.querySelector (".currAP");
                const atk2 = cont.querySelector(".atk"); const def2 = cont.querySelector(".def"); const hp2 =cont.querySelector(".health")
                const agi=cont.querySelector(".agilitas"); const fres=cont.querySelector(".physres")
                const mres=cont.querySelector(".menres"); const sres=cont.querySelector(".spires"); 
                const regen=cont.querySelector(".regen"); const critdmg=cont.querySelector(".critdmg"); const GV=cont.querySelector(".GV")
                const armorpen=cont.querySelector(".pen"); const ero=cont.querySelector(".Ero"); const seg1=cont.querySelector(".spdseg");
                const seg2=cont.querySelector(".dodgeseg"); const dam=cont.querySelector(".damage"); const arm=cont.querySelector(".armor")

                currSP.forEach(span=> {span.textContent=jatekos.currSP}); Attributemax();
                
                const petNAME=cont.querySelector(".petname"); const petATK=cont.querySelector(".petatk"); const petDEF=cont.querySelector(".petdef");
                const petHP=cont.querySelector(".petHP"); const petREGEN=cont.querySelector(".petregen"); const petDMG=cont.querySelector(".petdmg");
                const petARMOR=cont.querySelector(".petarmor"); const petGEAR=cont.querySelector(".petGV"); const petPEN=cont.querySelector(".petpen");  

                kasztnev.textContent = jatekos.name; alkasztnev.textContent = jatekos.subname
                currAP.textContent=jatekos.currAP;
                atk2.textContent=jatekos.Atk; def2.textContent=jatekos.Def; hp2.textContent=jatekos.HP;
                regen.textContent=jatekos.regen; critdmg.textContent=jatekos.Critdmg; armorpen.textContent=jatekos.armorpen
                agi.textContent=jatekos.Agi; fres.textContent=jatekos.Fell;
                mres.textContent=jatekos.Mell; sres.textContent=jatekos.Sell; ero.textContent=jatekos.Ero; seg1.textContent=jatekos.Spdseg;
                seg2.textContent=jatekos.Dodgeseg; dam.textContent=jatekos.Dmg; armorpen.textContent=jatekos.armorpen;
                arm.textContent=jatekos.Armor; GV.textContent=jatekos.Becs;
                
                petNAME.textContent=Pet.Name; petATK.textContent=Pet.Atk; petDEF.textContent=Pet.Def; petHP.textContent=Pet.HP; petGEAR.textContent=Pet.Gear;
                petARMOR.textContent=Pet.Armor; petREGEN.textContent=Pet.Regen; petDMG.textContent=Pet.Dmg; petPEN.textContent=Pet.Pen  };     
                                         
document.addEventListener("DOMContentLoaded", () => {const startSP = document.getElementById("startSP"); 
startSP.addEventListener("input", () => {alkaszt.startSP = Number(startSP.value)
const filteredRows = dataStore.Stats.filter (row =>Number(row.SP) === alkaszt.startSP);alkaszt.currSP=alkaszt.startSP; 
alkaszt.startAP=alkaszt.startSP; alkaszt.currAP=alkaszt.startAP; update(); 
console.log(filteredRows)}); statsearch(); attribute(); });

cont.addEventListener("click", (event) => {if (!dataStore) return;
if (event.target.id !=="PreviousClass" && event.target.id !== "NextClass") {return};
if (event.target.id === "PreviousClass") { cindex = cindex === 0 ? dataStore.Classes.length - 1 : cindex - 1;alkaszt.currAP=alkaszt.startAP} 
if (event.target.id === "NextClass") {cindex = cindex === dataStore.Classes.length - 1 ? 0 : cindex + 1; alkaszt.currAP=alkaszt.startAP}
const span = event.target.parentElement.querySelector("#CurrentClass"); 
span.textContent = dataStore.Classes[cindex]; kaszt.name = dataStore.Classes[cindex]; 
const span2 = cont.querySelector("#CurrentSubclass"); span2.array = dataStore.Subclasses[kaszt.name]; const code=span2.array [0]; 
span2.index=0; span2.textContent=dataStore.Subclassname[code]
alkaszt.subname=dataStore.Subclassname [code]; alkaszt.code=code; 
alkaszt.Kapcsolat=dataStore.Kapcsolat[code]; alkaszt.Nyelv=dataStore.Nyelv[code];
const span2c=document.querySelector("#CurrentCountry"); jatekos.startcountry=dataStore.Ország[oindex]
span2c.textContent=dataStore.Ország[oindex]


const petclass=cont.querySelector(".petclass"); if (kaszt.name==="Szörnypásztor") {petclass.classList.remove("hidden"); petrender()} else 
{petclass.classList.add("hidden");
Pet.Atk=""; Pet.Name=""; Pet.Def=""; Pet.HP=""; Pet.Gear=""; Pet.Armor=""; Pet.Regen=""; Pet.Dmg=""; Pet.Pen=""};

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
const code =span2.array [span2.index]; span2.textContent=dataStore.Subclassname[code]; alkaszt.subname=dataStore.Subclassname[code]; alkaszt.code = code;
alkaszt.Kapcsolat=dataStore.Kapcsolat[code]; alkaszt.Nyelv=dataStore.Nyelv[code]; console.log(code); console.log(dataStore.Nyelv[code]);
statsearch(); petrender();
})

cont.addEventListener("click", (event) => {
if (!dataStore) return; if (event.target.id!=="PreviousCountry" && event.target.id !== "NextCountry") {return};
if (event.target.id==="PreviousCountry") {oindex= oindex=== 0 ? dataStore.Ország.length-1 : oindex-1}
if (event.target.id==="NextCountry") {oindex = oindex===dataStore.Ország.length-1 ? 0: oindex+1}
const span2c=document.querySelector("#CurrentCountry");
span2c.textContent=dataStore.Ország[oindex]; jatekos.startcountry=dataStore.Ország[oindex]})

let pindex=0; 
function petrender () {if (!dataStore) {return} const cp=document.querySelector(".CurrentPet"); const petlist=dataStore.HasPet[alkaszt.code]; 
const petselect=petlist[pindex]; cp.textContent=petselect; petsearch(); update()}
cont.addEventListener("click", (event) => {if (!dataStore) return;  if (event.target.id !== "PreviousPet" && event.target.id !=="NextPet") {return};
const petlist=dataStore.HasPet[alkaszt.code]
if (event.target.id === "PreviousPet") {if (pindex===0) {pindex=petlist.length-1} else {pindex-=1}};
if (event.target.id === "NextPet") {if (pindex===petlist.length-1) {pindex=0} else {pindex+=1}}; petrender()});


function statsearch () {if (!dataStore) return; 
const lower = dataStore.Stats.filter (row =>(row.SP<=alkaszt.startSP)); const upper = dataStore.Stats.filter (row =>(row.SP>=alkaszt.startSP));
const nearlower = lower [lower.length -1]; const nearupper = upper [0]; 
let curratk, currdef, currhp; 
if (nearupper.SP===nearlower.SP) {curratk=nearlower[alkaszt.code].Atk; currdef=nearlower[alkaszt.code].Def; currhp=nearlower[alkaszt.code].HP} else {
curratk = nearlower[alkaszt.code].Atk + ((nearupper[alkaszt.code].Atk-nearlower[alkaszt.code].Atk)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
currdef = nearlower [alkaszt.code].Def + ((nearupper[alkaszt.code].Def-nearlower[alkaszt.code].Def)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
currhp = nearlower[alkaszt.code].HP + ((nearupper[alkaszt.code].HP-nearlower[alkaszt.code].HP)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP)} 
alkaszt.Atk=Math.floor(curratk); alkaszt.Def=Math.floor(currdef); alkaszt.HP=Math.floor(currhp); update()};

function petsearch () {if (!dataStore) return; if (!Pet) return; 
const lower = dataStore.Pets.filter (row => (row.SP<=alkaszt.startSP)); const upper = dataStore.Pets.filter (row =>(row.SP>=alkaszt.startSP)) 
const nearlower = lower [lower.length -1]; const nearupper = upper [0]; const petlist=dataStore.HasPet[alkaszt.code]; 
const petselect=petlist[pindex]; 
let petatk, petdef, pethp, petgear, petdmg, petarmor, petpen, petregen;
if (nearupper.SP===nearlower.SP) {
petatk=nearlower[petselect].Atk; petdef=nearlower[petselect].Def; pethp=nearlower[petselect].HP; petgear=nearlower[petselect].Gear;
petdmg=nearlower[petselect].Dmg; petarmor=nearlower[petselect].Armor; petpen=nearlower[petselect].armorpen; petregen=nearlower[petselect].regen} else {
petatk=nearlower[petselect].Atk + ((nearupper[petselect].Atk-nearlower[petselect].Atk)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petdef=nearlower[petselect].Def + ((nearupper[petselect].Def-nearlower[petselect].Def)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
pethp=nearlower[petselect].HP + ((nearupper[petselect].HP-nearlower[petselect].HP)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petgear=nearlower[petselect].Gear + ((nearupper[petselect].Gear-nearlower[petselect].Gear)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petdmg=nearlower[petselect].Dmg + ((nearupper[petselect].Dmg-nearlower[petselect].Dmg)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petarmor=nearlower[petselect].Armor + ((nearupper[petselect].Armor-nearlower[petselect].Armor)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petpen=nearlower[petselect].armorpen + ((nearupper[petselect].armorpen-nearlower[petselect].armorpen)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petregen=nearlower[petselect].regen + ((nearupper[petselect].regen-nearlower[petselect].regen)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);}
Pet.Atk=Math.floor(petatk); Pet.Def=Math.floor(petdef); Pet.HP=Math.floor(pethp); Pet.Gear=Math.floor(petgear); Pet.Armor=Math.floor(petarmor);
Pet.Pen=Math.floor(petpen); Pet.Regen=Math.floor(petregen); Pet.Dmg=Math.floor(petdmg); Pet.Name=petselect; update()}

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
update()}, 3000); 

let attmax;
function Attributemax () {if (!dataStore) return;
attmax=dataStore.Attributemax[alkaszt.code];             
for (const key in attributespan) {alkaszt.limit[key]=attmax.hasOwnProperty(key) ? attmax[key]:50; 
       if (jatekos[key]>=alkaszt.limit[key]) {const attdiff = jatekos[key]-alkaszt.limit[key]; jatekos[key]=alkaszt.limit[key]; if (attdiff>0) {jatekos.currAP+=attdiff};}}};

function show(section) {const panels=document.querySelectorAll(".panel"); const visual=!section.classList.contains("hidden");  
panels.forEach(el => {if (el.classList.contains("stats")) return; if (el.classList.contains("petstats")) return; el.classList.add("hidden");}); 
if (!visual) {section.classList.remove("hidden") ;}}; 

cont.addEventListener("click", (event)=> {switch(event.target.id) {
case "characterpage": const statsheet=document.querySelector(".stats"); statsheet.classList.toggle("hidden"); break; 
case "Petbutton": const petsheet2=document.querySelector(".petstats"); petsheet2.classList.toggle("hidden"); break;
case "Equipmentbutton": show(document.querySelector(".Equipment")); itemstats(); break;
case "Skillsbutton": show(document.querySelector(".Skills")); break; 
case "selection": show(document.querySelector(".stepper")); break; }; })

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
const filtered=skillimit.filter (limit =>(limit.SP<=alkaszt.startSP)); const lastindex=filtered.length-1; 
currlimit=filtered[lastindex].Skillslot; currlimit=currlimit+(kaszt.slimit || 0);  
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
{skillappend(skillEx, lastind)}; checkbox(code, lastinst); bonuskill(code, lastinst); skillapply(skillEx); update()};

function checkbox (code, lastinst) {console.log("CHECKBOX STARTED", code, lastinst);
const activecraft=dataStore2[code]; const craftrow=activecraft[lastinst]; if (!craftrow.Eval || !craftrow.Eval.Selection) return; 
const selbox=document.querySelector(".checking"); const craftpool=dataStore2.Pool[code]; console.log("CHECK:",code,craftpool);
for (const rule of craftrow.Eval.Selection) {const groupname=Object.keys(rule)[0]; const container=document.createElement("div"); 
let countindexs=0; let countindexn=0;  
const rquality=rule[groupname].Minőség; const span9=document.createElement("span"); const count=rule[groupname].Count; console.log(groupname);  
for (const id of craftpool[groupname].select) {if (groupname!=="Nyelv") {
const qual=kaszt.Selection[id] ? Object.keys(kaszt.Selection[id]).length:0; 
if (rquality!==craftpool[groupname].Minőség[qual]) {continue}};
const checkbox=document.createElement("input"); checkbox.type="checkbox"; checkbox.dataset.id=id; const tag=document.createElement("label");
checkbox.checked=!!kaszt.Selection[id]?.[rquality]; 
checkbox.addEventListener("change", () =>{console.log("Before:",countindexs, countindexn, count) 
if (checkbox.checked && ((groupname==="Nyelv" && countindexn>=count) || (groupname!=="Nyelv" && countindexs>=count))) {checkbox.checked=false; return}
if (groupname==="Nyelv") { 
if (!kaszt.Nyelv) {kaszt.Nyelv={}}; if (checkbox.checked) {kaszt.Nyelv[id]=(kaszt.Nyelv[id] || 0) + 1; countindexn=countindexn+1;
console.log("After", countindexs, countindexn, count)
selectionspan(groupname, span9, rquality, count, countindexn, countindexs)  
} else
{kaszt.Nyelv[id] = Math.max(0, (kaszt.Nyelv[id] ?? 0)-1); countindexn=countindexn-1;console.log("After", countindexs, countindexn, count)
   selectionspan(groupname, span9, rquality, count, countindexn, countindexs); 
};return} else {
if (checkbox.checked) {if (!kaszt.Selection[id]) {kaszt.Selection[id]={}};
kaszt.Selection[id][rquality]=true; countindexs=countindexs+1; console.log("After", countindexs, countindexn, count)
selectionspan(groupname, span9, rquality, count, countindexn, countindexs)} else 
{delete kaszt.Selection[id][rquality]; if (Object.keys(kaszt.Selection[id]).length===0) {delete kaszt.Selection[id]}; countindexs=countindexs-1;
console.log("After",countindexs, countindexn, count) 
selectionspan(groupname, span9, rquality, count, countindexn, countindexs)}}});
tag.textContent=dataStore2.Tárgy[id].Név; container.appendChild(checkbox); container.appendChild(tag)};
selectionspan(groupname, span9, rquality, count, countindexn, countindexs); 
container.appendChild(span9); selbox.appendChild(container)}; 
selbox.classList.remove("hidden"); cont.appendChild(selbox)
const buttonok=selbox.querySelector(".confirm"); selbox.addEventListener("click", (event)=> {if (event.target!==buttonok) {return}; selbox.classList.add("hidden")})
};

function selectionspan (groupname, span9, rquality, count, countindexn, countindexs) {
  if (groupname==="Nyelv") {span9.textContent=`Nyelv tanulásból még Választható:${count-countindexn}`} 
  else {span9.textContent=`Minőség:${rquality}, Még Választható:${count-countindexs}`}}

function skillminus (skillEx) {const code=skillEx.dataset.skillcode; if (!kaszt.Skills) {kaszt.Skills={}}; 
let lastind=kaszt.Skills[code].length-1; let lastinst=kaszt.Skills[code][lastind];
const current=lastinst || 0; if (current===0) return; alkaszt.currSP=Math.max(0, alkaszt.currSP+current); kaszt.Skills[code][lastind]-=1; updatespan(skillEx); alkaszt.currSP=Math.min(alkaszt.currSP, alkaszt.startSP); 
if (kaszt.Skills[code][lastind]===0 && kaszt.Skills[code].length===1) {skilldisappend(skillEx); delete kaszt.Skills[code]; return};
if (kaszt.Skills[code][lastind]===0 && kaszt.Skills[code].length>1) {kaszt.Skills[code].splice(lastind,1); skilldisappend(skillEx)}
};

function skillappend (skillEx) {
console.log("skillappend ENTER");
const grid1=cont.querySelector(".grid1"); const code=skillEx.dataset.skillcode; const fulltangle= grid1.querySelectorAll(".full"); 
const emptangle=grid1.querySelectorAll(".generated.empty"); 
let lastind=kaszt.Skills[code].length-1  
if (!emptangle.length) { console.log("B: EXIT no empties"); return}; console.log("C: lastind value", kaszt.Skills[code][lastind]); if (kaszt.Skills[code][lastind] ===1) {
const image=skillEx.querySelector(".image").cloneNode(false); 
image.style.width="70px"; image.style.height="70px"; const icon=emptangle[0]; 
icon.appendChild(image); icon.classList.remove("empty"); icon.classList.add("full"); 
icon.dataset.skillcode=code; icon.dataset.instance=lastind; 
console.log("FINISHED)")
let skillspan=icon.querySelector("span"); if (!skillspan) {skillspan=document.createElement("span"); 
icon.appendChild(skillspan)} skillspan.textContent=kaszt.Skills[code][lastind]}}

function bonuskill (code, lastinst) {
const activecraft=dataStore2[code]; const craftrow=activecraft[lastinst]; const grid1=cont.querySelector(".grid1"); const emptangle=grid1.querySelectorAll(".generated.empty"); 
const firstempty=emptangle[0];  
if (!craftrow.Eval || !craftrow.Eval.Skill) {return}; const bskill=craftrow.Eval.Skill; const bkey=Object.keys(bskill)[0]; const bvalue=bskill[bkey][0];
console.log("BONUSKILL",{bkey,emptySlots: emptangle.length, currentSkill: kaszt.Skills[bkey]});
if (emptangle.length > 0 && (!kaszt.Skills[bkey] || kaszt.Skills[bkey].length===0)) { console.log("Branch: GRANT BONUS SKILL");kaszt.Skills[bkey] = []; kaszt.Skills[bkey].push(bvalue); 
console.log("BEFORE checkbox",bkey, bvalue); checkbox(bkey, bvalue);
const fakeskill=dataStore2.Skills.find(row=> row.skillcode===bkey); console.log(fakeskill); const image=document.createElement("img"); image.classList.add("image");
image.src=fakeskill.skillimage; image.style.width="70px"; image.style.height="70px"; firstempty.appendChild(image);
firstempty.classList.remove("empty"); firstempty.classList.add("full"); firstempty.dataset.skillcode=bkey; firstempty.dataset.instance=kaszt.Skills[bkey].length-1;
let skillspan=firstempty.querySelector("span"); if (!skillspan) {skillspan=document.createElement("span"); firstempty.appendChild(skillspan);
skillspan.textContent=kaszt.Skills[bkey][kaszt.Skills[bkey].length-1]}}; 
if (emptangle.length===0 && kaszt.Skills[bkey] && kaszt.Skills[bkey].length>0) {console.log("Branch: CONVERT TO RANK/SP");const last=kaszt.Skills[bkey].length-1; const rankskill=kaszt.Skills[bkey][last];
const sworth=rankskill+1; const bworth=(bvalue*(bvalue+1))/2; const rchange=Math.max(0, bworth-sworth); console.log(bworth, sworth); 
if (bworth>=sworth) {kaszt.Skills[bkey][last]+=1; const icon=cont.querySelector(`[data-skillcode="${bkey}"][data-instance="${last}"]`); console.log(icon);
const span=icon?.querySelector("span"); if (span) {span.textContent=kaszt.Skills[bkey][last]};
kaszt.currSP=(kaszt.currSP || 0)+rchange; console.log(alkaszt.currSP, rchange);} else {kaszt.currSP= (kaszt.currSP || 0) + bworth};
;}}

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

const vardivs={ftext: fsheet.querySelector(".finaltext"), frecipe: fsheet.querySelector(".finalrecipe"), fability: fsheet.querySelector(".finalability"),
             fvartext: fsheet.querySelector(".finalvartext"), fstat: fsheet.querySelector(".finalstat"), ftime: fsheet.querySelector(".finaltime"),
             fequip:fsheet.querySelector(".finalequip")};

function fullskillrender () { 
Object.values(vardivs).forEach (div => div.innerHTML="");
country();
Object.keys(jatekos.Skills).forEach (code => skillapply(code));
const inttitle=document.createElement("span"); inttitle.classList.add("szalag"); vardivs.ftext.appendChild(inttitle); inttitle.textContent="Intelligencia:" 
const intspan=document.createElement("span"); vardivs.ftext.appendChild(intspan)
intspan.textContent=`Csatánként egyszer + ${Math.floor(jatekos.Intelligencia/4)} sebzés fegyvertávon belül`; }

function skillapply(code) {;
const skillszint=Math.max(0,...(jatekos.Skills[code] || [])); const skilllist=dataStore2[code]; 
  if (!skilllist) return;
const activename=dataStore2.Skills.find (row=> row.skillcode===code);
const activeskill=skilllist.filter(row => row.Szint <= skillszint); 
const skilldiv=document.createElement("div"); skilldiv.classList.add(code);
const spantitle=document.createElement("span");spantitle.classList.add("szalag"); spantitle.textContent=activename.skilltitle;
vartext(activeskill, skilldiv, spantitle, vardivs); ftext(activeskill, skilldiv, spantitle, vardivs, code); fability(activeskill, skilldiv, spantitle, vardivs);
social(activeskill, vardivs); skilltime(activeskill, skilldiv,spantitle, vardivs), recipe (activeskill, code, skillszint, skilldiv, spantitle, vardivs);
finalitem(vardivs)}

function vartext(activeskill, skilldiv, spantitle, vardivs) {
const checkif=activeskill.some (row=> row.Text); if (!checkif) {return};
const textrow=activeskill.filter(row => row.Text); if 
(textrow.length>0) {const lastrow=textrow.length-1; const lastentry=textrow[lastrow].Text; 
const span5=document.createElement("span");  if (typeof lastentry==="string") {span5.textContent=lastentry} else if(typeof lastentry==="object" && lastentry!==null)
{span5.innerHTML=Object.entries(lastentry).map(([key,value]) => `${key}: ${value}`).join(";  ")}  
const clonediv=skilldiv.cloneNode(true); const titleclone=spantitle.cloneNode(true); 
const activediv=vardivs.fvartext.appendChild(clonediv); activediv.appendChild(titleclone); clonediv.appendChild(span5);
}; };

function ftext(activeskill, skilldiv, spantitle, vardivs, code) {
const clonediv=skilldiv.cloneNode(true); const titleclone=spantitle.cloneNode(true);   
const activediv=vardivs.ftext.appendChild(clonediv); activediv.appendChild(titleclone);
let skillid=null
for (const key in kaszt.Selection) {let skillid=null; console.log("Key", key, "code", code); 
for (const skill in dataStore2.Pool) {for (const group in dataStore2.Pool[skill]) {const select=dataStore2.Pool[skill][group].select; 
if (select?.includes(key)) {skillid=skill; break}} if (skillid) break}
if (skillid!==code) continue;
const span10=document.createElement("span"); if (dataStore2.Tárgy[key].Típus) 
{span10.textContent=`${Object.keys(kaszt.Selection[key])} ${dataStore2.Tárgy[key]?.Típus} előállítása`} else
{span10.textContent=`${Object.keys(kaszt.Selection[key])} ${dataStore2.Tárgy[key]?.Név} előállítása`}; console.log("Created", span10.textContent); activediv.appendChild(span10)};
const checkif=activeskill.some (row => row.Fixtext); if (!checkif) {return}; 
activeskill.forEach(row => {const span3=document.createElement("span"); if (row.Fixtext) {span3.textContent=row.Fixtext; activediv.appendChild(span3)}}); 
console.log ("Selection", kaszt.Selection, "Div", activediv)  
};

function fability (activeskill, skilldiv, spantitle, vardivs) {
const checkif=activeskill.some (row=> row.Abitext); if (!checkif) {return};
const clonediv=skilldiv.cloneNode(true); const titleclone=spantitle.cloneNode(true);
const activediv=vardivs.fability.appendChild(clonediv); activediv.appendChild(titleclone);
activeskill.forEach(row => {
const span4=document.createElement("span"); if (row.Abitext) {span4.textContent=JSON.stringify(row.Abitext, null, 2); activediv.appendChild(span4)  
} }); };

function finalitem(vardivs) {
const span14=document.createElement("span");const invgrid=cont.querySelector(".inventory");
const eq1=document.querySelector(".Equipment1");
console.log(invgrid); const emptys=invgrid.querySelectorAll(".generated.empty").length+eq1.querySelector(".emptyslot").length
console.log(emptys);span14.textContent=`; Üres Felszerelési helyek száma:${emptys}`; console.log(span14)
for (const key in Equipment) {const equipped2=Object.entries(dataStore3.Felszerelés).find(([name,row])=>row.code===key); if (!equipped2) continue; 
const itemname2=equipped2[0]; const itemvalue2=equipped2[1]; const span12=document.createElement("span"); const colorspan=document.createElement("span"); 
colorspan.style.color="orange"; colorspan.textContent=` ${itemvalue2.Slot} : `; span12.appendChild(colorspan); span12.append(itemname2);
vardivs.fequip.appendChild(span12); console.log("Appending:", span14); vardivs.fequip.appendChild(span14); 
console.log("Children now:", vardivs.fequip.children);}
}

function social (activeskill, vardivs) {socialstats(activeskill, vardivs); 
const culture = fsheet.querySelector(".culture"); culture.innerHTML="";
const culture2=document.createElement("ul"); const culture3=document.createElement("ul");
for (const key in jatekos.Nyelv) {  
const listline=document.createElement("li"); 
listline.textContent = `${key}:${jatekos.Nyelv[key]}`; culture2.appendChild(listline)}; 
for (const key in jatekos.Kapcsolat) {const listline=document.createElement("li");
listline.textContent= `${key}:${jatekos.Kapcsolat[key]}`; culture3.appendChild(listline)}; const ultitle=document.createElement("p");
ultitle.textContent="Kulturális Adatok:"; culture.appendChild(ultitle);
culture.appendChild(culture2); culture.appendChild(culture3);} 

function socialstats (activeskill, vardivs) {
  const whitelist=["Fizikum", "FizikumTeszt", "Állóképesség", "ÁllóképességTeszt", "Ügyesség", "ÜgyességTeszt", "Gyorsaság", "GyorsasságTeszt", 
                "Intelligencia", "IntelligenciaTeszt", "Tehetség", "TehetségTeszt", "Felismerés", "FelismerésTeszt", "Inspiráció", "InspirációTeszt",
                 "Ero", "Armor", "Mell", "Sell", "Fell", "Atk", "Def", "Agi", "HP", "slimit", "ilimit", "alimit"]
for (const row of activeskill) {if (!row.Eval) {continue}; 
if (row.Eval.Nyelv) {for (const key in row.Eval.Nyelv) {kaszt.Nyelv[key]=(kaszt.Nyelv[key] || 0) + (row.Eval.Nyelv[key] || 0)}}; 
if (row.Eval.Kapcsolat) {for (const key in row.Eval.Kapcsolat) {kaszt.Kapcsolat[key]=(kaszt.Kapcsolat[key] || 0) + (row.Eval.Kapcsolat[key] || 0)}}; 
for (const key in row.Eval) if (whitelist.includes(key)) {kaszt[key]=(kaszt[key] || 0) + (row.Eval[key] || 0)}; 
if (row.Eval.Pet) {for (const key in row.Eval.Pet) {if (Pet[key]>0) {Pet[key]=(Pet[key]) + (row.Eval.Pet[key])}}}};
update();
}

function skilltime (activeskill, skilldiv, spantitle, vardivs) {
const checkif=activeskill.some (row => row.Eval); if (!checkif) return; 
const timeloop={time1:activeskill.filter(row=>row.Eval && row.Eval.Idő1), time2:activeskill.filter(row=>row.Eval && row.Eval.Idő2), 
                time3:activeskill.filter(row=>row.Eval && row.Eval.Idő3), time4:activeskill.filter(row=>row.Eval &&row.Eval.Idő4), 
                time5:activeskill.filter(row=>row.Eval && row.Eval.Idő5)};
const rule1=(1-Math.floor(jatekos.Inspiráció/4)/100); const rule2=(1-Math.floor(jatekos.Intelligencia/4)/100); const rule3=(1-Math.floor(jatekos.Felismerés/4)/100);
const rule4=(1-Math.floor(jatekos.Tehetség/5)/100); const rule5=(1+Math.floor(jatekos.Tehetség/5)/100);
for (const key in timeloop) {if (!timeloop[key].length) continue; const timeindex=timeloop[key].length-1; const time=timeloop[key][timeindex]; let timevalue
if (key==="time1") {timevalue= Math.floor(time.Eval.Idő1*rule1)}; if (key==="time2") {timevalue=Math.floor(time.Eval.Idő2*rule2)}; 
if (key==="time3") {timevalue=Math.floor(time.Eval.Idő3*rule3);} if (key==="time4") {timevalue=Math.floor(time.Eval.Idő4*rule4)};
if (key==="time5") {timevalue=Math.floor(time.Eval.Idő5*rule5)}; 
const timespan=document.createElement("span"); timespan.textContent=`: ${timeformat(timevalue)}`
const clonediv=skilldiv.cloneNode(true); const titleclone=spantitle.cloneNode(true); 
clonediv.appendChild(titleclone); clonediv.appendChild(timespan); vardivs.ftime.appendChild(clonediv)}}

function recipe (activeskill, code, skillszint, skilldiv, spantitle, vardivs) {
const checkif=activeskill.some (row => row.Eval?.Notification); if (!checkif) return;  
const base=Object.values(dataStore2.Alapanyagok); const currbase=base.filter(row=>row[code]); 
for (const row of currbase) {for (const key of Object.keys(row[code].Szintek)) {if (Number(key) <= skillszint)
{const rdata=row[code].Szintek[key]; const ingredient=row[code].Ingredients; 
for (const receits of rdata) {let input=[]; let input2=[]; let input3=[]; let input4=[];
const material=receits.output; 
for (const block of ingredient) 
{if (block.type==="and") {const text=Object.entries(block.items).map(([ing,amount]) => `${receits.multiplier*amount} db ${receits.inputqual} ${ing}`); input.push(text.join (" + "));}; 
if (block.type==="or") {const text2=Object.entries(block.items).map(([ing,amount]) => `${receits.multiplier*amount} db ${receits.inputqual} ${ing}`); input2.push(`(${text2.join (" VAGY ")})`);
}}; 
for (const block2 of material) 
{if (block2.type==="and") {const text3=Object.entries(block2.items).map(([ing, amount]) => {if (ing==="Meshik" || ing === "Nimesh") {return `${amount} db ${ing}`} else 
{return `${amount} db ${receits.outputqual} ${ing}`}}); input3.push(text3.join(" + "));}
if (block2.type==="or") {const text4=Object.entries(block2.items).map(([ing, amount]) => {if (receits.chquality) {return `${amount} db ${rdata.chquality} ${ing}`} else
{return `${amount} db ${receits.outputqual} ${ing}`}}); input4.push(`(${text4.join(" VAGY ")})`);}}
const finput=input.join (" + "); const finput2=input2.join(" + "); const finput3=input3.join (" + "); const finput4=input4.join(" + ");
const span6=document.createElement("span"); span6.style.color="orange"; if (finput4) {span6.textContent=`${finput3} + (${finput4}) =`;} else {span6.textContent=`${finput3}=`}
const span7=document.createElement("span"); span7.style.color="white"; if (finput2) {span7.textContent=`${finput} + (${finput2})`} else {span7.textContent=`${finput}`};
const recipeline=document.createElement("div"); recipeline.appendChild(span6); recipeline.appendChild(span7); vardivs.frecipe.appendChild(recipeline);}}}};
const allspan=vardivs.frecipe.querySelectorAll("div") 
const span8=document.createElement("span"); span8.textContent="Megszerzett Receptek"; span8.classList.add("badge"); span8.style.color="aquamarine"; 
if (!vardivs.frecipe.querySelector(".badge")) {vardivs.frecipe.appendChild(span8); allspan[0].parentNode.insertBefore(span8, allspan[0])}};

function timeformat(x) {const h=String(Math.floor(x/3600)).padStart(2,"0"); const m=String(Math.floor((x % 3600)/60)).padStart(2,"0"); const s=String(x%60).padStart(2, "0");
                        return `${h}:${m}:${s}`;}

function country () {                        
const country=dataStore.Kország[jatekos.startcountry]; 
for (const key in country) {if (!alkaszt.Nyelv[key]) {alkaszt.Nyelv[key]=0} alkaszt.Nyelv[key]=alkaszt.Nyelv[key]+country[key]} console.log(alkaszt.Nyelv); update() };

function rebuildstats (vardivs) {
update()
vardivs.fstat.innerHTML="";
const statlist=document.createElement("ul")
const basic1 = ["Fizikum", "Állóképesség", "Gyorsaság", "Ügyesség", "Intelligencia", "Tehetség", "Felismerés", "Inspiráció"] 
for (const key of basic1) {const statli=document.createElement("li"); 
const statline=document.createElement("span"); statline.textContent=`${key}: ${jatekos[key]||0} /Max:`
const statline2=document.createElement("span"); statline2.textContent=alkaszt.limit[key] || 0; statline2.style.color="yellow"; 
const statline3=document.createElement("span"); statline3.textContent= ` /Teszt: ${jatekos[key+"Teszt"] ||0}`;statline3.style.color="orange";
statli.appendChild(statline); statli.appendChild(statline2); statli.appendChild(statline3);
statlist.appendChild(statli);}
const basic2= ["Kaszt", "Alkaszt", "Életerő-Pont", "Regeneráció", "Támadás", "Védekezés", "Becs", "Alapsebzés", "Páncélzat", "Agilitás", "Fizikális Ellenállás", "Mentális Ellenállás", 
              "Spirituális Ellenállás", "Páncél-Átütés", "Erő", "Kritikális Sebzés", "Gyorsasági szegmens fordulónként", "Kitérési szegmens támadásonként"];
const basic3=["name", "subname", "HP", "regen", "Atk", "Def", "Becs", "Dmg", "Armor", "Agi", "Fell", "Mell", "Sell", "armorpen", "Ero", "Critdmg", "Spdseg", "Dodgeseg"];
const merge= basic3.map((key, i) => ({key, title:basic2[i]})); 
const statlist2=document.createElement("ul"); for (const item of merge) {
const statline4=document.createElement("li"); statline4.textContent=item.title +":";
const statline5=document.createElement("span"); statline5.textContent=jatekos[item.key] || 0;
statline4.appendChild(statline5); statlist2.appendChild(statline4)}
vardivs.fstat.appendChild(statlist2); vardivs.fstat.appendChild(statlist);
const coolture=fsheet.querySelector(".culture"); 
vardivs.fstat.appendChild(coolture)}

function itemstats () {
const pslot=document.querySelector("#Prslot"); const crslot=document.querySelector(".Crslot"); const nslot=document.querySelector("#Nslot");
const paspect=document.querySelector("#Praspect"); const caspect=document.querySelector(".Craspect"); const naspect=document.querySelector("#Naspect");
const pcategory=document.querySelector("#Pcategory"); const crcategory=document.querySelector(".Crcategory"); const ncategory=document.querySelector("#Ncategory");
const ptype=document.querySelector("#Ptype"); const ctype=document.querySelector(".Crtype"); const ntype=document.querySelector("#Ntype");
const pqual=document.querySelector("#Prqual"); const cqual=document.querySelector(".Crqual"); const nqual=document.querySelector("#Nqual");
const nameline=document.querySelector(".itemname"); const dmgline=document.querySelector(".sebzes"); const pancelline=document.querySelector(".pancelzat");
const becsline=document.querySelector(".becs"); const runeline=document.querySelector(".runeslot"); const dodgeline=document.querySelector(".kiteres"); 
const bonusline=document.querySelector(".bonusz"); const speedline=document.querySelector(".gyors"); const otherline=document.querySelector(".other");
const needline=document.querySelector(".needed"); const equipitem=document.querySelector(".equip"); 
let sind=0; let qind=0; let asind=0; let cind=0; let tind=0; let slotlist; let quallist; let asplist; let catlist; let typlist; let curritem;
categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind)
slotlist=[...new Set(Object.values(dataStore3.Felszerelés).map(row=>row.Slot))]; crslot.textContent=slotlist[sind];
quallist=[...new Set(Object.values(dataStore3.Felszerelés).map (row=>row.Minőség))]; cqual.textContent=quallist[qind];
asplist=[...new Set(Object.values(dataStore3.Felszerelés).filter (row=>row.Slot===slotlist[sind]).map(row=>row.Arculat))]
caspect.textContent=asplist[asind];
catlist=[...new Set(Object.values(dataStore3.Felszerelés).filter(row=>row.Slot===slotlist[sind] && row.Arculat===asplist[asind]).map(row=>row.Kategória))]; 
crcategory.textContent=catlist[cind];
typlist=[...new Set(Object.values(dataStore3.Felszerelés).filter(row=>row.Slot===slotlist[sind] && row.Arculat===asplist[asind] &&
row.Kategória===catlist[cind]).map(row=>row.Típus))]; ctype.textContent=typlist[tind];
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); 
let lists;
cont.addEventListener("click", (event) => {switch(event.target.id) {

  case "Prslot": sind= sind=== 0 ? slotlist.length-1 : sind-1; asind=0; cind=0; tind=0; crslot.textContent=slotlist[sind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Nslot": sind= sind===slotlist.length-1 ? 0:sind+1; asind=0; cind=0; tind=0;  crslot.textContent=slotlist[sind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Praspect": asind= asind=== 0 ? asplist.length-1 : asind-1; caspect.textContent=asplist[asind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Naspect": asind= asind=== asplist.length-1 ? 0: asind+1; caspect.textContent=asplist[asind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Pcategory": cind= cind=== 0 ? catlist.length-1 : cind-1; tind=0; crcategory.textContent=catlist[cind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Ncategory": cind= cind=== catlist.length-1 ? 0: cind+1; tind=0;crcategory.textContent=catlist[cind];
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Ptype": tind= tind=== 0 ? typlist.length-1 : tind-1; ctype.textContent=typlist[tind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Ntype": tind= tind=== typlist.length-1 ? 0: tind+1;ctype.textContent=typlist[tind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Prqual": qind= qind=== 0 ? quallist.length-1 : qind-1; cqual.textContent=quallist[qind];
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break;

case "Nqual": qind= qind=== quallist.length-1 ? 0: qind+1;cqual.textContent=quallist[qind]; 
list=categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind); 
slotlist=list.slotlist; quallist=list.quallist; asplist=list.asplist; catlist=list.catlist; typlist=list.typlist;
itemmatch(slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind); break; 
}});
invslotter()};

function invslotter() {
let crinvlimit=0;
const invgrid=cont.querySelector(".inventory"); const invsq=invgrid.querySelector(".invsquare");
const Equipment1=cont.querySelector(".Equipment1"); 
invgrid.querySelectorAll(".generated").forEach(el=>el.remove());
const emptyslot=Equipment1.querySelectorAll(".emptyslot").length; console.log(emptyslot); 
const invdata=dataStore.Inventoryslot[kaszt.name].filter(limit=>(limit.SP<=alkaszt.startSP)); 
const index2=invdata.length-1; crinvlimit=invdata[index2].Invslot; console.log(crinvlimit);
crinvlimit=Math.max(crinvlimit+(karakter.crinvlimit || 0)-9+emptyslot, 0); console.log(crinvlimit);
const filter3=document.createElement("div"); filter3.classList.add("square"); console.log(filter3)
for (let i=0; i<crinvlimit; i++) {console.log(i);const newsquare=invsq.cloneNode(true); newsquare.classList.add("generated"); newsquare.classList.add("empty")
newsquare.classList.remove("hidden"); filter3.appendChild(newsquare);} invgrid.appendChild(filter3); console.log(filter3);
};

function categorize (crslot, sind, cqual, qind, caspect, asind, crcategory, cind, ctype, tind) {
slotlist=[...new Set(Object.values(dataStore3.Felszerelés).map(row=>row.Slot))]; crslot.textContent=slotlist[sind];
quallist=[...new Set(Object.values(dataStore3.Felszerelés).map (row=>row.Minőség))]; cqual.textContent=quallist[qind];
asplist=[...new Set(Object.values(dataStore3.Felszerelés).filter (row=>row.Slot===slotlist[sind]).map(row=>row.Arculat))];
caspect.textContent=asplist[asind];
catlist=[...new Set(Object.values(dataStore3.Felszerelés).filter(row=>row.Slot===slotlist[sind] && row.Arculat===asplist[asind]).map(row=>row.Kategória))]; 
crcategory.textContent=catlist[cind];
typlist=[...new Set(Object.values(dataStore3.Felszerelés).filter(row=>row.Slot===slotlist[sind] && row.Arculat===asplist[asind] &&
row.Kategória===catlist[cind]).map(row=>row.Típus))]; ctype.textContent=typlist[tind];
return{slotlist, quallist, asplist, catlist, typlist}; };

function itemmatch (slotlist, sind, quallist, qind, asplist, asind, catlist, cind, typlist, tind) {
curritem=Object.entries(dataStore3.Felszerelés).find(([name,row])=> row.Slot===slotlist[sind] && row.Minőség===quallist[qind] && row.Arculat===asplist[asind] &&
row.Kategória===catlist[cind] && row.Típus===typlist[tind]); 
console.log(curritem); const itemname=curritem[0]; const itemvalue=curritem[1]; itemspan(itemname, itemvalue, vardivs)
};

function itemspan (itemname, itemvalue, vardivs) {
const nameline=document.querySelector(".itemname"); const dmgline=document.querySelector(".sebzes"); const pancelline=document.querySelector(".pancelzat");
const becsline=document.querySelector(".becs"); const runeline=document.querySelector(".runeslot"); const dodgeline=document.querySelector(".kiteres"); 
const bonusline=document.querySelector(".bonusz"); const speedline=document.querySelector(".gyors"); const otherline=document.querySelector(".other");
const needline=document.querySelector(".needed"); const rangeline=document.querySelector(".range");   
nameline.textContent=itemname; dmgline.textContent=itemvalue.Sebzés || 0; pancelline.textContent=itemvalue.Armor || 0; becsline.textContent=itemvalue.Becs || 0;
runeline.textContent=itemvalue.Rúnaszám || 0; dodgeline.textContent=itemvalue.Dodgeseg || 0; speedline.textContent=itemvalue.Spdseg || 0; 
needline.textContent=itemvalue.Szükséges; 
otherline.textContent=""; if (itemvalue.Nyelv) {otherline.textContent=`${Object.keys(itemvalue.Nyelv)[0]} Nyelv : ${Object.values(itemvalue.Nyelv)[0]}`}; 
const preview=document.querySelector(".preview");
if (itemvalue.Táv) {const img2=document.createElement("img"); img2.src="./Misc/" + String(itemvalue.Táv) + ".jpg"; 
preview.innerHTML=""; preview.appendChild(img2); rangeline.textContent=itemvalue.Táv} else {preview.innerHTML=""; rangeline.textContent="";}  
if (itemvalue.Abitext) {const span11=document.createElement("span"); span11.classList.add("wpn"); const check2=vardivs.fability.querySelector("wpn"); 
if (check2!==null) {check2.remove()}; vardivs.fability.appendChild(span11); span11.textContent=`${itemname}:${itemvalue.Abitext}`}; 

const baseline1={"Fizikum":"Fizikum", "Állóképesség":"Állóképesség", "Ügyesség":"Ügyesség", "Gyorsaság":"Gyorsaság", "Intelligencia":"Intelligencia", 
  "Tehetség":"Tehetség", "Felismerés":"Felismerés", "Inspiráció":"Inspiráció", "Atk":"Támadás", "Def":"Védekezés", "HP":"Életerő Pont", 
  "Fell":"Fizikai Ellenállás", "Sell":"Spirituális Ellenállás", "Mell":"Mentális Ellenállás", "Ero":"Erő"};
const bonus=[]; for (const key in itemvalue) {if (key in baseline1) {bonus.push(`${baseline1[key]}:${itemvalue[key]}`)}}; bonusline.textContent=bonus.join(", ");};

cont.addEventListener("click", (event) => {if (event.target.id==="equip") {itemadd(curritem);}});

function itemadd(curritem) {
console.log("Hello")
const itemvalue=curritem[1];
if (Equipment[itemvalue.code]) return; for (const key in Equipment) {const equipped=Object.values(dataStore3.Felszerelés).find(row=>row.code===key); console.log(equipped);
if (!equipped) continue; if (equipped.Slot===itemvalue.Slot) return; if (equipped.Slot==="Kellék" && itemvalue.Invslot===2) return; 
if (equipped.Invslot===2 && itemvalue.Slot==="Kellék") return;} 
let stat={Dmg:0, Armor:0, Runeslot:0, Becs:0, Spdseg:0, Dodgeseg:0, Fizikum:0, ÁLlóképesség:0, Ügyesség:0, Gyorsaság:0, Intelligencia:0, Tehetség:0,
            Felismerés:0, Inspiráció:0, Mell:0, Sell:0, Fell:0, HP:0, Ero:0, Atk:0, Def:0}
console.log(itemvalue.code); 
Equipment[itemvalue.code]=true; const itemchange=document.querySelector(`.${itemvalue.Slot}`); itemchange.classList.remove("emptyslot"); 
itemchange.classList.add("fullslot"); for (const key in Equipment) {const equipped=Object.values(dataStore3.Felszerelés).find(row=>row.code===key)
stat.Dmg+=equipped.Sebzés || 0; stat.Armor+=equipped.Armor || 0; stat.Runeslot+=equipped.Runeslot || 0; stat.Becs+=equipped.Becs || 0; stat.Spdseg+=equipped.Spdseg || 0; 
stat.Dodgeseg+=equipped.Dodgeseg || 0; stat.Fizikum+=equipped.Fizikum || 0; stat.Állóképesség+=equipped.Állóképesség || 0; stat.Ügyesség+=equipped.Ügyesség || 0; 
stat.Gyorsaság+=equipped.Gyorsaság || 0; stat.Intelligencia+=equipped.Intelligencia || 0; stat.Tehetség+=equipped.Tehetség || 0; stat.Felismerés+=equipped.Felismerés || 0; 
stat.Inspiráció+=equipped.Inspiráció || 0; stat.Mell+=equipped.Mell || 0; stat.Sell+=equipped.Sell || 0; stat.Fell+=equipped.Fell || 0; stat.Atk+=equipped.Atk || 0; 
stat.Def+=equipped.Def || 0; stat.HP+=equipped.HP || 0; stat.Ero+=equipped.Ero || 0;  console.log(stat);
};
 for (const key in stat) {karakter[key]=stat[key]}; invslotter()}; 

const st3=document.querySelector(".structure3"); const pinput=document.querySelector("#player"); const att=document.querySelector(".attack")
const st2=document.querySelector(".structure2"); const pinput2=document.querySelector("#enemy")
const textdiv={name:st3.querySelector(".name2"), startSP:st3.querySelector(".sp2"), HP:st3.querySelector(".HP2"),
    regen:st3.querySelector(".regen2"), Atk:st3.querySelector(".atk2"), Def:st3.querySelector(".def2"), Dmg: st3.querySelector(".damage2"),
    Critdmg:st3.querySelector(".crit2"), Becs:st3.querySelector(".GV2"), Armor:st3.querySelector(".armor2"), armorpen:st3.querySelector(".pen2"),
    Spdseg:st3.querySelector(".spdseg2"), Dodgeseg:st3.querySelector(".dodgeseg2"), Agi:st3.querySelector(".agi2"), Fell:st3.querySelector(".fres2"),
    Mell:st3.querySelector(".mres2"), Sell:st3.querySelector(".sres2"), Ero:st3.querySelector(".ero2")  }
    
pinput.addEventListener("change", ()=>{const Entry=dataStore[pinput.value]; 
if (!instance.player[pinput.value]) {instance.player[pinput.value]=structuredClone(dataStore[pinput.value])}; active.playerEntry=instance.player[pinput.value]; 
const selected=instance.player[pinput.value];
for (const div in textdiv) {const statname=div;
textdiv[div].textContent=`${textdiv[div].dataset.label} ${selected[statname]} / ${selected["curr"+statname] ?? ""}  `}});

pinput2.addEventListener("change", ()=>{const Entry2=dataStore[pinput2.value]; 
if (!instance.enemy[pinput2.value]) {instance.enemy[pinput2.value]=structuredClone(dataStore[pinput2.value])}; active.enemyEntry2=instance.enemy[pinput2.value];
const selected2=instance.enemy[pinput2.value] 
for (const div in textdiv) {const statname=div;
textdiv[div].textContent=`${textdiv[div].dataset.label} ${selected2[statname]} / ${selected2["curr"+statname] ??  ""}`}});







