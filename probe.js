


function petsearch () {if (!dataStore) return; if (!Pet) return; 
const lower = dataStore.Pets.filter (row => (row.SP<=alkaszt.startSP)); const upper = dataStore.Pets.filter (row =>(row.SP>=alkaszt.startSP)) 
const nearlower = lower [lower.length -1]; const nearupper = upper [0]; const petlist=dataStore.HasPet[alkaszt.code]; 
const petselect=petlist[pindex]; 
let petatk, petdef, pethp, petgear, petdmg, petarmor, petpen, petregen;
if (nearupper.SP===nearlower.SP) {petatk=nearlower[petselect].Atk; petdef=nearlower[petselect].Def; pethp=nearlower[petselect].HP; petgear=nearlower[petselect].Gear;
petdmg=nearlower[petselect].Dmg; petarmor=nearlower[petselect].Armor, petpen=nearlower[petselect].armorpen; petregen=nearlower[petselect].Regen} else {
petatk=nearlower[petselect].Atk + ((nearupper[petselect].Atk-nearlower[petselect].Atk)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petdef=nearlower[petselect].Def + ((nearupper[petselect].Def-nearlower[petselect].Def)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
pethp=nearlower[petselect].HP + ((nearupper[petselect].HP-nearlower[petselect].HP)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petgear=nearlower[petselect].Gear + ((nearupper[petselect].Gear-nearlower[petselect].Gear)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petdmg=nearlower[petselect].Dmg + ((nearupper[petselect].Dmg-nearlower[petselect].Dmg)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petarmor=nearlower[petselect].Armor + ((nearupper[petselect].Armor-nearlower[petselect].Armor)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petpen=nearlower[petselect].armorpen + ((nearupper[petselect].armorpen-nearlower[petselect].armorpen)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
petregen=nearlower[petselect].regen + ((nearupper[petselect].regen-nearlower[petselect].regen)/(nearupper.SP-nearlower.SP))*(alkaszt.startSP-nearlower.SP);
Pet.Atk=Math.floor(petatk); Pet.Def=Math.floor(petdef); Pet.HP=Math.floor(pethp); Pet.Gear=Math.floor(petgear); Pet.Armor=Math.floor(petarmor);
Pet.Pen=Math.floor(petpen); Pet.Regen=Math.floor(petregen); }}



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
    
      const checkif=activeskill.some (row=> row.Eval); if (!checkif) {return};
const socialfilter=activeskill.filter(row=> row.Eval && row.Eval.Nyelv); 
socialfilter.forEach (row => {for (const key in row.Eval.Nyelv) {kaszt.Nyelv[key]=(kaszt.Nyelv[key] || 0) + (row.Eval.Nyelv[key] || 0)}; }); 
const socialfilter2=activeskill.filter(row=> row.Eval && row.Eval.Kapcsolat);
socialfilter2.forEach (row=> {for (const key in row.Eval.Kapcsolat) {kaszt.Kapcsolat[key]=(kaszt.Kapcsolat[key] || 0) + (row.Eval.Kapcsolat[key] || 0)};})

  const curritem=Object.entries(dataStore3.Felszerelés).find(([name,row])=> row.Slot===slotlist[sind] && row.Minőség===quallist[qind] && row.Arculat===asplist[asind] &&
row.Kategória===catlist[cind] && row.Típus===typlist[tind]); 
const delta = Math.max(0, atk - def);




const tier = Math.floor(delta / 11);
const pressure = delta % 11;

const crit6Threshold = Math.max(0, 4 - tier);
const crit56Threshold = Math.max(0, 8 - tier);

let critFaces = [];

if (pressure >= crit56Threshold) {
  critFaces = [5, 6];
} else if (pressure >= crit6Threshold) {
  critFaces = [6];
}

const roll = rollD6();
const isCrit = critFaces.includes(roll);


1	2	3	4	5	6	7	8	9	  10	  11	    12
-	-	-	-	-	6	6	6	5,6 5,6	4,5,6	  4,5,6


         alkaszt.Dmg= (alkaszt.Dmg || 1 ), jatekos.Crit=Math.round(jatekos.Dmg+((jatekos.Dmg/100)*jatekos.Ügyesség+(3*jatekos.Ügyesség/(jatekos.Ügyesség+jatekos.Dmg))))
                alkaszt.Critdmg=jatekos.Crit/jatekos.Dmg; alkaszt.armorpen=Math.floor(jatekos.Fizikum/2);
