let year = prompt("Enter a year")*1;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " is a leap year");
        } else {
            alert(year + " is NOT a leap year");
        }
    } else {
        alert(year + " is a leap year");
    }
} else {
    alert(year + " is NOT a leap year");
}
