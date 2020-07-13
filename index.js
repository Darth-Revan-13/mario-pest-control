const goomba = document.getElementById(goombas).value;
const bobomb = document.getElementById(bobombs).value;
const cheepCheep = document.getElementById(cheep-cheep).value;
const goombaCost = 5;
const bobombCost = 7;
const cheepCheepCost = 11;
const totalLine = document.getElementById(total);
const coinForm = document.pricing;

coinForm.addEventListener("submit", cost);

function cost() {
    var goombaTotal = goomba * goombaCost;
    var bobombTotal = bobomb * bobombCost;
    var cheepCheepTotal = cheepCheep * cheepCheepCost;
    var totalCost = goombaTotal + bobombTotal + cheepCheepTotal;
    var totalText = document.createElement("p");
    totalText.textContent = totalCost.value;
    totalLine.appendChild(totalText);
    console.log(totalCost);
    return totalText;
}