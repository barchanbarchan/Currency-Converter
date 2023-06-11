const valueInput = document.querySelector('.js-value-input');
const currencySelector = document.querySelector('.js-currency-selector');
const valueOutput = document.querySelector('.js-output');

valueInput.addEventListener('input', () => {
  const hrn = Number(valueInput.value);
  const currency = currencySelector.value;
  const result = convert(hrn, currency);

  valueOutput.innerText = result;

})

currencySelector.addEventListener('change', () => {
  const hrn = Number(valueInput.value);
  const currency = currencySelector.value;
  const result = convert(hrn, currency);

  valueOutput.innerText = result;
})