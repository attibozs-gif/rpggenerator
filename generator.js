const alkaszt = {}; const kaszt = {}; const karakter = {}; const lemez=document.querySelector(".kasztzene"); 
const jatekos = {}; alkaszt.limit={}; let tempname; const Pet ={}; jatekos.Skills={}; karakter.Skills={}, alkaszt.Skills={}, kaszt.Skills={},
kaszt.Nyelv={}; kaszt.Kapcsolat={}; alkaszt.Kapcsolat={}; alkaszt.Nyelv={}; jatekos.Nyelv={}; jatekos.Kapcsolat={};
karakter.Nyelv={"Mei":0, "Venta":0, "Malco":0, "Mergla":0, "Prosant":0};
karakter.Kapcsolat={"Kahal":0, "Edubra":0, "Ekkalri":0, "Siphal":0, "Shatra":0, "Gestri":0};
console.trace("NYELV WAS MODIFIED:", jatekos.Nyelv);

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
                Inspiráció: (karakter.Inspiráció || 0) + (kaszt.Inspiráció || 0) + (alkaszt.Inspiráció || 0)});
                
                alkaszt.Agi=Math.floor((alkaszt.Ügyesség+alkaszt.Gyorsasság)/2); alkaszt.Fell=Math.floor((alkaszt.Fizikum+alkaszt.Állóképesség)/2); 
                alkaszt.Mell=Math.floor((alkaszt.Intelligencia+alkaszt.Tehetség)/2); alkaszt.Sell=Math.floor((alkaszt.Felismerés+alkaszt.Inspiráció)/2);
                kaszt.HP=Math.floor(alkaszt.Állóképesség/10); alkaszt.regen=Math.min(30, Math.floor(2+(jatekos.HP/25)+(jatekos.Állóképesség/5)));
                alkaszt.Dmg= (alkaszt.Dmg || 1 ), alkaszt.Crit=Math.round(alkaszt.Dmg+((alkaszt.Dmg/100)*alkaszt.Ügyesség+(3*alkaszt.Ügyesség/(alkaszt.Ügyesség+alkaszt.Dmg))))
                alkaszt.Critdmg=alkaszt.Crit/alkaszt.Dmg; alkaszt.armorpen=Math.floor(jatekos.Fizikum/2);
                alkaszt.Spdseg=Math.floor(alkaszt.Gyorsasság/5); alkaszt.Ero=Math.floor(alkaszt.Tehetség/4); 

                attributespan = {"Fizikum": cont.querySelector(".fizikum"), "Állóképesség": cont.querySelector(".allokepesseg"),
                "Ügyesség": cont.querySelector (".ugyesseg"), "Gyorsasság": cont.querySelector(".gyorsassag"),
                "Intelligencia": cont.querySelector (".intelligencia"), "Tehetség":cont.querySelector(".tehetseg"),
                "Felismerés": cont.querySelector (".felismeres"), "Inspiráció": cont.querySelector(".inspiracio")} 

                for (const key in attributespan) {alkaszt[key+"Teszt"]=Math.floor(jatekos[key]/10);
                {attributespan[key].innerHTML=`<span style="color: rgb(230, 241, 75); font-weight: bold"> ${jatekos[key]}</span> / ${alkaszt.limit[key] || 100} 
                <span> / Teszt: </span> ${alkaszt[key+"Teszt"]}`}}; 

                Object.assign(jatekos.Skills, alkaszt.Skills, kaszt.Skills, karakter.Skills);
              for (const key in jatekos.Skills) {jatekos.Skills[key]=(kaszt.Skills[key] || 0) + (alkaszt.Skills[key] || 0) + (karakter.Skills[key] || 0)};
                                                    
                Object.assign (jatekos, alkaszt, kaszt, karakter, {
                Critdmg: (karakter.Critdmg || 0) + (kaszt.Critdmg || 0) + (alkaszt.Critdmg || 0),
                Becs:(karakter.Becs || 0) + (alkaszt.Becs || 0) + (kaszt.Becs || 0), 
                Agi: (karakter.Agi || 0) + (kaszt.Agi || 0) + (alkaszt.Agi || 0),
                Fell :(karakter.Fell || 0) + (kaszt.Fell || 0) + (alkaszt.Fell || 0),
                Mell: (karakter.Mell || 0) + (kaszt.Mell || 0) + (alkaszt.Mell || 0),
                Sell: (karakter.Sell || 0) + (kaszt.Sell || 0) + (alkaszt.Sell || 0),
                Ero: (karakter.Ero || 0) + (kaszt.Ero || 0) + (alkaszt.Ero || 0),
                Spdseg: (karakter.Spdseg || 0) + (kaszt.Spdseg || 0) + (alkaszt.Spdseg || 0),
                Dmg: (karakter.Dmg || 0) + (kaszt.Dmg || 0) + (alkaszt.Dmg || 0),
                Dodgeseg:(karakter.Dodgeseg || 0) + (kaszt.Dodgeseg || 0) + (alkaszt.Dodgeseg || 0),
                FizikumTeszt:(karakter.FizikumTeszt || 0) + (kaszt.FizikumTeszt || 0) + (alkaszt.FizikumTeszt || 0),
                ÁllóképességTeszt:(karakter.ÁllóképességTeszt || 0) + (kaszt.ÁllóképességTeszt || 0) + (alkaszt.ÁllóképességTeszt || 0),  
                ÜgyességTeszt:(karakter.ÜgyességTeszt || 0) + (kaszt.ÜgyességTeszt || 0) + (alkaszt.ÜgyességTeszt || 0),
                GyorsasságTeszt:(karakter.GyorsasságTeszt || 0) + (kaszt.GyorsasságTeszt || 0) + (alkaszt.GyorsasságTeszt || 0),
                IntelligenciaTeszt:(karakter.IntelligenciaTeszt || 0) + (kaszt.IntelligenciaTeszt || 0) + (alkaszt.IntelligenciaTeszt || 0),
                TehetségTeszt:(karakter.TehetségTeszt|| 0) + (kaszt.TehetségTeszt || 0) + (alkaszt.TehetségTeszt || 0),
                FelismerésTeszt:(karakter.FelismerésTeszt || 0) + (kaszt.FelismerésTeszt || 0) + (alkaszt.FelismerésTeszt || 0),
                InspirációTeszt:(karakter.InspirációTeszt || 0) + (kaszt.InspirációTeszt || 0) + (alkaszt.InspirációTeszt || 0),
                Armor:(karakter.Armor || 0) + (alkaszt.Armor || 0) + (kaszt.Armor || 0)}  

              ); 
            jatekos.Nyelv.Mergla = (alkaszt.Nyelv.Mergla || 0) + (kaszt.Nyelv.Mergla || 0) + (karakter.Nyelv.Mergla || 0);
            jatekos.Nyelv.Mei = (alkaszt.Nyelv.Mei || 0) + (kaszt.Nyelv.Mei || 0) + (karakter.Nyelv.Mei || 0);
            jatekos.Nyelv.Venta = (alkaszt.Nyelv.Venta || 0) + (kaszt.Nyelv.Mergla || 0) + (karakter.Nyelv.Venta || 0);
            jatekos.Nyelv.Malco = (alkaszt.Nyelv.Malco || 0) + (kaszt.Nyelv.Malco || 0) + (karakter.Nyelv.Malco || 0);
            jatekos.Nyelv.Prosant = (alkaszt.Nyelv.Prosant || 0) + (kaszt.Nyelv.Prosant || 0) + (karakter.Nyelv.Prosant || 0);
            jatekos.Kapcsolat.Kahal = (alkaszt.Kapcsolat.Kahal || 0) + (kaszt.Kapcsolat.Kahal || 0) + (karakter.Kapcsolat.Kahal || 0);
            jatekos.Kapcsolat.Edubra = (alkaszt.Kapcsolat.Edubra || 0) + (kaszt.Kapcsolat.Edubra || 0) + (karakter.Kapcsolat.Edubra || 0);
            jatekos.Kapcsolat.Ekkalri = (alkaszt.Kapcsolat.Ekkalri || 0) + (kaszt.Kapcsolat.Ekkalri || 0) + (karakter.Kapcsolat.Ekkalri || 0);
            jatekos.Kapcsolat.Shatra = (alkaszt.Kapcsolat.Shatra || 0) + (kaszt.Kapcsolat.Shatra || 0) + (karakter.Kapcsolat.Shatra || 0);
            jatekos.Kapcsolat.Siphal = (alkaszt.Kapcsolat.Siphal || 0) + (kaszt.Kapcsolat.Siphal || 0) + (karakter.Kapcsolat.Siphal || 0);
            jatekos.Kapcsolat.Gestri = (alkaszt.Kapcsolat.Gestri || 0) + (kaszt.Kapcsolat.Gestri || 0) + (karakter.Kapcsolat.Gestri || 0);
            
                             
                const kasztnev = cont.querySelector(".kasztnev"); const alkasztnev = cont.querySelector (".alkasztnev");
                const currSP = cont.querySelectorAll(".currSP"); const currAP =cont.querySelector (".currAP");
                const atk2 = cont.querySelector(".atk"); const def2 = cont.querySelector(".def"); const hp2 =cont.querySelector(".health")
                const agi=cont.querySelector(".agilitas"); const fres=cont.querySelector(".physres")
                const mres=cont.querySelector(".menres"); const sres=cont.querySelector(".spires"); mres.textContent=jatekos.Mell
                const regen=cont.querySelector(".regen"); const critdmg=cont.querySelector(".critdmg");
                const armorpen=cont.querySelector(".pen"); const ero=cont.querySelector(".Ero"); const seg1=cont.querySelector(".spdseg");
                const seg2=cont.querySelector(".dodgeseg"); const dam=cont.querySelector(".damage");

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
                seg2.textContent=jatekos.Dodgeseg; dam.textContent=jatekos.Dmg;
                
                petNAME.textContent=Pet.Name; petATK.textContent=Pet.Atk; petDEF.textContent=Pet.Def; petHP.textContent=Pet.HP; petGEAR.textContent=Pet.Gear;
                petARMOR.textContent=Pet.Armor; petREGEN.textContent=Pet.Regen; petDMG.textContent=Pet.Dmg; petPEN.textContent=Pet.Pen; }
                
                         
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
const code =span2.array [span2.index]; span2.textContent=dataStore.Subclassname[code]; alkaszt.subname=dataStore.Subclassname[code]; alkaszt.code = code; statsearch(); petrender();
})

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
case "Equipmentbutton": show(document.querySelector(".Equipment")); break;
case "Skillsbutton": show(document.querySelector(".Skills")); break; 
case "selection": show(document.querySelector(".stepper")); break; }; })


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
{skillappend(skillEx, lastind)} skillapply(skillEx); update()};

