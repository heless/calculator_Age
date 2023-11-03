// import { addErrorMsg,removeErrorMsg } from "./2gestionErreur.js";

/**
 * Cette fonction vérifie le jour entré par l'utilisateur
 * @param {number} Month - Le mois de naissance de l'utilisateur
 * @return {boolean}
 */
function verifieDay(Month) {
    let DayValue = userDay.value;

    // Catégories de mois et de jours
    const thirtyMonth = [4, 6, 9, 11];
    const leapMonth = [2];
    // const leapDay = [28, 29];

    if (DayValue === "") {
        addErrorMsg(userDay, 'Ce champ est requis');
    } else if (DayValue > 31 || parseInt(DayValue) < 1) {
        addErrorMsg(userDay, 'Doit être un jour valide');
    } else if (thirtyMonth.includes(Month) && parseInt(DayValue) > 30) {
        addErrorMsg(userDay, "Doit être un jour valide");
    } else if (!number.test(DayValue)) {
        addErrorMsg(userDay, "Nombres uniquement");
    } else if (leapMonth.includes(Month) && parseInt(DayValue)>29) {
        addErrorMsg(userDay, "Doit être un jour valide");
    } else {
        // resetAgeDisplay();
        removeErrorMsg(userDay);
        birthDay = parseInt(DayValue);
        return true;
    }
}

/**
 * Cette fonction vérifie le mois entré par l'utilisateur et retourne true s'il est valide, sinon false.
 * @returns {boolean}
 */
function verifieMonth() {
    let monthValue = userMonth.value;

    if (monthValue === "") {
        addErrorMsg(userMonth, 'Ce champ est requis');
    } else if (parseInt(monthValue) > 12 || parseInt(monthValue) < 1) {
        addErrorMsg(userMonth, 'Doit être un mois valide');
    } else if (!number.test(monthValue)) {
        addErrorMsg(userMonth, "Nombres uniquement");
    } else {
        // resetAgeDisplay();
        removeErrorMsg(userMonth);
        birthmonth = parseInt(monthValue);
        return verifieDay(birthmonth);
    }
}

 /**
* Cette fonction vérifie l'année entrée par l'utilisateur et retourne true si elle est valide, sinon false.
* @returns {boolean}
*/

function verifieYear() {
   let yearValue = userYear.value;

   if (yearValue === "") {
       addErrorMsg(userYear, 'Ce champ est requis');
   } else if (parseInt(yearValue) > currentYear) {
       addErrorMsg(userYear, 'Doit être dans le passé');
   } else if (parseInt(yearValue) < 1900) {
       addErrorMsg(userYear, 'L\'année doit être plus récente');
   } else if (!number.test(yearValue)) {
       addErrorMsg(userYear, "Nombres uniquement");
   } else {
       removeErrorMsg(userYear);
       // resetAgeDisplay();
       birthyears = parseInt(yearValue);
       return true;
   }
}

function calculAge() {
    let ageYear = currentYear - birthyears;
    let agemonth = currentMonth - birthmonth;
    let ageDay = currentDay - birthDay;

    // Logique de calcul de l'âge
    if (ageDay < 0) {
        let lastDaysOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
        agemonth--;
        ageDay += lastDaysOfMonth;
    }

    if (agemonth < 0) {
        ageYear--;
        agemonth += 12;
    }

    // Empêchons les nombres négatifs
    if (ageDay < 0) {
        ageDay = 0;
    }
    if (agemonth < 0) {
        agemonth = 0;
    }
    if (ageYear < 0) {
        ageYear = 0;
    }

    resultDays.innerText = ageDay;
    resultMonths.innerText = agemonth;
    resultYears.innerText = ageYear;

    
    
    if(ageDay === 0 || ageDay ===1){
        dayText.innerText = 'day';
    }else{
        dayText.innerText = 'days';

    }

    if( agemonth === 0 || agemonth ===1){
        monthText.innerText ='month'; 
    }else{
        monthText.innerText ='months'; 
    }

    if(ageYear === 0 || ageYear===1){
        yearText.innerText ='year' 
    }else{
        yearText.innerText ='years' 

    }
}