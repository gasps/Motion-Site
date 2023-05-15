const buttons = document.querySelectorAll('.sidebar-button');
for (const button of buttons) {
  button.addEventListener('click', showHideDiv);
}

const tabbuttons = document.querySelectorAll('.tab-selectors .sidebar-button');
for (const button of tabbuttons) {
  button.addEventListener('click', tabShowHideDiv);
}

function showHideDiv(event) {
    const targetDiv = event.target.dataset.target;
    const divElements = document.querySelectorAll('.tab-functsBtn');
    for (const element of divElements) {
      element.style.display = 'none';
    }
    document.querySelector(targetDiv).style.display = 'block';
    const buttonElements = document.querySelectorAll('.sidebar-button');
    for (const button of buttonElements) {
      button.classList.remove('sidebar-button-selected');
    }
    event.target.classList.add('sidebar-button-selected');
}

function tabShowHideDiv(event) {
    const targetDiv = event.target.dataset.target;
    const divElements = document.querySelectorAll('.tab-functsBtn');
    for (const element of divElements) {
      element.style.display = 'none';
    }
    document.querySelector(targetDiv).style.display = 'block';
    const buttonElements = document.querySelectorAll('.tab-selectors .sidebar-button');
    for (const button of buttonElements) {
      button.classList.remove('sidebar-button-selected');
    }
    event.target.classList.add('sidebar-button-selected');
}