const normalSize = document.getElementById('normal-size');
const biggerSize = document.getElementById('bigger-size');
const biggestSize = document.getElementById('biggest-size');

const rootFontSize = document.documentElement;
// const rootFontSize2 = document.querySelector(':root');

// rootFontSize.style.fontSize =

normalSize.addEventListener('click', () => { rootFontSize.style.fontSize = "62.5%" });
biggerSize.addEventListener('click', () => { rootFontSize.style.fontSize = "80%" });
biggestSize.addEventListener('click', () => { rootFontSize.style.fontSize = "100%" });