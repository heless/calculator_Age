
// import { verifieDay,verifieYear,calculAge } from "./3calculDeAge.js";

(function resetAgeDisplay() {
    userDay.value = "";
    userMonth.value = "";
    userYear.value = "";
    resultDays.innerText = "- -";
    resultMonths.innerText = "- -";
    resultYears.innerText = "- -";
}())

function lancerCalculeAge() {
    if (verifieMonth() && verifieYear()) {
        calculAge();
    }
}

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        lancerCalculeAge();
    }
});

document.getElementById('btn_submit').addEventListener('click', lancerCalculeAge);