function skillminus (skillEx) {const code=skillEx.dataset.skillcode; if (!kaszt.Skills) {kaszt.Skills={}}; 
let lastind=kaszt.Skills[code].length-1; let lastinst=kaszt.Skills[code][lastind];
const current=lastinst || 0; if (current===0) return; alkaszt.currSP=Math.max(0, alkaszt.currSP+current); kaszt.Skills[code][lastind]-=1; updatespan(skillEx); alkaszt.currSP=Math.min(alkaszt.currSP, alkaszt.startSP); 
if (kaszt.Skills[code][lastind]===0) {skilldisappend(skillEx)};};

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

const vardivs={ftext: fsheet.querySelector(".finaltext"), frecipe: fsheet.querySelector(".finalrecipe"), fability: fsheet.querySelector(".finalability"),
             fvartext: fsheet.querySelector(".finalvartext"), fstat: fsheet.querySelector(".finalstat"), ftime: fsheet.querySelector(".finaltime") };

function fullskillrender () { 
Object.values(vardivs).forEach (div => div.innerHTML=""); Object.keys(jatekos.Skills).forEach (code => skillapply(code));
const inttitle=document.createElement("span"); inttitle.classList.add("szalag"); vardivs.ftext.appendChild(inttitle); inttitle.textContent="Intelligencia:" 
const intspan=document.createElement("span"); vardivs.ftext.appendChild(intspan)
intspan.textContent=`Csatánként egyszer + ${Math.floor(jatekos.Intelligencia/4)} sebzés fegyvertávon belül`; }

