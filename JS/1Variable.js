// Mes variables globales
const userDay = document.getElementById('userDay'),
      userMonth = document.getElementById('userMonth'),
      userYear = document.getElementById('userYears'),
      Submitbtn = document.querySelector('.Submitbtn'),
      number = /^[0-9]+$/; // Cette constante va nous permettre de vérifier si l'utilisateur n'a pas entré de caractères autres que des nombres

const resultYears = document.getElementById('result-years'),
      resultMonths = document.getElementById('result-months'),
      resultDays = document.getElementById('result-days');

const currentDay = new Date().getDate(),
      currentMonth = new Date().getMonth() + 1,
      currentYear = new Date().getFullYear()


const dayText = document.querySelector('.days_result_text'),
     monthText = document.querySelector('.months_result_text'),
     yearText = document.querySelector('.year_result_text')


let birthDay= undefined, 
    birthmonth = undefined, 
    birthyears = undefined;
