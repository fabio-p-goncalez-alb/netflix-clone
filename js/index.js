function responsiveDropdown() {
  let dropdown = document.querySelector('.dropdown');
  let dropdownButton = document.querySelector('.dropdown-button');
  if (dropdown.className === 'dropdown') {
    dropdown.className += ' responsive';
    dropdownButton.textContent = 'X';
  } else {
    dropdown.className = 'dropdown';
    dropdownButton.textContent = '☰';
  }
}
