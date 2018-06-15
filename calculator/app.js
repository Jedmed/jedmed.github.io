$(() => {
  let value = 0;
  let savedValue = 0;
  let operator = '';

  // Display output
  const output = (param) => {
    $('.output p').text(param);
  }

  // Reset values
  const reset = () => {
    value = 0;
    savedValue = 0;
    output(value);
  }

  // Stores value of number pressed
  const numberPress = (event) => {
    if (value === 0) {
      value = $(event.currentTarget).text();
      output(value)
    } else if (value !== 0) {
      value += $(event.currentTarget).text();
      output(value)
    }
  }

  // Check operator pressed and stores value
  const operatorPress = (event) => {
    operator = $(event.currentTarget).text();
    savedValue = value;
    value = 0;
  }

  // Calculates final value
  const calculator = () => {
    if (operator === '+') {
      let finalValue = parseInt(savedValue) + parseInt(value)
      output(finalValue);
    } else if (operator === '-') {
      let finalValue = parseInt(savedValue) - parseInt(value)
      output(finalValue);
    } else if (operator === '*') {
      let finalValue = parseInt(savedValue) * parseInt(value)
      output(finalValue);
    } else if (operator === '/') {
      let finalValue = parseInt(savedValue) / parseInt(value)
      output(finalValue);
    }
  }

  $('.operator').on('click', operatorPress);
  $('.number').on('click', numberPress);
  $('.equals').on('click', calculator);
  $('.reset').on('click', reset);
});
