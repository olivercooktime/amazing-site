const angleRange = document.getElementById('angle-control');
const angleResult = document.getElementById('angle-result');
const root = document.querySelector('HTML');
const body = document.querySelector('Body');

angleRange.addEventListener("input", function() {
  const angle = angleRange.value;
  angleResult.innerHTML =  angleRange.value + " deg";
  document.documentElement.style.setProperty('--angle', angleRange.value + 'deg');
  
  if (angle > 0) {
    body.classList.add("reversed");
  } else {
    body.classList.remove("reversed");
  }
}, false); 