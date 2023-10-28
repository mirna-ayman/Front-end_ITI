window.alert = function(message, timeout = null) {
  const alert = document.createElement('div');
  const alertButton = document.createElement('button');
  alertButton.innerText = 'Ok';
  alert.classList.add('alert');
  alert.style.cssText = `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    z-index: 9999;
  `;

  alert.innerHTML = `<span>${message}</span>`;
  alert.appendChild(alertButton);

  alertButton.addEventListener('click', function() {
    alert.remove();
  });

  document.body.appendChild(alert);
}
