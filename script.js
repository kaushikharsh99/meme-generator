// ====== Meme Generator Logic ======
const imageInput = document.getElementById('image');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const styleSelect = document.getElementById('memeStyle');
const form = document.getElementById('memeForm');

// Create canvas + preview
const previewContainer = document.createElement('div');
previewContainer.style.marginTop = '25px';
previewContainer.style.textAlign = 'center';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.style.maxWidth = '100%';
canvas.style.borderRadius = '10px';
canvas.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
previewContainer.appendChild(canvas);
document.querySelector('.container').appendChild(previewContainer);

let image = new Image();

// Image upload
imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
});

// Draw meme
function drawMeme() {
  if (!image.src) return;

  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);

  let fontStyle = styleSelect.value || 'Impact, Arial Black';
  let fontSize = Math.floor(canvas.width / 10);

  switch (styleSelect.value) {
    case 'classic':
      fontStyle = 'Impact, Arial Black';
      ctx.fillStyle = 'white';
      break;
    case 'comic':
      fontStyle = 'Comic Sans MS, cursive';
      ctx.fillStyle = 'yellow';
      break;
    case 'bold':
      fontStyle = 'Arial Black, sans-serif';
      ctx.fillStyle = 'red';
      break;
    case 'funny':
      fontStyle = 'Comic Sans MS, cursive';
      ctx.fillStyle = 'lime';
      break;
    default:
      ctx.fillStyle = 'white';
  }

  ctx.strokeStyle = 'black';
  ctx.lineWidth = canvas.width * 0.015;
  ctx.textAlign = 'center';
  ctx.lineJoin = 'round';
  ctx.font = `${fontSize}px ${fontStyle}`;

  const topText = topTextInput.value.toUpperCase();
  ctx.textBaseline = 'top';
  ctx.fillText(topText, canvas.width / 2, 10);
  ctx.strokeText(topText, canvas.width / 2, 10);

  const bottomText = bottomTextInput.value.toUpperCase();
  ctx.textBaseline = 'bottom';
  ctx.fillText(bottomText, canvas.width / 2, canvas.height - 10);
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 10);
}

// Live preview updates
[topTextInput, bottomTextInput, styleSelect].forEach(el => {
  el.addEventListener('input', drawMeme);
});
image.addEventListener('load', drawMeme);

// Download meme
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!image.src) {
    alert("Please upload or select an image first!");
    return;
  }

  const memeImage = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = memeImage;
  link.click();
});

// ====== Unsplash Image Search API ======
const UNSPLASH_ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"; // 🔑 Get from https://unsplash.com/developers
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const imageResults = document.getElementById("imageResults");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return alert("Please describe what kind of image you want!");

  imageResults.innerHTML = "Loading images...";

  const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=6&client_id=${UNSPLASH_ACCESS_KEY}`);
  const data = await res.json();
  imageResults.innerHTML = "";

  if (data.results.length === 0) {
    imageResults.textContent = "No images found!";
    return;
  }

  data.results.forEach(img => {
    const thumb = document.createElement("img");
    thumb.src = img.urls.small;
    thumb.style.width = "150px";
    thumb.style.margin = "8px";
    thumb.style.cursor = "pointer";
    thumb.style.borderRadius = "10px";
    thumb.style.transition = "transform 0.2s";
    thumb.addEventListener("mouseenter", () => thumb.style.transform = "scale(1.1)");
    thumb.addEventListener("mouseleave", () => thumb.style.transform = "scale(1)");
    thumb.addEventListener("click", () => {
      image.src = img.urls.full;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    imageResults.appendChild(thumb);
  });
});
