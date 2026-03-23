const form = document.querySelector('.login-form');
const inputField = document.querySelectorAll('.login-form-input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: '',
    password: '',
  };

  for (const inputs of inputField) {
    const trimmedValues = inputs.value.trim();

    if (trimmedValues === '') {
      alert('All form fields must be filled in');
      return false;
    } else {
      formData[inputs.name] = trimmedValues;
    }
  }

  console.log(formData);
  form.reset();
  return true;
});
