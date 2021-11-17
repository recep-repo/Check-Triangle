const firstSide = document.getElementById("first");
const secondSide = document.getElementById("second");
const thirdSide = document.getElementById("third");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener('click', triangle);

function triangle () {
    side1 = +firstSide.value;
    side2 = +secondSide.value;
    side3 = +thirdSide.value;
    
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        if (side1 == side2 && side1 == side3 && side2 == side3) {
            result.innerHTML = "Your Triengle is : Equilateral";
        } else if (side1 == side2 || side1 == side3 || side2 == side3) {
        result.innerHTML = "Your Triengle is : Isosceles";
        } else {
        result.innerHTML = "Your Triangle is : Scalene";
        }
    } else {
        result.innerHTML = "Invalid Triangle..";
    }
}