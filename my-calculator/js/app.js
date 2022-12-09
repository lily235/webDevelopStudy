
function calculateSum() {
  const numA = numAInput.value;
  const numB = numBInput.value;

  // calculate the result using the Math.pow method
  const result = Number(numA) + Number(numB);

  // set the resultSpan text to the result
  resultSpan.textContent = result;
 
}

function calculateSubtract() {
  const numA = numAInput.value;
  const numB = numBInput.value;

  // calculate the result using the Math.pow method
  const result = Number(numA) - Number(numB);

  // set the resultSpan text to the result
  resultSpan.textContent = result;
 
}

function calculateDivide() {
  const numA = numAInput.value;
  const numB = numBInput.value;

  // calculate the result using the Math.pow method
  const result = Number(numA) / Number(numB);

  // set the resultSpan text to the result
  resultSpan.textContent = result;
 
}
function calculateMultiply() {
  const numA = numAInput.value;
  const numB = numBInput.value;

  // calculate the result using the Math.pow method
  const result = Number(numA) * Number(numB);

  // set the resultSpan text to the result
  resultSpan.textContent = result;
 
}
  function calculatePower() {
    const numA = numAInput.value;
    const numB = numBInput.value;

    // calculate the result using the Math.pow method
    const result = Math.pow(numA, numB);

    // set the resultSpan text to the result
    resultSpan.textContent = result;
   
  }

  function calculatesquareroot() {
    const numA = numAInput.value;

    // calculate the result using the Math.pow method
    const result = Math.sqrt(numA);

    // set the resultSpan text to the result
    resultSpan.textContent = result;
   
  }
  
  // get references to the input elements and result span
  const numAInput = document.getElementById('numA');
  const numBInput = document.getElementById('numB');
  const resultSpan = document.getElementById('result');

  // get a reference to the calculate button and add an event listener
  const sumBtn = document.getElementById('sum');
  const subtractBtn = document.getElementById('subtract');
  const divideBtn = document.getElementById('divide');
  const multiplyBtn = document.getElementById('multiply');
  const powerBtn = document.getElementById('power');
  const squarerootBtn = document.getElementById('SquareRoot');

  sumBtn.addEventListener('click', calculateSum);

  subtractBtn.addEventListener('click', calculateSubtract);

  divideBtn.addEventListener('click', calculateDivide);
  multiplyBtn.addEventListener('click', calculateMultiply);
  

  powerBtn.addEventListener('click', calculatePower);

  squarerootBtn.addEventListener('click', calculatesquareroot);