function skillapply(code) {;
const skillszint=Math.max(...(jatekos.Skills[code] || 0)); const skilllist=dataStore2[code]; 
  if (!skilllist) return;
const activename=dataStore2.Skills.find (row=> row.skillcode===code);
const activeskill=skilllist.filter(row => row.Szint <= skillszint); 
const skilldiv=document.createElement("div"); skilldiv.classList.add(code);
const spantitle=document.createElement("span");spantitle.classList.add("szalag"); spantitle.textContent=activename.skilltitle;
vartext(activeskill, skilldiv, spantitle, vardivs); ftext(activeskill, skilldiv, spantitle, vardivs); fability(activeskill, skilldiv, spantitle, vardivs);
social(activeskill, vardivs); skilltime(activeskill, skilldiv,spantitle, vardivs), recipe (activeskill, code, skillszint, skilldiv, spantitle, vardivs)}

function vartext(activeskill, skilldiv, spantitle, vardivs) {
const checkif=activeskill.some (row=> row.Text); if (!checkif) {return};
const textrow=activeskill.filter(row => row.Text); if (textrow.length>0) {const lastrow=textrow.length-1; const span5=document.createElement("span");
span5.textContent=JSON.stringify(textrow[lastrow].Text, null, 2);
const clonediv=skilldiv.cloneNode(true); const titleclone=spantitle.cloneNode(true); 
const activediv=vardivs.fvartext.appendChild(clonediv); activediv.appendChild(titleclone); activediv.appendChild(span5);
}; };

