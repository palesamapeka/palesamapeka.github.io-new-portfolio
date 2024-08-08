const { isIdNumberValid } = require("./src/validate_sa_id");

const inputId = document.getElementById("input-id");
const checkIdBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsElement = document.getElementById("results");

function checkIdNumber() {
  let idString = inputId.value.toString();

  if (isIdNumberValid(idString) === true) {
    resultsElement.innerHTML += `ID number ${inputId.value} is valid`;
    getDOB(idString);
    detailedInfo(idString);
  } else if (isIdNumberValid(idString) === false) {
    resultsElement.innerHTML += `ID number ${inputId.value} is invalid`;
  }
  checkIdBtn.disabled = true;
  inputId.disabled = true;
}
//*

function detailedInfo(_idString) {
  let genderStr = _idString.substring(6, 10);
  let citizenshipStr = _idString.substring(10, 11);
  let genderNum = parseInt(genderStr);

  if (genderNum >= 0 && genderNum < 5000) {
    resultsElement.innerHTML += `<br>You are female. `;
  } else if (genderNum >= 5000 && genderNum <= 9999) {
    resultsElement.innerHTML += `<br>You are male. `;
  }

  if (citizenshipStr === "0") {
    resultsElement.innerHTML += `<br>You are a South African citizen.`;
  } else {
    resultsElement.innerHTML += `<br>You are a permanent resident.`;
  }
}

function getDOB(inputDobStr) {
  let dobStr = inputDobStr.substring(0, 6);

  let year = dobStr.substring(0, 2);
  let month = dobStr.substring(2, 4);
  let day = dobStr.substring(4, 6);

  let currentYear = new Date().getFullYear();
  let centuryPrefix = currentYear.toString().substring(0, 2);

  // Determine if the year belongs to the 1900s or 2000s
  let fullYear = parseInt(centuryPrefix + year);
  if (fullYear > currentYear) {
    fullYear -= 100;
  }

  let formattedDOB = `${day}-${month}-${fullYear}`;
  resultsElement.innerHTML += `<br>Date of Birth: ${formattedDOB}.`;
}

function resetInput(){
  checkIdBtn.disabled = false;
  inputId.disabled = false;
  resultsElement.innerHTML = "";
  inputId.value = "";
}
checkIdBtn.addEventListener("click", checkIdNumber);
clearBtn.addEventListener("click", resetInput)