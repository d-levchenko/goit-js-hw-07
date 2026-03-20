const numberOfCategories = document.querySelectorAll('#categories');
const listElem = document.querySelectorAll('.item');

console.log('Number of categories: ' + listElem.length);

listElem.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  console.log('Category: ' + categoryName);

  const count = item.querySelectorAll('li').length;
  console.log('Elements: ' + count);
});