function ftext(activeskill, skilldiv, spantitle, vardivs) {
const checkif=activeskill.some (row => row.Fixtext); if (!checkif) {return}; 
const clonediv=skilldiv.cloneNode(true); const titleclone=spantitle.cloneNode(true);   
const activediv=vardivs.ftext.appendChild(clonediv); activediv.appendChild(titleclone);
activeskill.forEach(row => {
const span3=document.createElement("span"); if (row.Fixtext) {span3.textContent=row.Fixtext; activediv.appendChild(span3);   
}})};

function fability (activeskill, skilldiv, spantitle, vardivs) {
const checkif=activeskill.some (row=> row.Abitext); if (!checkif) {return};
const clonediv=skilldiv.cloneNode(true); const titleclone=spantitle.cloneNode(true);
const activediv=vardivs.fability.appendChild(clonediv); activediv.appendChild(titleclone);
activeskill.forEach(row => {
const span4=document.createElement("span"); if (row.Abitext) {span4.textContent=JSON.stringify(row.Abitext, null, 2); activediv.appendChild(span4)  
} }); };

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
const whitelist=["Fizikum", "FizikumTeszt", "Állóképesség", "ÁllóképességTeszt", "Ügyesség", "ÜgyességTeszt", "Gyorsasság", "GyorsasságTeszt", 
                "Intelligencia", "IntelligenciaTeszt", "Tehetség", "TehetségTeszt", "Felismerés", "FelismerésTeszt", "Inspiráció", "InspirációTeszt",
                 "Ero", "Armor", "Mell", "Sell", "Fell", "Atk", "Def", "Agi", "HP", "slimit", "ilimit", "alimit"]
for (const row of activeskill) {if (!row.Eval) {continue}; 
if (row.Eval.Nyelv) {for (const key in row.Eval.Nyelv) {kaszt.Nyelv[key]=(kaszt.Nyelv[key] || 0) + (row.Eval.Nyelv[key] || 0)}}; 
if (row.Eval.Kapcsolat) {for (const key in row.Eval.Kapcsolat) {kaszt.Kapcsolat[key]=(kaszt.Kapcsolat[key] || 0) + (row.Eval.Kapcsolat[key] || 0)}}; 
for (const key in row.Eval) if (whitelist.includes(key)) {kaszt[key]=(kaszt[key] || 0) + (row.Eval[key] || 0)}; 
if (row.Eval.Pet) {for (const key in row.Eval.Pet) {if (Pet[key]>0) {Pet[key]=(Pet[key]) + (row.Eval.Pet[key])}}}};};

