let weight = prompt('Enter your weight')*1;
let height = prompt('Enter your height(m)')*1;
let bmi = weight/(height*height);
if (bmi < 18)
    document.write("Underweight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Overweight");
else
    document.write("Obese");
