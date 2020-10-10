let inputs = document.querySelectorAll('.input-value');

function verifyInputValue(arrayInputs) {
  for(let i = 0; i < arrayInputs.length;i++) {
    arrayInputs[i].addEventListener('change', e => {
      const target = e.target;
      const value = target.value;
      if(value < 10 || value > 50) {
        arrayInputs[i].classList.add('error')
      } else {
        arrayInputs[i].classList.remove('error')
      }
    })
  }
}


verifyInputValue(inputs)