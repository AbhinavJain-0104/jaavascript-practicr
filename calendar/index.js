function calculateAge(birthday) {
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    let currentDay = now.getDate();

    let birthDate = new Date(birthday);
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let days = currentDay - birthDay;
    let months = currentMonth - birthMonth;
    let years = currentYear - birthYear;

    if (days < 0) {
          /*For example, if currentYear is 2022 and currentMonth is 3 (April), 
      then new Date(2022, 3, 0) represents the last day of March in the year 2022. 
      The .getDate() method will return the day of the month, which is the last day of March.*/
        const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        days += daysInMonth;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    let age = years + " years " + months + " months " + days + " days ";
    return age;
}

function displayAge() {
    let now = new Date();
    let today = now.getDate();
    const dobInput = document.getElementById('dob').setAttribute("max",today);
    const dobValue = dobInput.value;

    const age = calculateAge(dobValue);
    document.getElementById("demo").textContent = "Hi your age is " + age;
}

document.getElementById("button").addEventListener("click", displayAge);
