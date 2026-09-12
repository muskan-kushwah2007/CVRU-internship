let currentSize = 16;

function changeTextColor(color) {
  document.getElementById('sampleText').style.color = color;
  document.getElementById('txt').style.color = color;
}

function changeFontFamily(font) {
  document.getElementById('sampleText').style.fontFamily = font;
  document.getElementById('txt').style.fontFamily = font;
}

function changeFontSize(amount) {
  currentSize += amount;
  if (currentSize < 10) currentSize = 10;
  if (currentFontSize > 40) currentFontSize = 40;
  document.getElementById('sampleText').style.fontSize = currentSize + 'px';
}

function applyStyle(styleType) {
  const text = document.getElementById('sampleText');
  if (styleType === 'bold') text.style.fontWeight = 'bold';
  else if (styleType === 'italic') text.style.fontStyle = 'italic';
  else if (styleType === 'underline') text.style.textDecoration = 'underline';
  else if (styleType === 'normal') {
    text.style.fontWeight = 'normal';
    text.style.fontStyle = 'normal';
    text.style.textDecoration = 'none';
  }
}