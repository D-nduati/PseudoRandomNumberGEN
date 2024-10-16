const btn = document.getElementById("btn");
btn.addEventListener("click", generateAviatorMultiplier);

const inputi = document.getElementById("input");

function generateAviatorMultiplier() {
  let value = inputi.value; 
  let total = 1000;

  for (let i = 0; i < 50; i++) {
    const crashPoint = Math.random() * 10;
    if (crashPoint > value) {      
      total = total + (1.5 * 70);
    } else {      
      total - 70;
    }
  }
  alert('Total Balance: ' +total)

}
