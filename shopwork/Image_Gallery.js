const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i ++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic' + i + '.jpg');
thumbBar.appendChild(newImage);
newImage.onclick=function(e) {
    displayedImage.src= e.target.src;
}
}
/* Making the button darker and lighter */

btn.setAttribute("light")
btn.textContent = "Lighten"
overlay.style.backgroundColor = rbga(0,0,0,0.5)

btn.setAttribute("dark")
btn.textContent = ("dark")
overlay.style.backgroundColor = r