const form = document.querySelector('.login-form');
const inputField = document.querySelectorAll('input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = [];

  for (const inputs of inputField) {
    if (inputs.value === '') {
      inputs.setCustomValidity('All form fields must be filled in');
      inputs.reportValidity();
      return false;
    } else {
      inputs.setCustomValidity('');
      formData.push(inputs.value);
    }
  }

  console.log(formData);
  form.reset();
  return true;
});