function rebuildstats (vardivs) {
update()
vardivs.fstat.innerHTML="";
const statlist=document.createElement("ul")
const basic1 = ["Fizikum", "Állóképesség", "Gyorsasság", "Ügyesség", "Intelligencia", "Tehetség", "Felismerés", "Inspiráció"] 
for (const key of basic1) {const statli=document.createElement("li"); 
const statline=document.createElement("span"); statline.textContent=`${key}: ${jatekos[key]||0} /Max:`
const statline2=document.createElement("span"); statline2.textContent=alkaszt.limit[key] || 0; statline2.style.color="yellow"; 
const statline3=document.createElement("span"); statline3.textContent= ` /Teszt: ${jatekos[key+"Teszt"] ||0}`;statline3.style.color="orange";
statli.appendChild(statline); statli.appendChild(statline2); statli.appendChild(statline3);
statlist.appendChild(statli);}
const basic2= ["Kaszt", "Alkaszt", "Életerő-Pont", "Regeneráció", "Támadás", "Védekezés", "Becs", "Alapsebzés", "Páncélzat", "Agilitás", "Fizikális Ellenállás", "Mentális Ellenállás", 
              "Spirituális Ellenállás", "Páncél-Átütés", "Erő", "Kritikális Sebzés", "Gyorsassági szegmens fordulónként", "Kitérési szegmens támadásonként"];
const basic3=["name", "subname", "HP", "regen", "Atk", "Def", "Becs", "Dmg", "Armor", "Agi", "Fell", "Mell", "Sell", "armorpen", "Ero", "Critdmg", "Spdseg", "Dodgeseg"];
const merge= basic3.map((key, i) => ({key, title:basic2[i]})); 
const statlist2=document.createElement("ul"); for (const item of merge) {
const statline4=document.createElement("li"); statline4.textContent=item.title +":";
const statline5=document.createElement("span"); statline5.textContent=jatekos[item.key] || 0;
statline4.appendChild(statline5); statlist2.appendChild(statline4)}
vardivs.fstat.appendChild(statlist2); vardivs.fstat.appendChild(statlist)}

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
let input=[]; let input2=[]; let input3=[]; let input4=[];
const checkif=activeskill.some (row => row.Eval.Notification); if (!checkif) return;  
const base=Object.values(dataStore2.Alapanyagok); const currbase=base.filter(row=>row[code]); 
for (const row of currbase) {for (const key of Object.keys(row[code].Szintek)) {if (Number(key) <= skillszint)
{const rdata=row[code].Szintek[key]; const ingredient=row[code].Ingredients; const material=rdata.output; 
for (const block of ingredient) 
{if (block.type==="and") {const text=Object.entries(block.items).map(([ing,amount]) => `${rdata.multiplier*amount} db ${rdata.inputqual} ${ing}`); input.push(text.join (" + "));}; 
if (block.type==="or") {const text2=Object.entries(block.items).map(([ing,amount]) => `${rdata.multiplier*amount} db ${rdata.inputqual} ${ing}`); input2.push(text2.join (" OR "));}};
for (const block2 of material)
{if (block2.type==="and") {const text3=Object.entries(block2.items).map(([ing, amount]) => {if (ing==="Meshik" || ing === "Nimesh") {return `${amount} db ${ing}`} else 
{return `${amount} db ${rdata.outputqual} ${ing}`}}); input3.push(text3.join(" + "));}
if (block2.type==="or") {const text4=Object.entries(block2.items).map(([ing, amount]) => {if (rdata.chquality) {return `${amount} db ${rdata.chquality} ${ing}`} else
{return `${amount} db ${rdata.outputqual} ${ing}`}}); input4.push(text4.join(" OR "));}}; }
const finput=input.join (" + "); const finput2=input2.join (" + "); const finput3=input3.join (" + "); const finput4=input4.join(" + ");
const span6=document.createElement("span"); span6.style.color="green"; span6.textContent=`${finput3} + (${finput4}) =`;
const span7=document.createElement("span"); span7.style.color="white"; span7.textContent=`${finput} + (${finput2})`; 
vardivs.frecipe.appendChild(span6); vardivs.frecipe.appendChild(span7)}}};  


function timeformat(x) {const h=String(Math.floor(x/3600)).padStart(2,"0"); const m=String(Math.floor((x % 3600)/60)).padStart(2,"0"); const s=String(x%60).padStart(2, "0");
                        return `${h}:${m}:${s}`;}

